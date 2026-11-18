// templates.ts — HTML-templates voor email-sender (ook lokaal te renderen met
// `node supabase/functions/email-sender/preview.mjs`, geen Deno nodig).

export const SITE = "https://vumed.nl";
export const APP_STORE = "https://apps.apple.com/app/apple-store/id6793511885?pt=vumed&ct=email&mt=8";

export type Candidate = {
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
  study_year?: number | null;
};

// Huidig blok van de student (uit blockcalendar.json + subject_index.json).
export type BlockCtx = {
  subject: string;
  daysLeft: number; // dagen tot de start van het volgende blok
  examUrl: string; // nieuwste oude tentamen van dit vak
  totalQ: number;
  nExams: number;
} | null;

export type Mail = { subject: string; html: string };

export function esc(s: string): string {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ---------- blokcontext ----------

type Calendar = { block_starts: string[]; year_end: string; [k: string]: unknown };
type SubjectIndex = Record<string, { exam_keys: string[]; total_q: number }>;

/** Datum in NL-tijd als UTC-middernacht, zodat dagverschillen exact zijn. */
export function nlToday(now = new Date()): Date {
  const ymd = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(now);
  return new Date(ymd + "T00:00:00Z");
}

export function blockContext(cal: Calendar, idx: SubjectIndex, year: number | null | undefined, today: Date): BlockCtx {
  if (!year || year < 1 || year > 3) return null;
  const subjects = cal["year" + year] as string[] | undefined;
  if (!subjects) return null;
  const y = today.getUTCFullYear();
  const startYear = today.getUTCMonth() >= 7 ? y : y - 1; // aug–dec → jaar dat in sept begint
  const at = (mmdd: string) => {
    const [m, d] = mmdd.split("-").map(Number);
    return new Date(Date.UTC(m >= 8 ? startYear : startYear + 1, m - 1, d));
  };
  const starts = cal.block_starts.map(at);
  const end = at(cal.year_end);
  for (let i = 0; i < starts.length; i++) {
    const next = i + 1 < starts.length ? starts[i + 1] : end;
    if (today >= starts[i] && today < next) {
      const subject = subjects[i];
      const meta = subject ? idx[subject] : undefined;
      if (!subject || !meta || !meta.exam_keys.length) return null;
      return {
        subject,
        daysLeft: Math.round((next.getTime() - today.getTime()) / 86400000),
        examUrl: `${SITE}/${meta.exam_keys[meta.exam_keys.length - 1]}.html`,
        totalQ: meta.total_q,
        nExams: meta.exam_keys.length,
      };
    }
  }
  return null;
}

// ---------- bouwstenen ----------

const FONT = "'Nunito','Trebuchet MS',Arial,sans-serif";
const INK = "#1C3144";
const BODY = "#4B6478";
const MUTED = "#8FA8BC";

function shell(inner: string, preheader: string, unsubUrl: string): string {
  return `<!doctype html><html lang="nl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap" rel="stylesheet">
<style>
  @media (max-width:520px){ .pad{padding-left:22px!important;padding-right:22px!important} .h1{font-size:26px!important} .stat{display:block!important;width:auto!important;margin:0 0 8px!important} }
  @media (prefers-color-scheme:dark){
    .bg{background:#0E1A23!important} .card{background:#16242F!important}
    .ink{color:#F1F6FA!important} .body{color:#B9CBD9!important} .muted{color:#7F97AA!important}
    .soft{background:#1D3342!important;border-color:#27455A!important}
  }
</style></head>
<body class="bg" style="margin:0;padding:0;background:#EDF4FA;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg" style="background:#EDF4FA;"><tr><td align="center" style="padding:28px 12px 36px;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%;">
  <tr><td align="center" style="padding:0 0 18px;">
    <a href="${SITE}" style="text-decoration:none;"><img src="${SITE}/images/email_logo.png" width="34" height="34" alt="" style="vertical-align:middle;border:0;border-radius:9px;">
    <span style="font:900 24px ${FONT};color:#1CB0F6;vertical-align:middle;margin-left:6px;">VUmed</span></a>
  </td></tr>
  <tr><td class="card" style="background:#ffffff;border-radius:24px;overflow:hidden;">${inner}</td></tr>
  <tr><td align="center" style="padding:22px 24px 0;">
    <div class="muted" style="font:400 12px ${FONT};color:${MUTED};line-height:1.7;">
      Je krijgt deze mail omdat je een VUmed-account hebt.<br>
      <a href="${unsubUrl}" style="color:${MUTED};text-decoration:underline;">Afmelden voor dit soort mails</a>
      &nbsp;·&nbsp; <a href="${SITE}" style="color:${MUTED};text-decoration:underline;">vumed.nl</a>
    </div>
  </td></tr>
</table></td></tr></table></body></html>`;
}

/** Gekleurde kop met de mascotte die onderaan "uit de rand" komt. */
function hero(bg: string, img: string, alt: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td align="center" style="background:${bg};border-radius:24px 24px 0 0;padding:26px 0 0;line-height:0;font-size:0;">
      <img src="${SITE}/images/${img}" width="190" height="190" alt="${esc(alt)}" style="display:block;margin:0 auto;border:0;">
    </td></tr></table>`;
}

function h1(text: string): string {
  return `<div class="ink h1" style="font:900 30px ${FONT};color:${INK};line-height:1.2;text-align:center;">${text}</div>`;
}

function p(html: string, extra = ""): string {
  return `<div class="body" style="font:400 17px ${FONT};color:${BODY};line-height:1.6;text-align:center;margin:12px auto 0;max-width:430px;${extra}">${html}</div>`;
}

function btn(label: string, href: string, color = "#1CB0F6", shadow = "#1899D6"): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px auto 0;"><tr>
    <td style="background:${color};border-radius:16px;border-bottom:4px solid ${shadow};">
      <a href="${href}" style="display:inline-block;padding:16px 38px;font:900 17px ${FONT};color:#ffffff;text-decoration:none;letter-spacing:.4px;text-transform:uppercase;">${esc(label)}</a>
    </td></tr></table>`;
}

function stat(big: string, label: string, color: string): string {
  return `<td class="stat" width="33%" align="center" style="padding:0 4px;">
    <div style="font:900 26px ${FONT};color:${color};line-height:1.1;">${big}</div>
    <div class="body" style="font:700 12px ${FONT};color:${BODY};margin-top:4px;">${label}</div></td>`;
}

function blockCard(ctx: NonNullable<BlockCtx>, accent: string): string {
  const dagen = ctx.daysLeft === 1 ? "dag" : "dagen";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 0;"><tr>
    <td class="soft" style="background:#F2FAFF;border:2px solid #D3EEFC;border-radius:18px;padding:18px 14px;">
      <div class="muted" style="font:800 12px ${FONT};color:${MUTED};letter-spacing:1.3px;text-align:center;">JOUW BLOK NU</div>
      <div class="ink" style="font:900 22px ${FONT};color:${INK};text-align:center;margin-top:4px;">${esc(ctx.subject)}</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;"><tr>
        ${stat(String(ctx.totalQ), "vragen", "#1CB0F6")}
        ${stat(String(ctx.nExams), "oude tentamens", "#58CC02")}
        ${stat(String(ctx.daysLeft), `${dagen} tot blokeinde`, accent)}
      </tr></table>
    </td></tr></table>`;
}

function step(n: number, color: string, title: string, sub: string): string {
  return `<tr>
    <td width="44" valign="top" style="padding:10px 0;">
      <div style="width:34px;height:34px;border-radius:17px;background:${color};color:#fff;font:900 17px/34px ${FONT};text-align:center;">${n}</div>
    </td>
    <td valign="top" style="padding:10px 0;">
      <div class="ink" style="font:800 16px ${FONT};color:${INK};">${title}</div>
      <div class="body" style="font:400 15px ${FONT};color:${BODY};margin-top:2px;">${sub}</div>
    </td></tr>`;
}

function body(inner: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td class="pad" style="padding:30px 40px 36px;">${inner}</td></tr></table>`;
}

function unsubOf(c: Candidate, fnUrl: string): string {
  return `${fnUrl}?unsub=${c.unsub_token}`;
}

// ---------- welkom ----------

export function welcomeEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const card = ctx ? blockCard(ctx, "#FF9600") : "";
  const cta = ctx ? btn("Maak je eerste vraag", ctx.examUrl) : btn("Begin met oefenen", `${SITE}/dashboard.html`);
  const inner = hero("#1CB0F6", "email_m_juichend.png", "Juichende VUmed-dokter") + body(`
    ${h1(`Welkom, ${name}!`)}
    ${p("Fijn dat je er bent. Hier oefen je met <b>échte oude VU-tentamens</b>, met uitleg bij elk antwoord.")}
    ${card}
    ${cta}
    <div class="muted" style="font:800 12px ${FONT};color:${MUTED};letter-spacing:1.3px;text-align:center;margin-top:34px;">ZO HAAL JE ER HET MEESTE UIT</div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:10px auto 0;max-width:400px;">
      ${step(1, "#1CB0F6", "Elke dag een paar vragen", "Zo bouw je een reeks op 🔥")}
      ${step(2, "#58CC02", "Fout? Lees de uitleg", "Dan zit hij er bij het tentamen wél in")}
      ${step(3, "#FF9600", "Daag je jaargenoten uit", "Wie haalt deze week de meeste XP?")}
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr>
      <td class="soft" align="center" style="background:#F6F8FA;border-radius:14px;padding:14px;">
        <span class="body" style="font:700 15px ${FONT};color:${BODY};">Liever op je telefoon? </span>
        <a href="${APP_STORE}" style="font:900 15px ${FONT};color:#1CB0F6;text-decoration:none;">Download de iPhone-app →</a>
      </td></tr></table>
    ${p(`Vragen of feedback? Antwoord gewoon op deze mail.<br>Succes met blokken!<br><b>Tijmen</b>, VUmed`, "font-size:15px;margin-top:26px;")}
  `);
  return {
    subject: ctx ? `Welkom bij VUmed! Je eerste ${ctx.subject}-vraag staat klaar 🩺` : `Welkom bij VUmed, ${c.display_name}! 🎉`,
    html: shell(inner, ctx
      ? `${ctx.totalQ} vragen uit ${ctx.nExams} oude tentamens ${ctx.subject} staan voor je klaar.`
      : "Je account staat klaar. Begin met je eerste oude tentamen.", unsubOf(c, fnUrl)),
  };
}

