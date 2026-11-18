// templates.ts — HTML-templates voor email-sender (premium/clean, v3).
// Lokaal renderen: node supabase/functions/email-sender/preview.mjs <map>
// Eén afbeelding per mail (mascotte die onderaan gluurt), meegestuurd als CID-bijlage: zie INLINE_IMAGES.

import { PEEK_PNG_B64 } from "./assets.ts";

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

// ---------- afbeeldingen ----------
// Bewust maar één afbeelding per mail: de mascotte die onderaan over de lijn gluurt.
// Die gaat als CID-bijlage mee (geen externe download), zodat hij in iCloud/Apple Mail meteen laadt.

export const PEEK_CID = "vumed-peek";
export const INLINE_IMAGES = [{ content_id: PEEK_CID, filename: "vumed.png", content: PEEK_PNG_B64 }];

/** Voor previews in de browser: cid-verwijzingen vervangen door data-URI's. */
export function previewHtml(html: string): string {
  return html.split(`cid:${PEEK_CID}`).join(`data:image/png;base64,${PEEK_PNG_B64}`);
}

// ---------- stijl ----------

const FONT = "-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";
const INK = "#0F1B2A";
const BODY = "#4A5B6C";
const MUTED = "#8B9AA9";
const LINE = "#E8EDF2";
const PANEL = "#F6F8FA";
const PAGE = "#F1F4F7";
const BRAND = "#1CB0F6";

type Accent = { c: string; text: string; soft: string };
const BLUE: Accent = { c: "#1CB0F6", text: "#0B8BCB", soft: "#E8F6FE" };
const GREEN: Accent = { c: "#58CC02", text: "#3A8F00", soft: "#EEF9E4" };
const ORANGE: Accent = { c: "#FF9600", text: "#D97800", soft: "#FFF4E5" };
const RED: Accent = { c: "#FF4B4B", text: "#D93636", soft: "#FFEEEE" };
const PURPLE: Accent = { c: "#A66CF5", text: "#7E45D6", soft: "#F4EDFE" };
const SLATE: Accent = { c: "#7F95A8", text: "#5E7488", soft: "#EFF3F6" };

const T = (o: Record<string, string>) => Object.entries(o).map(([k, v]) => `${k}:${v}`).join(";");
const TBL = `role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"`;

// ---------- bouwstenen ----------

function shell(inner: string, preheader: string, unsubUrl: string, a: Accent, meta: string): string {
  const link = (l: string, h: string) => `<a href="${h}" class="muted" style="color:${MUTED};text-decoration:none;">${l}</a>`;
  const nav = [link("Dashboard", `${SITE}/dashboard.html`), link("Klassement", `${SITE}/voortgang.html`), link("iPhone-app", APP_STORE)]
    .join(`<span style="color:#C9D3DC;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>`);
  return `<!doctype html><html lang="nl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark">
<meta name="x-apple-disable-message-reformatting">
<title>VUmed</title>
<style>
  a{color:${BRAND}}
  @media (max-width:540px){
    .wrap{width:100%!important}
    .pad{padding-left:24px!important;padding-right:24px!important}
    .h1{font-size:26px!important}
    .big{font-size:56px!important}
    .btnw{width:100%!important}
  }
  @media (prefers-color-scheme:dark){
    .bg{background:#0B131B!important} .card{background:#121D27!important;border-color:#1E2C38!important}
    .panel{background:#18252F!important;border-color:#22323F!important} .line{border-color:#22323F!important}
    .ink{color:#F2F6F9!important} .body{color:#AFC0CE!important} .muted{color:#74899B!important}
    .btn{background:#F2F6F9!important} .btn a,.btn span{color:#0F1B2A!important}
    .track{background:#22323F!important}
  }
</style></head>
<body class="bg" style="margin:0;padding:0;background:${PAGE};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(preheader)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table ${TBL} class="bg" style="background:${PAGE};"><tr><td align="center" style="padding:32px 12px 40px;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" class="wrap" style="width:560px;max-width:100%;">
  <tr><td class="card" style="background:#ffffff;border:1px solid ${LINE};border-radius:20px;overflow:hidden;">
    <table ${TBL}><tr><td style="height:4px;line-height:4px;font-size:0;background:${a.c};border-radius:20px 20px 0 0;">&nbsp;</td></tr></table>
    <table ${TBL}><tr><td class="pad" style="padding:26px 40px 0;">
      <table ${TBL}><tr>
        <td style="font:800 19px ${FONT};letter-spacing:-.3px;"><a href="${SITE}" style="text-decoration:none;"><span style="color:${BRAND};">VU</span><span class="ink" style="color:${INK};">med</span></a></td>
        <td align="right" class="muted" style="font:600 12px ${FONT};color:${MUTED};letter-spacing:.3px;">${meta}</td>
      </tr></table>
    </td></tr></table>
    ${inner}
  </td></tr>
  <tr><td align="center" style="padding:24px 24px 0;">
    <div style="font:600 13px ${FONT};">${nav}</div>
    <div class="muted" style="font:400 12px ${FONT};color:${MUTED};line-height:1.7;margin-top:12px;">
      VUmed · oefenen met echte oude tentamens van VU Geneeskunde<br>
      Je krijgt deze mail omdat je een VUmed-account hebt. <a href="${unsubUrl}" class="muted" style="color:${MUTED};text-decoration:underline;">Afmelden</a>
    </div>
  </td></tr>
</table></td></tr></table></body></html>`;
}

