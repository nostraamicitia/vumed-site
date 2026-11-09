// admin-weekstats — wekelijkse statistiekenmail voor de beheerder (niet voor studenten).
//
// POST {live?: boolean, preview?: boolean}
//   auth: service_role key óf Vault-cronsleutel (check_email_cron_key), net als email-sender.
//   preview=true  → geeft alleen {subject, html} terug, niets verstuurd.
//   live=true     → verstuurt via Resend naar ADMIN_TO.
// Cijfers komen uit RPC get_admin_weekly_stats() (alleen service_role mag die aanroepen).

const RESEND_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const FROM = "VUmed Stats <hallo@mail.vumed.nl>";
const ADMIN_TO = "tijekorteweg@icloud.com";
const SITE = "https://vumed.nl";
const FONT = "'Nunito','Trebuchet MS',Arial,sans-serif";

type Day = { day: string; users: number; answered: number };
type Stats = {
  period_start: string; generated_at: string;
  total_users: number; new_users: number; new_users_prev: number;
  active_users: number; active_users_prev: number; active_30d: number;
  answered: number; answered_prev: number; correct: number; correct_prev: number;
  saved_questions: number; question_reports: number; open_reports: number;
  new_friendships: number; push_devices: number; emails_sent: number;
  streak_3plus: number; longest_streak: number;
  daily: Day[];
  top_exams: { exam_key: string; answered: number; users: number }[];
  top_users: { name: string; answered: number; pct: number | null; streak: number | null }[];
  study_years: { year: string; users: number }[];
};

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

async function isPrivileged(token: string): Promise<boolean> {
  if (!token) return false;
  if (token === SERVICE_KEY) return true;
  try {
    const r = await rest("rpc/check_email_cron_key", { method: "POST", body: JSON.stringify({ p_key: token }) });
    return r.ok && (await r.json()) === true;
  } catch {
    return false;
  }
}

function esc(s: string): string {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const nl = (n: number) => n.toLocaleString("nl-NL");

function examName(key: string): string {
  const m = key.match(/^(.*?)_(\d{4})_(\d{4})_(.+)$/);
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  if (!m) return cap(key.replace(/_/g, " "));
  return `${cap(m[1].replace(/_/g, " "))} · ${m[2]}-${m[3]} · ${m[4].replace(/_/g, " ")}`;
}

function delta(cur: number, prev: number): string {
  if (prev === 0 && cur === 0) return `<span style="color:#8FA8BC;">±0 t.o.v. vorige week</span>`;
  if (prev === 0) return `<span style="color:#58A700;">nieuw t.o.v. vorige week</span>`;
  const pct = Math.round(((cur - prev) / prev) * 100);
  const up = pct >= 0;
  return `<span style="color:${up ? "#58A700" : "#E5484D"};">${up ? "▲" : "▼"} ${Math.abs(pct)}%</span>
    <span style="color:#8FA8BC;"> vs ${nl(prev)}</span>`;
}

function tile(label: string, big: string, sub: string, color: string): string {
  return `<td width="50%" style="padding:6px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F9FC;border-radius:14px;border-top:4px solid ${color};">
      <tr><td style="padding:14px 16px;">
        <div style="font:800 11px ${FONT};color:#8FA8BC;letter-spacing:1px;">${label}</div>
        <div style="font:800 30px ${FONT};color:#1C3144;line-height:1.15;margin-top:4px;">${big}</div>
        <div style="font:600 12px ${FONT};margin-top:4px;">${sub}</div>
      </td></tr>
    </table></td>`;
}

function dailyChart(daily: Day[]): string {
  const max = Math.max(1, ...daily.map((d) => d.users));
  const H = 90;
  const wd = ["zo", "ma", "di", "wo", "do", "vr", "za"];
  const cols = daily.map((d) => {
    const h = Math.max(3, Math.round((d.users / max) * H));
    const dow = wd[new Date(d.day + "T12:00:00Z").getUTCDay()];
    return `<td valign="bottom" align="center" style="padding:0 4px;">
      <div style="font:800 12px ${FONT};color:#1C3144;margin-bottom:4px;">${d.users}</div>
      <div style="width:100%;max-width:44px;height:${h}px;background:#1CB0F6;border-radius:6px 6px 2px 2px;"></div>
      <div style="font:700 11px ${FONT};color:#8FA8BC;margin-top:6px;">${dow}</div>
      <div style="font:400 10px ${FONT};color:#B4C6D4;">${nl(d.answered)} vr</div>
    </td>`;
  }).join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="height:${H + 60}px;"><tr>${cols}</tr></table>`;
}

function section(title: string, body: string): string {
  return `<tr><td style="padding:26px 0 0;">
    <div style="font:800 15px ${FONT};color:#1C3144;margin:0 6px 10px;">${title}</div>
    ${body}
  </td></tr>`;
}

function listRows(rows: string[][], widths: string[]): string {
  if (!rows.length) return `<div style="font:400 14px ${FONT};color:#8FA8BC;margin:0 6px;">Nog geen data deze week.</div>`;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${
    rows.map((r, i) => `<tr style="background:${i % 2 ? "#ffffff" : "#F5F9FC"};">${
      r.map((c, j) => `<td width="${widths[j]}" style="padding:9px 10px;font:${j === 0 ? 800 : 600} 13px ${FONT};color:${j === 0 ? "#1CB0F6" : "#3C5A73"};${j > 1 ? "text-align:right;" : ""}">${c}</td>`).join("")
    }</tr>`).join("")
  }</table>`;
}