// ---------- we missen je ----------

export function winbackEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const streak = c.login_streak || 0;
  const urgent = !!ctx && ctx.daysLeft <= 14;
  let subject: string, title: string, img: string, bg: string, preheader: string;
  if (urgent) {
    const d = ctx!.daysLeft === 1 ? "1 dag" : `${ctx!.daysLeft} dagen`;
    subject = `${ctx!.subject} eindigt over ${d} 😰`;
    title = `Eh, ${name}… het tentamen komt eraan`;
    img = "email_m_paniek.png"; bg = "#FF9600";
    preheader = `Nog ${d} in dit blok. 10 minuten oefenen scheelt echt.`;
  } else if (streak >= 3) {
    subject = `Je reeks van ${streak} dagen is weg 😭`;
    title = `Je reeks van ${streak} dagen is weg`;
    img = "email_m_huilend.png"; bg = "#7FA3BE";
    preheader = "Geen ramp: vandaag begin je gewoon een nieuwe.";
  } else {
    subject = "Het is stil zonder jou 😢";
    title = `Het is stil zonder jou, ${name}`;
    img = "email_m_huilend.png"; bg = "#7FA3BE";
    preheader = "Eén sessie van 10 minuten en je zit er weer in.";
  }
  const intro = streak >= 3 && !urgent
    ? "Een week geen vraag geoefend. Geen ramp: vandaag begin je gewoon een nieuwe reeks."
    : "Je hebt al een week geen vraag geoefend. Geen stress, je zit er zo weer in: <b>één sessie van 10 minuten</b> is genoeg.";
  const cta = ctx ? ctx.examUrl : `${SITE}/dashboard.html`;
  const inner = hero(bg, img, urgent ? "Paniekerige VUmed-dokter" : "Huilende VUmed-dokter") + body(`
    ${h1(title)}
    ${p(intro)}
    ${ctx ? blockCard(ctx, urgent ? "#FF4B4B" : "#FF9600") : ""}
    ${btn("Oké, 10 minuten dan", cta, urgent ? "#FF9600" : "#1CB0F6", urgent ? "#E07F00" : "#1899D6")}
    ${p(urgent ? "Je toekomstige zelf in de tentamenzaal bedankt je. 🙏" : "Hij kijkt je zo verdrietig aan. Doe het voor hem. 🥺", `font-size:14px;color:${MUTED};margin-top:18px;`)}
  `);
  return { subject, html: shell(inner, preheader, unsubOf(c, fnUrl)) };
}

