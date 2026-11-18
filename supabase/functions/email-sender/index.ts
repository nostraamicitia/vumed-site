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
// Templates staan in templates.ts (lokaal te previewen met preview.mjs).
// Welkom/winback gebruiken het huidige blok van de student (study_year + blockcalendar.json).

import {
  type BlockCtx, type Candidate, type Mail, SITE,
  badgeEmail, blockContext, customEmail, nlToday, streakSaverEmail, weekrecapEmail, welcomeEmail, winbackEmail,
} from "./templates.ts";

const RESEND_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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

const PREVIEW_SAMPLE: Candidate = {
  user_id: "preview",
  email: "student@vumed.nl",
  display_name: "Student",
  login_streak: 6,
  streak_freezes: 2,
  unsub_token: "00000000-0000-0000-0000-000000000000",
  xp_week: 340,
  lb_rank: 3,
  badge_key: "anatoom",
  badge_tier: 2,
  study_year: 1,
};

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

// ---------- blokcontext (studiejaar → huidig vak) ----------

type CalData = { cal: Parameters<typeof blockContext>[0]; idx: Parameters<typeof blockContext>[1] };
let calCache: Promise<CalData | null> | null = null;
function loadCal(): Promise<CalData | null> {
  if (!calCache) {
    calCache = (async () => {
      try {
        const [c, i] = await Promise.all([
          fetch(`${SITE}/blockcalendar.json`).then((r) => r.json()),
          fetch(`${SITE}/subject_index.json`).then((r) => r.json()),
        ]);
        return { cal: c, idx: i };
      } catch {
        return null; // mails werken ook zonder blokinfo (generieke variant)
      }
    })();
  }
  return calCache;
}

/** Vult study_year aan (de RPC levert die niet) — één query voor de hele batch. */
async function attachStudyYear(cands: Candidate[]): Promise<void> {
  if (!cands.length) return;
  const ids = cands.map((c) => c.user_id).filter((id) => /^[0-9a-f-]{36}$/i.test(id));
  if (!ids.length) return;
  try {
    const r = await rest(`user_profiles?select=user_id,study_year&user_id=in.(${ids.join(",")})`);
    if (!r.ok) return;
    const map = new Map<string, number | null>(
      ((await r.json()) as { user_id: string; study_year: number | null }[]).map((x) => [x.user_id, x.study_year]),
    );
    for (const c of cands) c.study_year = map.get(c.user_id) ?? null;
  } catch {
    // zonder studiejaar → generieke variant
  }
}

async function ctxFor(c: Candidate): Promise<BlockCtx> {
  const d = await loadCal();
  return d ? blockContext(d.cal, d.idx, c.study_year, nlToday()) : null;
}

type Renderer = (c: Candidate, ctx: BlockCtx) => Mail;
const TEMPLATES: Record<string, Renderer> = {
  streak_saver: (c, ctx) => streakSaverEmail(c, ctx, FN_URL, SUPABASE_URL),
  weekrecap: (c, ctx) => weekrecapEmail(c, ctx, FN_URL),
  winback: (c, ctx) => winbackEmail(c, ctx, FN_URL),
  badge: (c, ctx) => badgeEmail(c, ctx, FN_URL),
  welcome: (c, ctx) => welcomeEmail(c, ctx, FN_URL),
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
    ? `<h1 style="margin:0 0 10px;font-size:22px;color:#1C3144;">Je bent afgemeld</h1>
       <p>Je krijgt geen herinnerings- en overzichtsmails meer van VUmed.<br>
       Mails over je account zelf (zoals wachtwoord-reset) blijven gewoon werken.</p>`
    : `<h1 style="margin:0 0 10px;font-size:22px;color:#1C3144;">Link niet geldig</h1>
       <p>Deze afmeldlink is niet (meer) geldig. Mail gerust naar ${REPLY_TO} als je toch afgemeld wilt worden.</p>`;
  const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>VUmed</title></head>
<body style="margin:0;background:#EDF4FA;font-family:'Nunito','Trebuchet MS',Arial,sans-serif;">
<div style="max-width:460px;margin:80px auto;background:#fff;border-radius:20px;padding:36px 32px;text-align:center;color:#5C7A92;font-size:15px;line-height:1.6;">
<div style="font-weight:800;font-size:24px;color:#1CB0F6;margin-bottom:18px;">VUmed</div>
${body}
<p style="margin-top:24px;"><a href="${SITE}" style="color:#1CB0F6;font-weight:800;text-decoration:none;">Terug naar VUmed</a></p>
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
      out.block_calendar = (await loadCal()) ? "ok" : "niet geladen";
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

  let render: Renderer;
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
    render = (c) => customEmail(c, FN_URL, subject, title, message, ctaLabel, ctaUrl);
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
    const p = render(PREVIEW_SAMPLE, await ctxFor(PREVIEW_SAMPLE));
    return json({ preview: true, subject: p.subject, html: p.html });
  }

  if (live && !RESEND_KEY) return json({ error: "RESEND_API_KEY secret ontbreekt" }, 503);

  let cands = await getCands();
  if (body.only_user) cands = cands.filter((c) => c.user_id === body.only_user);
  await attachStudyYear(cands);

  const results: { user_id: string; email: string; badge?: string | null; block?: string | null; sent: boolean; err?: string }[] = [];
  const sentRows: { user_id: string; email_type: string; dry_run: boolean }[] = [];

  for (const c of cands) {
    const ctx = await ctxFor(c);
    const { subject, html } = render(c, ctx);
    if (!live) {
      results.push({ user_id: c.user_id, email: maskEmail(c.email), badge: c.badge_key, block: ctx?.subject ?? null, sent: false });
      sentRows.push({ user_id: c.user_id, email_type: logType(c), dry_run: true });
      continue;
    }
    const r = await sendResend(c.email, subject, html, `${FN_URL}?unsub=${c.unsub_token}`);
    results.push({ user_id: c.user_id, email: maskEmail(c.email), badge: c.badge_key, block: ctx?.subject ?? null, sent: r.ok, err: r.err });
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