function body(inner: string): string {
  return `<table ${TBL}><tr><td class="pad" style="padding:36px 40px 0;">${inner}</td></tr></table>`;
}

function eyebrow(text: string, a: Accent): string {
  return `<div style="font:700 12px ${FONT};color:${a.text};letter-spacing:1.6px;text-transform:uppercase;">${esc(text)}</div>`;
}

function h1(html: string): string {
  return `<div class="ink h1" style="font:800 30px ${FONT};color:${INK};line-height:1.2;letter-spacing:-.6px;margin-top:10px;">${html}</div>`;
}

function p(html: string, extra = ""): string {
  return `<div class="body" style="font:400 16px ${FONT};color:${BODY};line-height:1.65;margin-top:14px;${extra}">${html}</div>`;
}

function gap(px: number): string {
  return `<div style="height:${px}px;line-height:${px}px;font-size:0;">&nbsp;</div>`;
}

function label(text: string, right = ""): string {
  return `<table ${TBL} style="margin:0 0 12px;"><tr>
    <td class="muted" style="font:700 11px ${FONT};color:${MUTED};letter-spacing:1.4px;text-transform:uppercase;">${esc(text)}</td>
    ${right ? `<td align="right" class="muted" style="font:600 12px ${FONT};color:${MUTED};">${right}</td>` : ""}
  </tr></table>`;
}