// ---------- overige templates (inhoud ongewijzigd, nieuwe shell) ----------

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

function legacy(inner: string): string {
  return body(`<div style="text-align:center;">${inner}</div>`);
}

export function streakSaverEmail(c: Candidate, _ctx: BlockCtx, fnUrl: string, supabaseUrl: string): Mail {
  const n = c.login_streak;
  const dag = n === 1 ? "dag" : "dagen";
  const freezeNote = c.streak_freezes > 0
    ? `<div class="body" style="font:400 13px ${FONT};color:#1899D6;margin-top:12px;">Je hebt nog ${c.streak_freezes} streak freeze${c.streak_freezes === 1 ? "" : "s"} als vangnet, maar zelf oefenen is leuker.</div>`
    : "";
  const cdUrl = `${supabaseUrl}/functions/v1/countdown?r=${(c.unsub_token || "").slice(0, 8)}-${new Date().toISOString().slice(0, 10)}`;
  const inner = legacy(`
    <img src="${SITE}/images/email_flame.png" width="126" height="168" alt="Vlam" style="display:block;margin:0 auto;border:0;">
    <div style="font:900 68px ${FONT};color:#FF7A00;line-height:1;margin-top:6px;">${n}</div>
    <div class="ink" style="font:800 20px ${FONT};color:#3C5A73;margin-top:2px;">${dag} op rij</div>
    <div class="muted" style="font:800 12px ${FONT};color:${MUTED};letter-spacing:1.2px;margin-top:20px;">ZOVEEL TIJD HEB JE NOG</div>
    <img src="${cdUrl}" width="198" height="55" alt="Aftellend tot middernacht" style="display:block;margin:8px auto 0;border:0;">
    ${p(`Hoi ${esc(c.display_name)}, je reeks van <b>${n} ${dag}</b> staat vanavond op het spel. Eén korte oefensessie is genoeg om hem te redden.`)}
    ${freezeNote}
    ${btn("Ga verder met oefenen", `${SITE}/dashboard.html`)}`);
  return {
    subject: `Je reeks van ${n} ${dag} staat op het spel \u{1F525}`,
    html: shell(inner, `Nog even oefenen vandaag en je reeks van ${n} ${dag} blijft staan.`, unsubOf(c, fnUrl)),
  };
}

