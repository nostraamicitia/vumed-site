// templates.ts — HTML-templates voor email-sender.
// Lokaal renderen: node supabase/functions/email-sender/preview.mjs <map>
// Illustraties: art/email_art.py → images/email_h_*.png (kopbeelden) en images/email_i_*.png (iconen).

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

export type BlockCtx = {
  subject: string;
  year: number;
  blockNr: number;
  daysLeft: number; // dagen tot de start van het volgende blok
  daysTotal: number;
  examUrl: string; // nieuwste oude tentamen van dit vak
  examLabel: string; // bv. "2021-2022, 2e toetsmoment"
  totalQ: number;
  nExams: number;
  topics: [string, number][];
} | null;

export type Mail = { subject: string; html: string };

export function esc(s: string): string {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ---------- datum & blokcontext ----------

type Calendar = { block_starts: string[]; year_end: string; [k: string]: unknown };
type SubjectIndex = Record<string, { exam_keys: string[]; total_q: number; topics?: Record<string, number> }>;
const DAY = 86400000;
const WD = ["zo", "ma", "di", "wo", "do", "vr", "za"];
const MONTHS = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

/** Datum in NL-tijd als UTC-middernacht, zodat dagverschillen exact zijn. */
export function nlToday(now = new Date()): Date {
  const ymd = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(now);
  return new Date(ymd + "T00:00:00Z");
}
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY);
const fmtDate = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
function isoWeek(d: Date): number {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  return Math.ceil(((t.getTime() - Date.UTC(t.getUTCFullYear(), 0, 1)) / DAY + 1) / 7);
}

function examLabel(key: string): string {
  const m = key.match(/(\d{4})_(\d{4})_(\w+?)_toetsmoment$/);
  return m ? `${m[1]}-${m[2]}, ${m[3]} toetsmoment` : "nieuwste tentamen";
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
      const key = meta.exam_keys[meta.exam_keys.length - 1];
      return {
        subject,
        year,
        blockNr: subjects.slice(0, i + 1).filter(Boolean).length,
        daysLeft: Math.round((next.getTime() - today.getTime()) / DAY),
        daysTotal: Math.round((next.getTime() - starts[i].getTime()) / DAY),
        examUrl: `${SITE}/${key}.html`,
        examLabel: examLabel(key),
        totalQ: meta.total_q,
        nExams: meta.exam_keys.length,
        topics: Object.entries(meta.topics || {}).filter(([t]) => t !== "Overig").sort((a, b) => b[1] - a[1]).slice(0, 5),
      };
    }
  }
  return null;
}

// ---------- stijl ----------

const FONT = "'Nunito','Trebuchet MS',Arial,sans-serif";
const INK = "#1C3144";
const BODY = "#4B6478";
const MUTED = "#8FA8BC";
const LINE = "#E3ECF2";

type Tone = { bg: string; sh: string; hl: string; tint: string; tintLine: string };
const BLUE: Tone = { bg: "#1CB0F6", sh: "#1899D6", hl: "#6CCDF9", tint: "#EAF7FE", tintLine: "#CDEBFB" };
const GREEN: Tone = { bg: "#58CC02", sh: "#46A302", hl: "#8FE04F", tint: "#EEFBE3", tintLine: "#CDEFB0" };
const ORANGE: Tone = { bg: "#FF9600", sh: "#E07F00", hl: "#FFBC5C", tint: "#FFF4E5", tintLine: "#FFDDB0" };
const RED: Tone = { bg: "#FF4B4B", sh: "#E03C3C", hl: "#FF8A8A", tint: "#FFEDED", tintLine: "#FFCACA" };
const PURPLE: Tone = { bg: "#B57BF6", sh: "#8E55E0", hl: "#D2B0FA", tint: "#F5EEFE", tintLine: "#E2CFFB" };
const YELLOW: Tone = { bg: "#FFC800", sh: "#E8A400", hl: "#FFE066", tint: "#FFF9E0", tintLine: "#FFEBA3" };

const img = (name: string, size: number, alt = "", extra = "") =>
  `<img src="${SITE}/images/${name}" width="${size}" height="${size}" alt="${esc(alt)}" style="display:block;border:0;${extra}">`;
const icon = (name: string, size = 40, alt = "") => img(`email_i_${name}.png`, size, alt);

// ---------- bouwstenen ----------

