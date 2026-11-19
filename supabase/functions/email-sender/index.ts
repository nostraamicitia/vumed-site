// email-sender — VUmed mail-engine via Resend.
//
// Routes:
//   GET  ?unsub=<token>            afmelden (token = auth), toont bevestigingspagina
//   POST ?unsub=<token>            RFC 8058 one-click unsubscribe (List-Unsubscribe-Post)
//   GET  ?health=1                 config-check + kandidaat-AANTALLEN (geen adressen)
//   POST {type, live, only_user}   run — auth: service_role JWT, sb_secret_ key,
//                                  Vault-cronsleutel ÓF ingelogde admin (is_admin via JWT — admin.html)
//        live=false (default) = DRY-RUN; preview=true = alleen gerenderde HTML terug (niets verstuurd).
//
// Types: streak_saver / winback / weekrecap / welcome / badge (crons) en custom
//        (broadcast; {slug, subject, title, message, cta_label?, cta_url?}, dedupe 'custom:<slug>').
// CORS: aan voor de site-origins zodat admin.html dit vanuit de browser kan aanroepen.
// Streak-mail bevat een LIVE aftel-GIF (edge function `countdown`, telt af tot middernacht NL).
// HUISSTIJL: zie STIJL.md in deze map — nieuwe mails altijd met shell()/btn()/infoBox()/nm().

const RESEND_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const SITE = "https://vumed.nl";
const FROM = "VUmed <hallo@mail.vumed.nl>";
const REPLY_TO = "tijekorteweg@icloud.com";
const FN_URL = `${SUPABASE_URL}/functions/v1/email-sender`;

const ALLOWED_ORIGINS = [
  "https://vumed.nl",
  "https://www.vumed.nl",
  "https://nostraamicitia.github.io",
];
function corsHeaders(origin: string | null): Record<string, string> {
  const ok = origin && (ALLOWED_ORIGINS.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin));
  return {
    "Access-Control-Allow-Origin": ok ? (origin as string) : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

type Candidate = {
  user_id: string;
  email: string;
  display_name: string;
  login_streak: number;
  streak_freezes: number;
  unsub_token: string;
  xp_week: number | null;
  lb_rank: number | null;
  badge_key: string | null;
  badge_tier: number | null;
};

const PREVIEW_SAMPLE: Candidate = {
  user_id: "preview",
  email: "student@vumed.nl",
  display_name: "Sanne de Vries",
  login_streak: 6,
  streak_freezes: 2,
  unsub_token: "00000000-0000-0000-0000-000000000000",
  xp_week: 340,
  lb_rank: 3,
  badge_key: "anatoom",
  badge_tier: 2,
};

function esc(s: string): string {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
// Voornaam uit display_name / full_name / mail-prefix ("sanne de vries" -> "Sanne").
// Onbruikbaar (initiaal, cijfers, "j.devries") -> "" zodat de mail gewoon "Hoi!" zegt.
function firstName(raw: string | null | undefined): string {
  let s = String(raw || "").trim().split("@")[0];
  s = s.split(/\s+/)[0] || "";
  s = s.split(/[._]/)[0] || "";
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'-]+$/.test(s)) return "";
  const rest = s.slice(1);
  return s[0].toUpperCase() + (rest === rest.toUpperCase() ? rest.toLowerCase() : rest);
}
// " Sanne" of "" — voor achter "Hoi"/"Gefeliciteerd"
function nm(c: Candidate): string {
  const f = firstName(c.display_name);
  return f ? " " + esc(f) : "";
}

function maskEmail(e: string): string {
  const [a, b] = e.split("@");
  return (a || "").slice(0, 1) + "***@" + (b || "");
}

async function rest(path: string, init: RequestInit = {}): Promise<Response> {
  return await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "apikey": SERVICE_KEY!,
      "Authorization": "Bearer " + SERVICE_KEY,
      ...(init.headers || {}),
    },
  });
}