export function weekrecapEmail(c: Candidate, _ctx: BlockCtx, fnUrl: string): Mail {
  const xp = c.xp_week ?? 0;
  const rank = c.lb_rank ?? 0;
  const rankLine = rank === 1
    ? `Je staat <b>bovenaan het klassement</b>. Verdedig je plek deze week!`
    : `Nog <b>${rank - 1} ${rank - 1 === 1 ? "plek" : "plekken"}</b> verwijderd van de eerste plaats. Nieuwe week, nieuwe kansen!`;
  const tile = (bg: string, sh: string, big: string, label: string, lc: string) =>
    `<td style="background:${bg};border-radius:16px;padding:16px 20px;text-align:center;border-bottom:4px solid ${sh};">
      <div style="font:900 30px ${FONT};color:#ffffff;">${big}</div>
      <div style="font:800 12px ${FONT};color:${lc};letter-spacing:.6px;">${label}</div>
    </td>`;
  const inner = legacy(`
    <img src="${SITE}/images/email_trophy.png" width="140" height="140" alt="Trofee" style="display:block;margin:0 auto;border:0;">
    ${h1("Jouw week bij VUmed")}
    ${p(`Goed bezig, ${esc(c.display_name)}! Dit was je week:`, "font-size:15px;")}
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px auto 0;"><tr>
      ${tile("#1CB0F6", "#1899D6", String(xp), "XP", "#D9F1FF")}
      <td style="width:10px;"></td>
      ${tile("#FFC800", "#E8A400", "#" + rank, "KLASSEMENT", "#FFF3CC")}
      <td style="width:10px;"></td>
      ${tile("#FF7A00", "#E05E00", String(c.login_streak), "DAGEN REEKS", "#FFE3CC")}
    </tr></table>
    ${p(rankLine, "font-size:15px;margin-top:20px;")}
    ${btn("Bekijk het klassement", `${SITE}/voortgang.html`)}`);
  return {
    subject: `Jouw week: ${xp} XP en plek ${rank} in het klassement \u{1F3C6}`,
    html: shell(inner, `Je haalde deze week ${xp} XP en staat op plek ${rank}.`, unsubOf(c, fnUrl)),
  };
}