function shell(inner: string, preheader: string, unsubUrl: string): string {
  const nav = [["Dashboard", "dashboard.html"], ["Klassement", "voortgang.html"], ["Profiel", "profile.html"]]
    .map(([l, h]) => `<a href="${SITE}/${h}" style="color:${BODY};text-decoration:none;font-weight:800;">${l}</a>`)
    .concat(`<a href="${APP_STORE}" style="color:${BODY};text-decoration:none;font-weight:800;">iPhone-app</a>`)
    .join(`<span style="color:#C3D2DD;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>`);
  return `<!doctype html><html lang="nl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
  a{color:#1CB0F6}
  @media (max-width:540px){
    .pad{padding-left:20px!important;padding-right:20px!important}
    .h1{font-size:26px!important}
    .hero{width:100%!important;height:auto!important}
    .stack{display:block!important;width:100%!important;box-sizing:border-box}
    .gap{display:none!important}
    .btnw{width:100%!important}
  }
  @media (prefers-color-scheme:dark){
    .bg{background:#0E1A23!important} .card{background:#16242F!important} .tile{background:#1B2B37!important;border-color:#26394A!important}
    .ink{color:#F1F6FA!important} .body{color:#B9CBD9!important} .muted{color:#7F97AA!important}
    .soft{background:#1D3342!important;border-color:#27455A!important} .rule{border-color:#26394A!important}
  }
</style></head>
<body class="bg" style="margin:0;padding:0;background:#EDF4FA;-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg" style="background:#EDF4FA;"><tr><td align="center" style="padding:26px 10px 40px;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%;">
  <tr><td align="center" style="padding:0 0 16px;">
    <a href="${SITE}" style="text-decoration:none;"><img src="${SITE}/images/email_logo.png" width="34" height="34" alt="" style="vertical-align:middle;border:0;border-radius:9px;"><span style="font:900 24px ${FONT};color:#1CB0F6;vertical-align:middle;margin-left:7px;">VUmed</span></a>
  </td></tr>
  <tr><td class="card" style="background:#ffffff;border-radius:26px;border-bottom:5px solid #DCE7EF;">${inner}</td></tr>
  <tr><td align="center" style="padding:26px 20px 0;">
    <div style="font:400 13px ${FONT};">${nav}</div>
    <div class="muted" style="font:400 12px ${FONT};color:${MUTED};line-height:1.7;margin-top:14px;">
      VUmed: oefenen met echte oude tentamens van VU Geneeskunde.<br>
      Je krijgt deze mail omdat je een VUmed-account hebt.
      <a href="${unsubUrl}" style="color:${MUTED};text-decoration:underline;">Afmelden voor dit soort mails</a>
    </div>
  </td></tr>
</table></td></tr></table></body></html>`;
}

function hero(name: string, alt: string, bg: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td style="background:${bg};border-radius:26px 26px 0 0;line-height:0;font-size:0;">
      <img class="hero" src="${SITE}/images/email_h_${name}.png" width="560" height="220" alt="${esc(alt)}" style="display:block;width:560px;max-width:100%;height:auto;border:0;border-radius:26px 26px 0 0;">
    </td></tr></table>`;
}

function body(inner: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td class="pad" style="padding:30px 36px 36px;">${inner}</td></tr></table>`;
}

function pill(text: string, t: Tone): string {
  return `<div style="text-align:center;"><span style="display:inline-block;background:${t.tint};border:2px solid ${t.tintLine};color:${t.sh};border-radius:999px;padding:5px 14px;font:900 12px ${FONT};letter-spacing:1.4px;">${esc(text)}</span></div>`;
}

function h1(text: string): string {
  return `<div class="ink h1" style="font:900 30px ${FONT};color:${INK};line-height:1.22;text-align:center;margin-top:14px;">${text}</div>`;
}

function p(html: string, extra = ""): string {
  return `<div class="body" style="font:400 17px ${FONT};color:${BODY};line-height:1.6;text-align:center;margin:12px auto 0;max-width:440px;${extra}">${html}</div>`;
}