function btn(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="btnw" style="margin-top:28px;"><tr>
    <td align="center" class="btn" style="background:${INK};border-radius:12px;">
      <a href="${href}" style="display:block;padding:15px 30px;font:700 15px ${FONT};color:#ffffff;text-decoration:none;letter-spacing:.1px;"><span style="color:#ffffff;">${esc(text)}</span></a>
    </td></tr></table>`;
}

function link2(text: string, href: string): string {
  return `<div style="margin-top:16px;font:600 14px ${FONT};"><a href="${href}" style="color:${BRAND};text-decoration:none;">${esc(text)}&nbsp;&rarr;</a></div>`;
}

function panel(inner: string, padding = "22px 24px"): string {
  return `<table ${TBL}><tr><td class="panel" style="background:${PANEL};border:1px solid ${LINE};border-radius:14px;padding:${padding};">${inner}</td></tr></table>`;
}

/** Cijfers naast elkaar, gescheiden door dunne lijnen. */
function stats(items: { big: string; label: string; color?: string }[]): string {
  const cells = items.map((it, i) => `<td width="${Math.floor(100 / items.length)}%" valign="top" class="line" style="${i ? `border-left:1px solid ${LINE};padding-left:16px;` : ""}">
      <div class="ink" style="font:800 24px ${FONT};color:${it.color || INK};letter-spacing:-.5px;line-height:1.1;">${it.big}</div>
      <div class="muted" style="font:500 12px ${FONT};color:${MUTED};margin-top:4px;">${it.label}</div></td>`).join("");
  return `<table ${TBL}><tr>${cells}</tr></table>`;
}

function bar(frac: number, a: Accent): string {
  const pct = Math.max(3, Math.min(100, Math.round(frac * 100)));
  return `<table ${TBL} class="track" style="background:#E6ECF1;border-radius:4px;"><tr>
    <td width="${pct}%" style="background:${a.c};border-radius:4px;height:6px;line-height:6px;font-size:0;">&nbsp;</td>
    ${pct < 100 ? `<td style="font-size:0;line-height:6px;">&nbsp;</td>` : ""}</tr></table>`;
}

function rows(items: [string, string][]): string {
  return `<table ${TBL}>${items.map(([l, r], i) => `<tr>
    <td class="ink line" style="font:500 14px ${FONT};color:${INK};padding:9px 0;${i ? `border-top:1px solid ${LINE};` : ""}">${l}</td>
    <td align="right" class="muted line" style="font:600 13px ${FONT};color:${MUTED};padding:9px 0;white-space:nowrap;${i ? `border-top:1px solid ${LINE};` : ""}">${r}</td></tr>`).join("")}</table>`;
}

function numbered(items: [string, string][]): string {
  return `<table ${TBL}>${items.map(([title, sub], i) => `<tr>
    <td width="40" valign="top" style="padding:${i ? 16 : 0}px 0 0;font:700 13px ${FONT};color:${MUTED};letter-spacing:.5px;" class="muted">0${i + 1}</td>
    <td valign="top" style="padding:${i ? 16 : 0}px 0 0;">
      <div class="ink" style="font:700 15px ${FONT};color:${INK};">${title}</div>
      <div class="body" style="font:400 14px ${FONT};color:${BODY};line-height:1.55;margin-top:2px;">${sub}</div></td></tr>`).join("")}</table>`;
}

type DayState = "done" | "miss" | "today";
function dots(days: { d: Date; s: DayState }[], a: Accent): string {
  const cells = days.map(({ d, s }) => {
    const style = s === "done"
      ? `background:${a.c};border:2px solid ${a.c};`
      : s === "today" ? `background:transparent;border:2px solid ${a.c};` : `background:transparent;border:2px solid #D5DEE5;`;
    return `<td align="center" valign="top">
      <div style="width:22px;height:22px;border-radius:13px;${style}margin:0 auto;font-size:0;line-height:0;">&nbsp;</div>
      <div style="font:600 11px ${FONT};color:${s === "today" ? a.text : MUTED};margin-top:7px;">${s === "today" ? "vandaag" : WD[d.getUTCDay()]}</div></td>`;
  }).join("");
  return `<table ${TBL}><tr>${cells}</tr></table>`;
}

/** Afsluiter: groet links, de mascotte gluurt rechts over de lijn. */
function signoff(note: string): string {
  return `<table ${TBL}><tr><td class="pad" style="padding:40px 40px 0;">
    <table ${TBL}><tr>
      <td valign="bottom" style="padding-bottom:16px;">
        <div class="body" style="font:400 14px ${FONT};color:${BODY};line-height:1.6;">${note}</div>
        <div class="ink" style="font:700 14px ${FONT};color:${INK};margin-top:8px;">Tijmen, VUmed</div>
      </td>
      <td width="84" align="right" valign="bottom" style="line-height:0;font-size:0;">
        <img src="cid:${PEEK_CID}" width="76" height="42" alt="" style="display:block;border:0;width:76px;height:42px;">
      </td>
    </tr></table>
  </td></tr></table>
  <table ${TBL}><tr><td class="pad" style="padding:0 40px 28px;"><div class="line" style="border-top:1px solid ${LINE};font-size:0;line-height:0;">&nbsp;</div></td></tr></table>`;
}