// Auth-paden: (1) service_role JWT exact, (2) sb_secret_ key via Auth-admin-API,
// (3) admin-JWT uit de browser — is_admin() draait onder het token zelf,
// (4) Vault-cronsleutel via RPC check_email_cron_key.
async function isPrivileged(token: string | null): Promise<boolean> {
  if (!token) return false;
  if (token === SERVICE_KEY) return true;
  if (token.startsWith("sb_secret_")) {
    try {
      const r = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?per_page=1`, {
        headers: { "apikey": token, "Authorization": "Bearer " + token },
      });
      return r.ok;
    } catch {
      return false;
    }
  }
  if (token.split(".").length === 3) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/is_admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "apikey": SERVICE_KEY!, "Authorization": "Bearer " + token },
        body: "{}",
      });
      return r.ok && (await r.json()) === true;
    } catch {
      return false;
    }
  }
  try {
    const r = await rest("rpc/check_email_cron_key", {
      method: "POST",
      body: JSON.stringify({ p_key: token }),
    });
    return r.ok && (await r.json()) === true;
  } catch {
    return false;
  }
}

async function getCandidates(type: string): Promise<Candidate[]> {
  const r = await rest("rpc/get_email_candidates", {
    method: "POST",
    body: JSON.stringify({ p_type: type }),
  });
  if (!r.ok) throw new Error("get_email_candidates failed: " + (await r.text()));
  return await r.json();
}

// ---------- badge-namen (sync met profile.html BADGES; flatline krijgt geen mail) ----------

const BADGE_META: Record<string, { name: string; unit: string; tiers: number[]; ranks?: string[] }> = {
  carriere: { name: "Carrière", unit: "XP", tiers: [0, 25000, 50000, 75000, 100000, 125000],
              ranks: ["Student", "Co-assistent", "Basisarts", "AIOS", "Specialist", "Hoogleraar"] },
  histo:    { name: "Jack van Horssen", unit: "correct", tiers: [10, 20, 40, 80, 160] },
  anatoom:  { name: "Anatoom", unit: "correct", tiers: [10, 25, 50, 100, 200] },
  neuro:    { name: "Neuroloog", unit: "correct", tiers: [10, 25, 50, 100, 200] },
  farma:    { name: "Farmacoloog", unit: "correct", tiers: [10, 25, 50, 100, 200] },
  micro:    { name: "Microjager", unit: "correct", tiers: [10, 25, 50, 100] },
  jurist:   { name: "Witte Toga", unit: "correct", tiers: [10, 25, 50, 100] },
  opic:     { name: "Op de IC", unit: "op een rij", tiers: [10, 20, 30, 40, 50] },
  scherp:   { name: "Scherpschutter", unit: "correct", tiers: [25, 100, 500, 2000] },
  wittejas: { name: "Witte Jas", unit: "vragen", tiers: [50, 250, 1000, 5000] },
  streak:   { name: "Trouwe Student", unit: "dagen", tiers: [3, 7, 30, 100] },
  podium:   { name: "Podiumbeest", unit: "finishes", tiers: [1, 5, 10, 25] },
  nacht:    { name: "Nachtdienst", unit: "nachtvragen", tiers: [10, 20, 30, 40, 50] },
};

// ---------- templates ----------

const FONT = "'Nunito','Trebuchet MS',Arial,sans-serif";

function shell(inner: string, preheader: string, unsubUrl: string): string {
  return `<html><body style="margin:0;padding:0;background:#EDF4FA;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDF4FA;"><tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">
  <tr><td align="center" style="padding:0 0 18px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="padding-right:8px;vertical-align:middle;"><img src="${SITE}/images/email_logo.png" width="30" height="30" alt="" style="display:block;border:0;border-radius:8px;"></td>
      <td style="vertical-align:middle;"><span style="font:800 26px ${FONT};color:#1CB0F6;letter-spacing:.5px;">VUmed</span></td>
    </tr></table>
  </td></tr>
  <tr><td align="center" style="background:#ffffff;border-radius:20px;padding:36px 32px;">${inner}</td></tr>
  <tr><td align="center" style="padding:20px 24px 0;">
    <div style="font:400 12px ${FONT};color:#8FA8BC;line-height:1.6;">
      Je ontvangt deze mail omdat je een VUmed-account hebt.<br>
      <a href="${unsubUrl}" style="color:#8FA8BC;text-decoration:underline;">Afmelden voor dit soort mails</a>
      &nbsp;·&nbsp; <a href="${SITE}" style="color:#8FA8BC;text-decoration:underline;">vumed.nl</a>
    </div>
  </td></tr>
</table></td></tr></table></body></html>`;
}

// Knopkleuren: [boven, onder, rand/schaduw, gloed-rgba]
const BTN_COLORS: Record<string, [string, string, string, string]> = {
  blue:   ["#45C6FF", "#1CB0F6", "#0B8FD0", "28,176,246"],
  orange: ["#FF9A3C", "#FF7A00", "#D45F00", "255,122,0"],
  purple: ["#C79BFA", "#A266F2", "#7E45CF", "162,102,242"],
};

// CTA-knop: verloop + 3D-rand + zachte gloed + pijl-bolletje. Outlook valt terug op bgcolor.
function btn(label: string, href: string, color: keyof typeof BTN_COLORS = "blue"): string {
  const [top, bot, edge, glow] = BTN_COLORS[color];
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px auto 4px;"><tr>
    <td bgcolor="${bot}" style="background:${bot};background-image:linear-gradient(180deg,${top} 0%,${bot} 100%);border-radius:16px;border-bottom:4px solid ${edge};box-shadow:0 10px 22px rgba(${glow},.30);">
      <a href="${href}" style="display:inline-block;padding:15px 22px 15px 30px;font:800 16px ${FONT};color:#ffffff;text-decoration:none;letter-spacing:.4px;">
        ${esc(label)}&nbsp;&nbsp;<span style="display:inline-block;width:26px;height:26px;line-height:26px;border-radius:13px;background:rgba(255,255,255,.25);text-align:center;font:800 15px Arial,sans-serif;vertical-align:middle;">&rarr;</span>
      </a>
    </td></tr></table>`;
}

// Grijs-blauw infoblok (tip / stappen) onder de hoofdtekst.
function infoBox(inner: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px auto 0;max-width:440px;width:100%;"><tr>
    <td style="background:#F3F8FC;border-radius:14px;padding:16px 20px;text-align:left;">${inner}</td></tr></table>`;
}

// Volgende mijlpaal van de 'Trouwe Student'-badge (streak-tiers uit BADGE_META).
function nextStreakMilestone(n: number): number | null {
  return BADGE_META.streak.tiers.find((t) => t > n) ?? null;
}

function unsubOf(c: Candidate): string {
  return `${FN_URL}?unsub=${c.unsub_token}`;
}

function streakSaverEmail(c: Candidate): { subject: string; html: string } {
  const n = c.login_streak;
  const dag = n === 1 ? "dag" : "dagen";
  const freezeNote = c.streak_freezes > 0
    ? `<div style="font:400 13px ${FONT};color:#4FC3FF;margin-top:12px;">Je hebt nog ${c.streak_freezes} streak freeze${c.streak_freezes === 1 ? "" : "s"} als vangnet — maar zelf oefenen is leuker.</div>`
    : "";
  // live aftel-GIF: gegenereerd op openmoment; per-ontvanger+dag param tegen proxy-caching
  const cdUrl = `${SUPABASE_URL}/functions/v1/countdown?r=${(c.unsub_token || "").slice(0, 8)}-${new Date().toISOString().slice(0, 10)}`;
  // Week-strip: de laatste 6 dagen + vandaag (rechts), met daginitialen eronder.
  // Gehaalde dagen = oranje bol met vinkje-afbeelding (glyph-vinkjes staan per mailapp scheef).
  const done = Math.min(n, 6);
  const DAYS = ["zo", "ma", "di", "wo", "do", "vr", "za"];
  const todayIdx = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })).getDay();
  const cells: string[] = [];
  const labels: string[] = [];
  for (let i = 0; i < 7; i++) {
    const daysAgo = 6 - i;
    const isToday = daysAgo === 0;
    const filled = !isToday && daysAgo <= done;
    let circle: string;
    if (filled) {
      circle = `<td width="30" height="30" align="center" valign="middle" bgcolor="#FF7A00" style="width:30px;height:30px;border-radius:15px;background:#FF7A00;padding:0;"><img src="${SITE}/images/email_check.png" width="16" height="16" alt="&#10003;" style="display:block;margin:0 auto;border:0;"></td>`;
    } else if (isToday) {
      circle = `<td width="26" height="26" align="center" valign="middle" style="width:26px;height:26px;border-radius:15px;border:2px dashed #FF7A00;background:#FFF4EA;padding:0;"><div style="width:8px;height:8px;border-radius:4px;background:#FF7A00;margin:0 auto;font-size:0;line-height:0;">&nbsp;</div></td>`;
    } else {
      circle = `<td width="30" height="30" style="width:30px;height:30px;border-radius:15px;background:#EDF4FA;padding:0;font-size:0;line-height:0;">&nbsp;</td>`;
    }
    cells.push(`<td style="padding:0 4px;"><table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr>${circle}</tr></table></td>`);
    const d = DAYS[(todayIdx - daysAgo + 7) % 7];
    labels.push(`<td align="center" style="padding:6px 4px 0;font:800 11px ${FONT};color:${isToday ? "#FF7A00" : "#8FA8BC"};text-transform:uppercase;letter-spacing:.5px;">${isToday ? "nu" : d}</td>`);
  }
  const dots = `${cells.join("")}</tr><tr>${labels.join("")}`;
  const ms = nextStreakMilestone(n);
  const msLine = ms
    ? `<div style="font:600 13px ${FONT};color:#8FA8BC;margin-top:10px;">Nog <b style="color:#FF7A00;">${ms - n} ${ms - n === 1 ? "dag" : "dagen"}</b> tot de badge <b>Trouwe Student</b> (${ms} dagen)</div>`
    : "";
  const inner = `
    <img src="${SITE}/images/email_flame.gif" width="140" height="179" alt="Vlam" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 68px ${FONT};color:#FF7A00;line-height:1;margin-top:6px;">${n}</div>
    <div style="font:800 20px ${FONT};color:#3C5A73;margin-top:2px;">${dag} op rij</div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px auto 0;"><tr>${dots}</tr></table>
    ${msLine}
    <div style="font:800 12px ${FONT};color:#8FA8BC;letter-spacing:1.2px;margin-top:20px;">ZOVEEL TIJD HEB JE NOG</div>
    <img src="${cdUrl}" width="198" height="55" alt="Aftellend tot middernacht" style="display:block;margin:8px auto 0;border:0;">
    <div style="font:400 16px ${FONT};color:#5C7A92;line-height:1.55;margin:18px auto 0;max-width:420px;">
      Hoi${nm(c)}, je reeks van <b>${n} ${dag}</b> staat vanavond op het spel.
      Eén korte oefensessie is genoeg om hem te redden.
    </div>
    ${freezeNote}
    ${btn("Ga verder met oefenen", `${SITE}/dashboard.html`, "orange")}`;
  return {
    subject: `Je reeks van ${n} ${dag} staat op het spel \u{1F525}`,
    html: shell(inner, `Nog even oefenen vandaag en je reeks van ${n} ${dag} blijft staan.`, unsubOf(c)),
  };
}

function weekrecapEmail(c: Candidate): { subject: string; html: string } {
  const xp = c.xp_week ?? 0;
  const rank = c.lb_rank ?? 0;
  const rankLine = rank === 1
    ? `Je staat <b>bovenaan het klassement</b> — verdedig je plek deze week!`
    : `Nog <b>${rank - 1} ${rank - 1 === 1 ? "plek" : "plekken"}</b> verwijderd van de eerste plaats. Nieuwe week, nieuwe kansen!`;
  // Tegels in knop-stijl: verloop + 3D-rand + zachte gloed (Outlook: effen bgcolor).
  const tile = (top: string, bg: string, sh: string, glow: string, big: string, label: string, lc: string) =>
    `<td bgcolor="${bg}" style="background:${bg};background-image:linear-gradient(180deg,${top} 0%,${bg} 100%);border-radius:16px;border-bottom:4px solid ${sh};box-shadow:0 10px 22px rgba(${glow},.30);padding:16px 22px 14px;text-align:center;">
      <div style="font:800 30px ${FONT};color:#ffffff;line-height:1.15;">${big}</div>
      <div style="font:800 12px ${FONT};color:${lc};letter-spacing:.6px;">${label}</div>
    </td>`;
  const inner = `
    <img src="${SITE}/images/email_trophy.gif" width="140" height="140" alt="Trofee" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 26px ${FONT};color:#1C3144;margin-top:10px;">Jouw week bij VUmed</div>
    <div style="font:400 15px ${FONT};color:#5C7A92;margin-top:6px;">Goed bezig${nm(c) ? "," + nm(c) : ""}! Dit was je week:</div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px auto 0;"><tr>
      ${tile("#45C6FF", "#1CB0F6", "#0B8FD0", "28,176,246", String(xp), "XP", "#E3F6FF")}
      <td style="width:12px;"></td>
      ${tile("#FFD84D", "#FFC200", "#D99A00", "255,194,0", "#" + rank, "KLASSEMENT", "#FFF6D6")}
      <td style="width:12px;"></td>
      ${tile("#FF9A3C", "#FF7A00", "#D45F00", "255,122,0", String(c.login_streak), "DAGEN REEKS", "#FFE9D6")}
    </tr></table>
    <div style="font:600 13px ${FONT};color:#8FA8BC;margin-top:12px;">Gemiddeld <b style="color:#1CB0F6;">${Math.round(xp / 7)} XP</b> per dag</div>
    <div style="font:400 15px ${FONT};color:#5C7A92;line-height:1.55;margin:18px auto 0;max-width:420px;">${rankLine}</div>
    ${(() => {
      const ms = nextStreakMilestone(c.login_streak);
      return ms
        ? infoBox(`<div style="font:600 14px ${FONT};color:#3C5A73;line-height:1.5;">&#128293; Nog <b>${ms - c.login_streak} ${ms - c.login_streak === 1 ? "dag" : "dagen"}</b> oefenen en je verdient de badge <b>Trouwe Student</b> voor een reeks van ${ms} dagen.</div>`)
        : "";
    })()}
    ${btn("Bekijk het klassement", `${SITE}/voortgang.html`)}`;
  return {
    subject: `Jouw week: ${xp} XP en plek ${rank} in het klassement \u{1F3C6}`,
    html: shell(inner, `Je haalde deze week ${xp} XP en staat op plek ${rank}.`, unsubOf(c)),
  };
}

function winbackEmail(c: Candidate): { subject: string; html: string } {
  const inner = `
    <img src="${SITE}/images/email_flame_sleep.gif" width="150" height="150" alt="Slapende vlam" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 26px ${FONT};color:#1C3144;margin-top:10px;">We missen je${nm(c) ? "," + nm(c) : ""}!</div>
    <div style="font:400 16px ${FONT};color:#5C7A92;line-height:1.55;margin:16px auto 0;max-width:420px;">
      Het is alweer <b>een week</b> geleden dat je een vraag hebt geoefend.
      Kennis zakt sneller weg dan je denkt — met één korte sessie zit je er weer helemaal in.
    </div>
    ${infoBox(`<div style="font:800 12px ${FONT};color:#8FA8BC;letter-spacing:1.2px;margin-bottom:8px;">ZO ZIT JE ER IN 5 MINUTEN WEER IN</div>
      ${[["1", "Open je dashboard"], ["2", "Kies een tentamen van jouw studiejaar"], ["3", "Maak een paar vragen — je reeks start meteen opnieuw"]]
        .map(([k, t]) => `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0;"><tr>
          <td style="vertical-align:top;"><div style="width:22px;height:22px;line-height:22px;border-radius:50%;background:#1CB0F6;color:#fff;font:800 12px ${FONT};text-align:center;">${k}</div></td>
          <td style="padding-left:10px;font:600 14px ${FONT};color:#3C5A73;line-height:22px;">${t}</td></tr></table>`).join("")}`)}
    ${btn("Pak de draad weer op", `${SITE}/dashboard.html`)}`;
  return {
    subject: `We missen je bij VUmed \u{1F44B}`,
    html: shell(inner, "Een week zonder oefenen — pak de draad weer op met een korte sessie.", unsubOf(c)),
  };
}

function badgeEmail(c: Candidate): { subject: string; html: string } {
  const meta = BADGE_META[c.badge_key || ""] || { name: c.badge_key || "Badge", unit: "", tiers: [] };
  const tier = c.badge_tier ?? 0;
  const t = meta.tiers[tier];
  let line: string;
  if (meta.ranks) {
    line = `Je bent gepromoveerd tot <b>${esc(meta.ranks[tier] || "")}</b>. Deze badge staat vanaf nu op je profiel — je vrienden kunnen je feliciteren.`;
  } else {
    line = `Je hebt <b>${t} ${esc(meta.unit)}</b> gehaald — niveau ${tier + 1} van deze badge.
      Hij staat vanaf nu op je profiel — je vrienden kunnen je feliciteren.`;
  }
  // Niveau-blokjes: behaalde niveaus paars, de rest grijs
  const total = meta.tiers.length;
  const pips = total
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:14px auto 0;"><tr>${
      meta.tiers.map((_, i) =>
        `<td style="padding:0 3px;"><div style="width:30px;height:8px;border-radius:4px;background:${i <= tier ? "#B57BF6" : "#E6EDF3"};"></div></td>`
      ).join("")
    }</tr></table>
    <div style="font:800 12px ${FONT};color:#8FA8BC;letter-spacing:1px;margin-top:8px;">NIVEAU ${tier + 1} VAN ${total}</div>`
    : "";
  let nextLine = "";
  if (tier + 1 < total) {
    const next = meta.ranks
      ? `Volgende rang: <b>${esc(meta.ranks[tier + 1])}</b> bij ${meta.tiers[tier + 1].toLocaleString("nl-NL")} ${esc(meta.unit)}.`
      : `Volgend niveau: <b>${meta.tiers[tier + 1]} ${esc(meta.unit)}</b>. Zet 'm op!`;
    nextLine = infoBox(`<div style="font:600 14px ${FONT};color:#3C5A73;line-height:1.5;text-align:center;">${next}</div>`);
  } else if (total) {
    nextLine = infoBox(`<div style="font:600 14px ${FONT};color:#3C5A73;line-height:1.5;text-align:center;">Dit is het <b>hoogste niveau</b> van deze badge. Respect!</div>`);
  }
  const inner = `
    <img src="${SITE}/images/email_badge.gif" width="150" height="150" alt="Badge" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 14px ${FONT};color:#B57BF6;letter-spacing:1.5px;margin-top:12px;">NIEUWE PRESTATIE</div>
    <div style="font:800 30px ${FONT};color:#1C3144;margin-top:4px;">${esc(meta.name)}</div>
    ${pips}
    <div style="font:400 16px ${FONT};color:#5C7A92;line-height:1.55;margin:14px auto 0;max-width:420px;">
      Gefeliciteerd${nm(c)}! ${line}
    </div>
    ${nextLine}
    ${btn("Bekijk je prestaties", `${SITE}/profile.html`, "purple")}`;
  return {
    subject: `Nieuwe prestatie: ${meta.name} \u{1F3C5}`,
    html: shell(inner, `Je hebt de badge ${meta.name} verdiend.`, unsubOf(c)),
  };
}