/** 3D-knop met lichte highlight-streep bovenin (Duolingo-stijl). */
function btn(label: string, href: string, t: Tone = BLUE, full = false): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" class="btnw" style="margin:26px auto 0;${full ? "width:100%;" : ""}"><tr>
    <td align="center" style="background:${t.bg};border-radius:16px;border-bottom:5px solid ${t.sh};">
      <a href="${href}" style="display:block;text-decoration:none;color:#ffffff;">
        <span style="display:block;height:4px;line-height:4px;font-size:0;margin:6px 14px 0;border-radius:4px;background:${t.hl};">&nbsp;</span>
        <span style="display:block;padding:9px 40px 13px;font:900 17px ${FONT};letter-spacing:.8px;text-transform:uppercase;color:#ffffff;">${esc(label)}</span>
      </a>
    </td></tr></table>`;
}

function btn2(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" class="btnw" style="margin:12px auto 0;"><tr>
    <td align="center" class="tile" style="background:#ffffff;border:2px solid ${LINE};border-bottom-width:5px;border-radius:16px;">
      <a href="${href}" style="display:block;padding:11px 34px 10px;font:900 15px ${FONT};letter-spacing:.8px;text-transform:uppercase;color:#1CB0F6;text-decoration:none;">${esc(label)}</a>
    </td></tr></table>`;
}

function section(iconName: string, label: string, right = ""): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:34px 0 12px;"><tr>
    <td width="30" valign="middle">${icon(iconName, 24)}</td>
    <td valign="middle" class="muted" style="font:900 13px ${FONT};color:${MUTED};letter-spacing:1.4px;">${esc(label)}</td>
    ${right ? `<td align="right" valign="middle" class="muted" style="font:700 13px ${FONT};color:${MUTED};">${right}</td>` : ""}
  </tr><tr><td colspan="3" class="rule" style="border-bottom:2px solid ${LINE};padding-top:10px;"></td></tr></table>`;
}

function card(inner: string, t?: Tone, pad = "20px 20px"): string {
  const bg = t ? t.tint : "#ffffff";
  const bc = t ? t.tintLine : LINE;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
    <td class="${t ? "soft" : "tile"}" style="background:${bg};border:2px solid ${bc};border-bottom-width:5px;border-radius:20px;padding:${pad};">${inner}</td></tr></table>`;
}

function tiles(items: { icon: string; big: string; label: string; color: string }[]): string {
  const cells = items.map((it) =>
    `<td class="stack tile" width="${Math.floor(100 / items.length)}%" align="center" valign="top" style="background:#ffffff;border:2px solid ${LINE};border-bottom-width:5px;border-radius:18px;padding:14px 6px 12px;">
      <div style="text-align:center;">${icon(it.icon, 38).replace("display:block;", "display:inline-block;")}</div>
      <div style="font:900 26px ${FONT};color:${it.color};line-height:1.1;margin-top:6px;">${it.big}</div>
      <div class="body" style="font:700 12px ${FONT};color:${BODY};margin-top:3px;">${it.label}</div>
    </td>`).join(`<td class="gap" width="10" style="font-size:0;">&nbsp;</td>`);
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;"><tr>${cells}</tr></table>`;
}

function bar(frac: number, t: Tone): string {
  const pct = Math.max(6, Math.min(100, Math.round(frac * 100)));
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#E5EEF4;border-radius:10px;"><tr>
    <td width="${pct}%" style="background:${t.bg};border-radius:10px;height:16px;padding:0;vertical-align:top;">
      <div style="height:4px;line-height:4px;font-size:0;margin:3px 8px 0;border-radius:3px;background:${t.hl};">&nbsp;</div></td>
    ${pct < 100 ? `<td style="font-size:0;">&nbsp;</td>` : ""}</tr></table>`;
}

function chips(topics: [string, number][]): string {
  return topics.map(([t, n]) =>
    `<span style="display:inline-block;background:#ffffff;border:2px solid ${LINE};border-radius:999px;padding:5px 12px;margin:0 6px 8px 0;font:700 13px ${FONT};color:${BODY};">${esc(t)} <b style="color:#1CB0F6;">${n}</b></span>`).join("");
}

type DayState = "done" | "miss" | "today";
function dayStrip(days: { d: Date; s: DayState }[]): string {
  const cells = days.map(({ d, s }) => {
    const inner = s === "done"
      ? `<div style="width:42px;height:42px;border-radius:21px;background:#FFF0DC;border:2px solid #FFC98A;margin:0 auto;text-align:center;">${icon("flame", 26).replace("display:block;", "display:inline-block;margin-top:7px;")}</div>`
      : s === "today"
      ? `<div style="width:38px;height:38px;border-radius:21px;border:4px dashed #FF9600;margin:0 auto;text-align:center;font:900 20px/38px ${FONT};color:#FF9600;">?</div>`
      : `<div style="width:42px;height:42px;border-radius:21px;background:#EEF2F5;border:2px solid #E1E8EE;margin:0 auto;text-align:center;font:900 18px/42px ${FONT};color:#B7C6D2;">&ndash;</div>`;
    return `<td align="center" valign="top" style="padding:0 2px;">${inner}
      <div style="font:800 12px ${FONT};color:${s === "today" ? "#FF9600" : MUTED};margin-top:6px;">${s === "today" ? "vandaag" : WD[d.getUTCDay()]}</div></td>`;
  }).join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${cells}</tr></table>`;
}

function featureRow(iconName: string, title: string, sub: string): string {
  return `<tr><td style="padding:0 0 10px;">${card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="60" valign="top">${icon(iconName, 46)}</td>
      <td valign="top"><div class="ink" style="font:900 16px ${FONT};color:${INK};">${title}</div>
        <div class="body" style="font:400 15px ${FONT};color:${BODY};line-height:1.5;margin-top:3px;">${sub}</div></td>
    </tr></table>`, undefined, "14px 16px")}</td></tr>`;
}