function blockPanel(ctx: NonNullable<BlockCtx>, a: Accent, cta: string | null): string {
  const dagen = ctx.daysLeft === 1 ? "dag" : "dagen";
  return panel(`
    ${label(`Jaar ${ctx.year} · blok ${ctx.blockNr}`, `nog ${ctx.daysLeft} ${dagen}`)}
    <div class="ink" style="font:800 20px ${FONT};color:${INK};letter-spacing:-.3px;line-height:1.25;">${esc(ctx.subject)}</div>
    ${gap(14)}${bar(1 - ctx.daysLeft / ctx.daysTotal, a)}${gap(20)}
    ${stats([
      { big: String(ctx.totalQ), label: "vragen" },
      { big: String(ctx.nExams), label: "oude tentamens" },
      { big: String(ctx.daysLeft), label: `${dagen} te gaan` },
    ])}
    ${ctx.topics.length ? `${gap(22)}${label("Meest gevraagd")}${rows(ctx.topics.slice(0, 4).map(([t, n]) => [esc(t), `${n} vragen`]))}` : ""}
    ${cta ? `${btn(cta, ctx.examUrl)}<div class="muted" style="font:500 12px ${FONT};color:${MUTED};margin-top:10px;">Begint bij ${esc(ctx.examLabel)}</div>` : ""}
  `);
}

function unsubOf(c: Candidate, fnUrl: string): string {
  return `${fnUrl}?unsub=${c.unsub_token}`;
}

const REPLY_NOTE = "Vraag, fout in een vraag gezien of een idee?<br>Antwoord gewoon op deze mail, ik lees alles.";

// ---------- welkom ----------

export function welcomeEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const inner = body(`
    ${eyebrow("Welkom", BLUE)}
    ${h1(`Fijn dat je er bent, ${name}.`)}
    ${p("Je account staat klaar. Je oefent op VUmed met <b class=\"ink\" style=\"color:" + INK + ";\">echte oude tentamens van VU Geneeskunde</b>, met bij elke vraag uitleg waarom het goede antwoord goed is.")}
    ${ctx ? `${gap(28)}${blockPanel(ctx, BLUE, "Maak je eerste vraag")}` : btn("Begin met oefenen", `${SITE}/dashboard.html`)}
    ${gap(36)}${label("Zo haal je er het meeste uit")}
    ${numbered([
      ["Elke dag een paar vragen", "Tien vragen per dag is genoeg. Je reeks groeit, en mis je een dag, dan vangt een streak freeze je op."],
      ["Lees de uitleg bij je fouten", "Daar zit de winst: wat je hier fout doet, doe je op het tentamen goed."],
      ["Strijd mee in het weekklassement", "Elke maandag begint een nieuwe ronde met je jaargenoten."],
    ])}
    ${gap(28)}
    ${panel(`<table ${TBL}><tr>
      <td valign="middle"><div class="ink" style="font:700 15px ${FONT};color:${INK};">VUmed op je iPhone</div>
        <div class="body" style="font:400 13px ${FONT};color:${BODY};margin-top:2px;">Oefen tussen colleges door, met hetzelfde account.</div></td>
      <td align="right" valign="middle" style="white-space:nowrap;padding-left:12px;"><a href="${APP_STORE}" style="font:700 14px ${FONT};color:${BRAND};text-decoration:none;">Download&nbsp;&rarr;</a></td>
    </tr></table>`, "16px 20px")}
  `) + signoff(REPLY_NOTE);
  return {
    subject: ctx ? `Welkom bij VUmed, je eerste ${ctx.subject}-vraag staat klaar` : `Welkom bij VUmed, ${c.display_name}`,
    html: shell(inner, ctx
      ? `${ctx.totalQ} vragen uit ${ctx.nExams} oude tentamens ${ctx.subject} staan voor je klaar.`
      : "Je account staat klaar. Begin met je eerste oude tentamen.", unsubOf(c, fnUrl), BLUE, "Account aangemaakt"),
  };
}