export function badgeEmail(c: Candidate, _ctx: BlockCtx, fnUrl: string): Mail {
  const meta = BADGE_META[c.badge_key || ""] || { name: c.badge_key || "Badge", unit: "", tiers: [] };
  const tier = c.badge_tier ?? 0;
  const t = meta.tiers[tier];
  const line = meta.ranks
    ? `Je bent gepromoveerd tot <b>${esc(meta.ranks[tier] || "")}</b>. Deze badge staat vanaf nu op je profiel, en je vrienden kunnen je feliciteren.`
    : `Je hebt <b>${t} ${esc(meta.unit)}</b> gehaald: niveau ${tier + 1} van deze badge. Hij staat vanaf nu op je profiel, en je vrienden kunnen je feliciteren.`;
  const inner = legacy(`
    <img src="${SITE}/images/email_badge.png" width="150" height="150" alt="Badge" style="display:block;margin:0 auto;border:0;">
    <div style="font:800 14px ${FONT};color:#B57BF6;letter-spacing:1.5px;margin-top:12px;">NIEUWE PRESTATIE</div>
    ${h1(esc(meta.name))}
    ${p(`Gefeliciteerd ${esc(c.display_name)}! ${line}`)}
    ${btn("Bekijk je prestaties", `${SITE}/profile.html`)}`);
  return {
    subject: `Nieuwe prestatie: ${meta.name} \u{1F3C5}`,
    html: shell(inner, `Je hebt de badge ${meta.name} verdiend.`, unsubOf(c, fnUrl)),
  };
}

export function customEmail(c: Candidate, fnUrl: string, subject: string, title: string, message: string, ctaLabel: string, ctaUrl: string): Mail {
  const paras = message.split(/\n\s*\n/).map((x) => p(esc(x.trim()).replace(/\n/g, "<br>"))).join("");
  const inner = legacy(`${h1(esc(title))}${paras}${ctaLabel && ctaUrl ? btn(ctaLabel, ctaUrl) : ""}`);
  return { subject, html: shell(inner, message.slice(0, 120), unsubOf(c, fnUrl)) };
}
