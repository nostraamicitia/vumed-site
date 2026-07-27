/* ============================================================================
 * progressdots.js — "dot-per-question" progress bar for VUmed exam pages.
 *
 * Layers on top of the existing #streak-wrap / .streak-bar-bg / #streak-fill
 * markup that gen_exams.py emits. Zero changes to the exam's own scripts:
 *  - On load: one circle per question pops in with a staggered animation,
 *    the circles linger a beat, then meld together into the normal bar.
 *  - Hover the bar: it separates back into the circles.
 *  - Click a circle: smooth-scroll to that question.
 *  - Each circle is coloured by its question's status
 *    (correct = green, wrong = red, answered = blue, open = grey).
 *
 * Self-contained classic script — load it AFTER the exam's inline script so it
 * can read the globals `state` / `SAVE_KEY` (both classic top-level bindings).
 * ==========================================================================*/
(function () {
  'use strict';

  /* Load the shared persistent stats bar (hearts/streak/coins/gems/XP) on every
     exam page. It self-mounts; the currency hooks below drive it. */
  (function loadStatsBar() {
    try {
      if (window.VUMED_STATS_OFF || window.VumedStats) return;
      if (document.querySelector('script[data-vumed-stats]')) return;
      var s = document.createElement('script');
      s.src = 'vumed_stats.js?v=20'; s.async = true; s.setAttribute('data-vumed-stats', '1');
      (document.head || document.documentElement).appendChild(s);
    } catch (e) {}
  })();

  var COLORS = {
    correct: '#58CC02',
    wrong:   '#FF3B30',
    answered:'#1CB0F6',
    empty:   '#E5E5EA'
  };

  /* Read the per-question answered map. Prefer the live `state`, fall back to
     localStorage so we stay correct even before/after Supabase restore. */
  function readAnswered() {
    try { if (typeof state !== 'undefined' && state && state.answered) return state.answered; } catch (e) {}
    try {
      if (typeof SAVE_KEY !== 'undefined') {
        var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
        if (s && s.answered) return s.answered;
      }
    } catch (e) {}
    return {};
  }

  /* ── Theme (light/dark) ───────────────────────────────────────────────────
     Exam pages share the site-wide theme: `vumed_theme` in localStorage +
     the `dark` class on <html>, styled by dark-theme.css. Most exam files
     don't link that stylesheet, so it is injected here — before our own
     style tag, so the newer dark overrides in injectLandingCss win ties. */
  function isDark() { return document.documentElement.classList.contains('dark'); }

  function setupTheme() {
    if (!document.querySelector('link[href^="dark-theme.css"]')) {
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'dark-theme.css?v=3';
      (document.head || document.documentElement).appendChild(l);
    }
    try {
      if (localStorage.getItem('vumed_theme') === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  }

  /* ── Landing entrance ─────────────────────────────────────────────────────
     On first load, reveal the question blocks one after another, and inside
     each block let its controls (question text, options, check button, …) rise
     in separately — a staggered "nice landing" cascade. Also restyles the
     fixed chat tab (white, grey border; blue fill only on hover). Injected synchronously so it
     applies before first paint (no flash); a failsafe force-reveals in case
     anything throws — the exam must never stay hidden. */
  function injectLandingCss() {
    if (document.getElementById('pd-landing-style')) return;
    var css =
      '@keyframes pdIn { from { opacity: 0; transform: translateY(13px); }' +
      '                  to   { opacity: 1; transform: none; } }' +
      'html.pd-anim .q-block { animation: none; opacity: 0; }' +
      'html.pd-anim .q-block.pd-shown { opacity: 1; }' +
      'html.pd-anim .q-block.pd-shown > * {' +
      '  animation: pdIn .5s cubic-bezier(.22,1,.36,1) both;' +
      '}' +
      /* chat tab: just the speech-bubble icon — no tab box, no shadow, no blue fill
         (Tijmen 2026-07-12). Grey by default, blue + slight grow on hover, chevron hidden. */
      '.chat-tab { background: transparent; border: none; box-shadow: none; color: #8E8E93; left: 6px; padding: 12px; transition: color .15s, transform .15s; }' +
      '.chat-tab:hover { background: transparent; color: #1CB0F6; box-shadow: none; padding-left: 12px; transform: translateY(-50%) scale(1.1); }' +
      '.chat-tab svg:nth-of-type(2) { display: none; }' +
      '.chat-tab svg:first-of-type { width: 22px; height: 22px; }' +
      /* AI chat + glossary side panels: floating white cards with rounded grey
         borders instead of the flush grey slabs (Tijmen 2026-07-12) */
      '.chat-panel, .g-panel { top: 60px; bottom: 12px; background: #fff;' +
      '  border: 1.5px solid #D1D1D6; border-radius: 20px;' +
      '  box-shadow: 0 8px 30px rgba(0,0,0,0.08); }' +
      '.chat-panel { left: 12px; overflow: hidden; transform: translateX(-120%); }' +
      '.g-panel { right: 12px; transform: translateX(120%); }' +
      '.chat-panel.open, .g-panel.open { transform: translateX(0); }' +
      'body.g-open .exam-main { margin-right: 384px; }' +
      'body.chat-open .exam-main { margin-left: 384px; }' +
      '.chat-panel-header { background: transparent; }' +
      '.chat-input-area { background: transparent; }' +
      '.chat-msg.ai { background: #fff; border: 1.5px solid #E5E5EA; box-shadow: none; }' +
      '.chat-close, .g-close { background: #fff; border: 1.5px solid #D1D1D6; }' +
      /* Mobile Safari auto-linkifies phone-number/date/address-shaped text (e.g. dosages,
         years) into blue tap-to-call links — desktop never does this, hence "grey on laptop,
         blue on phone" for the exact same option/definition text. Force it back to the
         surrounding grey. On plain web pages Safari emits bare tel: anchors WITHOUT the
         x-apple-data-detectors attribute, so match both; pointer-events:none lets the tap
         fall through to the answer button instead of opening the call prompt. */
      'a[x-apple-data-detectors], a[href^="tel:"], a[href^="x-apple-data-detectors"] { color: inherit !important; text-decoration: none !important; pointer-events: none; cursor: text !important; }' +
      /* Belt-and-braces for the same bug: iOS also linkifies dates/addresses with other
         schemes (calshow:, maps:, plain detector anchors). Exam question blocks never
         contain authored links (fleet-verified 2026-07-20: only anchor in exam HTMLs is
         a.back-btn, outside .q-block), so neutralize EVERY anchor inside them. */
      '.q-block a { color: inherit !important; text-decoration: none !important; pointer-events: none; cursor: text !important; }' +
      /* THE actual "blue text on phone" cause (2026-07-20): the option is a <button> with
         no explicit `color`. Desktop inherits the page grey; iOS Safari paints unstyled
         <button> text in the system tint (blue). Set the grey explicitly. This <style> is
         appended to <head> AFTER the exam file's inline CSS, so a plain `.opt-btn` rule
         wins the base state on equal specificity — while the file's higher-specificity
         :hover/.selected/.correct/.wrong states keep their own colours & backgrounds.
         Same pass: Tijmen wants the tinted-grey tiles white-filled, thicker-bordered and
         with a subtle 3D lip. NO !important (would clobber the state backgrounds). */
      '.opt-btn { color: #3C3C43; background: #fff;' +
      '  border-width: 2px; border-color: #E3E3E8;' +
      '  box-shadow: 0 3px 0 #E6E6EC; }' +
      '.opt-btn:hover:not(:disabled) { box-shadow: 0 4px 0 #CDE9FB; }' +
      '.opt-btn:active:not(:disabled) { box-shadow: 0 1px 0 #E6E6EC; transform: translateY(2px) scale(0.997); }' +
      '.opt-btn.selected { box-shadow: 0 3px 0 #B7E2FA; }' +
      '.opt-btn.correct { box-shadow: 0 3px 0 #BDE8A8; } .opt-btn.wrong { box-shadow: 0 3px 0 #F5C0BB; }' +
      'html.dark .opt-btn { color: #E6E6EA; background: #2C2C2E; border-color: #48484A; box-shadow: 0 3px 0 #1C1C1E; }' +
      /* glossary image: was full-bleed with hard edges — now an inset rounded card
         (Tijmen 2026-07-21). Shorthand `border` overrides the baked border-bottom. */
      '.g-img { width: calc(100% - 40px); margin: 0 20px 14px; border-radius: 14px;' +
      '  border: 1px solid rgba(60,60,67,0.10); }' +
      'html.dark .g-img { border-color: rgba(255,255,255,0.10); }' +
      /* Phone: the chat + glossary side panels were still using the desktop 45vw-capped
         card, which only fills part of the screen and squeezes .exam-main into a sliver
         via the 384px margin above — become full-screen pages instead (same recipe as the
         dashboard quest panel), with a swipeable drag handle (setupPanelSwipe). */
      /* Phone: the two side panels are near-full-screen INSET rounded cards (Tijmen
         2026-07-22 — "hard edges → smooth and round"). A small margin + big radius
         reads as an iOS sheet floating over the exam page (you glimpse it behind),
         and ties into the finger-following swipe-to-dismiss (setupPanelSwipe). The
         inset carries the safe-area so the card clears the notch; overflow:hidden
         clips the header/content to the rounded corners. */
      '@media (max-width:768px) {' +
      /* overflow-x:hidden clips to the rounded corners; overflow-y:auto keeps the
         glossary panel scrollable (the .g-panel IS its own scroll container, baked
         overflow-y:auto — a blanket overflow:hidden would kill it). */
      '  .chat-panel, .g-panel { top: calc(8px + env(safe-area-inset-top)); bottom: calc(8px + env(safe-area-inset-bottom));' +
      '    left: 8px; right: 8px; width: auto; max-width: none; overflow-x: hidden; overflow-y: auto;' +
      '    border: 1px solid #E3E3E8; border-radius: 24px;' +
      '    box-shadow: 0 12px 34px rgba(0,0,0,0.16); touch-action: pan-y; }' +
      '  .g-panel { transform: translateX(calc(100% + 12px)); }' +
      '  .chat-panel { transform: translateX(calc(-100% - 12px)); }' +
      '  .g-panel.open, .chat-panel.open { transform: translateX(0); }' +
      '  .g-panel.pd-dragging, .chat-panel.pd-dragging { transition: none !important; }' +
      '  html.dark .chat-panel, html.dark .g-panel { border-color: #48484A; box-shadow: 0 12px 34px rgba(0,0,0,0.5); }' +
      '  body.g-open .exam-main, body.chat-open .exam-main { margin: 0 !important; }' +
      '  .g-panel-header { padding-top: 24px; }' +
      '  .chat-panel-header { padding-top: 20px; }' +
      '  .chat-input-area { padding-bottom: 16px; }' +
      '  .g-panel::before, .chat-panel::before {' +
      '    content: ""; position: absolute; top: 9px; left: 50%;' +
      '    transform: translateX(-50%); width: 38px; height: 5px; border-radius: 99px;' +
      '    background: #D1D1D6; z-index: 2; }' +
      '  html.dark .g-panel::before, html.dark .chat-panel::before { background: #48484A; }' +
      /* Phone: keep inline invul-dropdowns + categorize-rows from overflowing the
         screen (Tijmen 2026-07-22 — same class of bug the pak-phone-fix solved, but
         the regular exams had no phone cap → long dd-select options pushed the page
         >393px wide = horizontal page-scroll/clip). max-width caps the select to its
         column; flex-wrap lets a wide select in a .cat-row drop below its label onto
         its own full-width line instead of shoving past the row. */
      '  .dd-select { max-width: 100%; }' +
      '  .cat-row { flex-wrap: wrap; }' +
      '}' +
      /* inline dropdowns: grey underline (no box), sitting in the text */
      '.dd-select {' +
      '  margin: 0 2px; padding: 0 17px 1px 3px;' +
      '  border: none; border-bottom: 1.5px solid #C7C7CC; border-radius: 0;' +
      '  font-size: 14px; font-weight: 600; color: #3C3C43;' +
      '  background-color: transparent; background-position: right 1px center;' +
      '}' +
      ".dd-select:not(.dd-correct):not(.dd-wrong) { background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M2.5 4.5L6 8L9.5 4.5' stroke='%238E8E93' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\"); }" +
      '.dd-select:hover { background-color: transparent; border-color: transparent; border-bottom-color: #8E8E93; }' +
      '.dd-select:focus { border-color: transparent; border-bottom-color: #8E8E93; }' +
      '.dd-select.dd-correct { background-color: transparent; border-color: transparent; border-bottom-color: #58CC02; }' +
      '.dd-select.dd-wrong { background-color: transparent; border-color: transparent; border-bottom-color: #FF3B30; }' +
      /* no grey fills in DND divs (Tijmen 2026-07-11): pool/labels/zones white; pool gets a
         visible dashed border instead of its grey bg. State classes (.dnd-over/.dnd-correct/
         .dnd-wrong/.dnd-filled) have higher specificity so they still win unchanged. */
      '.dnd-pool { background: #fff; border: 2px dashed #D1D1D6; }' +
      '.dnd-label { background: #fff; }' +
      '.dnd-zone { background: #fff; }' +
      /* answer options: solid WHITE fill (Tijmen 2026-07-20 — replaced the old 07-12
         white→grey diagonal gradient he found too tinted; border/shadow/3D-lip live in the
         redesign block above). Plain `.opt-btn` (0,1,0) — injected after the exam stylesheet
         so it beats the file's `background`, while :hover/.selected/.correct/.wrong keep
         higher specificity and still win unchanged. */
      '.opt-btn { background: #fff; }' +
      /* check button: same design language as .opt-btn (Tijmen 2026-07-21) — white fill,
         2px border, 3D lip. Baked hover/cb-correct fills (blue/green bg) stay; we recolour
         border + lip per state. Transition re-declared in full (baked list has no box-shadow;
         it also carries the max-height/padding/margin the cb-vanish collapse needs). */
      '.check-btn { background: #fff; border: 2px solid #E3E3E8; box-shadow: 0 3px 0 #E6E6EC;' +
      '  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease,' +
      '    box-shadow 0.15s ease, transform 0.14s ease, opacity 0.32s ease,' +
      '    max-height 0.34s ease, padding 0.34s ease, margin 0.34s ease; }' +
      '.check-btn:hover:not(:disabled) { border-color: #1CB0F6; box-shadow: 0 3px 0 #0E85B5; }' +
      '.check-btn:active:not(:disabled) { box-shadow: 0 1px 0 #0E85B5; transform: translateY(2px) scale(0.98); }' +
      '.check-btn.cb-correct { border-color: #58CC02; box-shadow: 0 3px 0 #46A302; }' +
      '.check-btn.cb-vanish { box-shadow: none; }' +
      /* themed dropdown menu (replaces the native macOS select popup) */
      '.pd-ddm {' +
      '  position: fixed; z-index: 10050; background: #fff;' +
      '  border: 1px solid #D1D1D6; border-radius: 12px;' +
      '  box-shadow: 0 10px 30px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06);' +
      '  padding: 5px; min-width: 130px; max-width: min(400px, calc(100vw - 24px));' +
      '  overflow-y: auto; overscroll-behavior: contain;' +
      '  opacity: 0; transform: scale(.96) translateY(-4px); transform-origin: top left;' +
      '  transition: opacity .13s ease, transform .16s cubic-bezier(.22,1,.36,1);' +
      '}' +
      '.pd-ddm.pd-up { transform-origin: bottom left; transform: scale(.96) translateY(4px); }' +
      '.pd-ddm.pd-open { opacity: 1; transform: none; }' +
      '.pd-ddm-opt {' +
      '  display: flex; align-items: flex-start; gap: 7px; width: 100%;' +
      '  text-align: left; background: none; border: none; border-radius: 8px;' +
      '  padding: 7px 10px 7px 8px; cursor: pointer;' +
      '  font-family: inherit; font-size: 14px; font-weight: 600; line-height: 1.4; color: #3C3C43;' +
      '}' +
      '.pd-ddm-opt:hover, .pd-ddm-opt.pd-hl { background: #EBF7FF; color: #1CB0F6; }' +
      '.pd-ddm-opt.pd-sel { color: #1CB0F6; font-weight: 700; }' +
      '.pd-ddm-check { flex: 0 0 14px; width: 14px; height: 14px; margin-top: 3px; }' +
      /* corner buttons: theme toggle (bottom-left) + question report (bottom-right) */
      '.pd-corner {' +
      '  position: fixed; bottom: 16px; width: 44px; height: 44px; border-radius: 50%;' +
      '  background: #fff; border: 1px solid #D1D1D6; color: #8E8E93;' +
      '  cursor: pointer; z-index: 420; padding: 0;' +
      '  display: flex; align-items: center; justify-content: center;' +
      '  box-shadow: 0 4px 14px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05);' +
      '  transition: color .15s ease, border-color .15s ease, background .2s ease,' +
      '              transform .25s cubic-bezier(.22,1,.36,1);' +
      '}' +
      '.pd-corner:hover { color: #1CB0F6; border-color: #1CB0F6; transform: translateY(-2px); }' +
      '.pd-corner svg { display: block; }' +
      '.pd-theme-btn { left: 16px; }' +
      '.pd-report-btn { right: 16px; }' +
      '.pd-report-btn.pd-on { background: #1CB0F6; border-color: #1CB0F6; color: #fff; }' +
      /* Phone (Tijmen 2026-07-21): bottom-left corner = AI-chat button instead of the
         theme toggle; the half-off-screen mid-left .chat-tab disappears. 16px input
         font stops the iOS focus-zoom. This block sits AFTER the .pd-corner base rules
         (a media query does not change cascade order — earlier phone block would lose). */
      '.pd-chatai-btn { left: 16px; display: none; }' +
      '@media (max-width:768px) {' +
      '  .chat-tab { display: none; }' +
      '  .pd-theme-btn { display: none; }' +
      '  .pd-chatai-btn { display: flex; }' +
      '  .pd-corner { bottom: calc(16px + env(safe-area-inset-bottom)); }' +
      '  body.chat-open .pd-corner, body.g-open .pd-corner { display: none; }' +
      '  .chat-input { font-size: 16px; }' +
      '}' +
      /* report mode: hover highlights the question under the cursor */
      'html.pd-rep .q-block { cursor: pointer; border-radius: 14px; }' +
      'html.pd-rep .q-block > * { pointer-events: none; }' +
      'html.pd-rep .q-block:hover { background: rgba(28,176,246,0.07) !important; box-shadow: inset 0 0 0 2px #1CB0F6 !important; }' +
      '.pd-rep-hint {' +
      '  position: fixed; top: 62px; left: 50%; z-index: 430; pointer-events: none;' +
      '  transform: translateX(-50%) translateY(-8px); opacity: 0;' +
      '  background: #1C1C1E; color: #fff; font-size: 13px; font-weight: 700;' +
      '  border-radius: 999px; padding: 9px 18px; white-space: nowrap;' +
      '  box-shadow: 0 6px 20px rgba(0,0,0,0.20);' +
      '  transition: opacity .2s ease, transform .3s cubic-bezier(.22,1,.36,1);' +
      '}' +
      '.pd-rep-hint.pd-open { opacity: 1; transform: translateX(-50%); }' +
      '.pd-rep-tip {' +
      '  position: fixed; z-index: 431; pointer-events: none; display: none;' +
      '  background: #1CB0F6; color: #fff; font-size: 12.5px; font-weight: 800;' +
      '  border-radius: 8px; padding: 5px 11px; white-space: nowrap;' +
      '  box-shadow: 0 4px 14px rgba(28,176,246,0.35);' +
      '}' +
      /* report modal */
      '.pd-rm-ov {' +
      '  position: fixed; inset: 0; background: rgba(0,0,0,0.42); z-index: 440;' +
      '  display: flex; align-items: center; justify-content: center;' +
      '  opacity: 0; transition: opacity .18s ease;' +
      '}' +
      '.pd-rm-ov.pd-open { opacity: 1; }' +
      '.pd-rm {' +
      '  background: #fff; border-radius: 18px; width: min(430px, calc(100vw - 40px));' +
      '  padding: 24px 24px 20px; box-shadow: 0 18px 50px rgba(0,0,0,0.25);' +
      '  transform: translateY(10px) scale(.97);' +
      '  transition: transform .22s cubic-bezier(.22,1,.36,1);' +
      '}' +
      '.pd-rm-ov.pd-open .pd-rm { transform: none; }' +
      '.pd-rm h3 { font-size: 18px; font-weight: 800; color: #1C1C1E; margin: 0 0 3px; display: flex; align-items: center; gap: 8px; }' +
      '.pd-rm h3 svg { flex: 0 0 auto; color: #1CB0F6; }' +
      '.pd-rm-sub { font-size: 12.5px; font-weight: 600; color: #8E8E93; margin-bottom: 14px; }' +
      '.pd-rm textarea {' +
      '  width: 100%; min-height: 110px; resize: vertical; box-sizing: border-box;' +
      '  border: 1.5px solid #D1D1D6; border-radius: 12px; padding: 11px 13px;' +
      '  font-family: inherit; font-size: 14px; font-weight: 600; line-height: 1.5;' +
      '  color: #1C1C1E; background: #fff; outline: none;' +
      '}' +
      '.pd-rm textarea:focus { border-color: #1CB0F6; }' +
      '.pd-rm-btns { display: flex; justify-content: flex-end; gap: 9px; margin-top: 14px; }' +
      '.pd-rm-btns button { border: none; border-radius: 11px; padding: 10px 18px; font-family: inherit; font-size: 13.5px; font-weight: 800; cursor: pointer; }' +
      '.pd-rm-cancel { background: #F2F2F7; color: #3C3C43; }' +
      '.pd-rm-cancel:hover { background: #E5E5EA; }' +
      '.pd-rm-send { background: #1CB0F6; color: #fff; }' +
      '.pd-rm-send:hover { background: #0A9EDC; }' +
      '.pd-rm-send:disabled { opacity: .5; cursor: default; }' +
      '.pd-rm-err { font-size: 12.5px; font-weight: 700; color: #FF3B30; margin-top: 9px; display: none; }' +
      '.pd-rm-done { text-align: center; padding: 12px 4px 6px; }' +
      '.pd-rm-done .pd-rm-check { margin: 0 auto 12px; width: 46px; height: 46px; border-radius: 50%; background: #58CC02; display: flex; align-items: center; justify-content: center; }' +
      '.pd-rm-done b { font-size: 16px; color: #1C1C1E; display: block; margin-bottom: 4px; }' +
      '.pd-rm-done span { font-size: 13px; font-weight: 600; color: #8E8E93; }' +
      /* dark theme: new widgets + gaps dark-theme.css predates (cards → separator-lines redesign) */
      'html.dark .q-block { background: transparent !important; box-shadow: none !important; border-bottom-color: #2C2C2E !important; }' +
      'html.dark .check-btn:not(.cb-correct) { background: #2C2C2E !important; color: #EBEBF0 !important; border-color: #48484A !important; box-shadow: 0 3px 0 #1C1C1E; }' +
      'html.dark .check-btn:hover:not(:disabled):not(.cb-correct) { background: #1CB0F6 !important; color: #fff !important; border-color: #1CB0F6 !important; box-shadow: 0 3px 0 #0E85B5; }' +
      'html.dark .check-btn:active:not(:disabled):not(.cb-correct) { box-shadow: 0 1px 0 #0E85B5; }' +
      'html.dark .check-btn.cb-vanish { box-shadow: none !important; }' +
      'html.dark .dnd-pool { border-color: #48484A; }' +
      'html.dark .dd-select { color: #EBEBF0; border-bottom-color: #48484A; }' +
      'html.dark .pd-ddm { background: #2C2C2E; border-color: #48484A; }' +
      'html.dark .pd-ddm-opt { color: #EBEBF0; }' +
      'html.dark .pd-ddm-opt:hover, html.dark .pd-ddm-opt.pd-hl { background: rgba(28,176,246,0.14); color: #1CB0F6; }' +
      'html.dark .pd-reset-btn { background: #2C2C2E; border-color: #48484A; color: #8E8E93; }' +
      'html.dark .pd-reset-btn:hover { background: #2C2C2E; border-color: #FF3B30; color: #FF3B30; }' +
      'html.dark .pd-corner { background: #2C2C2E; border-color: #48484A; }' +
      'html.dark .pd-rm { background: #2C2C2E; }' +
      'html.dark .pd-rm h3 { color: #fff; }' +
      'html.dark .pd-rm textarea { background: #1C1C1E; border-color: #48484A; color: #EBEBF0; }' +
      'html.dark .pd-rm-cancel { background: #3A3A3C; color: #EBEBF0; }' +
      'html.dark .pd-rm-done b { color: #fff; }' +
      /* answer-option gradient, dark variant (dark-theme.css sets a flat #2C2C2E !important,
         which would beat a plain selector — match it with !important) */
      'html.dark .opt-btn:not(.selected):not(.correct):not(.wrong):not(:hover) { background: linear-gradient(135deg, #2C2C2E 0%, #242426 100%) !important; }' +
      /* floating-card side panels in dark mode (dark-theme.css predates the card look) */
      'html.dark .chat-panel, html.dark .g-panel { border: 1.5px solid #48484A !important; }' +
      'html.dark .chat-panel-header, html.dark .chat-input-area { background: transparent !important; }' +
      'html.dark .chat-msg.ai { border-color: #48484A !important; }' +
      'html.dark .chat-close, html.dark .g-close { background: #2C2C2E !important; border-color: #48484A !important; }' +
      /* categorize rows had a hard-coded white bg (dark-theme.css predates them) */
      'html.dark .cat-row { background: #2C2C2E !important; border-color: #48484A !important; }' +
      'html.dark .cat-term { color: #EBEBF0 !important; }' +
      /* ── Categorize as visible option BUTTONS (PAK): pick one, then check ─── */
      '.cat-row.cat-btnrow { flex-wrap: wrap; align-items: center; }' +
      '.cat-btns { display: flex; flex-wrap: wrap; gap: 8px; margin-left: auto; justify-content: flex-end; }' +
      '.cat-btn { font: 600 14px/1.2 inherit; padding: 8px 15px; border-radius: 11px; border: 1.5px solid #D1D1D6;' +
      '  background: #fff; color: #3C3C43; cursor: pointer; transition: background .15s, border-color .15s, color .15s; }' +
      '.cat-btn:hover:not(.cat-btn-locked) { background: #EBF7FF; border-color: #1CB0F6; color: #1CB0F6; }' +
      '.cat-btn-active { background: #1CB0F6; border-color: #1CB0F6; color: #fff; }' +
      '.cat-btn-locked { cursor: default; }' +
      '.cat-btn-correct { background: #58CC02; border-color: #58CC02; color: #fff; }' +
      '.cat-btn-wrong { background: #FF3B30; border-color: #FF3B30; color: #fff; }' +
      '.cat-btn-answer { border-color: #58CC02; color: #3D8B00; background: #fff; box-shadow: inset 0 0 0 1.5px #58CC02; }' +
      'html.dark .cat-btn { background: #3A3A3C; border-color: #48484A; color: #EBEBF0; }' +
      'html.dark .cat-btn:hover:not(.cat-btn-locked) { background: #0E2A3A; border-color: #1CB0F6; color: #5CC6FF; }' +
      'html.dark .cat-btn-answer { background: #2C2C2E; color: #7BD84E; }' +
      /* ── Answer-term "star" → begrippenlijst (term bank) shortcut ─────────
         A small purple star pinned to the right edge of any answer option
         whose text IS a glossary term. Click → openGlossary (no AI tokens).
         The star is a SIBLING of the <button> (inside .pd-opt-wrap) so it stays
         clickable even after the option is disabled on answering. */
      '.pd-opt-wrap { position: relative; display: block; }' +
      '.pd-opt-wrap > .opt-btn { width: 100%; }' +
      '.opt-btn.pd-has-term { padding-right: 42px; }' +
      '.pd-term-star {' +
      '  position: absolute; top: 50%; right: 8px; transform: translateY(-50%);' +
      '  width: 26px; height: 26px; border-radius: 50%; padding: 0; margin: 0;' +
      '  display: flex; align-items: center; justify-content: center;' +
      '  border: none; background: transparent; color: #B0B0B5;' +
      '  cursor: pointer; z-index: 4; -webkit-appearance: none; appearance: none;' +
      '  transition: background .16s ease, color .16s ease, transform .16s ease;' +
      '}' +
      '.pd-term-star:hover { background: #B57BF6; color: #fff; transform: translateY(-50%) scale(1.12); }' +
      '.pd-term-star svg { display: block; }' +
      'html.dark .pd-term-star { color: #6E6E73; }' +
      'html.dark .pd-term-star:hover { background: #B57BF6; color: #fff; }';
    var el = document.createElement('style');
    el.id = 'pd-landing-style';
    el.textContent = css;
    (document.head || document.documentElement).appendChild(el);
  }

  // Hard, animation-independent reveal — guarantees the exam is never stuck
  // hidden, whatever happens with CSS animations.
  function revealAllLanding() {
    try { document.documentElement.classList.remove('pd-anim'); } catch (e) {}
    try {
      var bs = document.querySelectorAll('.q-block');
      for (var i = 0; i < bs.length; i++) {
        bs[i].style.opacity = '1';
        bs[i].style.animation = 'none';
        var kids = bs[i].children;
        for (var j = 0; j < kids.length; j++) {
          kids[j].style.animation = 'none';
          kids[j].style.opacity = '1';
        }
      }
    } catch (e) {}
  }

  function setupLanding() {
    try {
      var root = document.documentElement;
      if (!root.classList.contains('pd-anim')) return;
      var blocks = [].slice.call(document.querySelectorAll('.q-block'));
      if (!blocks.length) { revealAllLanding(); return; }

      blocks.forEach(function (b, bi) {
        // inside each block, its controls rise in separately
        for (var i = 0; i < b.children.length; i++) {
          b.children[i].style.animationDelay = (i * 0.05).toFixed(2) + 's';
        }
        // blocks reveal one after another (capped so long exams don't drag)
        var delay = Math.min(bi * 75, 1500);
        setTimeout(function () { b.classList.add('pd-shown'); }, delay);
      });
    } catch (e) { revealAllLanding(); }
  }

  /* ── Themed dropdown menu ─────────────────────────────────────────────────
     Replaces the native macOS <select> popup on exam dropdowns ("Kies…",
     categorize rows, matching tables) with a VUmed-styled menu. The native
     <select> stays in the DOM as the source of truth: picking an option sets
     its value and dispatches a bubbling `change` event, so the exam's inline
     onchange (ddChanged etc.), check logic and progress restore are untouched.
     Skipped on touch devices, where the native picker is the better UI. */
  var ddMenu = null, ddFor = null, ddHl = -1, ddOpts = [];
  var DD_CHECK_SVG =
    '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" ' +
    'stroke="#1CB0F6" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function isExamSelect(el) {
    return el && el.tagName === 'SELECT' && !el.disabled && el.closest && el.closest('.q-block');
  }

  function ddClose() {
    if (!ddMenu) return;
    var m = ddMenu;
    ddMenu = null; ddFor = null; ddOpts = []; ddHl = -1;
    m.classList.remove('pd-open');
    setTimeout(function () { if (m.parentNode) m.parentNode.removeChild(m); }, 170);
  }

  function ddSetHl(i) {
    if (ddHl >= 0 && ddOpts[ddHl]) ddOpts[ddHl].classList.remove('pd-hl');
    ddHl = i;
    if (ddHl >= 0 && ddOpts[ddHl]) {
      ddOpts[ddHl].classList.add('pd-hl');
      try { ddOpts[ddHl].scrollIntoView({ block: 'nearest' }); } catch (e) {}
    }
  }

  function ddPick(sel, val) {
    ddClose();
    sel.value = val;
    try { sel.dispatchEvent(new Event('change', { bubbles: true })); } catch (e) {}
    try { sel.focus({ preventScroll: true }); } catch (e) {}
  }

  function ddOpen(sel) {
    ddClose();
    var menu = document.createElement('div');
    menu.className = 'pd-ddm';
    var selIdx = -1;
    [].slice.call(sel.options).forEach(function (o) {
      if (o.disabled) return;                        // skip the "…" placeholder
      var isSel = !!sel.value && o.value === sel.value;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pd-ddm-opt' + (isSel ? ' pd-sel' : '');
      var chk = document.createElement('span');
      chk.className = 'pd-ddm-check';
      if (isSel) chk.innerHTML = DD_CHECK_SVG;
      var txt = document.createElement('span');
      txt.textContent = o.text;
      b.appendChild(chk); b.appendChild(txt);
      b.addEventListener('mousedown', function (ev) { ev.preventDefault(); }); // keep focus on the select
      b.addEventListener('click', function (ev) { ev.stopPropagation(); ddPick(sel, o.value); });
      if (isSel) selIdx = ddOpts.length;
      ddOpts.push(b);
      menu.appendChild(b);
    });
    if (!ddOpts.length) { ddOpts = []; return; }

    menu.style.visibility = 'hidden';
    document.body.appendChild(menu);

    // Below the select by default; flip above when there is more room there.
    var r = sel.getBoundingClientRect();
    var vw = window.innerWidth, vh = window.innerHeight;
    var below = vh - r.bottom - 10, above = r.top - 10;
    menu.style.maxHeight = Math.min(300, Math.max(below, above) - 8) + 'px';
    var mw = menu.offsetWidth, mh = menu.offsetHeight;
    var up = mh + 6 > below && above > below;
    menu.style.left = Math.max(12, Math.min(r.left, vw - mw - 12)) + 'px';
    menu.style.top = (up ? r.top - mh - 6 : r.bottom + 6) + 'px';
    menu.classList.toggle('pd-up', up);
    menu.style.visibility = '';

    ddMenu = menu; ddFor = sel;
    ddSetHl(selIdx);
    requestAnimationFrame(function () { if (ddMenu === menu) menu.classList.add('pd-open'); });
  }

  function ddOnMousedown(ev) {
    var t = ev.target;
    if (ddMenu && (ddMenu === t || ddMenu.contains(t))) return;
    if (isExamSelect(t)) {
      ev.preventDefault();                          // suppress the native popup
      if (ddFor === t) { ddClose(); return; }       // second click toggles closed
      ddOpen(t);
      try { t.focus({ preventScroll: true }); } catch (e) {}
    } else if (ddMenu) {
      ddClose();
    }
  }

  function ddOnKeydown(ev) {
    if (ddMenu && ddFor) {
      var k = ev.key;
      if (k === 'ArrowDown' || k === 'ArrowUp') {
        ev.preventDefault(); ev.stopPropagation();
        var d = k === 'ArrowDown' ? 1 : -1;
        var n = ddOpts.length;
        var base = ddHl < 0 ? (d > 0 ? -1 : 0) : ddHl;
        ddSetHl(((base + d) % n + n) % n);
      } else if (k === 'Enter' || k === ' ') {
        ev.preventDefault(); ev.stopPropagation();
        if (ddHl >= 0 && ddOpts[ddHl]) ddOpts[ddHl].click();
        else ddClose();
      } else if (k === 'Escape' || k === 'Tab') {
        ddClose();
      }
      return;
    }
    var t = ev.target;
    if (isExamSelect(t) && (ev.key === 'Enter' || ev.key === ' ' ||
                            ev.key === 'ArrowDown' || ev.key === 'ArrowUp')) {
      ev.preventDefault();
      ddOpen(t);
    }
  }

  function ddOnScroll(ev) {
    if (!ddMenu) return;
    if (ev.target === ddMenu || ddMenu.contains(ev.target)) return; // menu's own scroll
    ddClose();
  }

  function setupDdMenus() {
    if (window.matchMedia && matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    document.addEventListener('mousedown', ddOnMousedown, true);
    document.addEventListener('keydown', ddOnKeydown, true);
    window.addEventListener('scroll', ddOnScroll, true);
    window.addEventListener('resize', ddClose);
  }

  /* ── Corner buttons: theme toggle + question report ───────────────────────
     Bottom-left: moon (in light mode) / sun (in dark mode) switches the
     site-wide `vumed_theme`. Bottom-right: a flag that arms "report mode" —
     hovering highlights the question under the cursor with a "Vraag N"
     pill, clicking it opens a small popup whose message is stored in the
     Supabase `question_reports` table (visible on the admin dashboard). */
  var MOON_SVG =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M20.6 14.5A8.6 8.6 0 0 1 9.5 3.4 9.3 9.3 0 1 0 20.6 14.5z"/></svg>';
  var SUN_SVG =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round">' +
    '<circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/>' +
    '<path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7"/></svg>';
  var FLAG_SVG =
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M5 21V4.5"/>' +
    '<path d="M5 4.5c2.5-1.6 5-1.6 7 0s4.5 1.6 7 0V14c-2.5 1.6-5 1.6-7 0s-4.5-1.6-7 0z" fill="currentColor" fill-opacity=".18"/></svg>';
  var TERM_STAR_SVG =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01z"/></svg>';
  var CHECK_WHITE_SVG =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" ' +
    'stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
  var CHATAI_SVG =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

  var themeBtn = null, repBtn = null, repHint = null, repTip = null;
  var chatCornerBtn = null;
  var repMode = false;
  var _refreshDots = null;    // set in init(); recolours the bar dots on theme switch

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('vumed_theme', dark ? 'dark' : 'light'); } catch (e) {}
    if (themeBtn) themeBtn.innerHTML = dark ? SUN_SVG : MOON_SVG;
    if (_refreshDots) { try { _refreshDots(); } catch (e) {} }
  }

  function examKeyOf() {
    try { if (typeof EXAM_KEY !== 'undefined' && EXAM_KEY) return EXAM_KEY; } catch (e) {}
    return (location.pathname.split('/').pop() || 'onbekend').replace(/\.html$/, '');
  }

  function examTitleOf() {
    var t = (document.title || '').replace(/\s*[–—|-]\s*(VUmed|MedEace)\s*$/i, '').trim();
    return t || examKeyOf().replace(/_/g, ' ');
  }

  function qnumOfBlock(b) {
    var m = /qblock-(\d+)/.exec(b.id || '');
    if (m) return parseInt(m[1], 10);
    return [].indexOf.call(document.querySelectorAll('.q-block'), b) + 1;
  }

  function enterRep() {
    repMode = true;
    document.documentElement.classList.add('pd-rep');
    if (repBtn) { repBtn.classList.add('pd-on'); repBtn.title = 'Melden annuleren'; }
    if (repHint) repHint.classList.add('pd-open');
  }

  function exitRep() {
    repMode = false;
    document.documentElement.classList.remove('pd-rep');
    if (repBtn) { repBtn.classList.remove('pd-on'); repBtn.title = 'Meld een probleem met een vraag'; }
    if (repHint) repHint.classList.remove('pd-open');
    if (repTip) repTip.style.display = 'none';
  }

  function repOnMove(ev) {
    if (!repMode || !repTip) return;
    var b = ev.target && ev.target.closest ? ev.target.closest('.q-block') : null;
    if (!b) { repTip.style.display = 'none'; return; }
    repTip.textContent = 'Vraag ' + qnumOfBlock(b) + ' melden';
    repTip.style.display = 'block';
    var w = repTip.offsetWidth;
    repTip.style.left = Math.max(8, Math.min(ev.clientX + 16, window.innerWidth - w - 8)) + 'px';
    repTip.style.top = Math.max(8, ev.clientY + 20) + 'px';
  }

  function repOnClick(ev) {
    if (!repMode) return;
    if (ev.target.closest && ev.target.closest('.pd-corner')) return;  // the flag itself toggles
    ev.preventDefault();
    ev.stopPropagation();
    var b = ev.target && ev.target.closest ? ev.target.closest('.q-block') : null;
    exitRep();
    if (b) openReportModal(qnumOfBlock(b));
  }

  function openReportModal(qnum) {
    var old = document.querySelector('.pd-rm-ov');
    if (old && old.parentNode) old.parentNode.removeChild(old);

    var ov = document.createElement('div');
    ov.className = 'pd-rm-ov';
    var box = document.createElement('div');
    box.className = 'pd-rm';
    box.innerHTML =
      '<h3>' + FLAG_SVG + 'Vraag ' + qnum + ' melden</h3>' +
      '<div class="pd-rm-sub"></div>' +
      '<textarea placeholder="Wat klopt er niet aan deze vraag? Bijv. het antwoord lijkt onjuist, een optie ontbreekt, de afbeelding is onduidelijk…"></textarea>' +
      '<div class="pd-rm-err"></div>' +
      '<div class="pd-rm-btns">' +
      '<button type="button" class="pd-rm-cancel">Annuleren</button>' +
      '<button type="button" class="pd-rm-send">Versturen</button>' +
      '</div>';
    box.querySelector('.pd-rm-sub').textContent = examTitleOf();
    ov.appendChild(box);
    document.body.appendChild(ov);

    var ta = box.querySelector('textarea');
    var err = box.querySelector('.pd-rm-err');
    var sendBtn = box.querySelector('.pd-rm-send');

    function close() {
      ov.classList.remove('pd-open');
      document.removeEventListener('keydown', onKey);
      setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 200);
    }
    function onKey(ev) { if (ev.key === 'Escape') close(); }

    box.querySelector('.pd-rm-cancel').addEventListener('click', close);
    ov.addEventListener('click', function (ev) { if (ev.target === ov) close(); });
    document.addEventListener('keydown', onKey);

    function fail(msg) {
      err.textContent = msg;
      err.style.display = 'block';
      sendBtn.disabled = false;
      sendBtn.textContent = 'Versturen';
    }

    sendBtn.addEventListener('click', function () {
      var msg = (ta.value || '').trim();
      if (!msg) { fail('Schrijf eerst kort wat er mis is met de vraag.'); ta.focus(); return; }
      var sb = (typeof window.getSB === 'function') ? window.getSB() : null;
      if (!sb) { fail('Geen verbinding — melden kan alleen online.'); return; }
      err.style.display = 'none';
      sendBtn.disabled = true;
      sendBtn.textContent = 'Versturen…';
      sb.auth.getSession().then(function (r) {
        var uid = null;
        try { uid = r.data.session.user.id; } catch (e) {}
        return sb.from('question_reports').insert({
          user_id: uid, exam_key: examKeyOf(), qnum: qnum, message: msg
        });
      }).then(function (res) {
        if (res && res.error) throw res.error;
        box.innerHTML =
          '<div class="pd-rm-done"><div class="pd-rm-check">' + CHECK_WHITE_SVG + '</div>' +
          '<b>Bedankt voor je melding!</b>' +
          '<span>We kijken zo snel mogelijk naar vraag ' + qnum + '.</span></div>';
        setTimeout(close, 2000);
      }).catch(function (e) {
        fail('Versturen mislukt — probeer het later opnieuw.');
        try { console.warn('report insert failed', e); } catch (e2) {}
      });
    });

    requestAnimationFrame(function () { ov.classList.add('pd-open'); });
    setTimeout(function () { try { ta.focus(); } catch (e) {} }, 220);
  }

  function setupCorners() {
    if (themeBtn || !document.body) return;
    if (!document.querySelector('.q-block')) return;   // exam pages only

    themeBtn = document.createElement('button');
    themeBtn.type = 'button';
    themeBtn.className = 'pd-corner pd-theme-btn';
    themeBtn.setAttribute('aria-label', 'Wissel licht/donker thema');
    themeBtn.title = 'Thema wisselen';
    themeBtn.innerHTML = isDark() ? SUN_SVG : MOON_SVG;
    themeBtn.addEventListener('click', function () { applyTheme(!isDark()); });

    repBtn = document.createElement('button');
    repBtn.type = 'button';
    repBtn.className = 'pd-corner pd-report-btn';
    repBtn.setAttribute('aria-label', 'Meld een probleem met een vraag');
    repBtn.title = 'Meld een probleem met een vraag';
    repBtn.innerHTML = FLAG_SVG;
    repBtn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      if (repMode) exitRep(); else enterRep();
    });

    repHint = document.createElement('div');
    repHint.className = 'pd-rep-hint';
    repHint.textContent = 'Klik op de vraag die je wilt melden — Esc om te annuleren';

    repTip = document.createElement('div');
    repTip.className = 'pd-rep-tip';

    /* Phone-only (CSS gates visibility): AI-chat button in the bottom-left corner,
       replacing the theme toggle there (Tijmen 2026-07-21). Only when the page's
       runtime actually has the chat. */
    if (typeof window.openChatForQuestion === 'function') {
      chatCornerBtn = document.createElement('button');
      chatCornerBtn.type = 'button';
      chatCornerBtn.className = 'pd-corner pd-chatai-btn';
      chatCornerBtn.setAttribute('aria-label', 'Open de AI-chat');
      chatCornerBtn.title = 'Vraag de AI';
      chatCornerBtn.innerHTML = CHATAI_SVG;
      chatCornerBtn.addEventListener('click', function (ev) {
        // the baked runtime has a document click-handler that closes the chat on any
        // click outside #chat-panel — stop this click from reaching it, else the panel
        // opens and instantly closes.
        ev.stopPropagation();
        try { window.openChatForQuestion(null); } catch (e) {}
      });
      document.body.appendChild(chatCornerBtn);
    }

    document.body.appendChild(themeBtn);
    document.body.appendChild(repBtn);
    document.body.appendChild(repHint);
    document.body.appendChild(repTip);

    document.addEventListener('mousemove', repOnMove);
    document.addEventListener('click', repOnClick, true);
    document.addEventListener('keydown', function (ev) {
      if (repMode && ev.key === 'Escape') exitRep();
    });
  }

  /* ── Phone: swipe to hide/reveal the glossary + AI chat panels ───────────
     On a phone the two side panels (#g-panel, #chat-panel) are now full-screen
     pages (see the mobile CSS above). Dragging horizontally tracks the finger
     1:1 (transition suspended via .pd-dragging); releasing past ~30% of the
     panel's width (or letting go with no drag at all → snap back) finishes the
     close through the exam's own closeGlossary()/closeChat() so all their side
     effects (body class, _chatContext, …) stay correct. A vertical drag (e.g.
     scrolling the definition/chat log) is left alone — only a clearly
     horizontal gesture (>10px, more horizontal than vertical) is captured. */
  function setupPanelSwipe() {
    function isPhone() {
      try { return matchMedia('(max-width:768px)').matches; } catch (e) { return window.innerWidth <= 768; }
    }
    // dir 1 = panel exits to the right (g-panel), -1 = exits to the left (chat-panel)
    var PANELS = [
      { id: 'g-panel', cls: 'g-open', dir: 1, close: function () { if (typeof window.closeGlossary === 'function') window.closeGlossary(); } },
      { id: 'chat-panel', cls: 'chat-open', dir: -1, close: function () { if (typeof window.closeChat === 'function') window.closeChat(); } }
    ];
    for (var i = 0; i < PANELS.length; i++) install(PANELS[i]);

    function install(cfg) {
      var panel = document.getElementById(cfg.id);
      if (!panel) return;
      var sx = 0, sy = 0, dx = 0, w = 0, dragging = false, active = false;
      var lastX = 0, lastT = 0, vel = 0;   // px/ms, sign = finger direction

      panel.addEventListener('touchstart', function (e) {
        if (!isPhone() || !document.body.classList.contains(cfg.cls)) return;
        if (e.touches.length !== 1) return;
        sx = e.touches[0].clientX; sy = e.touches[0].clientY; dx = 0;
        lastX = sx; lastT = e.timeStamp; vel = 0;
        dragging = false; active = true;
        w = panel.getBoundingClientRect().width || window.innerWidth;
      }, { passive: true });

      panel.addEventListener('touchmove', function (e) {
        if (!active) return;
        var t = e.touches[0];
        var mx = t.clientX - sx, my = t.clientY - sy;
        if (!dragging) {
          if (Math.abs(mx) < 10 || Math.abs(mx) < Math.abs(my) * 1.3) return;
          if ((cfg.dir === 1 && mx < 0) || (cfg.dir === -1 && mx > 0)) { active = false; return; }
          dragging = true;
          panel.classList.add('pd-dragging');
          // dragging the panel away = leaving the conversation → drop the keyboard with it
          try { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); } catch (err) {}
        }
        var dt = e.timeStamp - lastT;
        if (dt > 0) { vel = (t.clientX - lastX) / dt; lastX = t.clientX; lastT = e.timeStamp; }
        dx = mx;
        var progress = Math.max(0, Math.min(1, Math.abs(dx) / w));
        panel.style.transform = 'translateX(' + (cfg.dir * progress * 100) + '%)';
        e.preventDefault();
      }, { passive: false });

      function release(shouldClose) {
        panel.classList.remove('pd-dragging');   // restores the CSS transition
        // snappier finish than the baked 0.28s open-transition; cleared afterwards so
        // the normal open/close animation keeps its own timing.
        panel.style.transition = shouldClose
          ? 'transform 0.2s cubic-bezier(0.3,0.7,0.4,1)'
          : 'transform 0.26s cubic-bezier(0.22,1,0.36,1)';
        setTimeout(function () { panel.style.transition = ''; }, 320);
        if (shouldClose) cfg.close();
        void panel.offsetHeight;                 // commit the frozen drag position first…
        panel.style.transform = '';               // …then let it transition to the resting spot
      }

      panel.addEventListener('touchend', function () {
        if (!active) return;
        active = false;
        if (!dragging) return;
        dragging = false;
        // close past 30% of the width, OR on a quick flick in the exit direction
        var flick = (cfg.dir * vel > 0.45) && (Math.abs(dx) > 24);
        release((Math.abs(dx) / w) > 0.3 || flick);
      });
      panel.addEventListener('touchcancel', function () {
        var was = dragging;
        dragging = false; active = false;
        if (was) release(false);
      });
    }
  }

  /* ── Phone: keyboard behaviour of the AI chat (Tijmen 2026-07-21) ─────────
     1. The baked runtime calls chat-input.focus() on open and after every send,
        which pops the keyboard (and used to zoom — the input was 13.5px; the
        phone CSS above bumps it to 16px). On a phone we suppress PROGRAMMATIC
        focus only: tapping the input still focuses natively.
     2. enterkeyhint="send" — the baked Enter-handler already sends.
     3. Scrolling the chat log dismisses the keyboard (standard chat-app feel).
     4. While the keyboard is up, the full-screen panel is pinned to the visual
        viewport so the input row sits ABOVE the keyboard instead of under it. */
  function setupPhoneChat() {
    var input = document.getElementById('chat-input');
    var panel = document.getElementById('chat-panel');
    var msgs  = document.getElementById('chat-messages');
    if (!input || !panel) return;
    function isPhone() {
      try { return matchMedia('(max-width:768px)').matches; } catch (e) { return window.innerWidth <= 768; }
    }

    var nativeFocus = input.focus.bind(input);
    input.focus = function () { if (!isPhone()) nativeFocus(); };

    try { input.setAttribute('enterkeyhint', 'send'); } catch (e) {}

    if (msgs) msgs.addEventListener('touchmove', function () {
      if (isPhone() && document.activeElement === input) input.blur();
    }, { passive: true });

    var vv = window.visualViewport;
    if (!vv) return;
    function reset() {
      panel.style.top = ''; panel.style.height = ''; panel.style.bottom = '';
    }
    function relayout() {
      if (!isPhone() || !document.body.classList.contains('chat-open')) { reset(); return; }
      var kb = window.innerHeight - vv.height - vv.offsetTop;
      if (kb > 60) {                      // keyboard (not just browser chrome) is up
        panel.style.top = vv.offsetTop + 'px';
        panel.style.height = vv.height + 'px';
        panel.style.bottom = 'auto';
        if (msgs) msgs.scrollTop = msgs.scrollHeight;
      } else reset();
    }
    vv.addEventListener('resize', relayout);
    vv.addEventListener('scroll', relayout);
    input.addEventListener('blur', function () { setTimeout(reset, 60); });
  }

  /* ── Answer-term "star" → term bank ───────────────────────────────────────
     For every answer option whose whole text IS a glossary term (a disease,
     drug, concept — not a full sentence), pin a small purple star to its right
     edge that opens that term in the begrippenlijst. This is the cheap path
     the double-click-to-AI used to be: no API tokens. The star only appears
     when a GLOSSARY entry actually exists for the option, so coverage grows as
     the glossaries are augmented with answer-terms. */
  function normTerm(s) {
    return (s || '')
      .replace(/ /g, ' ')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[.…\s]+$/, '')
      .trim();
  }

  function forms(entry, key) {
    var fs = entry && entry.match ? entry.match.split('|') : [];
    fs.push(key);
    if (entry && entry.title) fs.push(entry.title);
    return fs;
  }

  function setupAnswerTerms() {
    if (!document.querySelector('.q-block')) return;   // exam pages only
    var G;
    try { if (typeof GLOSSARY !== 'undefined') G = GLOSSARY; } catch (e) { return; }
    if (!G || typeof openGlossary !== 'function') return;

    // Merge the shared global answer-term bank into this exam's GLOSSARY.
    // GLOSSARY is a const object — we mutate it (adding keys is allowed) so the
    // existing openGlossary()/tooltip code finds the shared terms unchanged.
    // The exam's own glossary always wins on a key collision.
    var newKeys = [];
    try {
      var SHARED = window.ANSWER_TERMS;
      if (SHARED && typeof SHARED === 'object') {
        Object.keys(SHARED).forEach(function (k) {
          if (!(k in G)) { G[k] = SHARED[k]; newKeys.push(k); }
        });
      }
    } catch (e) {}

    // surface-form (normalised) → glossary key
    var map = {};
    Object.keys(G).forEach(function (k) {
      forms(G[k] || {}, k).forEach(function (f) {
        var nf = normTerm(f);
        if (nf && !map[nf]) map[nf] = k;
      });
    });

    // Wrap the freshly-merged shared terms where they appear in normal question
    // text too (the exam's inline pass already ran, before the merge, so it only
    // covered the exam's own terms). Uses the same .gterm markup, so the
    // document-level hover/click delegation lights them up automatically.
    if (newKeys.length) { try { wrapSharedInText(G, newKeys); } catch (e) {} }

    var btns = document.querySelectorAll('.opt-btn');
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      if (btn.parentNode && btn.parentNode.classList &&
          btn.parentNode.classList.contains('pd-opt-wrap')) continue;   // already done
      var letterEl = btn.querySelector('.opt-letter');
      var txt = (letterEl && letterEl.nextElementSibling)
        ? letterEl.nextElementSibling.textContent
        : btn.textContent;
      var key = map[normTerm(txt)];
      if (!key) continue;

      var wrap = document.createElement('span');
      wrap.className = 'pd-opt-wrap';
      btn.parentNode.insertBefore(wrap, btn);
      wrap.appendChild(btn);
      btn.classList.add('pd-has-term');

      var star = document.createElement('button');
      star.type = 'button';
      star.className = 'pd-term-star';
      star.title = 'Bekijk in de begrippenlijst';
      star.setAttribute('aria-label', 'Bekijk "' + (txt || '').trim() + '" in de begrippenlijst');
      star.innerHTML = TERM_STAR_SVG;
      (function (k) {
        star.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          try { openGlossary(k); } catch (e) {}
        });
        // Double-tapping the ANSWER itself (a glossary term) should open the
        // begrippenlijst, NOT the AI chat. Intercept the option's dblclick and
        // stop it before it bubbles to the document-level AI handler.
        btn.addEventListener('dblclick', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          try { window.getSelection && window.getSelection().removeAllRanges(); } catch (e) {}
          try { openGlossary(k); } catch (e) {}
        }, true);
      })(key);
      wrap.appendChild(star);
    }
  }

  /* Wrap the given glossary keys where they appear in normal question text,
     mirroring the exam's own inline term-wrapping pass but limited to the
     shared-bank keys that were merged after that pass ran. */
  function wrapSharedInText(G, keys) {
    var pairs = [];
    keys.forEach(function (k) {
      forms(G[k] || {}, k).forEach(function (p) {
        p = (p || '').trim();
        if (p) pairs.push({ key: k, pattern: p });
      });
    });
    if (!pairs.length) return;
    pairs.sort(function (a, b) { return b.pattern.length - a.pattern.length; });

    var patToKey = {};
    pairs.forEach(function (p) { patToKey[p.pattern.toLowerCase()] = p.key; });
    var escaped = pairs.map(function (p) {
      return p.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    });
    var termRe;
    try { termRe = new RegExp('(?<![\\w])(' + escaped.join('|') + ')(?![\\w])', 'gi'); }
    catch (e) { return; }

    function wrapNode(node) {
      var anc = node.parentNode;
      while (anc && anc.nodeType === 1) {
        if (anc.nodeName === 'SELECT' || anc.nodeName === 'OPTION') return;
        if (anc.classList && anc.classList.contains('gterm')) return;
        if (anc.classList && (anc.classList.contains('q-text') ||
            anc.classList.contains('q-context') || anc.classList.contains('q-question') ||
            anc.classList.contains('q-dropdown-sentence'))) break;
        anc = anc.parentNode;
      }
      var text = node.textContent;
      termRe.lastIndex = 0;
      if (!termRe.test(text)) return;
      termRe.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = termRe.exec(text)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var span = document.createElement('span');
        span.className = 'gterm';
        span.dataset.term = patToKey[m[1].toLowerCase()] || m[1].toLowerCase();
        span.textContent = m[1];
        frag.appendChild(span);
        last = termRe.lastIndex;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }

    var root = document.querySelector('.exam-main') || document.body;
    root.querySelectorAll('.q-text, .q-context, .q-question, .q-dropdown-sentence').forEach(function (el) {
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      var nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(wrapNode);
    });
  }

  // Synchronous bootstrap — hide content pre-paint, with a hard failsafe.
  try { setupTheme(); } catch (e) {}
  try {
    injectLandingCss();
    document.documentElement.classList.add('pd-anim');
    setTimeout(revealAllLanding, 2800);   // hard failsafe: never stay hidden
  } catch (e) { revealAllLanding(); }
  try { setupDdMenus(); } catch (e) {}

  function injectCss() {
    if (document.getElementById('pd-style')) return;
    var css =
      '.streak-bar-wrap.pd-active { pointer-events: auto; }' +
      '.pd-dots {' +
      '  position: absolute; inset: 0; display: flex; align-items: center;' +
      '  opacity: 0; pointer-events: none; z-index: 3;' +
      '  transition: opacity .30s ease;' +
      '}' +
      '.pd-dot {' +
      '  flex: 1 1 0; height: 100%; position: relative;' +
      '  background: none; border: none; padding: 0; margin: 0;' +
      '  cursor: pointer; -webkit-appearance: none; appearance: none;' +
      '}' +
      '.pd-dot::before {' +
      '  content: ""; position: absolute; top: 50%; left: 50%;' +
      '  width: var(--pd-sz, 12px); height: var(--pd-sz, 12px);' +
      '  border-radius: 50%; background: var(--dc, ' + COLORS.empty + ');' +
      '  transform: translate(-50%, -50%) scale(0);' +
      '  transition: transform .34s cubic-bezier(.34,1.56,.64,1),' +
      '              background .30s ease,' +
      '              width .46s cubic-bezier(.65,0,.35,1),' +
      '              height .46s cubic-bezier(.65,0,.35,1),' +
      '              border-radius .46s cubic-bezier(.65,0,.35,1);' +
      '}' +
      /* split state (hover + intro appear): circles visible + popped, bar hidden */
      '.streak-bar-wrap.pd-split .pd-dots,' +
      '.streak-bar-wrap.pd-active:hover .pd-dots { opacity: 1; pointer-events: auto; }' +
      '.streak-bar-wrap.pd-split .pd-dot::before,' +
      '.streak-bar-wrap.pd-active:hover .pd-dot::before { transform: translate(-50%, -50%) scale(1); }' +
      '.streak-bar-wrap.pd-split .streak-bar-bg,' +
      '.streak-bar-wrap.pd-active:hover .streak-bar-bg { opacity: 0; }' +
      '.streak-bar-wrap.pd-active .streak-bar-bg { transition: opacity .40s ease; }' +
      /* intro: per-dot delay makes the appear + green waves sweep left→right */
      '.streak-bar-wrap.pd-stagger .pd-dot::before { transition-delay: var(--pd-d, 0s); }' +
      /* intro: solid green (no glow) */
      '.streak-bar-wrap.pd-green .pd-dot::before { background: ' + COLORS.correct + '; }' +
      /* intro: organic meld — circles flow outward, touch, and fuse into the bar */
      '.streak-bar-wrap.pd-merge .pd-dots { opacity: 0; transition: opacity .42s ease .16s; }' +
      '.streak-bar-wrap.pd-merge .pd-dot::before { width: 100%; height: 14px; border-radius: 6px; }' +
      '.streak-bar-wrap.pd-merge .streak-bar-bg { opacity: 1; }' +
      '.pd-dot:hover::before { filter: brightness(1.08); }' +
      /* hover-revealed "Examen resetten" pill under the bar */
      '.pd-reset-wrap {' +
      '  position: absolute; top: 100%; left: 0; right: 0;' +
      '  padding-top: 9px; display: flex; justify-content: center;' +
      '  pointer-events: none; z-index: 4;' +
      '}' +
      '.streak-bar-wrap.pd-show-reset .pd-reset-wrap { pointer-events: auto; }' +
      '.pd-reset-btn {' +
      '  display: inline-flex; align-items: center; gap: 6px;' +
      '  background: #fff; border: 1px solid #D1D1D6; border-radius: 999px;' +
      '  padding: 6px 13px; cursor: pointer; font-family: inherit;' +
      '  font-size: 12px; font-weight: 700; color: #6E6E73; white-space: nowrap;' +
      '  box-shadow: 0 4px 14px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05);' +
      '  opacity: 0; transform: translateY(-9px) scale(.92);' +
      '  transition: opacity .24s ease, transform .38s cubic-bezier(.22,1,.36,1),' +
      '              color .15s ease, border-color .15s ease, background .15s ease;' +
      '  pointer-events: none;' +
      '}' +
      '.streak-bar-wrap.pd-show-reset .pd-reset-btn {' +
      '  opacity: 1; transform: none; pointer-events: auto;' +
      '}' +
      '.pd-reset-btn:hover { color: #FF3B30; border-color: #FFC7C2; background: #FFF7F6; }' +
      '.pd-reset-btn svg { flex: 0 0 auto; }' +
      /* touch fallback: phones have no hover, so a tap on the bar adds .pd-tap
         which reveals the dots (tap one to jump) + the reset pill. Same visual
         result as the desktop :hover state, reusing the exact reveal rules. */
      '.streak-bar-wrap.pd-tap .pd-dots { opacity: 1; pointer-events: auto; }' +
      '.streak-bar-wrap.pd-tap .pd-dot::before { transform: translate(-50%, -50%) scale(1); }' +
      '.streak-bar-wrap.pd-tap .streak-bar-bg { opacity: 0; }';
    var el = document.createElement('style');
    el.id = 'pd-style';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── Bookmark ("opslaan") star + daily goal/streak ─────────────────────────
     A ribbon button by each "Vraag N" saves that question to Supabase
     (saved_questions), surfaced in the dashboard "Opgeslagen" tab. Works on
     exam AND generated mission pages (both load this file). Anonymous users get
     a gentle "log in" toast. The daily counter + day-streak are localStorage
     only (no schema change) and drive the dashboard's dagdoel/streak cards. */
  var BM_SVG = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none">' +
    '<path class="pd-bm-fill" d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" ' +
    'fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  function injectBmCss() {
    if (document.getElementById('pd-bm-style')) return;
    var css =
      '.pd-bm{background:none;border:none;cursor:pointer;padding:2px 4px;margin-left:6px;' +
      'vertical-align:middle;color:#C7C7CC;line-height:0;border-radius:6px;}' +
      '.pd-bm:hover{color:#1CB0F6;background:#EBF7FF;}' +
      '.pd-bm svg{display:block;}' +
      '.pd-bm-on{color:#1CB0F6;}' +
      '.pd-bm-on .pd-bm-fill{fill:#1CB0F6;}' +
      'html.dark .pd-bm{color:#6E6E73;}' +
      'html.dark .pd-bm:hover{background:#48484A;color:#1CB0F6;}' +
      'html.dark .pd-bm-on{color:#1CB0F6;}' +
      '.pd-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(12px);' +
      'background:#1C1C1E;color:#fff;font-family:Nunito,Arial,sans-serif;font-weight:700;font-size:14px;' +
      'padding:11px 18px;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,0.25);opacity:0;' +
      'pointer-events:none;transition:opacity .2s,transform .2s;z-index:9999;}' +
      '.pd-toast.pd-show{opacity:1;transform:translateX(-50%) translateY(0);}';
    var el = document.createElement('style');
    el.id = 'pd-bm-style'; el.textContent = css; document.head.appendChild(el);
  }

  var _toastEl = null, _toastT = null;
  function pdToast(text) {
    if (!_toastEl) { _toastEl = document.createElement('div'); _toastEl.className = 'pd-toast'; document.body.appendChild(_toastEl); }
    _toastEl.textContent = text;
    requestAnimationFrame(function () { _toastEl.classList.add('pd-show'); });
    if (_toastT) clearTimeout(_toastT);
    _toastT = setTimeout(function () { _toastEl.classList.remove('pd-show'); }, 1900);
  }

  function _uid(sb) {
    return sb.auth.getSession().then(function (r) {
      try { return r.data.session.user.id; } catch (e) { return null; }
    });
  }

  function setupBookmarks() {
    if (!document.querySelector('.q-block')) return;   // exam / mission pages only
    injectBmCss();
    var sb = (typeof window.getSB === 'function') ? window.getSB() : null;
    var ek = examKeyOf();
    var byQ = {};
    [].forEach.call(document.querySelectorAll('.q-block'), function (b) {
      var qn = qnumOfBlock(b);
      var host = b.querySelector('.q-num') || b;
      if (host.querySelector('.pd-bm')) return;
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'pd-bm';
      btn.title = 'Vraag opslaan'; btn.setAttribute('aria-label', 'Vraag opslaan');
      btn.innerHTML = BM_SVG;
      btn.addEventListener('click', function (ev) { ev.stopPropagation(); toggleBookmark(qn, btn); });
      host.appendChild(btn);
      byQ[qn] = btn;
    });
    if (!sb) return;
    _uid(sb).then(function (uid) {
      if (!uid) return;
      return sb.from('saved_questions').select('qnum').eq('user_id', uid).eq('exam_key', ek).then(function (res) {
        (res && res.data || []).forEach(function (row) { var b = byQ[row.qnum]; if (b) b.classList.add('pd-bm-on'); });
      });
    }).catch(function () {});
  }

  function toggleBookmark(qn, btn) {
    var sb = (typeof window.getSB === 'function') ? window.getSB() : null;
    if (!sb) { pdToast('Log in om vragen op te slaan'); return; }
    _uid(sb).then(function (uid) {
      if (!uid) { pdToast('Log in om vragen op te slaan'); return; }
      var on = btn.classList.contains('pd-bm-on');
      var ek = examKeyOf();
      if (on) {
        btn.classList.remove('pd-bm-on');
        return sb.from('saved_questions').delete().eq('user_id', uid).eq('exam_key', ek).eq('qnum', qn)
          .then(function () { pdToast('Verwijderd uit opgeslagen'); });
      } else {
        btn.classList.add('pd-bm-on');
        return sb.from('saved_questions').upsert({ user_id: uid, exam_key: ek, qnum: qn }, { onConflict: 'user_id,exam_key,qnum' })
          .then(function (res) { if (res && res.error) throw res.error; pdToast('Vraag opgeslagen'); });
      }
    }).catch(function (e) {
      btn.classList.toggle('pd-bm-on');   // revert optimistic state
      pdToast('Opslaan mislukt');
      try { console.warn('bookmark failed', e); } catch (e2) {}
    });
  }

  /* Daily goal + day streak (localStorage only). */
  function _today() { return new Date().toISOString().slice(0, 10); }
  function _answeredCount() {
    try { return (typeof state !== "undefined" && state && state.answered) ? Object.keys(state.answered).length : 0; } catch (e) { return 0; }
  }
  var _pdSeen = null;
  function bumpDaily() {
    try {
      if (window._restoring) return;
      var n = _answeredCount();
      if (_pdSeen === null) { _pdSeen = n; return; }
      if (n > _pdSeen) { incDaily(n - _pdSeen); }
      if (n !== _pdSeen) _pdSeen = n;
    } catch (e) {}
  }
  function incDaily(d) {
    try {
      var k = 'vumed_daily_' + _today();
      var v = (parseInt(localStorage.getItem(k) || '0', 10) || 0) + d;
      localStorage.setItem(k, String(v));
      maybeBumpStreak();
      _checkGoal();
    } catch (e) {}
  }
  /* Dagdoel-reeks (vumed_stats.js owns it): a SECOND counter next to the streak
     above, on the user's own target instead of the fixed 10. No-ops below the
     goal and after the day is already counted, so calling it per answer is fine. */
  function _checkGoal() {
    try {
      if (window.VumedStats && window.VumedStats.checkGoalDay) window.VumedStats.checkGoalDay();
    } catch (e) {}
  }
  /* The day-streak only activates once the day QUALIFIES: 10+ questions
     answered today, or a mission completed today (vumed_missionday, set by
     missionview.js). Until then vumed_lastactive stays on the previous
     qualified day, so an under-10 day simply doesn't extend the streak. */
  var STREAK_MIN_Q = 10;
  function _dayQualifies() {
    try {
      var t = _today();
      if (localStorage.getItem('vumed_missionday') === t) return true;
      return (parseInt(localStorage.getItem('vumed_daily_' + t) || '0', 10) || 0) >= STREAK_MIN_Q;
    } catch (e) { return false; }
  }
  function maybeBumpStreak() {
    try {
      var today = _today(), last = localStorage.getItem('vumed_lastactive');
      if (last === today || !_dayQualifies()) return;
      var y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      var s = parseInt(localStorage.getItem('vumed_daystreak') || '0', 10) || 0;
      var next = 1;
      if (last === y) {
        next = s + 1;
      } else if (last && s > 0) {
        /* Gap of N missed days: N streakbevriezers (shop) bridge it — all N are
           consumed and the streak continues. Fewer than N → reset, none consumed.
           Mirror only here; the DB balance is debited by update_login_streak
           (same rule server-side) via VumedStats.syncStreak() below. */
        var missed = Math.round((Date.parse(today) - Date.parse(last)) / 86400000) - 1;
        var fz = parseInt(localStorage.getItem('vumed_freezes') || '0', 10) || 0;
        if (missed >= 1 && fz >= missed) {
          next = s + 1;
          localStorage.setItem('vumed_freezes', String(fz - missed));
        }
      }
      localStorage.setItem('vumed_daystreak', String(next));
      localStorage.setItem('vumed_lastactive', today);
      /* Push the qualified day to the DB streak (update_login_streak is idempotent
         per day and consumes DB freezers on a gap). The DB is the cross-device
         authority on the NUMBER, so once the RPC + re-pull settle, adopt the
         server value for both the wallet mirror and the celebration — a local
         counter that drifted (double-counted or reset relative to the DB, e.g.
         phone vs laptop) can then never show a wrong streak. Logged out → no DB,
         celebrate the locally-computed value.
         The 800ms delay lets the answer feedback / mission-complete screen land
         first; the vumed_lastactive guard above fires the celebration once/day. */
      try {
        if (window.VumedStats && window.VumedStats.syncStreak) {
          var _celebrated = false;
          var _fire = function (n) {
            if (_celebrated) return; _celebrated = true;
            try { setTimeout(function () { pdStreakCelebrate(n); }, 800); } catch (e3) {}
          };
          window.VumedStats.syncStreak().then(function () {
            var dbv = next;
            try {
              var gs = window.VumedStats.getState && window.VumedStats.getState();
              if (gs && gs.streak > 0) {
                dbv = gs.streak;
                if (dbv !== next) localStorage.setItem('vumed_daystreak', String(dbv));
              }
            } catch (e5) {}
            _fire(dbv);
          }, function () { _fire(next); });
          /* Safety net: if the RPC promise never settles (offline), still
             celebrate the local value after a short grace period. */
          setTimeout(function () { _fire(next); }, 2500);
        } else {
          if (window.VumedStats && window.VumedStats.refresh) window.VumedStats.refresh();
          try { setTimeout(function () { pdStreakCelebrate(next); }, 800); } catch (e6) {}
        }
      } catch (e2) {
        try { setTimeout(function () { pdStreakCelebrate(next); }, 800); } catch (e7) {}
      }
    } catch (e) {}
  }

  /* ── Streak celebration — Duolingo-style fire takeover ─────────────────────
     Full-screen moment for the one time per day the streak counter moves:
     flame ignites, the number flips old→new with an ember burst, a 7-day row
     shows the run, "Doorgaan" (or tap / Escape) dismisses. The week row is
     derived from the streak number itself (not per-device vumed_daily_*) so it
     can never contradict the headline. */
  function _celeStyle() {
    if (document.getElementById('pd-cele-style')) return;
    var css =
      '#pd-cele{position:fixed;inset:0;z-index:540;background:rgba(255,255,255,0.97);display:flex;' +
      'flex-direction:column;align-items:center;justify-content:center;padding:24px;' +
      "font-family:'Nunito',-apple-system,'Segoe UI',sans-serif;opacity:0;transition:opacity .3s ease;" +
      'cursor:pointer;-webkit-tap-highlight-color:transparent;}' +
      '#pd-cele.on{opacity:1;}' +
      '#pd-cele.out{opacity:0;}' +
      '.pd-cele-glow{position:absolute;width:560px;height:560px;max-width:150vw;left:50%;top:42%;' +
      'transform:translate(-50%,-50%);border-radius:50%;pointer-events:none;' +
      'background:radial-gradient(circle,rgba(255,150,0,0.28),rgba(255,150,0,0.09) 45%,transparent 70%);' +
      'animation:pdCeleGlow 2.6s ease-in-out infinite;}' +
      '@keyframes pdCeleGlow{0%,100%{opacity:.7}50%{opacity:1}}' +
      '.pd-cele-fw{position:relative;width:148px;height:170px;transform:scale(0) translateY(28px);}' +
      '#pd-cele.on .pd-cele-fw{animation:pdCeleIgnite .65s cubic-bezier(.34,1.56,.5,1) .1s forwards;}' +
      '@keyframes pdCeleIgnite{0%{transform:scale(0) translateY(28px)}60%{transform:scale(1.12,.94) translateY(0)}' +
      '80%{transform:scale(.96,1.06)}100%{transform:scale(1) translateY(0)}}' +
      '.pd-cele-fo,.pd-cele-fi,.pd-cele-fc{transform-box:fill-box;transform-origin:50% 100%;}' +
      '.pd-cele-fo{animation:pdCeleSway 1.9s ease-in-out infinite;}' +
      '@keyframes pdCeleSway{0%,100%{transform:skewX(0) scaleY(1)}30%{transform:skewX(1.6deg) scaleY(1.02)}' +
      '65%{transform:skewX(-1.8deg) scaleY(.985)}}' +
      '.pd-cele-fi{animation:pdCeleFlick .9s ease-in-out infinite;}' +
      '.pd-cele-fc{animation:pdCeleFlick .7s ease-in-out infinite reverse;}' +
      '@keyframes pdCeleFlick{0%,100%{transform:scale(1,1)}45%{transform:scale(.93,1.09)}70%{transform:scale(1.05,.95)}}' +
      '.pd-cele-em{position:absolute;bottom:30px;left:50%;width:7px;height:7px;border-radius:50%;' +
      'background:#FFC800;opacity:0;pointer-events:none;}' +
      '.pd-cele-em:nth-child(odd){animation:pdCeleEmA 2.3s ease-out infinite;}' +
      '.pd-cele-em:nth-child(even){animation:pdCeleEmB 2.7s ease-out infinite;background:#FF9600;}' +
      '.pd-cele-em:nth-of-type(2){margin-left:-34px;animation-delay:.5s;width:5px;height:5px;}' +
      '.pd-cele-em:nth-of-type(3){margin-left:26px;animation-delay:1.1s;}' +
      '.pd-cele-em:nth-of-type(4){margin-left:-14px;animation-delay:1.6s;width:5px;height:5px;}' +
      '.pd-cele-em:nth-of-type(5){margin-left:38px;animation-delay:.8s;width:4px;height:4px;}' +
      '@keyframes pdCeleEmA{0%{transform:translate(0,0) scale(1);opacity:0}10%{opacity:.9}' +
      '100%{transform:translate(-22px,-135px) scale(.25);opacity:0}}' +
      '@keyframes pdCeleEmB{0%{transform:translate(0,0) scale(1);opacity:0}10%{opacity:.85}' +
      '100%{transform:translate(20px,-120px) scale(.3);opacity:0}}' +
      '.pd-cele-num{position:relative;margin-top:-16px;font-size:78px;font-weight:900;line-height:1;' +
      'background:linear-gradient(180deg,#FFB020,#FF7A00);-webkit-background-clip:text;background-clip:text;' +
      '-webkit-text-fill-color:transparent;opacity:0;transform:translateY(14px);' +
      'transition:opacity .4s ease .45s,transform .4s cubic-bezier(.34,1.56,.5,1) .45s;}' +
      '#pd-cele.on .pd-cele-num{opacity:1;transform:translateY(0);}' +
      '#pd-cele.on .pd-cele-num.pop{animation:pdCelePop .5s cubic-bezier(.34,1.56,.5,1);}' +
      '@keyframes pdCelePop{0%{transform:scale(.6)}60%{transform:scale(1.22)}100%{transform:scale(1)}}' +
      '.pd-cele-spark{position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px 0 0 -3px;' +
      'border-radius:50%;background:#FFC800;pointer-events:none;animation:pdCeleSpark .6s ease-out forwards;}' +
      '@keyframes pdCeleSpark{0%{transform:translate(0,0) scale(1);opacity:1}' +
      '100%{transform:translate(var(--tx),var(--ty)) scale(.2);opacity:0}}' +
      '.pd-cele-lab{margin-top:10px;font-size:18px;font-weight:800;color:#CE7A00;letter-spacing:.04em;' +
      'opacity:0;transform:translateY(10px);transition:opacity .35s ease .7s,transform .35s ease .7s;}' +
      '.pd-cele-sub{margin-top:6px;font-size:13.5px;font-weight:600;color:rgba(60,60,67,0.6);' +
      'opacity:0;transition:opacity .35s ease .95s;}' +
      '#pd-cele.on .pd-cele-lab{opacity:1;transform:translateY(0);}' +
      '#pd-cele.on .pd-cele-sub{opacity:1;}' +
      '.pd-cele-week{display:flex;gap:10px;margin-top:26px;}' +
      '.pd-cele-day{display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0;transform:translateY(10px);}' +
      '#pd-cele.on .pd-cele-day{animation:pdCeleChip .45s cubic-bezier(.34,1.56,.5,1) forwards;}' +
      '#pd-cele.on .pd-cele-day:nth-child(1){animation-delay:.9s}#pd-cele.on .pd-cele-day:nth-child(2){animation-delay:.97s}' +
      '#pd-cele.on .pd-cele-day:nth-child(3){animation-delay:1.04s}#pd-cele.on .pd-cele-day:nth-child(4){animation-delay:1.11s}' +
      '#pd-cele.on .pd-cele-day:nth-child(5){animation-delay:1.18s}#pd-cele.on .pd-cele-day:nth-child(6){animation-delay:1.25s}' +
      '#pd-cele.on .pd-cele-day:nth-child(7){animation-delay:1.35s}' +
      '@keyframes pdCeleChip{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}' +
      '.pd-cele-day span{font-size:11px;font-weight:700;color:rgba(60,60,67,0.55);}' +
      '.pd-cele-dot{width:30px;height:30px;border-radius:50%;background:#E5E5EA;' +
      'display:flex;align-items:center;justify-content:center;}' +
      '.pd-cele-day.q .pd-cele-dot{background:#FF9600;}' +
      '.pd-cele-day.today .pd-cele-dot{box-shadow:0 0 0 3px rgba(255,150,0,0.35);}' +
      '.pd-cele-btn{margin-top:30px;padding:15px 44px;border:0;border-radius:14px;background:#FF9600;' +
      'color:#fff;font-family:inherit;font-size:15px;font-weight:800;letter-spacing:.08em;' +
      'text-transform:uppercase;cursor:pointer;box-shadow:0 4px 0 #C97500;opacity:0;transform:translateY(10px);' +
      'transition:opacity .35s ease 1.4s,transform .35s ease 1.4s;}' +
      '#pd-cele.on .pd-cele-btn{opacity:1;transform:translateY(0);}' +
      '#pd-cele.on .pd-cele-btn:active{transform:translateY(3px);box-shadow:0 1px 0 #C97500;transition:none;}' +
      '.pd-cele-btn:focus-visible{outline:3px solid #C97500;outline-offset:3px;}' +
      /* Dark mode: the original dark takeover. No #pd-cele id on the dot/text
         overrides — html.dark + id would outrank the .q state fill (gotcha 5). */
      'html.dark #pd-cele{background:rgba(15,9,3,0.97);}' +
      'html.dark .pd-cele-num{background:linear-gradient(180deg,#FFE29A,#FF9600);' +
      '-webkit-background-clip:text;background-clip:text;}' +
      'html.dark .pd-cele-lab{color:#E9C79B;}' +
      'html.dark .pd-cele-sub{color:rgba(255,235,205,0.6);}' +
      'html.dark .pd-cele-day span{color:rgba(255,235,205,0.5);}' +
      'html.dark .pd-cele-dot{background:rgba(255,255,255,0.12);}' +
      'html.dark .pd-cele-btn:focus-visible{outline-color:#fff;}' +
      '@media (max-width:420px){.pd-cele-num{font-size:64px;}.pd-cele-week{gap:7px;}}' +
      '@media (prefers-reduced-motion:reduce){' +
      '#pd-cele,#pd-cele *{animation:none!important;transition:opacity .2s ease!important;}' +
      '#pd-cele .pd-cele-fw{transform:none;}' +
      '#pd-cele .pd-cele-num,#pd-cele .pd-cele-lab,#pd-cele .pd-cele-sub,#pd-cele .pd-cele-btn,' +
      '#pd-cele .pd-cele-day{opacity:1!important;transform:none!important;}' +
      '#pd-cele .pd-cele-em,#pd-cele .pd-cele-spark{display:none;}}';
    var el = document.createElement('style');
    el.id = 'pd-cele-style'; el.textContent = css;
    document.head.appendChild(el);
  }
  var _celeReduced = false;
  try { _celeReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function pdStreakCelebrate(newStreak) {
    try {
      if (!document.body || document.getElementById('pd-cele')) return;
      newStreak = parseInt(newStreak, 10) || 1;
      _celeStyle();
      var wrap = document.createElement('div');
      wrap.id = 'pd-cele';
      wrap.setAttribute('role', 'dialog');
      wrap.setAttribute('aria-modal', 'true');
      wrap.setAttribute('aria-label', 'Reeks: ' + newStreak + (newStreak === 1 ? ' dag' : ' dagen') + ' op rij');
      /* Layered flat-fill flame (outer / inner / core), bottom-anchored so the
         flicker keyframes squash from the base like a real flame. */
      var flame =
        '<div class="pd-cele-fw">' +
        '<svg class="pd-cele-flame" viewBox="0 0 120 140" width="148" height="170" aria-hidden="true">' +
        '<path class="pd-cele-fo" fill="#FF9600" d="M60 6 C38 38 22 60 22 88 A38 38 0 0 0 98 88 C98 60 82 38 60 6 Z"/>' +
        '<path class="pd-cele-fi" fill="#FFC800" d="M60 42 C47 60 38 70 38 88 A22 22 0 0 0 82 88 C82 70 73 60 60 42 Z"/>' +
        '<path class="pd-cele-fc" fill="#FFF4D6" d="M60 68 C53 78 48 84 48 93 A12 12 0 0 0 72 93 C72 84 67 78 60 68 Z"/>' +
        '</svg>' +
        '<i class="pd-cele-em"></i><i class="pd-cele-em"></i><i class="pd-cele-em"></i>' +
        '<i class="pd-cele-em"></i><i class="pd-cele-em"></i>' +
        '</div>';
      /* Week row: fill the last min(streak,7) days ending today. */
      var names = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
      var week = '<div class="pd-cele-week" aria-hidden="true">';
      for (var i = 6; i >= 0; i--) {
        var d = new Date(Date.now() - i * 86400000);
        var q = i < Math.min(newStreak, 7);
        week += '<div class="pd-cele-day' + (q ? ' q' : '') + (i === 0 ? ' today' : '') + '">' +
          '<span>' + names[d.getUTCDay()] + '</span><div class="pd-cele-dot">' +
          (q ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8.5 6.5 12 13 4.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' : '') +
          '</div></div>';
      }
      week += '</div>';
      var startNum = (!_celeReduced && newStreak > 1) ? (newStreak - 1) : newStreak;
      wrap.innerHTML =
        '<div class="pd-cele-glow"></div>' + flame +
        '<div class="pd-cele-num">' + startNum + '</div>' +
        '<div class="pd-cele-lab">' + (newStreak === 1 ? 'dag op rij!' : 'dagen op rij!') + '</div>' +
        '<div class="pd-cele-sub">Kom morgen terug om je reeks te verlengen.</div>' +
        week +
        '<button type="button" class="pd-cele-btn">Doorgaan</button>';
      document.body.appendChild(wrap);
      var closed = false;
      function close() {
        if (closed) return;
        closed = true;
        document.removeEventListener('keydown', onKey);
        wrap.classList.add('out');
        setTimeout(function () { try { wrap.remove(); } catch (e) {} }, 320);
      }
      function onKey(ev) { if (ev.key === 'Escape') close(); }
      /* Tap-anywhere closes, but not in the first moments — a stray tap right
         as it appears shouldn't eat the celebration. The button always works. */
      var shownAt = Date.now();
      wrap.addEventListener('click', function (ev) {
        var isBtn = ev.target && ev.target.closest && ev.target.closest('.pd-cele-btn');
        if (!isBtn && Date.now() - shownAt < 600) return;
        close();
      });
      document.addEventListener('keydown', onKey);
      /* Show via reflow + setTimeout (rAF freezes in background tabs). */
      void wrap.offsetWidth;
      setTimeout(function () { wrap.classList.add('on'); }, 20);
      /* Counter flip old→new with an ember burst, synced after the ignition. */
      var num = wrap.querySelector('.pd-cele-num');
      if (!_celeReduced) {
        setTimeout(function () {
          if (closed) return;
          num.textContent = String(newStreak);
          num.classList.add('pop');
          for (var j = 0; j < 8; j++) {
            var a = (Math.PI * 2 * j) / 8 - Math.PI / 2;
            var sp = document.createElement('i');
            sp.className = 'pd-cele-spark';
            sp.style.setProperty('--tx', Math.round(Math.cos(a) * 62) + 'px');
            sp.style.setProperty('--ty', Math.round(Math.sin(a) * 54) + 'px');
            num.appendChild(sp);
            setTimeout(function (el) { return function () { try { el.remove(); } catch (e) {} }; }(sp), 700);
          }
        }, 950);
      }
      setTimeout(function () {
        if (closed) return;
        try { wrap.querySelector('.pd-cele-btn').focus({ preventScroll: true }); } catch (e) {}
      }, 1500);
    } catch (e) {}
  }
  window.pdStreakCelebrate = pdStreakCelebrate;   // dev handle / reuse elsewhere

  window.pdCheckStreak = maybeBumpStreak;   // missionview.js calls this on lesson complete
  try { maybeBumpStreak(); } catch (e) {}   // catch a qualification earned on another page

  /* Gems on newly-correct answers, a lost heart on newly-wrong ones.
     Diffs state.answered per-question against a baseline snapshot so restores
     (and already-answered questions) never earn/lose. Drives VumedStats. */
  var _pdStatus = null;
  function _answeredMap() {
    try { return (typeof state !== "undefined" && state && state.answered) ? state.answered : {}; } catch (e) { return {}; }
  }
  function bumpCurrencies() {
    try {
      if (window._restoring || !window.VumedStats) return;
      var cur = _answeredMap();
      if (_pdStatus === null) { _pdStatus = Object.assign({}, cur); return; }
      var gems = 0;
      for (var q in cur) {
        if (!cur.hasOwnProperty(q)) continue;
        if (_pdStatus[q] === cur[q]) continue;      // unchanged
        var v = cur[q];
        if (v === 'correct') gems += 2;
        else if (v === 'answered') gems += 1;       // dnd/open participation
        else if (v === 'wrong') { try { window.VumedStats.loseHeart(); } catch (e) {} }
      }
      _pdStatus = Object.assign({}, cur);
      if (gems > 0) { try { window.VumedStats.awardGems(gems); } catch (e) {} }
    } catch (e) {}
    try { Ach.onBump(); } catch (e) {}   // re-check Prestaties after each answer
  }

  /* ── Prestaties (achievements) → claimable LEGENDARY chests ────────────────
     When you cross an achievement tier WHILE IN THE EXAM ENVIRONMENT, a small
     "melding" pops bottom-right; tapping it opens a guaranteed legendary chest
     (gift_modal.js forceRarity) and credits its gems + coins. Requires login —
     claim state persists in an exam_progress pseudo-row 'achievement_claims'
     ({claimed:{badgeKey:tierIdx}}, no 'answered' key so the admin activity
     trigger is a no-op). Existing progress is GRANDFATHERED on first run so only
     NEW crossings fire (no flood for returning users). Every tier level-up = its
     own chest ("always a legendary chest" — Tijmen 2026-07-15).
     BADGES here MIRROR profile.html BADGES — keep the ladders in sync. */
  var Ach = (function () {
    var BADGES = [
      { key: 'carriere', name: 'Carrière',         metric: 'xp',             tiers: [0, 10000, 20000, 30000, 40000, 50000] },
      { key: 'histo',    name: 'Jack van Horssen',  metric: 'histoCorrect',   tiers: [10, 20, 40, 80, 160] },
      { key: 'anatoom',  name: 'Anatoom',           metric: 'anatomyCorrect', tiers: [10, 25, 50, 100, 200] },
      { key: 'neuro',    name: 'Neuroloog',         metric: 'neuroCorrect',   tiers: [10, 25, 50, 100, 200] },
      { key: 'farma',    name: 'Farmacoloog',       metric: 'pharmaCorrect',  tiers: [10, 25, 50, 100, 200] },
      { key: 'micro',    name: 'Microjager',        metric: 'microCorrect',   tiers: [10, 25, 50, 100] },
      { key: 'jurist',   name: 'Witte Toga',        metric: 'ethicsCorrect',  tiers: [10, 25, 50, 100] },
      { key: 'opic',     name: 'Op de IC',          metric: 'maxStreak',      tiers: [10, 20, 30, 40, 50] },
      { key: 'scherp',   name: 'Scherpschutter',    metric: 'qCorrect',       tiers: [25, 100, 500, 2000] },
      { key: 'wittejas', name: 'Witte Jas',         metric: 'qTotal',         tiers: [50, 250, 1000, 5000] },
      { key: 'streak',   name: 'Trouwe Student',    metric: 'dayStreak',      tiers: [3, 7, 30, 100] },
      { key: 'podium',   name: 'Podiumbeest',       metric: 'top3',           tiers: [1, 5, 10, 25] },
      { key: 'nacht',    name: 'Nachtdienst',       metric: 'nightQ',         tiers: [10, 20, 30, 40, 50] },
      { key: 'flatline', name: 'Flat Line',         metric: 'flatLine',       tiers: [1, 3, 5, 10, 20] },
    ];
    /* topic metric → badge_index.json group (correct answers ∩ group refs) */
    var TOPIC = { histoCorrect: 'histology', anatomyCorrect: 'anatomy', neuroCorrect: 'neuro', pharmaCorrect: 'pharma', microCorrect: 'micro', ethicsCorrect: 'ethics' };

    function tierIdx(v, tiers) { var i = -1; for (var k = 0; k < tiers.length; k++) { if (v >= tiers[k]) i = k; else break; } return i; }

    var sb = null, uid = null, ek = null;
    var base = null;        // computed once from OTHER exams + user_profiles columns
    var groupQ = {};        // group → Set(qnum) for THIS exam (from badge_index)
    var claimed = null;     // { badgeKey: highest CLAIMED tier idx }
    var notified = {};      // { badgeKey: highest tier idx already surfaced }
    var ready = false, gf = false, started = false;

    function sbc() { try { return (typeof window.getSB === 'function' && window.getSB()) || window._sbInstance || null; } catch (e) { return null; } }

    function load() {
      if (started) return; started = true;
      sb = sbc(); if (!sb) { started = false; return; }
      ek = examKeyOf();
      sb.auth.getSession().then(function (r) {
        uid = (r && r.data && r.data.session) ? r.data.session.user.id : null;
        if (!uid) return;   // achievements require login
        Promise.all([
          fetch('badge_index.json').then(function (x) { return x.ok ? x.json() : null; }).catch(function () { return null; }),
          sb.from('exam_progress').select('exam_key, answered:progress->answered').eq('user_id', uid),
          sb.from('user_profiles').select('total_xp, login_streak, top3_finishes, max_correct_streak, flat_line_count, night_questions').eq('user_id', uid).maybeSingle(),
          sb.from('exam_progress').select('progress').eq('user_id', uid).eq('exam_key', 'achievement_claims').maybeSingle(),
        ]).then(function (res) {
          var bi = res[0] || {}, rows = (res[1] && res[1].data) || [], prof = (res[2] && res[2].data) || {}, claimRow = (res[3] && res[3].data) || null;
          // group membership for THIS exam
          for (var m in TOPIC) { var g = TOPIC[m]; groupQ[g] = {}; (bi[g] || []).forEach(function (ref) { var p = ref.split('#'); if (p[0] === ek) groupQ[g][p[1]] = 1; }); }
          // baseline from OTHER exams (exclude current so live contribution isn't double-counted)
          var qC = 0, qT = 0, cset = {};
          rows.forEach(function (row) { if (row.exam_key === ek) return; var a = row.answered; if (a && typeof a === 'object') { for (var q in a) { qT++; if (a[q] === 'correct') { qC++; cset[row.exam_key + '#' + q] = 1; } } } });
          var topic = {};
          for (var m2 in TOPIC) { var grp = TOPIC[m2]; var c = 0; (bi[grp] || []).forEach(function (ref) { if (cset[ref]) c++; }); topic[grp] = c; }
          var ds = 0; try { ds = parseInt(localStorage.getItem('vumed_daystreak') || '0', 10) || 0; } catch (e) {}
          base = { xp: prof.total_xp || 0, dayStreak: Math.max(prof.login_streak || 0, ds), top3: prof.top3_finishes || 0,
                   maxStreak: prof.max_correct_streak || 0, flatLine: prof.flat_line_count || 0, nightQ: prof.night_questions || 0,
                   qCorrect: qC, qTotal: qT, topic: topic };
          // claimed state: Supabase row first, merge localStorage (max per key)
          var local = null; try { local = JSON.parse(localStorage.getItem('vumed_ach_claimed') || 'null'); } catch (e) {}
          var remote = (claimRow && claimRow.progress && claimRow.progress.claimed) ? claimRow.progress.claimed : null;
          if (!local && !remote) { gf = true; claimed = {}; }
          else { claimed = {}; var keys = {}; [local, remote].forEach(function (o) { if (o) for (var k in o) keys[k] = 1; }); for (var kk in keys) { claimed[kk] = Math.max((local && local[kk] != null ? local[kk] : -1), (remote && remote[kk] != null ? remote[kk] : -1)); } }
          for (var b = 0; b < BADGES.length; b++) { var bk = BADGES[b].key; notified[bk] = (claimed[bk] != null ? claimed[bk] : -1); }
          ready = true;
          detect();   // grandfather (if gf) OR surface any already-earned-unclaimed tiers
        }).catch(function () {});
      }).catch(function () {});
    }

    function liveVals() {
      var cur = {}; try { cur = _answeredMap() || {}; } catch (e) {}
      var qC = 0, qT = 0, tc = {}; for (var g in groupQ) tc[g] = 0;
      for (var q in cur) { if (!cur.hasOwnProperty(q)) continue; qT++; if (cur[q] === 'correct') { qC++; for (var g2 in groupQ) { if (groupQ[g2][String(q)]) tc[g2]++; } } }
      var runStreak = 0; try { if (typeof state !== 'undefined' && state && typeof state.streak === 'number') runStreak = state.streak; } catch (e) {}
      var xpNow = base.xp; try { if (window.VumedStats) { var s = window.VumedStats.getState(); if (s && s.xp > xpNow) xpNow = s.xp; } } catch (e) {}
      return {
        xp: xpNow,
        histoCorrect:   base.topic.histology + (tc.histology || 0),
        anatomyCorrect: base.topic.anatomy   + (tc.anatomy   || 0),
        neuroCorrect:   base.topic.neuro     + (tc.neuro     || 0),
        pharmaCorrect:  base.topic.pharma    + (tc.pharma    || 0),
        microCorrect:   base.topic.micro     + (tc.micro     || 0),
        ethicsCorrect:  base.topic.ethics    + (tc.ethics    || 0),
        maxStreak: Math.max(base.maxStreak, runStreak),
        qCorrect:  base.qCorrect + qC,
        qTotal:    base.qTotal + qT,
        dayStreak: base.dayStreak, top3: base.top3, nightQ: base.nightQ, flatLine: base.flatLine,
      };
    }

    function detect() {
      if (!ready) return;
      var vals = liveVals();
      if (gf) {   // grandfather current progress: claimed = current tier, no fire
        for (var i = 0; i < BADGES.length; i++) { var b = BADGES[i]; claimed[b.key] = tierIdx(vals[b.metric] || 0, b.tiers); notified[b.key] = claimed[b.key]; }
        gf = false; persist(); return;
      }
      for (var j = 0; j < BADGES.length; j++) {
        var bd = BADGES[j], idx = tierIdx(vals[bd.metric] || 0, bd.tiers);
        var seen = notified[bd.key] != null ? notified[bd.key] : -1;
        if (idx > seen) { for (var t = seen + 1; t <= idx; t++) enqueue(bd, t); notified[bd.key] = idx; }
      }
    }

    function persist() {
      try { localStorage.setItem('vumed_ach_claimed', JSON.stringify(claimed)); } catch (e) {}
      if (sb && uid) { try { sb.from('exam_progress').upsert({ user_id: uid, exam_key: 'achievement_claims', progress: { claimed: claimed }, updated_at: new Date().toISOString() }, { onConflict: 'user_id,exam_key' }).then(function () {}, function () {}); } catch (e) {} }
    }

    function creditPrize(p) {
      if (!p) return;
      // hearts (small chest bonus) only credit via VumedStats — no add_hearts
      // RPC exists, the belt-and-braces path below drops them
      if (window.VumedStats) { try { window.VumedStats.awardGems(p.gems); window.VumedStats.awardCoins(p.coins); if (p.hearts && window.VumedStats.awardHearts) window.VumedStats.awardHearts(p.hearts); return; } catch (e) {} }
      if (sb && uid) { try { sb.rpc('add_gems', { p_user_id: uid, p_amount: p.gems }); sb.rpc('add_coins', { p_user_id: uid, p_amount: p.coins }); } catch (e) {} }
    }

    /* Lazy-load gift_modal.js (not on exam pages by default) on first claim. */
    function ensureGift(cb) {
      if (window.VumedGift) return cb();
      var ex = document.querySelector('script[data-vg]');
      if (ex) { ex.addEventListener('load', cb); return; }
      var s = document.createElement('script');
      s.src = 'gift_modal.js?v=29'; s.setAttribute('data-vg', '1');
      s.onload = cb; s.onerror = function () {};
      document.head.appendChild(s);
    }

    var MEDAL = '<svg viewBox="0 0 24 24" fill="none"><path d="M7 3h10v4a5 5 0 0 1-10 0V3z" fill="#FFD34D" stroke="#E0A800" stroke-width="1.4" stroke-linejoin="round"/><path d="M4.5 3.5h3M16.5 3.5h3M5 3.5c0 3 1.4 4.6 3 5M19 3.5c0 3-1.4 4.6-3 5" stroke="#E0A800" stroke-width="1.4" stroke-linecap="round"/><circle cx="12" cy="16.5" r="4.5" fill="#FFD34D" stroke="#E0A800" stroke-width="1.4"/><path d="M12 14l.7 1.5 1.6.2-1.15 1.1.28 1.6L12 17.7l-1.4.7.28-1.6L9.7 15.7l1.6-.2z" fill="#fff"/></svg>';
    var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    function injectCss() {
      if (document.getElementById('pd-ach-style')) return;
      var css = [
        '#pd-ach-wrap{position:fixed;right:16px;bottom:72px;z-index:520;display:flex;flex-direction:column;gap:10px;align-items:flex-end;pointer-events:none;font-family:inherit;}',
        '.pd-ach{pointer-events:auto;display:flex;align-items:center;gap:11px;background:#fff;border:1.5px solid #FFE08A;border-radius:16px;padding:11px 14px;box-shadow:0 10px 34px rgba(0,0,0,0.16);cursor:pointer;font-family:inherit;text-align:left;max-width:300px;transform:translateX(120%);opacity:0;transition:transform .38s cubic-bezier(.34,1.4,.64,1),opacity .3s;}',
        '.pd-ach.pd-ach-in{transform:translateX(0);opacity:1;}',
        '.pd-ach.pd-ach-out{transform:translateX(120%);opacity:0;}',
        '.pd-ach:hover{border-color:#FFC800;box-shadow:0 12px 40px rgba(0,0,0,0.22);}',
        '.pd-ach-medal{flex:0 0 auto;width:38px;height:38px;filter:drop-shadow(0 2px 4px rgba(224,168,0,.4));animation:pdAchBob 2.2s ease-in-out infinite;}',
        '.pd-ach-medal svg{width:100%;height:100%;display:block;}',
        '@keyframes pdAchBob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-3px) rotate(3deg)}}',
        '.pd-ach-txt{display:flex;flex-direction:column;gap:1px;line-height:1.2;}',
        '.pd-ach-h{font-size:11px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:#E0A800;}',
        '.pd-ach-n{font-size:14.5px;font-weight:800;color:#1C1C1E;}',
        '.pd-ach-c{font-size:12px;font-weight:700;color:#8E8E93;}',
        '.pd-ach-arrow{flex:0 0 auto;width:20px;height:20px;color:#1CB0F6;}',
        '.pd-ach-arrow svg{width:100%;height:100%;display:block;}',
        'html.dark .pd-ach{background:#2C2C2E;border-color:#5c4a12;box-shadow:0 10px 34px rgba(0,0,0,0.5);}',
        'html.dark .pd-ach:hover{border-color:#FFC800;}',
        'html.dark .pd-ach-n{color:#F2F2F7;}',
        'html.dark .pd-ach-c{color:#98989F;}',
      ].join('\n');
      var s = document.createElement('style'); s.id = 'pd-ach-style'; s.textContent = css;
      document.head.appendChild(s);
    }

    function container() { var c = document.getElementById('pd-ach-wrap'); if (!c) { c = document.createElement('div'); c.id = 'pd-ach-wrap'; document.body.appendChild(c); } return c; }

    function enqueue(bd, tier) {
      injectCss();
      var card = document.createElement('button');
      card.type = 'button'; card.className = 'pd-ach';
      card.innerHTML =
        '<span class="pd-ach-medal">' + MEDAL + '</span>' +
        '<span class="pd-ach-txt">' +
          '<span class="pd-ach-h">Prestatie behaald!</span>' +
          '<span class="pd-ach-n">' + bd.name + ' · Niveau ' + (tier + 1) + '</span>' +
          '<span class="pd-ach-c">Tik om te claimen</span>' +
        '</span>' +
        '<span class="pd-ach-arrow">' + ARROW + '</span>';
      card.addEventListener('click', function () { claim(bd, tier, card); });
      container().appendChild(card);
      void card.offsetWidth; card.classList.add('pd-ach-in');
    }

    function claim(bd, tier, card) {
      if (card.dataset.busy) return; card.dataset.busy = '1';
      ensureGift(function () {
        if (!window.VumedGift) { card.dataset.busy = ''; return; }
        window.VumedGift.open({
          random: true, forceRarity: 'legendarisch',
          title: 'Prestatie: ' + bd.name,
          footText: 'Niveau ' + (tier + 1) + ' behaald',
          onClaim: function (prize) {
            creditPrize(prize);
            claimed[bd.key] = Math.max((claimed[bd.key] != null ? claimed[bd.key] : -1), tier);
            persist();
            if (card && card.parentNode) { card.classList.add('pd-ach-out'); setTimeout(function () { if (card.parentNode) card.parentNode.removeChild(card); }, 320); }
          },
          onClose: function () { card.dataset.busy = ''; },
        });
      });
    }

    /* DEV: window.VumedAch.preview() shows a demo melding whose chest credits
       NOTHING (no award, no persist) — for reviewing the flow without side
       effects. Real meldingen come only from detect(). */
    function preview() {
      injectCss();
      var card = document.createElement('button');
      card.type = 'button'; card.className = 'pd-ach';
      card.innerHTML =
        '<span class="pd-ach-medal">' + MEDAL + '</span>' +
        '<span class="pd-ach-txt">' +
          '<span class="pd-ach-h">Prestatie behaald!</span>' +
          '<span class="pd-ach-n">Anatoom · Niveau 2</span>' +
          '<span class="pd-ach-c">Tik om te claimen</span>' +
        '</span>' +
        '<span class="pd-ach-arrow">' + ARROW + '</span>';
      card.addEventListener('click', function () {
        if (card.dataset.busy) return; card.dataset.busy = '1';
        ensureGift(function () {
          if (!window.VumedGift) { card.dataset.busy = ''; return; }
          window.VumedGift.open({
            random: true, forceRarity: 'legendarisch', title: 'Prestatie: Anatoom',
            footText: 'Niveau 2 behaald (preview)',
            onClaim: function () { if (card.parentNode) { card.classList.add('pd-ach-out'); setTimeout(function () { if (card.parentNode) card.parentNode.removeChild(card); }, 320); } },
            onClose: function () { card.dataset.busy = ''; },
          });
        });
      });
      container().appendChild(card);
      void card.offsetWidth; card.classList.add('pd-ach-in');
    }

    return { load: load, onBump: detect, preview: preview };
  })();
  window.VumedAch = Ach;

  // ── Categorize rows → visible option buttons (PAK) ──────────────────────
  // For "assign one of a few options to each row" questions (e.g. acetylcholine /
  // noradrenaline, or ja / nee), replace the row dropdown with visible buttons:
  // click one, then press Controleer antwoord. Keeps the hidden <select> as the
  // source of truth (ddChanged / checkDropdown / state.dropdownSel / restore are
  // untouched); buttons just drive it and mirror the green/red grading. No rebuild
  // needed — the correct answer per row is read from the check button's onclick.
  function setupCatButtons() {
    var correctCache = {};
    function correctFor(qnum) {
      if (correctCache[qnum] !== undefined) return correctCache[qnum];
      var arr = [], btn = document.getElementById('check-' + qnum);
      if (btn) {
        var m = (btn.getAttribute('onclick') || '').match(/checkDropdown\(\s*\d+\s*,\s*(\[[\s\S]*\])\s*\)/);
        if (m) { try { arr = JSON.parse(m[1]); } catch (e) {} }
      }
      correctCache[qnum] = arr;
      return arr;
    }
    var rows = document.querySelectorAll('.cat-row');
    for (var i = 0; i < rows.length; i++) {
      (function (row) {
        var sel = row.querySelector('.dd-select');
        if (!sel || sel.dataset.catbtn) return;
        var opts = [].slice.call(sel.options).filter(function (o) { return o.value !== ''; });
        if (opts.length < 2 || opts.length > 5) return;                 // only small option sets
        for (var k = 0; k < opts.length; k++) { if ((opts[k].textContent || '').length > 45) return; }  // skip long-text options
        sel.dataset.catbtn = '1';
        sel.style.display = 'none';
        row.classList.add('cat-btnrow');
        var qnum = sel.dataset.qnum, idx = parseInt(sel.dataset.idx, 10);
        var wrap = document.createElement('div');
        wrap.className = 'cat-btns';
        var btns = [];
        opts.forEach(function (o) {
          var b = document.createElement('button');
          b.type = 'button'; b.className = 'cat-btn'; b.textContent = o.textContent;
          b.setAttribute('data-val', o.value);
          b.addEventListener('click', function (ev) {
            ev.stopPropagation();
            if (sel.disabled) return;
            sel.value = o.value;
            sel.dispatchEvent(new Event('change', { bubbles: true }));
            btns.forEach(function (x) { x.classList.toggle('cat-btn-active', x === b); });
          });
          wrap.appendChild(b); btns.push(b);
        });
        sel.parentNode.insertBefore(wrap, sel.nextSibling);
        function reflect() {
          var chosen = sel.value;
          var isC = sel.classList.contains('dd-correct');
          var isW = sel.classList.contains('dd-wrong');
          var graded = isC || isW;
          var answer = correctFor(qnum)[idx];
          btns.forEach(function (x) {
            var v = x.getAttribute('data-val');
            x.classList.toggle('cat-btn-active', v === chosen && !graded);
            x.classList.remove('cat-btn-correct', 'cat-btn-wrong', 'cat-btn-answer', 'cat-btn-locked');
            if (graded) {
              x.classList.add('cat-btn-locked');
              if (v === chosen) x.classList.add(isC ? 'cat-btn-correct' : 'cat-btn-wrong');
              if (isW && v === answer) x.classList.add('cat-btn-answer');
            }
          });
        }
        new MutationObserver(reflect).observe(sel, { attributes: true, attributeFilter: ['class', 'value', 'disabled'] });
        reflect();
        setTimeout(reflect, 900);    // catch async (Supabase) restore of a prior selection/grade
        setTimeout(reflect, 2200);
      })(rows[i]);
    }
  }

  // When the user reached this exam/mission from a dashboard tab (Opgeslagen /
  // Foutenreview), the dashboard stashed a return target in sessionStorage. Point
  // the "Menu" back button there so leaving returns to the right tab instead of
  // the generic tentamen hub. One-shot: consumed on load.
  function setupBackReturn() {
    var ret;
    try { ret = sessionStorage.getItem('vumed_return'); } catch (e) { ret = null; }
    if (!ret) return;
    try { sessionStorage.removeItem('vumed_return'); } catch (e) {}
    var btn = document.querySelector('a.back-btn');
    if (btn) btn.setAttribute('href', ret);
  }

  /* ── Results ("Jouw resultaten") ──────────────────────────────────────────
     A richer, site-styled replacement for the plain white results overlay baked
     into every exam HTML. It lives here so all built exams + missie.html get it
     without a per-file retrofit: showResults() is WRAPPED (the original still
     runs, so per-runtime side effects survive — e.g. medeace-runtime's
     exam_completions upsert + update_exam_streak RPC), its old overlay is hidden
     by CSS, and this one renders on top.

     The analysis (per onderwerp / per vraagtype) is TENTAMEN-ONLY. Mission pages
     (window.__MPARAMS) are already scoped to a single topic and their retry loop
     only ends once every question is mastered, so a breakdown there says nothing. */

  var RES_TYPES = [
    ['open',     'Open vragen',         function (b) { return !!b.querySelector('.open-input'); }],
    ['dnd',      'Sleepvragen',         function (b) { return !!b.querySelector('[data-dnd-zone], .dnd-card'); }],
    ['cat',      'Categorievragen',     function (b) { return !!b.querySelector('.cat-row'); }],
    ['dropdown', 'Invulvragen',         function (b) { return !!b.querySelector('.q-dropdown-sentence, .dd-select'); }],
    ['multi',    'Meerdere antwoorden', function (b) { return !!b.querySelector('.opt-btn[onclick*="toggleMulti"]'); }],
    ['mcq',      'Meerkeuzevragen',     function (b) { return !!b.querySelector('.opt-btn'); }]
  ];
  var RES_TYPE_LABEL = { other: 'Overige vragen' };
  for (var _rt = 0; _rt < RES_TYPES.length; _rt++) RES_TYPE_LABEL[RES_TYPES[_rt][0]] = RES_TYPES[_rt][1];

  /* First match wins — order above is most-specific first (a categorize row also
     holds a .dd-select, a sleepvraag also holds cards, etc.). */
  function resQType(b) {
    for (var i = 0; i < RES_TYPES.length; i++) { try { if (RES_TYPES[i][2](b)) return RES_TYPES[i][0]; } catch (e) {} }
    return 'other';
  }

  function resColor(pct) {
    return pct >= 80 ? '#58CC02' : pct >= 60 ? '#FFC800' : pct >= 40 ? '#FF9600' : '#FF4B6E';
  }
  function resVerdict(pct, isMission) {
    if (isMission)  return ['Missie voltooid!', 'Elke vraag beheerst. Door naar de volgende.'];
    if (pct >= 90)  return ['Uitstekend!', 'Bijna alles goed — dit vak zit erin.'];
    if (pct >= 75)  return ['Sterk gedaan!', 'Ruim voldoende. Pak de laatste foutjes nog mee.'];
    if (pct >= 55)  return ['Goed bezig!', 'De basis staat. Herhaal je zwakste onderwerpen.'];
    if (pct >= 30)  return ['Blijf oefenen', 'Er is nog werk te doen — begin bij je zwakste onderwerp.'];
    return ['Nog even doorbijten', 'Neem de stof rustig door en probeer het daarna opnieuw.'];
  }

  /* Exam name + subtitle for the hero. Exams carry both in their (hidden) page
     header; missions build theirs from the qbank + mission params. */
  function resTitles() {
    var mp = window.__MPARAMS;
    if (mp) {
      var Q = window.QBANK || {};
      if (mp.mode === 'foutenreview') return { eyebrow: 'Foutenreview afgerond', name: 'Foutenreview', sub: Q.subject || '' };
      if (mp.mode === 'opgeslagen')   return { eyebrow: 'Herhaling afgerond', name: 'Opgeslagen vragen', sub: Q.subject || '' };
      var unit = (Q.topic_names && Q.topic_names[mp.unit]) || 'Missie';
      return { eyebrow: 'Missie voltooid', name: unit,
               sub: (Q.subject ? Q.subject + ' · ' : '') + 'Deel ' + (mp.deel || 1) };
    }
    var sn = document.querySelector('.header-title > span');
    var ts = document.querySelector('.header-title .title-sub');
    var name = (sn && sn.textContent.trim()) || (document.title || '').trim() || examTitleOf();
    var sub  = (ts && ts.textContent.trim()) || '';
    sub = sub.replace(/\s+(?=\d{4}[‑–—-]\d{4}\s*$)/, ' · ');   // "2e Toetsmoment 2020‑2021" → "… · 2020‑2021"
    return { eyebrow: 'Tentamen afgerond', name: name, sub: sub };
  }

  var _resTopicsP = null;
  function resLoadTopics() {
    if (_resTopicsP) return _resTopicsP;
    _resTopicsP = fetch('exam_topics.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; });
    return _resTopicsP;
  }

  function resEsc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Share of a group answered correctly. Scored over EVERY question in the group
     (a skipped question is not a free pass) — same rule as the big score ring,
     so a row's % always matches its green bar. */
  function resN(st)   { return st.correct + st.wrong + st.partial + st.other + st.todo; }
  function resPct(st) { var n = resN(st); return n ? Math.round(st.correct / n * 100) : 0; }
  function resDone(st) { return st.correct + st.wrong + st.partial + st.other; }

  /* One analysis row: name + "pct% · x/y" + a green/red/grey stacked bar. */
  function resRow(name, st, tag) {
    var pct = resPct(st), n = resN(st);
    return '<div class="pd-rrow">' +
      '<div class="pd-rrow-top">' +
        '<span class="pd-rrow-name">' + resEsc(name) +
          (tag ? '<span class="pd-rrow-tag">' + resEsc(tag) + '</span>' : '') + '</span>' +
        '<span class="pd-rrow-val"><b style="color:' + resColor(pct) + '">' + pct + '%</b>' +
          '<span class="pd-rrow-den">' + st.correct + '/' + n + '</span></span>' +
      '</div>' +
      '<div class="pd-rbar">' +
        '<i class="pd-rb-c" style="width:' + (n ? st.correct / n * 100 : 0) + '%"></i>' +
        '<i class="pd-rb-w" style="width:' + (n ? (st.wrong + st.partial + st.other) / n * 100 : 0) + '%"></i>' +
      '</div></div>';
  }

  /* Index of the row to flag "focus" in an ascending-by-% list: the first one
     that is actually informative. A single missed question in a 1-question group
     scores 0% but says nothing, so groups under 3 questions never carry the tag —
     which is why the tag is about where to focus, not simply the lowest row. */
  function resTagIdx(stats) {
    for (var i = 0; i < stats.length; i++) {
      if (resN(stats[i]) >= 3 && resPct(stats[i]) < 100) return i;
    }
    return -1;
  }

  function resTally() { return { correct: 0, wrong: 0, partial: 0, other: 0, todo: 0 }; }
  function resAdd(st, verdict) {
    if (verdict === 'correct') st.correct++;
    else if (verdict === 'wrong') st.wrong++;
    else if (verdict === 'partial') st.partial++;   // mwo_2's part-marked open answers
    else if (verdict) st.other++;                   // 'answered' — attempted, never graded
    else st.todo++;
  }

  /* ── Actieve tijd per tentamen ("Tempo" stat) ─────────────────────────────
     Counts seconds while the tab is visible, mirrored to localStorage every few
     ticks so a reload keeps the clock. Per-device by design (no schema change).
     A fresh/reset exam (no answers in localStorage at load) starts the clock
     over; submitting freezes the value and clears the mirror — submitting also
     resets the exam's progress, so the next run starts a new clock. */
  var _timeSecs = 0, _timeKey = null, _timeFinal = null, _timeDirty = 0;
  function setupTimeTrack() {
    if (!document.querySelector('.q-block')) return;
    _timeKey = 'vumed_extime_' + examKeyOf();
    try { _timeSecs = parseInt(localStorage.getItem(_timeKey) || '0', 10) || 0; } catch (e) { _timeSecs = 0; }
    var ans = readAnswered(), any = false;
    for (var k in ans) { any = true; break; }
    if (!any) _timeSecs = 0;
    setInterval(function () {
      if (document.hidden || _timeFinal !== null) return;
      _timeSecs++;
      if (++_timeDirty >= 5) { _timeDirty = 0; try { localStorage.setItem(_timeKey, String(_timeSecs)); } catch (e) {} }
    }, 1000);
    window.addEventListener('pagehide', function () {
      if (_timeFinal === null) { try { localStorage.setItem(_timeKey, String(_timeSecs)); } catch (e) {} }
    });
  }
  function timeStop() {
    if (_timeFinal === null) {
      _timeFinal = _timeSecs;
      try { if (_timeKey) localStorage.removeItem(_timeKey); } catch (e) {}
    }
    return _timeFinal;
  }
  function resFmtTime(s) {
    if (!s || s < 1) return '—';
    var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    return (h ? h + ':' : '') + (h && m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  /* Ease a number up from 0 (same rAF+timeout belt-and-braces as the ring). */
  function resCount(numEl, target, dur, fmt) {
    if (!numEl) return;
    fmt = fmt || function (v) { return String(v); };
    var t0 = 0, landed = false;
    function land() { landed = true; numEl.textContent = fmt(target); }
    function step(ts) {
      if (landed) return;
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      numEl.textContent = fmt(Math.round(target * e));
      if (k < 1) requestAnimationFrame(step); else landed = true;
    }
    requestAnimationFrame(step);
    setTimeout(land, dur + 260);
  }

  function injectResCss() {
    if (document.getElementById('pd-res-style')) return;
    var css =
      /* Above the exam's own furniture (corner theme/report buttons sit at 420),
         but below the Prestatie melding (520) so a tier earned on the last
         question stays claimable from here. */
      '#pd-res{position:fixed;inset:0;z-index:500;background:#fff;overflow-y:auto;overflow-x:hidden;' +
        'display:none;font-family:inherit;-webkit-overflow-scrolling:touch;}' +
      '#pd-res.pd-res-show{display:block;animation:pd-res-in .28s ease;}' +
      'html.pd-res-live #results-overlay{display:none !important;}' +
      'html.pd-res-live,html.pd-res-live body{overflow:hidden;}' +
      '@keyframes pd-res-in{from{opacity:0}to{opacity:1}}' +
      '.pd-res-in{max-width:620px;margin:0 auto;padding:26px 18px 56px;}' +
      '.pd-res-x{position:fixed;top:14px;right:14px;width:38px;height:38px;border-radius:50%;border:none;' +
        'background:rgba(120,120,128,0.14);color:#3C3C43;cursor:pointer;display:flex;align-items:center;' +
        'justify-content:center;transition:background .15s;z-index:2;}' +
      '.pd-res-x:hover{background:rgba(120,120,128,0.26);}' +
      '.pd-conf-l{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:3;}' +
      '.pd-conf{position:absolute;top:-16px;width:9px;height:14px;opacity:0;' +
        'animation-name:pd-conf-f;animation-timing-function:linear;animation-fill-mode:forwards;}' +
      '@keyframes pd-conf-f{0%{opacity:0;transform:translate3d(0,0,0) rotate(0)}' +
        '8%{opacity:1}85%{opacity:1}100%{opacity:0;transform:translate3d(var(--x),105vh,0) rotate(var(--r))}}' +
      /* hero — kaartloos (Tijmen 07-20): geen bg/rand/schaduw, alleen de inhoud;
         overflow:hidden blijft zodat beams/sparks netjes clippen */
      '.pd-res-hero{position:relative;overflow:hidden;border-radius:24px;padding:26px 22px 28px;text-align:center;}' +
      '@keyframes pd-bnshine{0%{left:-40%}27%{left:110%}100%{left:110%}}' +
      /* drop-in: dezelfde squash-bounce val als de dashboard/shop-tiles.
         fill backwards, nooit both — een blijvende transform slaat :hover/:active dood. */
      '@keyframes pd-drop{' +
        '0%{opacity:0;transform:translateY(var(--dy,-26px)) scaleY(1.04) scaleX(.98);' +
          'animation-timing-function:cubic-bezier(.5,0,.85,.4)}' +
        '30%{opacity:1}' +
        '46%{transform:translateY(3px) scaleY(.93) scaleX(1.03);animation-timing-function:cubic-bezier(.18,.65,.3,1)}' +
        '70%{transform:translateY(-4px) scaleY(1.02) scaleX(.99);animation-timing-function:cubic-bezier(.5,0,.6,1)}' +
        '100%{opacity:1;transform:none}}' +
      '.pd-drop{animation:pd-drop .6s cubic-bezier(.5,0,.85,.4) backwards;animation-delay:var(--dd,0s);}' +
      '.pd-res-glow{position:absolute;left:50%;top:204px;width:430px;height:430px;transform:translate(-50%,-50%);' +
        'background:radial-gradient(closest-side,var(--hc,#58CC02),rgba(255,255,255,0) 72%);opacity:.10;pointer-events:none;}' +
      '.pd-spark{position:absolute;pointer-events:none;opacity:0;' +
        'animation:pd-spark-tw var(--spd,2.6s) ease-in-out var(--spdel,0s) infinite;}' +
      '@keyframes pd-spark-tw{0%,100%{opacity:0;transform:scale(.35) rotate(0deg)}' +
        '50%{opacity:.95;transform:scale(1) rotate(30deg)}}' +
      '.pd-res-hd{position:relative;z-index:1;}' +
      '.pd-res-eyebrow{font-size:11.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;' +
        'color:#8E8E93;margin-bottom:5px;}' +
      '.pd-res-name{font-size:25px;font-weight:800;color:#1C1C1E;margin:0;line-height:1.2;letter-spacing:-.01em;}' +
      '.pd-res-sub{font-size:13.5px;font-weight:600;color:#6E6E73;margin-top:4px;}' +
      '.pd-res-ringwrap{position:relative;z-index:1;display:flex;justify-content:center;margin:20px 0 4px;}' +
      '.pd-res-ring{--rp:0;--rc:#58CC02;position:relative;width:176px;height:176px;border-radius:50%;display:flex;' +
        'align-items:center;justify-content:center;background:conic-gradient(var(--rc) calc(var(--rp)*1%),#EDEDF2 0);' +
        'box-shadow:0 6px 18px rgba(0,0,0,0.10);}' +
      '.pd-res-ring::after{content:"";position:absolute;inset:-5px;border-radius:50%;border:3px solid var(--rc);' +
        'opacity:0;pointer-events:none;}' +
      '.pd-res-ring.pd-land{animation:pd-ring-bump .55s cubic-bezier(.3,1.5,.4,1);}' +
      '.pd-res-ring.pd-land::after{animation:pd-ring-halo .75s ease-out forwards;}' +
      '@keyframes pd-ring-bump{0%{transform:scale(1)}38%{transform:scale(1.075)}100%{transform:scale(1)}}' +
      '@keyframes pd-ring-halo{0%{opacity:.7;transform:scale(1)}100%{opacity:0;transform:scale(1.32)}}' +
      '.pd-res-ring-in{width:136px;height:136px;border-radius:50%;background:#fff;display:flex;flex-direction:column;' +
        'align-items:center;justify-content:center;box-shadow:inset 0 1px 3px rgba(0,0,0,0.08);}' +
      '.pd-res-pct{font-size:42px;font-weight:800;line-height:1;letter-spacing:-.02em;}' +
      '.pd-res-pct span{font-size:24px;}' +
      '.pd-res-den{font-size:12.5px;font-weight:700;color:#8E8E93;margin-top:5px;}' +
      '.pd-res-verd{position:relative;z-index:1;font-size:20px;font-weight:800;margin-top:14px;' +
        'animation:pd-verd-pop .55s cubic-bezier(.2,1.2,.3,1.3) .68s both;}' +
      '@keyframes pd-verd-pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}' +
      '.pd-res-vsub{position:relative;z-index:1;font-size:13.5px;font-weight:600;color:#6E6E73;' +
        'margin-top:3px;line-height:1.45;animation:pd-res-rise .5s ease .82s both;}' +
      /* stat shells: XP / accuratie / tempo (Duolingo-style colored frames) */
      '.pd-res-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;}' +
      '.pd-st{background:var(--sa);border-radius:18px;padding:3px;box-shadow:0 3px 0 var(--sb);' +
        'animation:pd-drop .6s cubic-bezier(.5,0,.85,.4) backwards;animation-delay:var(--sd);}' +
      '.pd-st-l{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;' +
        'text-align:center;padding:5px 4px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}' +
      '.pd-st-in{background:#fff;border-radius:15px;display:flex;align-items:center;justify-content:center;gap:7px;' +
        'padding:13px 6px;font-size:21px;font-weight:800;color:var(--sb);line-height:1;}' +
      '.pd-st-in svg{flex:0 0 auto;}' +
      '.pd-st-sf{font-size:14px;font-weight:800;}' +
      '.pd-res-meta{font-size:12px;font-weight:700;color:#8E8E93;text-align:center;margin-top:10px;}' +
      /* foute vragen — expandable review panel */
      '.pd-fw{background:#fff;border:1.5px solid #E5E5EA;border-radius:20px;margin-top:14px;overflow:hidden;}' +
      '.pd-fw-h{width:100%;display:flex;align-items:center;gap:12px;padding:14px 16px;background:none;border:none;' +
        'cursor:pointer;font-family:inherit;text-align:left;transition:background .15s;}' +
      '.pd-fw-h:hover{background:#FAFAFC;}' +
      '.pd-fw-ic{flex:0 0 auto;width:36px;height:36px;border-radius:12px;background:#FFF2F2;color:#FF4B6E;' +
        'display:flex;align-items:center;justify-content:center;}' +
      '.pd-fw-tt{flex:1;min-width:0;}' +
      '.pd-fw-t{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800;color:#1C1C1E;}' +
      '.pd-fw-n{flex:0 0 auto;min-width:21px;height:21px;padding:0 6px;border-radius:11px;background:#FF4B6E;' +
        'color:#fff;font-size:11.5px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;}' +
      '.pd-fw-s{font-size:12px;font-weight:600;color:#8E8E93;margin-top:2px;}' +
      '.pd-fw-ch{flex:0 0 auto;color:#AEAEB2;transition:transform .4s cubic-bezier(.3,.9,.3,1.2);}' +
      '.pd-fw.pd-open .pd-fw-ch{transform:rotate(180deg);}' +
      '.pd-fw-b{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.3,.9,.25,1);}' +
      '.pd-fw.pd-open .pd-fw-b{grid-template-rows:1fr;}' +
      '.pd-fw-bi{min-height:0;overflow:hidden;}' +
      '.pd-fq{display:flex;align-items:center;gap:10px;padding:11px 16px;border-top:1px solid #F2F2F7;cursor:pointer;' +
        'opacity:0;transform:translateX(-8px);transition:opacity .3s,transform .3s,background .15s;}' +
      '.pd-fw.pd-open .pd-fq{opacity:1;transform:none;transition-delay:calc(var(--i)*45ms),calc(var(--i)*45ms),0s;}' +
      '.pd-fq:hover{background:#F7FBFF;}' +
      '.pd-fq-n{flex:0 0 auto;font-size:11px;font-weight:800;border-radius:8px;padding:4px 8px;' +
        'background:#FFF2F2;color:#E0344F;white-space:nowrap;}' +
      '.pd-fq-n.pd-part{background:#FFF6E5;color:#C77700;}' +
      '.pd-fq-s{flex:1;min-width:0;font-size:12.5px;font-weight:600;color:#6E6E73;line-height:1.45;' +
        'display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}' +
      '.pd-fq-bm{flex:0 0 auto;background:none;border:none;cursor:pointer;padding:6px;border-radius:9px;' +
        'color:#C7C7CC;line-height:0;transition:background .15s,color .15s,transform .15s;}' +
      '.pd-fq-bm:hover{color:#1CB0F6;background:#EBF7FF;}' +
      '.pd-fq-bm:active{transform:scale(.85);}' +
      '.pd-fq-bm.pd-bm-on{color:#1CB0F6;}' +
      '.pd-fq-go{flex:0 0 auto;color:#C7C7CC;transition:color .15s,transform .15s;}' +
      '.pd-fq:hover .pd-fq-go{color:#1CB0F6;transform:translateX(2px);}' +
      '.pd-fw-foot{padding:12px 16px 14px;border-top:1px solid #F2F2F7;}' +
      '.pd-fw-all{width:100%;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;' +
        'border:none;border-radius:14px;background:#EBF7FF;color:#0E85B5;font-family:inherit;font-size:13.5px;' +
        'font-weight:800;cursor:pointer;transition:background .15s,transform .12s,color .15s;}' +
      '.pd-fw-all:hover{background:#D9F0FF;}' +
      '.pd-fw-all:active{transform:scale(.985);}' +
      '.pd-fw-all.pd-done{background:#EAFBE0;color:#46A302;cursor:default;}' +
      '.pd-q-flash{animation:pd-qflash 1.8s ease;}' +
      '@keyframes pd-qflash{0%,100%{box-shadow:0 0 0 0 rgba(28,176,246,0)}' +
        '18%{box-shadow:0 0 0 5px rgba(28,176,246,.45)}60%{box-shadow:0 0 0 5px rgba(28,176,246,.18)}}' +
      /* analysis cards */
      '.pd-res-card{background:#fff;border:1.5px solid #E5E5EA;border-radius:20px;padding:18px 18px 6px;margin-top:14px;}' +
      '.pd-res-card h3{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800;color:#1C1C1E;margin:0 0 3px;}' +
      '.pd-res-card h3 .pd-h3-dot{width:9px;height:9px;border-radius:3px;flex:0 0 auto;}' +
      '.pd-res-note{font-size:12.5px;font-weight:600;color:#8E8E93;margin:0 0 14px;line-height:1.45;}' +
      '.pd-rrow{padding:9px 0 11px;border-bottom:1px solid #F2F2F7;}' +
      '.pd-rrow:last-child{border-bottom:none;}' +
      '.pd-rrow-top{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:7px;}' +
      '.pd-rrow-name{font-size:13.5px;font-weight:700;color:#1C1C1E;display:flex;align-items:center;gap:6px;min-width:0;}' +
      '.pd-rrow-tag{flex:0 0 auto;font-size:9.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;' +
        'color:#C0392B;background:#FFF2F2;border:1px solid #FFD6D3;border-radius:6px;padding:2px 5px;}' +
      '.pd-rrow-val{flex:0 0 auto;font-size:12.5px;font-weight:700;display:flex;align-items:baseline;gap:6px;}' +
      '.pd-rrow-den{color:#8E8E93;font-weight:700;}' +
      '.pd-rbar{display:flex;height:9px;border-radius:5px;overflow:hidden;background:#E5E5EA;}' +
      '.pd-rbar i{display:block;height:100%;transition:width .7s cubic-bezier(.3,.9,.4,1);}' +
      '.pd-rb-c{background:linear-gradient(90deg,#58CC02,#46A302);}' +
      '.pd-rb-w{background:linear-gradient(90deg,#FF6B60,#FF3B30);}' +
      '.pd-res-actions{margin-top:18px;}' +
      '.pd-res-claim{position:relative;overflow:hidden;width:100%;padding:16px;border:none;border-radius:16px;' +
        'background:#58CC02;color:#fff;font-family:inherit;font-size:16px;font-weight:800;letter-spacing:.04em;' +
        'text-transform:uppercase;cursor:pointer;box-shadow:0 5px 0 #46A302;' +
        'transition:transform .12s,box-shadow .12s,filter .15s;display:flex;align-items:center;justify-content:center;gap:9px;}' +
      '.pd-res-claim::after{content:"";position:absolute;top:0;bottom:0;left:-45%;width:30%;transform:skewX(-18deg);' +
        'background:linear-gradient(105deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0) 100%);' +
        'animation:pd-bnshine 3.4s ease-in-out 1.1s infinite;pointer-events:none;}' +
      '.pd-res-claim:hover{filter:brightness(1.06);}' +
      '.pd-res-claim:active{transform:translateY(3px);box-shadow:0 2px 0 #46A302;}' +
      '.pd-res-claim svg{flex:0 0 auto;animation:pd-bolt-wig 2.1s ease-in-out 1.4s infinite;}' +
      '@keyframes pd-bolt-wig{0%,58%,100%{transform:none}66%{transform:rotate(-12deg) scale(1.18)}' +
        '76%{transform:rotate(9deg) scale(1.1)}86%{transform:none}}' +
      '.pd-res-claim.pd-claimed{cursor:default;filter:saturate(.85);transform:none;box-shadow:0 5px 0 #46A302;}' +
      '.pd-res-claim.pd-claimed::after,.pd-res-claim.pd-claimed svg{animation:none;}' +
      '.pd-xchip{position:fixed;left:var(--cx);top:var(--cy);z-index:600;pointer-events:none;display:flex;' +
        'align-items:center;gap:6px;background:#FFC800;color:#7A5800;font-family:inherit;font-size:15px;font-weight:800;' +
        'padding:9px 15px;border-radius:999px;box-shadow:0 4px 0 #E6A800,0 10px 24px rgba(0,0,0,0.16);' +
        'animation:pd-xchip-fly 1s cubic-bezier(.2,.8,.3,1) forwards;}' +
      '.pd-xchip svg{flex:0 0 auto;}' +
      '@keyframes pd-xchip-fly{0%{opacity:0;transform:translate(-50%,-50%) scale(.4)}' +
        '16%{opacity:1;transform:translate(-50%,-95%) scale(1.14)}' +
        '30%{transform:translate(-50%,-110%) scale(1)}' +
        '72%{opacity:1;transform:translate(-50%,-205%) scale(1)}' +
        '100%{opacity:0;transform:translate(-50%,-265%) scale(.9)}}' +
      '.pd-xsp{position:fixed;left:var(--cx);top:var(--cy);width:9px;height:9px;border-radius:2.5px;z-index:599;' +
        'pointer-events:none;animation:pd-xsp-fly .8s cubic-bezier(.15,.8,.35,1) forwards;}' +
      '@keyframes pd-xsp-fly{0%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}' +
        '100%{opacity:0;transform:translate(calc(var(--dx) - 50%),calc(var(--dy) - 50%)) scale(.35) rotate(260deg)}}' +
      '#pd-res.pd-res-out{animation:pd-res-out .4s ease forwards;}' +
      '@keyframes pd-res-out{to{opacity:0;transform:scale(.985)}}' +
      '.pd-res-rise{animation:pd-res-rise .5s cubic-bezier(.2,.9,.3,1.1) both;}' +
      '@keyframes pd-res-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
      /* dark */
      'html.dark #pd-res{background:#1C1C1E;}' +
      'html.dark .pd-res-name{color:#FFFFFF;}' +
      'html.dark .pd-res-sub,html.dark .pd-res-vsub{color:#AEAEB2;}' +
      'html.dark .pd-res-ring{background:conic-gradient(var(--rc) calc(var(--rp)*1%),#48484A 0);}' +
      'html.dark .pd-res-ring-in{background:#1C1C1E;}' +
      'html.dark .pd-res-glow{opacity:.14;}' +
      'html.dark .pd-res-x{background:rgba(255,255,255,0.12);color:#EBEBF0;}' +
      'html.dark .pd-res-x:hover{background:rgba(255,255,255,0.22);}' +
      'html.dark .pd-res-card{background:#2C2C2E;border-color:#3A3A3C;}' +
      'html.dark .pd-res-card h3{color:#FFFFFF;}' +
      'html.dark .pd-st-in{background:#2C2C2E;}' +
      'html.dark .pd-fw{background:#2C2C2E;border-color:#3A3A3C;}' +
      'html.dark .pd-fw-h:hover{background:#333336;}' +
      'html.dark .pd-fw-t{color:#FFFFFF;}' +
      'html.dark .pd-fw-ic{background:rgba(255,75,110,0.16);}' +
      'html.dark .pd-fq{border-top-color:#3A3A3C;}' +
      'html.dark .pd-fq:hover{background:#333336;}' +
      'html.dark .pd-fq-s{color:#AEAEB2;}' +
      'html.dark .pd-fq-n:not(.pd-part){background:rgba(255,75,110,0.16);color:#FF8A9C;}' +
      'html.dark .pd-fq-n.pd-part{background:rgba(255,150,0,0.16);color:#FFB84D;}' +
      'html.dark .pd-fq-bm:hover{background:#48484A;}' +
      'html.dark .pd-fw-foot{border-top-color:#3A3A3C;}' +
      'html.dark .pd-fw-all:not(.pd-done){background:rgba(28,176,246,0.16);color:#7FD3FF;}' +
      'html.dark .pd-fw-all:not(.pd-done):hover{background:rgba(28,176,246,0.26);}' +
      'html.dark .pd-fw-all.pd-done{background:rgba(88,204,2,0.16);color:#8EE55C;}' +
      'html.dark .pd-rrow{border-bottom-color:#3A3A3C;}' +
      'html.dark .pd-rrow-name{color:#EBEBF0;}' +
      'html.dark .pd-rbar{background:#48484A;}' +
      'html.dark .pd-rrow-tag{color:#FF8A80;background:rgba(255,59,48,0.14);border-color:rgba(255,59,48,0.35);}' +
      '@media (max-width:560px){.pd-res-in{padding:20px 14px 48px;}.pd-res-name{font-size:21px;}' +
        '.pd-res-ring{width:158px;height:158px;}.pd-res-ring-in{width:122px;height:122px;}.pd-res-pct{font-size:37px;}' +
        '.pd-res-stats{gap:8px;}.pd-st-in{font-size:17px;padding:11px 5px;gap:5px;}' +
        '.pd-st-l{font-size:9px;letter-spacing:.05em;}.pd-fq-s{font-size:12px;}}' +
      '@media (prefers-reduced-motion:reduce){#pd-res *,#pd-res{animation:none !important;transition:none !important;}' +
        '.pd-conf-l{display:none;}.pd-spark{display:none;}.pd-xchip,.pd-xsp{display:none;}}';
    var el = document.createElement('style');
    el.id = 'pd-res-style'; el.textContent = css;
    document.head.appendChild(el);
  }

  var CONF_COLS = ['#FFC800', '#58CC02', '#1CB0F6', '#FF4B6E', '#CE82FF', '#00CD9C'];
  function resConfetti(host, n) {
    host.innerHTML = '';
    for (var i = 0; i < n; i++) {
      var p = document.createElement('i');
      p.className = 'pd-conf';
      p.style.left = (Math.random() * 100).toFixed(1) + '%';
      p.style.background = CONF_COLS[i % CONF_COLS.length];
      p.style.setProperty('--x', (Math.random() * 180 - 90).toFixed(0) + 'px');
      p.style.setProperty('--r', (Math.random() * 900 - 450).toFixed(0) + 'deg');
      p.style.animationDelay = (Math.random() * 0.55).toFixed(2) + 's';
      p.style.animationDuration = (2.3 + Math.random() * 1.5).toFixed(2) + 's';
      if (i % 3 === 0) { p.style.borderRadius = '50%'; p.style.height = '9px'; }
      host.appendChild(p);
    }
    setTimeout(function () { try { host.innerHTML = ''; } catch (e) {} }, 4600);
  }

  /* Twinkling four-point sparkles dotted around the score ring (gold + score colour). */
  function resSparks(col) {
    var STAR = 'M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z';
    var spots = [
      [15, 148, 15, 0.2, 2.4], [82, 158, 12, 0.9, 2.8], [9, 236, 11, 1.5, 2.6],
      [88, 248, 16, 0.5, 2.3], [22, 302, 10, 1.2, 3.0], [74, 116, 10, 1.8, 2.7]
    ];
    return spots.map(function (s, i) {
      return '<svg class="pd-spark" style="left:' + s[0] + '%;top:' + s[1] + 'px;--spdel:' + s[3] + 's;--spd:' + s[4] + 's" ' +
        'width="' + s[2] + '" height="' + s[2] + '" viewBox="0 0 24 24" fill="' + (i % 2 ? col : '#FFC800') + '">' +
        '<path d="' + STAR + '"/></svg>';
    }).join('');
  }

  /* Count the ring + the big number up from 0. rAF is throttled in background
     tabs, so a timeout always lands the final value. */
  function resTween(ring, numEl, pct) {
    var t0 = 0, DUR = 950, landed = false;
    function land() {
      landed = true; ring.style.setProperty('--rp', pct); numEl.textContent = pct;
      ring.classList.add('pd-land');   // bump + halo when the count lands (idempotent)
    }
    function step(ts) {
      if (landed) return;      // the timeout already finished it — never re-animate
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / DUR);
      var e = 1 - Math.pow(1 - k, 3);
      ring.style.setProperty('--rp', (pct * e).toFixed(2));
      numEl.textContent = Math.round(pct * e);
      if (k < 1) requestAnimationFrame(step); else { landed = true; ring.classList.add('pd-land'); }
    }
    requestAnimationFrame(step);
    setTimeout(land, DUR + 260);
  }

  function hideRes() {
    var el = document.getElementById('pd-res');
    if (el) el.classList.remove('pd-res-show');
    document.documentElement.classList.remove('pd-res-live');
  }

  function renderResults() {
    injectResCss();
    var blocks = document.querySelectorAll('.q-block');
    if (!blocks.length) return false;

    var ans       = readAnswered();
    var isMission = !!window.__MPARAMS;
    var total     = blocks.length;

    var all = resTally(), byType = {}, order = [], xp = 0, wrongs = [];
    for (var i = 0; i < blocks.length; i++) {
      var qn = qnumOfBlock(blocks[i]);
      var v  = ans[qn] || ans[String(qn)] || '';
      var t  = resQType(blocks[i]);
      if (!byType[t]) { byType[t] = resTally(); order.push(t); }
      resAdd(all, v); resAdd(byType[t], v);
      if (v === 'correct') {
        // Mirror awardXP: data-points (default 1) × 10.
        var pe = blocks[i].querySelector('.q-points');
        var pts = pe ? parseInt(pe.getAttribute('data-points'), 10) : 1;
        xp += (pts > 0 ? pts : 1) * 10;
      } else if (v === 'wrong' || v === 'partial') {
        var te = blocks[i].querySelector('.q-text');
        var txt = te ? te.textContent.replace(/\s+/g, ' ').trim() : '';
        if (txt.length > 130) txt = txt.slice(0, 130).replace(/\s+\S*$/, '') + '…';
        var pb = blocks[i].querySelector('.pd-bm');
        wrongs.push({ qn: qn, v: v, txt: txt, saved: !!(pb && pb.classList.contains('pd-bm-on')) });
      }
    }
    var pct = total ? Math.round(all.correct / total * 100) : 0;
    var col = resColor(pct);
    var vd  = resVerdict(pct, isMission);
    var ti  = resTitles();

    var el = document.getElementById('pd-res');
    if (!el) {
      el = document.createElement('div');
      el.id = 'pd-res';
      document.body.appendChild(el);
    }

    // ── Stat shells: XP verdiend / accuratie / tempo ───────────────────────
    var secs = timeStop();
    var colD = { '#58CC02': '#46A302', '#FFC800': '#E6A800', '#FF9600': '#D97F00', '#FF4B6E': '#E0344F' }[col] || '#46A302';
    var statsH =
      '<div class="pd-res-stats">' +
        '<div class="pd-st" style="--sa:#FFC800;--sb:#E6A800;--sd:.5s"><div class="pd-st-l">XP verdiend</div>' +
          '<div class="pd-st-in"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">' +
          '<path d="M13 2 4.6 13.4h4.9L11 22l8.4-11.4h-4.9L13 2z"/></svg><b id="pd-st-xp">0</b></div></div>' +
        '<div class="pd-st" style="--sa:' + col + ';--sb:' + colD + ';--sd:.58s"><div class="pd-st-l">Accuratie</div>' +
          '<div class="pd-st-in"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">' +
          '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.2"/>' +
          '<circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/></svg>' +
          '<b id="pd-st-acc">0</b><span class="pd-st-sf">%</span></div></div>' +
        '<div class="pd-st" style="--sa:#1CB0F6;--sb:#0E85B5;--sd:.66s"><div class="pd-st-l">Tempo</div>' +
          '<div class="pd-st-in"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5V9.8"/>' +
          '<path d="M9.5 2.5h5"/><path d="M12 2.5V6"/></svg><b>' + resFmtTime(secs) + '</b></div></div>' +
      '</div>';
    var metaBits = [];
    if (all.other) metaBits.push(all.other + ' niet beoordeeld');
    if (all.todo)  metaBits.push(all.todo + ' niet gemaakt');
    var metaH = metaBits.length
      ? '<div class="pd-res-meta pd-res-rise" style="animation-delay:.82s">' + metaBits.join(' · ') + '</div>' : '';

    // ── Foute vragen: expandable review panel ──────────────────────────────
    var fwH = '';
    if (wrongs.length) {
      fwH = '<div class="pd-fw pd-res-rise" id="pd-fw" style="animation-delay:.88s">' +
        '<button class="pd-fw-h" type="button" aria-expanded="false">' +
          '<span class="pd-fw-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
            '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg></span>' +
          '<span class="pd-fw-tt"><span class="pd-fw-t">Foute vragen bekijken' +
            '<span class="pd-fw-n">' + wrongs.length + '</span></span>' +
          '<span class="pd-fw-s">Bekijk je fouten, sla ze op of spring terug naar de vraag.</span></span>' +
          '<span class="pd-fw-ch"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>' +
        '</button>' +
        '<div class="pd-fw-b"><div class="pd-fw-bi">' +
          wrongs.map(function (w, i) {
            return '<div class="pd-fq" data-qn="' + w.qn + '" style="--i:' + i + '" role="button" tabindex="0">' +
              '<span class="pd-fq-n' + (w.v === 'partial' ? ' pd-part' : '') + '">Vraag ' + w.qn +
                (w.v === 'partial' ? ' · deels' : '') + '</span>' +
              '<span class="pd-fq-s">' + (w.txt ? resEsc(w.txt) : 'Bekijk deze vraag') + '</span>' +
              '<button class="pd-fq-bm' + (w.saved ? ' pd-bm-on' : '') + '" type="button" title="Vraag opslaan" ' +
                'aria-label="Vraag opslaan">' + BM_SVG + '</button>' +
              '<span class="pd-fq-go"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
                'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></span>' +
            '</div>';
          }).join('') +
          '<div class="pd-fw-foot"><button class="pd-fw-all" type="button" id="pd-fw-all">' +
            BM_SVG + '<span>Alle foute vragen opslaan</span></button></div>' +
        '</div></div></div>';
    }

    var h =
      '<div class="pd-conf-l" id="pd-conf-l"></div>' +
      '<button class="pd-res-x" type="button" aria-label="Sluiten">' +
        '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
        'stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button>' +
      '<div class="pd-res-in">' +
        '<div class="pd-res-hero" style="--hc:' + col + '">' + '<div class="pd-res-glow"></div>' + resSparks(col) +
          '<div class="pd-res-hd">' +
            '<div class="pd-res-eyebrow pd-drop">' + resEsc(ti.eyebrow) + '</div>' +
            '<h1 class="pd-res-name pd-drop" style="--dd:.06s">' + resEsc(ti.name) + '</h1>' +
            (ti.sub ? '<div class="pd-res-sub pd-drop" style="--dd:.12s">' + resEsc(ti.sub) + '</div>' : '') +
          '</div>' +
          '<div class="pd-res-ringwrap pd-drop" style="--dd:.22s;--dy:-40px">' +
            '<div class="pd-res-ring" id="pd-res-ring" style="--rc:' + col + '">' +
            '<div class="pd-res-ring-in">' +
              '<div class="pd-res-pct" style="color:' + col + '"><b id="pd-res-pctn">0</b><span>%</span></div>' +
              '<div class="pd-res-den">' + all.correct + ' van ' + total + ' goed</div>' +
            '</div></div></div>' +
          '<div class="pd-res-verd" style="color:' + col + '">' + resEsc(vd[0]) + '</div>' +
          '<div class="pd-res-vsub">' + resEsc(vd[1]) + '</div>' +
        '</div>' +
        statsH + metaH + fwH +
        '<div id="pd-res-topics"></div>' +
        '<div id="pd-res-types"></div>' +
        '<div class="pd-res-actions pd-res-rise" style="animation-delay:.96s">' +
          '<button class="pd-res-claim" type="button" id="pd-res-claim">' +
            '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">' +
            '<path d="M13 2 4.6 13.4h4.9L11 22l8.4-11.4h-4.9L13 2z"/></svg><span>Claim XP</span></button>' +
        '</div>' +
      '</div>';
    el.innerHTML = h;

    el.querySelector('.pd-res-x').addEventListener('click', function () {
      if (typeof window.closeResults === 'function') window.closeResults(); else hideRes();
    });
    var claim = el.querySelector('#pd-res-claim');
    claim.addEventListener('click', function () {
      if (claim.classList.contains('pd-claimed')) return;
      claim.classList.add('pd-claimed');
      // Same destination as the header "Menu" link — setupBackReturn() may have
      // already pointed it back at the dashboard tab we came from. XP itself was
      // already awarded per question; this claim moment is the send-off.
      var a = document.querySelector('a.back-btn');
      var href = (a && a.getAttribute('href')) || (window.__MPARAMS ? 'dashboard.html' : 'vumed.html');
      var r = claim.getBoundingClientRect();
      var cx = (r.left + r.width / 2).toFixed(0) + 'px', cy = (r.top + r.height / 2).toFixed(0) + 'px';
      var SPARK_COLS = ['#FFC800', '#58CC02', '#FFDE59', '#8EE55C'];
      for (var i = 0; i < 16; i++) {
        var s = document.createElement('i');
        s.className = 'pd-xsp';
        s.style.setProperty('--cx', cx); s.style.setProperty('--cy', cy);
        var ang = Math.random() * Math.PI * 2, dist = 55 + Math.random() * 95;
        s.style.setProperty('--dx', (Math.cos(ang) * dist).toFixed(0) + 'px');
        s.style.setProperty('--dy', (Math.sin(ang) * dist * 0.8 - 25).toFixed(0) + 'px');
        s.style.background = SPARK_COLS[i % SPARK_COLS.length];
        s.style.animationDelay = (Math.random() * 0.1).toFixed(2) + 's';
        document.body.appendChild(s);
      }
      if (xp > 0) {
        var chip = document.createElement('div');
        chip.className = 'pd-xchip';
        chip.style.setProperty('--cx', cx); chip.style.setProperty('--cy', cy);
        chip.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="#7A5800">' +
          '<path d="M13 2 4.6 13.4h4.9L11 22l8.4-11.4h-4.9L13 2z"/></svg>+' + xp + ' XP';
        document.body.appendChild(chip);
      }
      claim.innerHTML = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>Geclaimd!</span>';
      setTimeout(function () { el.classList.add('pd-res-out'); }, 560);
      setTimeout(function () { location.href = href; }, 940);
    });

    el.classList.add('pd-res-show');
    document.documentElement.classList.add('pd-res-live');
    el.scrollTop = 0;

    resTween(el.querySelector('#pd-res-ring'), el.querySelector('#pd-res-pctn'), pct);
    // Shells droppen pas op ~.5s — start de tellers als ze landen, anders mis je de count-up.
    setTimeout(function () {
      resCount(el.querySelector('#pd-st-xp'), xp, 900, function (v) { return '+' + v; });
      resCount(el.querySelector('#pd-st-acc'), pct, 900);
    }, 520);
    if (pct >= 70) resConfetti(el.querySelector('#pd-conf-l'), 34);

    // ── Foute-vragen paneel: uitklappen, terugspringen, opslaan ────────────
    var fw = el.querySelector('#pd-fw');
    if (fw) {
      var fwh = fw.querySelector('.pd-fw-h');
      fwh.addEventListener('click', function () {
        var open = fw.classList.toggle('pd-open');
        fwh.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      var blockOf = function (qn) {
        return document.getElementById('qblock-' + qn) || document.querySelectorAll('.q-block')[qn - 1] || null;
      };
      // Mirror a row star onto the in-question ribbon (now, and again once the
      // optimistic Supabase write has settled or been reverted).
      var syncRibbon = function (qn, bm) {
        var apply = function () {
          var pb2 = blockOf(qn); pb2 = pb2 && pb2.querySelector('.pd-bm');
          if (pb2) pb2.classList.toggle('pd-bm-on', bm.classList.contains('pd-bm-on'));
        };
        setTimeout(apply, 0); setTimeout(apply, 1600);
      };
      [].forEach.call(fw.querySelectorAll('.pd-fq'), function (row) {
        var go = function () {
          var qn = parseInt(row.getAttribute('data-qn'), 10);
          var blk = blockOf(qn);
          if (typeof window.closeResults === 'function') window.closeResults(); else hideRes();
          if (blk) {
            try { blk.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { blk.scrollIntoView(); }
            blk.classList.remove('pd-q-flash'); void blk.offsetWidth; blk.classList.add('pd-q-flash');
          }
        };
        row.addEventListener('click', go);
        row.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); go(); }
        });
        var bm = row.querySelector('.pd-fq-bm');
        bm.addEventListener('click', function (ev) {
          ev.stopPropagation();
          var qn = parseInt(row.getAttribute('data-qn'), 10);
          toggleBookmark(qn, bm);
          syncRibbon(qn, bm);
        });
      });
      var allBtn = fw.querySelector('#pd-fw-all');
      if (allBtn) allBtn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        if (allBtn.classList.contains('pd-done')) return;
        var sb = (typeof window.getSB === 'function') ? window.getSB() : null;
        if (!sb) { pdToast('Log in om vragen op te slaan'); return; }
        _uid(sb).then(function (uid) {
          if (!uid) { pdToast('Log in om vragen op te slaan'); return; }
          var ek = examKeyOf();
          var rows = wrongs.map(function (w) { return { user_id: uid, exam_key: ek, qnum: w.qn }; });
          return sb.from('saved_questions').upsert(rows, { onConflict: 'user_id,exam_key,qnum' })
            .then(function (res) {
              if (res && res.error) throw res.error;
              allBtn.classList.add('pd-done');
              allBtn.querySelector('span').textContent = 'Alle foute vragen opgeslagen';
              [].forEach.call(fw.querySelectorAll('.pd-fq'), function (row) {
                var qn = parseInt(row.getAttribute('data-qn'), 10);
                var bm = row.querySelector('.pd-fq-bm');
                if (bm) { bm.classList.add('pd-bm-on'); syncRibbon(qn, bm); }
              });
              pdToast(rows.length + (rows.length === 1 ? ' vraag opgeslagen' : ' vragen opgeslagen'));
            });
        }).catch(function () { pdToast('Opslaan mislukt'); });
      });
    }

    // ── Analyse: tentamens only ────────────────────────────────────────────
    if (!isMission) {
      var types = order.filter(function (t) { return resDone(byType[t]) > 0; });
      if (types.length > 1) {
        types.sort(function (a, b) { return resPct(byType[a]) - resPct(byType[b]); });
        var tw = document.getElementById('pd-res-types');
        if (tw) {
          var tTag = resTagIdx(types.map(function (t) { return byType[t]; }));
          tw.className = 'pd-res-card pd-res-rise';
          tw.style.animationDelay = '.2s';
          tw.innerHTML = '<h3><span class="pd-h3-dot" style="background:#CE82FF"></span>Per vraagtype</h3>' +
            '<p class="pd-res-note">Waar de punten blijven liggen per soort vraag.</p>' +
            types.map(function (t, i) {
              return resRow(RES_TYPE_LABEL[t] || t, byType[t], i === tTag ? 'focus' : '');
            }).join('');
        }
      }

      resLoadTopics().then(function (map) {
        if (!map) return;
        // exam_topics.json is keyed the way topic_index.json was built (by file
        // name). That IS the live EXAM_KEY for almost every exam, but the 12
        // Hematologie files are hematologie_en_oncologie_*.html with EXAM_KEY
        // 'ho_*' — so fall back to the file name before giving up.
        var fileKey = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
        var tm = map[examKeyOf()] || map[fileKey];
        if (!tm) return;
        var rows = [];
        for (var name in tm) {
          var st = resTally();
          tm[name].forEach(function (n) { resAdd(st, ans[n] || ans[String(n)] || ''); });
          if (resDone(st) > 0) rows.push([name, st]);
        }
        if (rows.length < 2) return;
        rows.sort(function (a, b) { return resPct(a[1]) - resPct(b[1]) || resN(b[1]) - resN(a[1]); });
        var oTag = resTagIdx(rows.map(function (r) { return r[1]; }));
        var ow = document.getElementById('pd-res-topics');
        if (!ow) return;
        ow.className = 'pd-res-card pd-res-rise';
        ow.style.animationDelay = '.16s';
        ow.innerHTML = '<h3><span class="pd-h3-dot" style="background:#1CB0F6"></span>Per onderwerp</h3>' +
          '<p class="pd-res-note">' + (oTag > -1
            ? 'Zwakste onderwerpen eerst — begin bij het gemarkeerde onderwerp.'
            : 'Alle onderwerpen op orde. Netjes.') + '</p>' +
          rows.map(function (r, i) { return resRow(r[0], r[1], i === oTag ? 'focus' : ''); }).join('');
      }).catch(function () {});
    }
    return true;
  }

  function setupResults() {
    if (!document.querySelector('.q-block')) return;   // exam / mission pages only
    var orig = window.showResults;
    var _tadaaPlayed = false;   // submit → reopen must not replay the fanfare
    window.showResults = function () {
      var r;
      // Let the page's own showResults run first: it closes the submit modal and
      // carries per-runtime side effects (Supabase completion upsert, streak RPC).
      try { if (typeof orig === 'function') r = orig.apply(this, arguments); } catch (e) {}
      if (!_tadaaPlayed) {
        _tadaaPlayed = true;
        try { var _ta = new Audio('sound_tadaa.mp3'); _ta.volume = 0.8; _ta.play().catch(function(){}); } catch (e) {}
      }
      // Freeze the exam clock first — renderResults reads the frozen value, and
      // submitting resets progress so the next run starts a new clock.
      try { timeStop(); } catch (e) {}
      // On any failure we simply don't hide the built-in overlay, so the student
      // still sees their score.
      try { renderResults(); } catch (e) {}
      return r;
    };
    var origClose = window.closeResults;
    window.closeResults = function () {
      try { if (typeof origClose === 'function') origClose.apply(this, arguments); } catch (e) {}
      hideRes();
    };
  }

  function init() {
    setupLanding();   // always run the entrance reveal (independent of the bar)
    try { setupResults(); } catch (e) {}   // richer "Jouw resultaten" page (wraps the built-in overlay)
    try { setupTimeTrack(); } catch (e) {}   // actieve-tijd klok → "Tempo" stat op de resultatenpagina
    try { setupBackReturn(); } catch (e) {}   // route "Menu" back to the dashboard tab we came from
    try { setupCorners(); } catch (e) {}   // theme + report buttons (independent of the bar)
    try { setupPanelSwipe(); } catch (e) {}   // phone: swipe to hide/reveal glossary + AI chat panels
    try { setupPhoneChat(); } catch (e) {}    // phone: chat keyboard behaviour (no auto-focus/zoom, viewport pin)
    try { setupAnswerTerms(); } catch (e) {}   // answer-option → term-bank stars (independent of the bar)
    try { setupBookmarks(); } catch (e) {}   // per-question save star (independent of the bar)
    try { if (/^pak_/.test(examKeyOf())) setupCatButtons(); } catch (e) {}   // PAK: categorize rows → visible option buttons
    try { Ach.load(); } catch (e) {}   // Prestaties: watch for tier crossings → claimable legendary chests
    setTimeout(function () { try { Ach.load(); } catch (e) {} }, 1200);   // retry once getSB/session are ready
    // Baseline AFTER restore actually finishes, not on a fixed timer. On slow
    // native cold starts the async Supabase restore can land well past 900ms; a
    // fixed-delay snapshot would capture 0 and then re-count every restored answer
    // (inflating the daily goal + wrongly awarding gems / draining hearts). The
    // exam runtime mirrors its `_restoring` flag onto window, so poll until it
    // clears (max ~6s), then snapshot.
    (function baselineAfterRestore(tries) {
      if (window._restoring && (tries || 0) < 40) { setTimeout(function () { baselineAfterRestore((tries || 0) + 1); }, 150); return; }
      if (_pdSeen === null) _pdSeen = _answeredCount();
      if (_pdStatus === null) _pdStatus = Object.assign({}, _answeredMap());
    })(0);

    var wrap = document.getElementById('streak-wrap');
    if (!wrap) return;
    var barWrap = wrap.querySelector('.streak-bar-wrap');
    var bg      = wrap.querySelector('.streak-bar-bg');
    if (!barWrap || !bg) return;

    var blocks = document.querySelectorAll('.q-block');
    var N = blocks.length;
    if (N === 0) return;

    injectCss();

    var dotsRow = document.createElement('div');
    dotsRow.className = 'pd-dots';
    var dots = [];
    for (var i = 0; i < N; i++) {
      var d = document.createElement('button');
      d.type = 'button';
      d.className = 'pd-dot';
      d.setAttribute('aria-label', 'Ga naar vraag ' + (i + 1));
      d.style.setProperty('--pd-d', (i * 0.014).toFixed(3) + 's');
      d.addEventListener('click', onDotClick);
      dotsRow.appendChild(d);
      dots.push(d);
    }
    barWrap.appendChild(dotsRow);
    barWrap.classList.add('pd-active');

    // ── Hover-revealed "Examen resetten" button ───────────────────────────
    // The dots shadow the old click-anywhere-on-the-bar reset, so hovering
    // the bar drops a pill below it that opens the existing reset modal.
    // Shown/hidden via a JS class with a short grace period, so the pointer
    // can cross the gap between bar and button without it vanishing.
    var resetWrap = document.createElement('div');
    resetWrap.className = 'pd-reset-wrap';
    var resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'pd-reset-btn';
    resetBtn.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="1 4 1 10 7 10"></polyline>' +
      '<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>' +
      '<span>Examen resetten</span>';
    resetBtn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      if (typeof window.openResetModal === 'function') window.openResetModal();
    });
    resetWrap.appendChild(resetBtn);
    barWrap.appendChild(resetWrap);

    var resetHideT = null;
    barWrap.addEventListener('mouseenter', function () {
      clearTimeout(resetHideT);
      barWrap.classList.add('pd-show-reset');
    });
    barWrap.addEventListener('mouseleave', function () {
      clearTimeout(resetHideT);
      resetHideT = setTimeout(function () {
        barWrap.classList.remove('pd-show-reset');
      }, 240);
    });

    // ── Touch fallback ────────────────────────────────────────────────────
    // Phones (native app + mobile PWA) have no hover, so the dots and reset
    // pill were unreachable: you could neither jump between questions nor reset
    // the exam/mission. A tap on the bar now toggles them into view (mirrors the
    // desktop hover). A tap on a dot navigates; a tap on the pill resets; a tap
    // anywhere else closes it. We stop the tap from bubbling to #streak-wrap's
    // click-to-reset so a plain bar tap only reveals (never resets by accident).
    var _isTouch = false;
    try { _isTouch = !!(window.matchMedia && matchMedia('(hover: none), (pointer: coarse)').matches); } catch (e) {}
    if (_isTouch) {
      barWrap.addEventListener('click', function (ev) {
        if (ev.target && ev.target.closest &&
            (ev.target.closest('.pd-dot') || ev.target.closest('.pd-reset-btn'))) return;
        ev.stopPropagation();
        ev.preventDefault();
        if (barWrap.classList.contains('pd-tap')) {
          barWrap.classList.remove('pd-tap', 'pd-show-reset');
        } else {
          barWrap.classList.add('pd-tap', 'pd-show-reset');
        }
      });
      document.addEventListener('click', function (ev) {
        if (!barWrap.classList.contains('pd-tap')) return;
        if (barWrap.contains(ev.target)) return;
        barWrap.classList.remove('pd-tap', 'pd-show-reset');
      }, true);
    }

    function onDotClick(ev) {
      ev.stopPropagation();          // don't bubble to #streak-wrap (reset modal)
      ev.preventDefault();
      var idx = dots.indexOf(this);
      var target = document.querySelectorAll('.q-block')[idx];
      if (target) scrollToEl(target);
    }

    function scrollToEl(el) {
      try { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      catch (e) { el.scrollIntoView(); }
    }

    function sizeDots() {
      var w = bg.getBoundingClientRect().width || 560;
      var slot = w / N;
      var sz = Math.max(5, Math.min(slot - 2, 18));
      dotsRow.style.setProperty('--pd-sz', sz.toFixed(1) + 'px');
    }
    // --pd-sz is read from the dots row; expose it there for the dots' ::before.
    // (custom props inherit, so setting on the row reaches every .pd-dot::before)

    function refreshDots() {
      var ans = readAnswered();
      var empty = isDark() ? '#48484A' : COLORS.empty;
      for (var i = 0; i < dots.length; i++) {
        var st = ans[String(i + 1)] || ans[i + 1];
        dots[i].style.setProperty('--dc', COLORS[st] || empty);
      }
    }
    _refreshDots = refreshDots;   // let the theme toggle recolour the dots

    // Keep colours in sync with every bar update the exam performs.
    if (typeof window.updateStreakBar === 'function') {
      var orig = window.updateStreakBar;
      window.updateStreakBar = function () {
        var r = orig.apply(this, arguments);
        try { refreshDots(); } catch (e) {}
        try { bumpDaily(); } catch (e) {}
        try { bumpCurrencies(); } catch (e) {}
        return r;
      };
    }

    sizeDots();
    refreshDots();
    window.addEventListener('resize', sizeDots);
    // Catch the async Supabase restore that lands after load.
    setTimeout(refreshDots, 600);
    setTimeout(refreshDots, 1500);

    // ── Intro timeline ────────────────────────────────────────────────────
    // 1. circles appear left→right (staggered pop, grey)
    // 2. mid-appear, a green wave sweeps left→right (solid green, no glow)
    // 3. once all green, they collectively turn grey again
    // 4. the grey circles flow together and fuse into the progress bar
    var STAG   = 14;                          // ms between dots (matches --pd-d step)
    var sweep  = N * STAG;                    // time for a wave to cross all dots
    var tGreen = 650;                         // grey circles pop, hold a beat, THEN green wave
    var tGray  = tGreen + sweep + 300;        // all green reached → collective grey
    var tMerge = tGray + 360;                 // grey settles → organic meld
    var tEnd   = tMerge + 560;                // meld done → resting bar

    void dotsRow.offsetWidth;                 // commit scale(0) so the pop transitions
    barWrap.classList.add('pd-split', 'pd-stagger');           // appear, staggered, grey
    setTimeout(function () { barWrap.classList.add('pd-green'); }, tGreen);   // green wave
    setTimeout(function () {
      barWrap.classList.remove('pd-stagger'); // collective from here (no per-dot delay)
      barWrap.classList.remove('pd-green');   // → all turn grey together
    }, tGray);
    setTimeout(function () { barWrap.classList.add('pd-merge'); }, tMerge);   // organic meld
    setTimeout(function () {
      barWrap.classList.remove('pd-split', 'pd-merge');        // resting = merged bar
    }, tEnd);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