// ---------- we missen je ----------

export function winbackEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const name = esc(c.display_name);
  const today = nlToday();
  const streak = c.login_streak || 0;
  const urgent = !!ctx && ctx.daysLeft <= 14;
  const lastActive = addDays(today, -7);
  let subject: string, title: string, preheader: string, intro: string, a: Accent, eb: string;
  if (urgent) {
    const d = ctx!.daysLeft === 1 ? "1 dag" : `${ctx!.daysLeft} dagen`;
    a = ORANGE; eb = `Nog ${d} in dit blok`;
    subject = `${ctx!.subject} eindigt over ${d}`;
    title = `${name}, het blok is bijna voorbij.`;
    preheader = `Nog ${d} in dit blok. Met 10 minuten per dag haal je nog veel in.`;
    intro = `Je hebt een week niet geoefend en ${esc(ctx!.subject)} eindigt over ${d}. Goed nieuws: met tien minuten per dag haal je nog veel in.`;
  } else if (streak >= 3) {
    a = SLATE; eb = "Reeks verloren";
    subject = `Je reeks van ${streak} dagen is verloren`;
    title = `Je reeks van ${streak} dagen is weg.`;
    preheader = "Vandaag begin je gewoon een nieuwe. Eén sessie is genoeg.";
    intro = `Een week geen vraag geoefend, en daarmee is je reeks van ${streak} dagen verlopen. Geen ramp: vandaag begin je een nieuwe.`;
  } else {
    a = SLATE; eb = "Een week stil";
    subject = "Het is stil zonder jou op VUmed";
    title = `Het is stil zonder jou, ${name}.`;
    preheader = "Eén sessie van 10 minuten en je zit er weer in.";
    intro = "Je hebt een week geen vraag geoefend. Geen stress, je zit er zo weer in: één sessie van tien minuten is genoeg.";
  }
  const week = dots([0, 1, 2, 3, 4, 5, 6].map((i) => ({ d: addDays(lastActive, i), s: (i === 0 ? "done" : "miss") as DayState })), a);
  const cta = ctx ? ctx.examUrl : `${SITE}/dashboard.html`;
  const inner = body(`
    ${eyebrow(eb, a)}
    ${h1(title)}
    ${p(intro)}
    ${gap(28)}
    ${panel(`${label("Jouw afgelopen week", `laatst: ${WD[lastActive.getUTCDay()]} ${fmtDate(lastActive)}`)}${gap(4)}${week}`)}
    ${ctx ? `${gap(14)}${blockPanel(ctx, a, null)}` : ""}
    ${gap(36)}${label("Plan voor vandaag", "± 10 min")}
    ${numbered([
      [ctx ? `Open ${esc(ctx.subject)}` : "Open je dashboard", ctx ? `Begin met ${esc(ctx.examLabel)}.` : "Kies het vak van je huidige blok."],
      ["Maak tien vragen", "Niet te lang nadenken. Gokken mag, daar leer je ook van."],
      ["Lees de uitleg bij je fouten", "Daar zit de winst."],
    ])}
    ${btn("Oké, tien minuten dan", cta)}
    ${link2("Liever een ander vak", `${SITE}/dashboard.html`)}
  `) + signoff("Je vragen staan nog precies waar je gebleven was.");
  return { subject, html: shell(inner, preheader, unsubOf(c, fnUrl), a, "7 dagen niet geoefend") };
}

// ---------- reeks in gevaar ----------

/** Uren tot middernacht (NL-tijd), afgerond naar boven. Statisch: Apple cachet afbeeldingen, dus geen live klok. */
function hoursToMidnight(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Amsterdam", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(now);
  const h = Number(parts.find((x) => x.type === "hour")?.value || 0);
  const m = Number(parts.find((x) => x.type === "minute")?.value || 0);
  return Math.max(1, Math.ceil(24 - h - m / 60));
}

