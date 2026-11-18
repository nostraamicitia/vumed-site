// Lokale preview van de mails: node supabase/functions/email-sender/preview.mjs <outdir> [YYYY-MM-DD]
// Schrijft <type>.html voor elke variant, met de echte blokkalender uit de repo.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import * as T from "./templates.ts";

const root = new URL("../../../", import.meta.url);
const cal = JSON.parse(readFileSync(new URL("blockcalendar.json", root), "utf8"));
const idx = JSON.parse(readFileSync(new URL("subject_index.json", root), "utf8"));
const out = process.argv[2] || "./mail-preview";
const today = process.argv[3] ? new Date(process.argv[3] + "T00:00:00Z") : T.nlToday();
mkdirSync(out, { recursive: true });

const base = {
  user_id: "preview", email: "student@vumed.nl", display_name: "Sanne", login_streak: 6, streak_freezes: 2,
  unsub_token: "00000000-0000-0000-0000-000000000000", xp_week: 340, lb_rank: 3, badge_key: "anatoom", badge_tier: 2, study_year: 1,
};
const FN = "https://example.supabase.co/functions/v1/email-sender";
const SB = "https://dxhawldqluihhvfeswlc.supabase.co";
const ctx = T.blockContext(cal, idx, 1, today);
const far = ctx && { ...ctx, daysLeft: 23 };

const variants = {
  welcome: T.welcomeEmail(base, ctx, FN),
  welcome_geen_blok: T.welcomeEmail({ ...base, study_year: null }, null, FN),
  winback_tentamen: T.winbackEmail(base, ctx, FN),
  winback_reeks: T.winbackEmail(base, far, FN),
  winback_geen_reeks: T.winbackEmail({ ...base, login_streak: 1 }, far, FN),
  streak_saver: T.streakSaverEmail(base, ctx, FN, SB),
  weekrecap: T.weekrecapEmail(base, ctx, FN),
  badge: T.badgeEmail(base, ctx, FN),
  custom: T.customEmail(base, FN, "Nieuw op VUmed", "Nieuw: hartjes terugverdienen", "Elke 5 vragen goed op rij levert je een hartje op.\n\nProbeer het meteen uit bij je volgende oefensessie.", "Probeer het", "https://vumed.nl/dashboard.html"),
};
for (const [k, m] of Object.entries(variants)) {
  writeFileSync(`${out}/${k}.html`, T.previewHtml(m.html));
  console.log(k.padEnd(20), "|", m.subject);
}
console.log("blok:", JSON.stringify(ctx));