function welcomeEmail(c: Candidate): { subject: string; html: string } {
  const bullet = (color: string, text: string) =>
    `<tr><td style="padding:7px 0;">
      <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background:${color};margin-right:12px;"></span>
      <span style="font:600 15px ${FONT};color:#3C5A73;">${text}</span>
    </td></tr>`;
  const inner = `
    <img src="${SITE}/images/email_welkom.gif" width="140" height="152" alt="Hart" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 28px ${FONT};color:#1C3144;margin-top:10px;">Welkom bij VUmed!</div>
    <div style="font:400 16px ${FONT};color:#5C7A92;line-height:1.55;margin:14px auto 0;max-width:430px;">
      Hoi${nm(c)}, je account staat klaar. Dit kun je vanaf nu:
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px auto 0;text-align:left;">
      ${bullet("#1CB0F6", "Oefen met échte oude tentamens van jouw studiejaar")}
      ${bullet("#FF7A00", "Bouw een dagelijkse reeks op en verdien beloningen")}
      ${bullet("#F5A623", "Klim in het weekklassement en daag vrienden uit")}
    </table>
    ${infoBox(`<div style="font:800 12px ${FONT};color:#8FA8BC;letter-spacing:1.2px;margin-bottom:6px;">TIP VOOR JE START</div>
      <div style="font:600 14px ${FONT};color:#3C5A73;line-height:1.5;">Elke dag een paar vragen werkt beter dan één grote sessie voor het tentamen. Na <b>3 dagen op rij</b> verdien je al je eerste badge.</div>`)}
    ${btn("Begin met oefenen", `${SITE}/dashboard.html`)}`;
  return {
    subject: `Welkom bij VUmed \u{1F389}`,
    html: shell(inner, "Je account staat klaar — begin met oefenen.", unsubOf(c)),
  };
}