export function streakSaverEmail(c: Candidate, ctx: BlockCtx, fnUrl: string, _supabaseUrl?: string): Mail {
  const n = c.login_streak;
  const dag = n === 1 ? "dag" : "dagen";
  const today = nlToday();
  const hrs = hoursToMidnight();
  const week = dots([6, 5, 4, 3, 2, 1, 0].map((k) => ({ d: addDays(today, -k), s: (k === 0 ? "today" : k <= n ? "done" : "miss") as DayState })), ORANGE);
  const inner = body(`
    ${eyebrow("Reeks in gevaar", ORANGE)}
    <div class="big" style="font:800 68px ${FONT};color:${ORANGE.c};letter-spacing:-2px;line-height:1;margin-top:18px;">${n}</div>
    <div class="muted" style="font:600 14px ${FONT};color:${MUTED};margin-top:4px;">${dag} op rij</div>
    ${h1(`Je reeks verloopt vanavond, ${esc(c.display_name)}.`)}
    ${p(`Je hebt vandaag nog niet geoefend. Om middernacht is je reeks van ${n} ${dag} weg. Eén korte sessie is genoeg om hem te redden.`)}
    ${gap(28)}
    ${panel(`${label("Deze week", `nog ± ${hrs} uur`)}${gap(4)}${week}
      ${c.streak_freezes > 0 ? `${gap(18)}<div class="line" style="border-top:1px solid ${LINE};padding-top:14px;font:400 13px ${FONT};color:${BODY};" ><span class="body" style="color:${BODY};">Je hebt nog <b class="ink" style="color:${INK};">${c.streak_freezes} streak freeze${c.streak_freezes === 1 ? "" : "s"}</b> als vangnet, maar zelf oefenen levert ook XP op.</span></div>` : ""}`)}
    ${btn("Red mijn reeks", ctx ? ctx.examUrl : `${SITE}/dashboard.html`)}
    ${ctx ? `<div class="muted" style="font:500 12px ${FONT};color:${MUTED};margin-top:10px;">Gaat direct naar ${esc(ctx.subject)}, ${esc(ctx.examLabel)}</div>` : ""}
    ${link2("Naar mijn dashboard", `${SITE}/dashboard.html`)}
  `) + signoff("Tien vragen en je bent klaar voor vandaag.");
  return {
    subject: `Je reeks van ${n} ${dag} verloopt vanavond`,
    html: shell(inner, `Nog even oefenen vandaag en je reeks van ${n} ${dag} blijft staan.`, unsubOf(c, fnUrl), ORANGE, "Vandaag"),
  };
}

// ---------- weekoverzicht ----------