function render(s: Stats): { subject: string; html: string } {
  const pct = s.answered ? Math.round((100 * s.correct) / s.answered) : 0;
  const pctPrev = s.answered_prev ? Math.round((100 * s.correct_prev) / s.answered_prev) : 0;
  const fmtD = (iso: string) => new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short", timeZone: "Europe/Amsterdam" });
  const period = `${fmtD(s.period_start)} – ${fmtD(s.generated_at)}`;
  const avg = s.active_users ? Math.round(s.answered / s.active_users) : 0;

  const exams = listRows(
    s.top_exams.map((e, i) => [`${i + 1}`, esc(examName(e.exam_key)), `${nl(e.answered)} vr`, `${e.users} ${e.users === 1 ? "student" : "studenten"}`]),
    ["8%", "52%", "18%", "22%"],
  );
  const users = listRows(
    s.top_users.map((u, i) => [`${i + 1}`, esc(u.name), `${nl(u.answered)} vr`, u.pct == null ? "–" : `${u.pct}% goed`]),
    ["8%", "52%", "18%", "22%"],
  );
  const years = s.study_years.map((y) => `<b>${y.year === "?" ? "onbekend" : "jaar " + y.year}</b>: ${y.users}`).join(" &nbsp;·&nbsp; ");

  const extra = (label: string, val: string) =>
    `<tr><td style="padding:7px 6px;font:600 14px ${FONT};color:#5C7A92;">${label}</td>
     <td style="padding:7px 6px;font:800 14px ${FONT};color:#1C3144;text-align:right;">${val}</td></tr>`;

  const inner = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding-bottom:6px;">
      <div style="font:800 13px ${FONT};color:#1CB0F6;letter-spacing:1.5px;">WEEKOVERZICHT</div>
      <div style="font:800 26px ${FONT};color:#1C3144;margin-top:4px;">VUmed in cijfers</div>
      <div style="font:400 14px ${FONT};color:#8FA8BC;margin-top:4px;">${period}</div>
    </td></tr>
    <tr><td style="padding-top:18px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          ${tile("ACTIEVE STUDENTEN", nl(s.active_users), delta(s.active_users, s.active_users_prev), "#1CB0F6")}
          ${tile("NIEUWE ACCOUNTS", nl(s.new_users), delta(s.new_users, s.new_users_prev), "#58CC02")}
        </tr><tr>
          ${tile("VRAGEN BEANTWOORD", nl(s.answered), delta(s.answered, s.answered_prev), "#FF9600")}
          ${tile("GOED BEANTWOORD", pct + "%", `<span style="color:#8FA8BC;">vorige week ${pctPrev}%</span>`, "#CE82FF")}
        </tr>
      </table>
    </td></tr>
    <tr><td style="padding:14px 6px 0;font:400 14px ${FONT};color:#5C7A92;line-height:1.6;">
      In totaal <b>${nl(s.total_users)}</b> accounts, waarvan <b>${nl(s.active_30d)}</b> actief in de laatste 30 dagen.
      Een actieve student beantwoordde deze week gemiddeld <b>${nl(avg)}</b> vragen.
    </td></tr>
    ${section("Actieve studenten per dag", dailyChart(s.daily))}
    ${section("Populairste tentamens", exams)}
    ${section("Meest actieve studenten", users)}
    ${section("Verder deze week", `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${extra("Actief per studiejaar", years || "–")}
      ${extra("Studenten met reeks van 3+ dagen", nl(s.streak_3plus))}
      ${extra("Langste lopende reeks", `${s.longest_streak} dagen`)}
      ${extra("Vragen opgeslagen", nl(s.saved_questions))}
      ${extra("Nieuwe vriendschappen", nl(s.new_friendships))}
      ${extra("Vraag-meldingen (nieuw / open)", `${s.question_reports} / ${s.open_reports}`)}
      ${extra("Studentenmails verstuurd", nl(s.emails_sent))}
      ${extra("Studenten met pushmeldingen", nl(s.push_devices))}
    </table>`)}
    <tr><td align="center" style="padding-top:26px;">
      <a href="${SITE}/admin.html" style="display:inline-block;background:#1CB0F6;border-radius:14px;padding:13px 30px;font:800 15px ${FONT};color:#fff;text-decoration:none;">Open admin</a>
    </td></tr>
  </table>`;

  const html = `<html><body style="margin:0;padding:0;background:#EDF4FA;">
<div style="display:none;max-height:0;overflow:hidden;">${s.active_users} actieve studenten, ${s.new_users} nieuwe accounts, ${s.answered} vragen beantwoord.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDF4FA;"><tr><td align="center" style="padding:28px 10px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">
  <tr><td align="center" style="padding:0 0 16px;"><span style="font:800 26px ${FONT};color:#1CB0F6;">VUmed</span></td></tr>
  <tr><td style="background:#fff;border-radius:20px;padding:30px 22px;">${inner}</td></tr>
  <tr><td align="center" style="padding:16px;font:400 12px ${FONT};color:#8FA8BC;">Automatisch weekoverzicht · alleen voor beheer</td></tr>
</table></td></tr></table></body></html>`;

  return {
    subject: `VUmed week: ${s.active_users} actief, +${s.new_users} nieuw, ${nl(s.answered)} vragen 📊`,
    html,
  };
}

Deno.serve(async (req) => {
  const json = (o: unknown, status = 200) =>
    new Response(JSON.stringify(o, null, 1), { status, headers: { "Content-Type": "application/json" } });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!(await isPrivileged(bearer))) return json({ error: "unauthorized" }, 401);

  let body: { live?: boolean; preview?: boolean } = {};
  try { body = await req.json(); } catch { /* lege body = dry-run */ }

  const r = await rest("rpc/get_admin_weekly_stats", { method: "POST", body: "{}" });
  if (!r.ok) return json({ error: "stats failed: " + (await r.text()) }, 500);
  const stats: Stats = await r.json();
  const { subject, html } = render(stats);

  if (body.preview) return json({ subject, html });
  if (!body.live) return json({ dry_run: true, subject, to: ADMIN_TO });
  if (!RESEND_KEY) return json({ error: "RESEND_API_KEY ontbreekt" }, 503);

  const s = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + RESEND_KEY },
    body: JSON.stringify({ from: FROM, to: [ADMIN_TO], subject, html }),
  });
  if (!s.ok) return json({ sent: false, error: `${s.status} ${await s.text()}` }, 502);
  return json({ sent: true, subject, to: ADMIN_TO });
});