function customEmail(c: Candidate, subject: string, title: string, message: string, ctaLabel: string, ctaUrl: string): { subject: string; html: string } {
  const paras = message.split(/\n\s*\n/).map((p) =>
    `<div style="font:400 16px ${FONT};color:#5C7A92;line-height:1.55;margin:14px auto 0;max-width:440px;">${esc(p.trim()).replace(/\n/g, "<br>")}</div>`
  ).join("");
  const inner = `
    <div style="font:800 26px ${FONT};color:#1C3144;">${esc(title)}</div>
    ${paras}
    ${ctaLabel && ctaUrl ? btn(ctaLabel, ctaUrl) : ""}`;
  return { subject, html: shell(inner, message.slice(0, 120), unsubOf(c)) };
}

const TEMPLATES: Record<string, (c: Candidate) => { subject: string; html: string }> = {
  streak_saver: streakSaverEmail,
  weekrecap: weekrecapEmail,
  winback: winbackEmail,
  badge: badgeEmail,
  welcome: welcomeEmail,
};

function logTypeOf(type: string, c: Candidate): string {
  return type === "badge" ? `badge:${c.badge_key}:${c.badge_tier}` : type;
}

// ---------- sending ----------

async function sendResend(to: string, subject: string, html: string, unsubUrl: string): Promise<{ ok: boolean; err?: string }> {
  const payload = {
    from: FROM,
    to: [to],
    reply_to: REPLY_TO,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  };
  for (let attempt = 0; attempt < 2; attempt++) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + RESEND_KEY },
      body: JSON.stringify(payload),
    });
    if (r.ok) return { ok: true };
    if (r.status === 429 && attempt === 0) {
      await new Promise((res) => setTimeout(res, 1200));
      continue;
    }
    return { ok: false, err: `${r.status} ${await r.text()}` };
  }
  return { ok: false, err: "unreachable" };
}