export function weekrecapEmail(c: Candidate, ctx: BlockCtx, fnUrl: string): Mail {
  const xp = c.xp_week ?? 0;
  const rank = c.lb_rank ?? 0;
  const goal = Math.max(100, Math.ceil((xp * 1.1) / 50) * 50);
  const week = isoWeek(nlToday());
  const rankText = rank === 1
    ? "Je staat bovenaan. Iedereen jaagt deze week op jouw plek."
    : `Nog ${rank - 1} ${rank - 1 === 1 ? "plek" : "plekken"} tot de eerste plaats. Een nieuwe week, nieuwe kansen.`;
  const inner = body(`
    ${eyebrow(`Weekoverzicht · week ${week}`, GREEN)}
    ${h1(`Goed bezig, ${esc(c.display_name)}.`)}
    ${p(rankText)}
    ${gap(28)}
    ${panel(stats([
      { big: String(xp), label: "XP deze week", color: GREEN.text },
      { big: "#" + rank, label: "in het klassement" },
      { big: String(c.login_streak), label: "dagen reeks" },
    ]), "22px 24px")}
    ${gap(14)}
    ${panel(`${label("Doel volgende week", `${goal} XP`)}${bar(0, GREEN)}
      <div class="muted" style="font:500 12px ${FONT};color:${MUTED};margin-top:10px;">10% meer dan deze week</div>`)}
    ${ctx ? `${gap(14)}${blockPanel(ctx, GREEN, null)}` : ""}
    ${btn("Bekijk het klassement", `${SITE}/voortgang.html`)}
    ${link2("Verder oefenen", ctx ? ctx.examUrl : `${SITE}/dashboard.html`)}
  `) + signoff("Op naar een sterke nieuwe week.");
  return {
    subject: `Jouw week: ${xp} XP en plek ${rank} in het klassement`,
    html: shell(inner, `Je haalde deze week ${xp} XP en staat op plek ${rank}. Doel voor volgende week: ${goal} XP.`, unsubOf(c, fnUrl), GREEN, `Week ${week}`),
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
  const lab = (i: number) => meta.ranks ? meta.ranks[i] : `${meta.tiers[i]} ${meta.unit}`;
  const line = meta.ranks
    ? `Je bent gepromoveerd tot ${esc(meta.ranks[tier] || "")}.`
    : `Je hebt ${meta.tiers[tier]} ${esc(meta.unit)} gehaald, goed voor niveau ${tier + 1}.`;
  const levels = meta.tiers.map((_, i) => {
    const s = i < tier ? "done" : i === tier ? "now" : "todo";
    const style = s === "todo" ? `border:2px solid #D5DEE5;color:${MUTED};` : s === "now" ? `background:${PURPLE.c};border:2px solid ${PURPLE.c};color:#fff;` : `background:${PURPLE.soft};border:2px solid ${PURPLE.soft};color:${PURPLE.text};`;
    return `<td align="center" valign="top">
      <div style="width:30px;height:30px;border-radius:17px;${style}margin:0 auto;font:700 13px/30px ${FONT};text-align:center;">${i + 1}</div>
      <div style="font:600 11px ${FONT};color:${s === "now" ? PURPLE.text : MUTED};margin-top:7px;line-height:1.3;">${esc(lab(i))}</div></td>`;
  }).join("");
  const next = tier + 1 < meta.tiers.length ? `Volgende niveau: ${lab(tier + 1)}` : "Dit is het hoogste niveau.";
  const inner = body(`
    ${eyebrow("Nieuwe prestatie", PURPLE)}
    ${h1(esc(meta.name))}
    ${p(`Gefeliciteerd, ${esc(c.display_name)}. ${line} De badge staat vanaf nu op je profiel.`)}
    ${gap(28)}
    ${panel(`${label("Niveaus", `${tier + 1} van ${meta.tiers.length}`)}${gap(4)}<table ${TBL}><tr>${levels}</tr></table>
      ${gap(18)}<div class="line" style="border-top:1px solid ${LINE};padding-top:14px;"><span class="body" style="font:500 13px ${FONT};color:${BODY};">${esc(next)}</span></div>`)}
    ${btn("Bekijk je prestaties", `${SITE}/profile.html`)}
    ${link2("Verder oefenen", `${SITE}/dashboard.html`)}
  `) + signoff("Knap werk. Op naar de volgende.");
  return {
    subject: `Nieuwe prestatie: ${meta.name}`,
    html: shell(inner, `Je hebt de badge ${meta.name} verdiend. ${next}`, unsubOf(c, fnUrl), PURPLE, `Niveau ${tier + 1}`),
  };
}

// ---------- losse mailing ----------

export function customEmail(c: Candidate, fnUrl: string, subject: string, title: string, message: string, ctaLabel: string, ctaUrl: string): Mail {
  const paras = message.split(/\n\s*\n/).map((x) => p(esc(x.trim()).replace(/\n/g, "<br>"))).join("");
  const inner = body(`
    ${eyebrow("Nieuws", BLUE)}
    ${h1(esc(title))}${paras}${ctaLabel && ctaUrl ? btn(ctaLabel, ctaUrl) : ""}
  `) + signoff(REPLY_NOTE);
  return { subject, html: shell(inner, message.slice(0, 120), unsubOf(c, fnUrl), BLUE, "VUmed") };
}