function steps(items: [string, string, string][]): string {
  const rows = items.map(([n, title, sub], i) => `<tr>
    <td width="46" valign="top" style="padding:${i ? 14 : 0}px 0 0;">
      <div style="width:34px;height:34px;border-radius:17px;background:#1CB0F6;border-bottom:3px solid #1899D6;color:#fff;font:900 16px/34px ${FONT};text-align:center;">${n}</div></td>
    <td valign="top" style="padding:${i ? 14 : 0}px 0 0;">
      <div class="ink" style="font:900 16px ${FONT};color:${INK};">${title}</div>
      <div class="body" style="font:400 15px ${FONT};color:${BODY};margin-top:2px;line-height:1.5;">${sub}</div></td></tr>`).join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>`;
}

/** Mascotte met spraakballon. */
function speech(mascot: string, text: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;"><tr>
    <td width="92" valign="bottom">${img(`email_m_${mascot}.png`, 84, "VUmed-dokter")}</td>
    <td valign="middle">${card(`<div class="ink" style="font:700 15px ${FONT};color:${INK};line-height:1.5;">${text}</div>`, BLUE, "14px 16px")}</td>
  </tr></table>`;
}

function blockCard(ctx: NonNullable<BlockCtx>, t: Tone, withCta: { label: string; tone: Tone } | null): string {
  const dagen = ctx.daysLeft === 1 ? "dag" : "dagen";
  const done = 1 - ctx.daysLeft / ctx.daysTotal;
  return card(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td class="muted" style="font:900 12px ${FONT};color:${MUTED};letter-spacing:1.4px;">JOUW BLOK NU</td>
      <td align="right" class="muted" style="font:800 12px ${FONT};color:${MUTED};">Jaar ${ctx.year} · blok ${ctx.blockNr}</td>
    </tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;"><tr>
      <td width="54" valign="middle">${icon("book", 44)}</td>
      <td valign="middle" class="ink" style="font:900 23px ${FONT};color:${INK};line-height:1.2;">${esc(ctx.subject)}</td>
    </tr></table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0 6px;"><tr>
      <td class="body" style="font:800 13px ${FONT};color:${BODY};">Blokvoortgang</td>
      <td align="right" style="font:900 13px ${FONT};color:${t.sh};">nog ${ctx.daysLeft} ${dagen}</td>
    </tr></table>
    ${bar(done, t)}
    ${tiles([
      { icon: "question", big: String(ctx.totalQ), label: "vragen", color: "#1CB0F6" },
      { icon: "calendar", big: String(ctx.nExams), label: "oude tentamens", color: "#FF4B4B" },
      { icon: "clock", big: String(ctx.daysLeft), label: `${dagen} tot blokeinde`, color: t.sh },
    ])}
    ${ctx.topics.length ? `<div class="muted" style="font:900 12px ${FONT};color:${MUTED};letter-spacing:1.4px;margin:18px 0 8px;">MEEST GEVRAAGD</div>${chips(ctx.topics)}` : ""}
    ${withCta ? btn(withCta.label, ctx.examUrl, withCta.tone, true) + `<div class="muted" style="font:700 13px ${FONT};color:${MUTED};text-align:center;margin-top:10px;">Start met ${esc(ctx.examLabel)}</div>` : ""}
  `, BLUE);
}

function unsubOf(c: Candidate, fnUrl: string): string {
  return `${fnUrl}?unsub=${c.unsub_token}`;
}

// ---------- welkom ----------

export function welcomeEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const inner = hero("welkom", "Juichende VUmed-dokter met boeken en een afvinklijst", "#1CB0F6") + body(`
    ${pill("ACCOUNT AANGEMAAKT", GREEN)}
    ${h1(`Welkom bij VUmed, ${name}!`)}
    ${p("Je account staat klaar. Vanaf nu oefen je met <b>echte oude tentamens van VU Geneeskunde</b>, met bij elke vraag uitleg waarom het goede antwoord goed is.")}
    ${ctx
      ? `<div style="height:24px;"></div>${blockCard(ctx, ORANGE, { label: "Maak je eerste vraag", tone: GREEN })}`
      : btn("Begin met oefenen", `${SITE}/dashboard.html`, GREEN)}
    ${section("check", "ZO WERKT VUMED")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${featureRow("flame", "Bouw een reeks op", "Oefen elke dag een paar vragen en zie je reeks groeien. Mis je een dag, dan vangt een streak freeze je op.")}
      ${featureRow("check", "Uitleg bij elk antwoord", "Fout gegokt? Je ziet direct waarom, zodat hij er bij het echte tentamen wel in zit.")}
      ${featureRow("trophy", "Weekklassement", "Elke maandag begint een nieuw klassement met je jaargenoten. Wie haalt de meeste XP?")}
      ${featureRow("medal", "Badges verdienen", "Van Anatoom tot Nachtdienst: elke prestatie komt op je profiel te staan.")}
    </table>
    ${section("bulb", "TIP VOOR JE EERSTE WEEK")}
    ${card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="60" valign="top">${icon("target", 46)}</td>
      <td valign="top"><div class="ink" style="font:900 16px ${FONT};color:${INK};">Stel een dagdoel in</div>
      <div class="body" style="font:400 15px ${FONT};color:${BODY};line-height:1.5;margin-top:3px;">Begin klein met 10 vragen per dag. Dat is goed te doen naast colleges en je reeks blijft staan.</div></td>
    </tr></table>`, YELLOW, "16px 16px")}
    <div style="height:14px;"></div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="background:${INK};border-radius:20px;border-bottom:5px solid #0F1E2B;padding:18px 18px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td width="62" valign="middle">${icon("phone", 50)}</td>
          <td valign="middle"><div style="font:900 17px ${FONT};color:#ffffff;">VUmed op je iPhone</div>
            <div style="font:400 14px ${FONT};color:#B9CBD9;margin-top:2px;line-height:1.45;">Oefen in de trein of tussen colleges door, met hetzelfde account.</div></td>
          <td width="120" align="right" valign="middle" class="stack">
            <a href="${APP_STORE}" style="display:inline-block;background:#ffffff;border-radius:12px;border-bottom:4px solid #C3D2DD;padding:9px 14px;font:900 13px ${FONT};color:${INK};text-decoration:none;letter-spacing:.4px;white-space:nowrap;">DOWNLOAD</a></td>
        </tr></table>
      </td></tr></table>
    ${speech("blij", `Vragen, een fout in een vraag gevonden of een idee? Antwoord gewoon op deze mail. Tijmen leest alles.`)}
  `);
  return {
    subject: ctx ? `Welkom bij VUmed! Je eerste ${ctx.subject}-vraag staat klaar` : `Welkom bij VUmed, ${c.display_name}!`,
    html: shell(inner, ctx
      ? `${ctx.totalQ} vragen uit ${ctx.nExams} oude tentamens ${ctx.subject} staan voor je klaar. Nog ${ctx.daysLeft} dagen in dit blok.`
      : "Je account staat klaar. Begin met je eerste oude tentamen.", unsubOf(c, fnUrl)),
  };
}

// ---------- we missen je ----------

export function winbackEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const today = nlToday();
  const streak = c.login_streak || 0;
  const urgent = !!ctx && ctx.daysLeft <= 14;
  const lastActive = addDays(today, -7);
  let subject: string, title: string, heroName: string, heroBg: string, preheader: string, intro: string;
  if (urgent) {
    const d = ctx!.daysLeft === 1 ? "1 dag" : `${ctx!.daysLeft} dagen`;
    subject = `${ctx!.subject} eindigt over ${d}`;
    title = `${name}, het blok is bijna voorbij`;
    heroName = "paniek"; heroBg = "#FF9600";
    preheader = `Nog ${d} in dit blok. Met 10 minuten per dag haal je nog veel in.`;
    intro = `Je hebt een week niet geoefend en ${esc(ctx!.subject)} eindigt over <b>${d}</b>. Goed nieuws: met <b>10 minuten per dag</b> haal je nog veel in.`;
  } else if (streak >= 3) {
    subject = `Je reeks van ${streak} dagen is verloren`;
    title = `Je reeks van ${streak} dagen is verloren`;
    heroName = "huilend"; heroBg = "#7FA3BE";
    preheader = "Vandaag begin je gewoon een nieuwe. Eén sessie is genoeg.";
    intro = `Een week geen vraag geoefend, en daarmee is je reeks van <b>${streak} dagen</b> weg. Geen ramp: vandaag begin je een nieuwe.`;
  } else {
    subject = "Het is stil zonder jou op VUmed";
    title = `Het is stil zonder jou, ${name}`;
    heroName = "huilend"; heroBg = "#7FA3BE";
    preheader = "Eén sessie van 10 minuten en je zit er weer in.";
    intro = "Je hebt al een week geen vraag geoefend. Geen stress, je zit er zo weer in: <b>één sessie van 10 minuten</b> is genoeg.";
  }
  const strip = dayStrip([0, 1, 2, 3, 4, 5, 6].map((i) => ({ d: addDays(lastActive, i), s: (i === 0 ? "done" : "miss") as DayState })));
  const cta = ctx ? ctx.examUrl : `${SITE}/dashboard.html`;
  const inner = hero(heroName, urgent ? "Geschrokken VUmed-dokter met wekker en kalender" : "Huilende VUmed-dokter onder een regenwolk", heroBg) + body(`
    ${pill("7 DAGEN NIET GEOEFEND", urgent ? ORANGE : RED)}
    ${h1(title)}
    ${p(intro)}
    ${section("calendar", "JOUW AFGELOPEN WEEK", `laatst geoefend: ${WD[lastActive.getUTCDay()]} ${fmtDate(lastActive)}`)}
    ${card(strip + (streak >= 3
      ? `<div class="body" style="font:700 14px ${FONT};color:${BODY};text-align:center;margin-top:14px;">Je vorige reeks: <b style="color:#FF9600;">${streak} dagen</b>. Vandaag begin je een nieuwe.</div>`
      : ""), undefined, "18px 12px")}
    ${ctx ? `${section("book", "WAT ER NOG KOMT")}${blockCard(ctx, urgent ? RED : ORANGE, null)}` : ""}
    ${section("target", "PLAN VOOR VANDAAG", "ongeveer 10 min")}
    ${steps([
      ["1", ctx ? `Open ${esc(ctx.subject)}` : "Open je dashboard", ctx ? `Begin met ${esc(ctx.examLabel)}.` : "Kies het vak van je huidige blok."],
      ["2", "Maak 10 vragen", "Niet te lang nadenken: gokken mag, daar leer je ook van."],
      ["3", "Lees de uitleg bij je fouten", "Daar zit de winst. Wat je nu fout doet, doe je op het tentamen goed."],
    ])}
    ${btn("Oké, 10 minuten dan", cta, urgent ? ORANGE : GREEN, true)}
    ${btn2("Liever een ander vak", `${SITE}/dashboard.html`)}
    ${speech("blij", urgent
      ? "Ik heb je vragen bewaard, precies waar je gebleven was. Samen halen we dit blok."
      : "Ik heb je vragen bewaard, precies waar je gebleven was. Zullen we weer beginnen?")}
  `);
  return { subject, html: shell(inner, preheader, unsubOf(c, fnUrl)) };
}

// ---------- reeks in gevaar ----------

export function streakSaverEmail(c: Candidate, ctx: BlockCtx, fnUrl: string, supabaseUrl: string): Mail {
  const n = c.login_streak;
  const dag = n === 1 ? "dag" : "dagen";
  const today = nlToday();
  const strip = dayStrip([6, 5, 4, 3, 2, 1, 0].map((k) => ({ d: addDays(today, -k), s: (k === 0 ? "today" : k <= n ? "done" : "miss") as DayState })));
  const cdUrl = `${supabaseUrl}/functions/v1/countdown?r=${(c.unsub_token || "").slice(0, 8)}-${new Date().toISOString().slice(0, 10)}`;
  const freezes = c.streak_freezes > 0
    ? card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="60" valign="middle">${icon("snow", 46)}</td>
        <td valign="middle"><div class="ink" style="font:900 16px ${FONT};color:${INK};">${c.streak_freezes} streak freeze${c.streak_freezes === 1 ? "" : "s"} op voorraad</div>
          <div class="body" style="font:400 14px ${FONT};color:${BODY};margin-top:2px;line-height:1.45;">Een freeze is je vangnet, maar zelf oefenen levert ook XP op.</div></td>
      </tr></table>`, BLUE, "14px 16px")
    : "";
  const inner = hero("reeks", "Geschrokken VUmed-dokter tussen vlammen en een wekker", "#FF4B4B") + body(`
    ${pill("REEKS IN GEVAAR", RED)}
    <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:16px auto 0;"><tr>
      <td valign="middle">${icon("flame", 64)}</td>
      <td valign="middle" style="padding-left:8px;"><div style="font:900 60px ${FONT};color:#FF9600;line-height:1;">${n}</div></td>
    </tr></table>
    ${h1(`${dag} op rij, ${esc(c.display_name)}`)}
    ${p(`Je hebt vandaag nog niet geoefend. Om middernacht is je reeks van <b>${n} ${dag}</b> weg. Eén korte sessie is genoeg om hem te redden.`)}
    <div style="height:20px;"></div>
    ${card(`<div class="muted" style="font:900 12px ${FONT};color:${MUTED};letter-spacing:1.4px;text-align:center;">ZOVEEL TIJD HEB JE NOG</div>
      <img src="${cdUrl}" width="198" height="55" alt="Tijd tot middernacht" style="display:block;margin:10px auto 0;border:0;">
      <div class="body" style="font:700 13px ${FONT};color:${BODY};text-align:center;margin-top:8px;">tot middernacht</div>`, undefined, "18px 16px")}
    ${section("flame", "JOUW WEEK")}
    ${card(strip, undefined, "18px 12px")}
    ${freezes ? `<div style="height:12px;"></div>${freezes}` : ""}
    ${btn("Red mijn reeks", ctx ? ctx.examUrl : `${SITE}/dashboard.html`, ORANGE, true)}
    ${ctx ? `<div class="muted" style="font:700 13px ${FONT};color:${MUTED};text-align:center;margin-top:10px;">Gaat direct naar ${esc(ctx.subject)}, ${esc(ctx.examLabel)}</div>` : ""}
    ${btn2("Naar mijn dashboard", `${SITE}/dashboard.html`)}
  `);
  return {
    subject: `Je reeks van ${n} ${dag} verloopt vanavond`,
    html: shell(inner, `Nog even oefenen vandaag en je reeks van ${n} ${dag} blijft staan.`, unsubOf(c, fnUrl)),
  };
}

// ---------- weekoverzicht ----------

export function weekrecapEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const xp = c.xp_week ?? 0;
  const rank = c.lb_rank ?? 0;
  const goal = Math.max(100, Math.ceil((xp * 1.1) / 50) * 50);
  const week = isoWeek(nlToday());
  const rankText = rank === 1
    ? `<b>Je staat bovenaan.</b> Iedereen jaagt deze week op jouw plek.`
    : `Nog <b>${rank - 1} ${rank - 1 === 1 ? "plek" : "plekken"}</b> tot de eerste plaats. Een nieuwe week betekent nieuwe kansen.`;
  const inner = hero("week", "Trotse VUmed-dokter met een trofee en een podium", "#58CC02") + body(`
    ${pill(`WEEKOVERZICHT · WEEK ${week}`, GREEN)}
    ${h1(`Goed bezig, ${esc(c.display_name)}`)}
    ${p("Dit heb je deze week bij elkaar geoefend:")}
    ${tiles([
      { icon: "bulb", big: String(xp), label: "XP verdiend", color: "#1CB0F6" },
      { icon: "trophy", big: "#" + rank, label: "in het klassement", color: "#E8A400" },
      { icon: "flame", big: String(c.login_streak), label: "dagen reeks", color: "#FF9600" },
    ])}
    <div style="height:14px;"></div>
    ${card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="60" valign="middle">${icon("users", 46)}</td>
      <td valign="middle" class="body" style="font:400 15px ${FONT};color:${BODY};line-height:1.5;">${rankText}</td>
    </tr></table>`, YELLOW, "14px 16px")}
    ${section("target", "DOEL VOOR VOLGENDE WEEK", `${goal} XP`)}
    ${card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;"><tr>
        <td class="body" style="font:800 13px ${FONT};color:${BODY};">0 / ${goal} XP</td>
        <td align="right" class="muted" style="font:700 13px ${FONT};color:${MUTED};">10% meer dan deze week</td></tr></table>
      ${bar(0, BLUE)}`, undefined, "16px 16px")}
    ${ctx ? `${section("book", "JOUW BLOK")}${blockCard(ctx, ORANGE, null)}` : ""}
    ${btn("Bekijk het klassement", `${SITE}/voortgang.html`, GREEN, true)}
    ${btn2("Verder oefenen", ctx ? ctx.examUrl : `${SITE}/dashboard.html`)}
  `);
  return {
    subject: `Jouw week: ${xp} XP en plek ${rank} in het klassement`,
    html: shell(inner, `Je haalde deze week ${xp} XP en staat op plek ${rank}. Doel voor volgende week: ${goal} XP.`, unsubOf(c, fnUrl)),
  };
}

// ---------- badge ----------

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

export function badgeEmail(c: Candidate, _ctx: BlockCtx, fnUrl: string): Mail {
  const meta = BADGE_META[c.badge_key || ""] || { name: c.badge_key || "Badge", unit: "", tiers: [] };
  const tier = c.badge_tier ?? 0;
  const label = (i: number) => meta.ranks ? meta.ranks[i] : `${meta.tiers[i]} ${meta.unit}`;
  const line = meta.ranks
    ? `Je bent gepromoveerd tot <b>${esc(meta.ranks[tier] || "")}</b>.`
    : `Je hebt <b>${meta.tiers[tier]} ${esc(meta.unit)}</b> gehaald en daarmee niveau ${tier + 1} van deze badge.`;
  const levels = meta.tiers.map((_, i) => {
    const s = i < tier ? "done" : i === tier ? "now" : "todo";
    const circle = s === "todo"
      ? `<div style="width:34px;height:34px;border-radius:17px;background:#EEF2F5;border:2px solid #E1E8EE;margin:0 auto;font:900 14px/34px ${FONT};color:#B7C6D2;text-align:center;">${i + 1}</div>`
      : `<div style="width:36px;height:36px;border-radius:18px;background:${s === "now" ? "#B57BF6" : "#D9C2FB"};border-bottom:3px solid #8E55E0;margin:0 auto;font:900 15px/36px ${FONT};color:#fff;text-align:center;">${i + 1}</div>`;
    return `<td align="center" valign="top" style="padding:0 2px;">${circle}
      <div style="font:800 11px ${FONT};color:${s === "now" ? "#8E55E0" : MUTED};margin-top:6px;line-height:1.3;">${esc(label(i))}</div></td>`;
  }).join("");
  const next = tier + 1 < meta.tiers.length
    ? `Volgende niveau: <b>${esc(label(tier + 1))}</b>`
    : "Dit is het hoogste niveau. Knap werk.";
  const inner = hero("badge", "Juichende VUmed-dokter met een medaille en confetti", "#A56EF0") + body(`
    ${pill("NIEUWE PRESTATIE", PURPLE)}
    <div style="text-align:center;margin-top:16px;">${icon("medal", 72).replace("display:block;", "display:inline-block;")}</div>
    ${h1(esc(meta.name))}
    ${p(`Gefeliciteerd, ${esc(c.display_name)}! ${line} De badge staat vanaf nu op je profiel en je vrienden kunnen je feliciteren.`)}
    ${section("medal", "JOUW NIVEAUS", `niveau ${tier + 1} van ${meta.tiers.length}`)}
    ${card(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${levels}</tr></table>
      <div class="body" style="font:700 14px ${FONT};color:${BODY};text-align:center;margin-top:14px;">${next}</div>`, PURPLE, "18px 10px")}
    ${btn("Bekijk je prestaties", `${SITE}/profile.html`, PURPLE, true)}
    ${btn2("Verder oefenen", `${SITE}/dashboard.html`)}
  `);
  return {
    subject: `Nieuwe prestatie: ${meta.name}`,
    html: shell(inner, `Je hebt de badge ${meta.name} verdiend. ${next.replace(/<[^>]+>/g, "")}`, unsubOf(c, fnUrl)),
  };
}

// ---------- losse mailing ----------

export function customEmail(c: Candidate, fnUrl: string, subject: string, title: string, message: string, ctaLabel: string, ctaUrl: string): Mail {
  const paras = message.split(/\n\s*\n/).map((x) => p(esc(x.trim()).replace(/\n/g, "<br>"), "text-align:left;")).join("");
  const inner = hero("algemeen", "VUmed-dokter met boeken", "#1CB0F6") + body(`
    ${h1(esc(title))}${paras}${ctaLabel && ctaUrl ? btn(ctaLabel, ctaUrl, GREEN, true) : ""}
    ${speech("blij", "Vragen of ideeën? Antwoord gewoon op deze mail.")}`);
  return { subject, html: shell(inner, message.slice(0, 120), unsubOf(c, fnUrl)) };
}