async function logSend(rows: { user_id: string; email_type: string; dry_run: boolean }[]): Promise<void> {
  if (!rows.length) return;
  await rest("email_log?on_conflict=user_id,email_type,day_key,dry_run", {
    method: "POST",
    headers: { "Prefer": "resolution=ignore-duplicates" },
    body: JSON.stringify(rows),
  });
}

// ---------- unsub pagina ----------

function unsubPage(ok: boolean): Response {
  const body = ok
    ? `<h1 style=\"margin:0 0 10px;font-size:22px;color:#1C3144;\">Je bent afgemeld</h1>
       <p>Je krijgt geen herinnerings- en overzichtsmails meer van VUmed.<br>
       Mails over je account zelf (zoals wachtwoord-reset) blijven gewoon werken.</p>`
    : `<h1 style=\"margin:0 0 10px;font-size:22px;color:#1C3144;\">Link niet geldig</h1>
       <p>Deze afmeldlink is niet (meer) geldig. Mail gerust naar ${REPLY_TO} als je toch afgemeld wilt worden.</p>`;
  const html = `<!doctype html><html lang=\"nl\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>VUmed</title></head>
<body style=\"margin:0;background:#EDF4FA;font-family:'Nunito','Trebuchet MS',Arial,sans-serif;\">
<div style=\"max-width:460px;margin:80px auto;background:#fff;border-radius:20px;padding:36px 32px;text-align:center;color:#5C7A92;font-size:15px;line-height:1.6;\">
<div style=\"font-weight:800;font-size:24px;color:#1CB0F6;margin-bottom:18px;\">VUmed</div>
${body}
<p style=\"margin-top:24px;\"><a href=\"${SITE}\" style=\"color:#1CB0F6;font-weight:800;text-decoration:none;\">Terug naar VUmed</a></p>
</div></body></html>`;
  return new Response(html, { status: ok ? 200 : 404, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function handleUnsub(token: string): Promise<Response> {
  if (!/^[0-9a-f-]{36}$/i.test(token)) return unsubPage(false);
  const r = await rest(`user_profiles?email_unsub_token=eq.${token}`, {
    method: "PATCH",
    headers: { "Prefer": "return=representation" },
    body: JSON.stringify({ email_opt_out: true }),
  });
  if (!r.ok) return unsubPage(false);
  const rows = await r.json();
  return unsubPage(Array.isArray(rows) && rows.length > 0);
}

// ---------- server ----------

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const cors = corsHeaders(req.headers.get("origin"));
  const json = (obj: unknown, status = 200) =>
    new Response(JSON.stringify(obj, null, 1), { status, headers: { ...cors, "Content-Type": "application/json" } });

  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  const unsubToken = url.searchParams.get("unsub");
  if (unsubToken) return await handleUnsub(unsubToken);

  if (req.method === "GET" && url.searchParams.get("health")) {
    const out: Record<string, unknown> = { ok: true, resend_configured: !!RESEND_KEY, from: FROM };
    try {
      const counts: Record<string, number> = {};
      for (const t of Object.keys(TEMPLATES)) counts[t] = (await getCandidates(t)).length;
      counts["custom (alle aangemelde users)"] = (await getCandidates("custom")).length;
      out.candidates = counts;
    } catch (e) {
      out.ok = false;
      out.error = String(e);
    }
    return json(out, out.ok ? 200 : 500);
  }

  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!(await isPrivileged(bearer))) {
    return json({ error: "unauthorized" }, 401);
  }

  let body: {
    type?: string; live?: boolean; only_user?: string; preview?: boolean;
    slug?: string; subject?: string; title?: string; message?: string;
    cta_label?: string; cta_url?: string;
  };
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid JSON body" }, 400);
  }

  const type = body.type || "streak_saver";
  const live = body.live === true;

  let render: (c: Candidate) => { subject: string; html: string };
  let logType: (c: Candidate) => string;
  let getCands: () => Promise<Candidate[]>;

  if (type === "custom") {
    const slug = String(body.slug || "").trim();
    if (!/^[a-z0-9-]{3,40}$/.test(slug)) {
      return json({ error: "slug vereist: 3-40 tekens, alleen kleine letters/cijfers/streepjes (bv. 'update-juli')" }, 400);
    }
    const subject = String(body.subject || "").trim();
    const title = String(body.title || "").trim();
    const message = String(body.message || "").trim();
    if (!subject || !title || !message) return json({ error: "subject, title en message zijn verplicht" }, 400);
    const ctaLabel = String(body.cta_label || "").trim();
    const ctaUrl = String(body.cta_url || "").trim();
    render = (c) => customEmail(c, subject, title, message, ctaLabel, ctaUrl);
    logType = () => "custom:" + slug;
    getCands = async () => {
      const sentR = await rest(`email_log?email_type=eq.${encodeURIComponent("custom:" + slug)}&dry_run=is.false&select=user_id`);
      const sentSet = new Set<string>(((await sentR.json()) || []).map((r: { user_id: string }) => r.user_id));
      return (await getCandidates("custom")).filter((c) => !sentSet.has(c.user_id));
    };
  } else {
    const template = TEMPLATES[type];
    if (!template) return json({ error: `unknown type '${type}'` }, 400);
    render = template;
    logType = (c) => logTypeOf(type, c);
    getCands = () => getCandidates(type);
  }

  if (body.preview === true) {
    const p = render(PREVIEW_SAMPLE);
    return json({ preview: true, subject: p.subject, html: p.html });
  }

  if (live && !RESEND_KEY) return json({ error: "RESEND_API_KEY secret ontbreekt" }, 503);

  let cands = await getCands();
  if (body.only_user) cands = cands.filter((c) => c.user_id === body.only_user);

  const results: { user_id: string; email: string; badge?: string | null; sent: boolean; err?: string }[] = [];
  const sentRows: { user_id: string; email_type: string; dry_run: boolean }[] = [];

  for (const c of cands) {
    const { subject, html } = render(c);
    if (!live) {
      results.push({ user_id: c.user_id, email: maskEmail(c.email), badge: c.badge_key, sent: false });
      sentRows.push({ user_id: c.user_id, email_type: logType(c), dry_run: true });
      continue;
    }
    const r = await sendResend(c.email, subject, html, unsubOf(c));
    results.push({ user_id: c.user_id, email: maskEmail(c.email), badge: c.badge_key, sent: r.ok, err: r.err });
    if (r.ok) sentRows.push({ user_id: c.user_id, email_type: logType(c), dry_run: false });
  }

  await logSend(sentRows);

  return json({
    type,
    live,
    candidates: cands.length,
    sent: results.filter((r) => r.sent).length,
    results,
  });
});
