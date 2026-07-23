/* missionview.js — one-question-at-a-time view for mission pages (missie.html).
 *
 * Loaded after progressdots.js / openreview.js on missie.html only (wired in
 * build_missions.py's build_missie_page). Mission pages show ONE question that
 * fills the screen: the page itself cannot scroll (a tall question scrolls
 * inside .exam-main), answering cross-fades to the next question, and the
 * progress-dot bar in the header is the way to jump between questions (clicking
 * a dot switches the visible question instead of scrolling; ←/→ arrow keys too).
 *
 * Duolingo-style retry loop: the mission is a "lesson". You answer every
 * question once (round 1); any you got wrong are then re-asked (reset so you can
 * try again) and keep coming back until every question is answered correctly —
 * then the results screen finishes the lesson. Mastery = a closed question
 * answered correct, or an open (essay) question attempted at all. nextToPresent()
 * drives the order; resetQuestion() undoes the runtime's per-question lock.
 *
 * It layers on top of the standard exam runtime without changing it:
 * - window.resolveCheckBtn is wrapped to detect "answered correct" (all
 *   question types funnel through it); _restoring guards restore replays.
 * - Dot clicks are intercepted in the capture phase so progressdots' own
 *   scrollIntoView handler never runs here.
 * - Dot colours are repainted with the REAL qnums (mission qnums are qbank
 *   gids, not 1..N, so progressdots' index-based refreshDots can't see them).
 * - Fades use CSS transitions (not animations) because progressdots'
 *   revealAllLanding() failsafe sets inline `animation:none` on every block.
 */
(function () {
  'use strict';
  if (!window.__MPARAMS) return;                       // mission pages only

  var blocks = [].slice.call(document.querySelectorAll('.q-block'));
  if (!blocks.length) return;

  var qnums = blocks.map(function (b) {
    var m = (b.id || '').match(/^qblock-(\d+)$/);
    return m ? m[1] : '';
  });

  /* ── Initialise drag-and-drop questions ─────────────────────────────────
     Mission questions are injected via innerHTML, which does NOT run their
     inline <script> — so the dndInit(n,[...]) call that builds a DnD question's
     card pool never fires. Run those calls now (this script loads after the
     runtime that defines dndInit, and before DOMContentLoaded restore, so
     _dnd[n] exists when a saved answer is replayed). */
  (function initDnd() {
    if (typeof window.dndInit !== 'function') return;
    var scripts = document.querySelectorAll('#mission-slot script');
    for (var i = 0; i < scripts.length; i++) {
      var t = scripts[i].textContent || '';
      var a = t.indexOf('function(){'), b = t.lastIndexOf('});');
      if (a < 0 || b <= a) continue;
      var call = t.slice(a + 'function(){'.length, b);   // e.g. dndInit(118, ["A","B","C","D"]);
      if (call.indexOf('dndInit') === -1) continue;
      try { (0, eval)(call); } catch (e) {}
    }
  })();

  var FADE = 280;          // must match the CSS transition duration below
  var ADVANCE_DELAY = 1200; // correct: green pop + XP animation get to finish first
  var WRONG_DELAY = 2100;   // wrong: linger so the correct answer is visible first

  /* ── Styles ─────────────────────────────────────────────────────────── */
  var css =
    'html.mv, html.mv body { height: 100%; overscroll-behavior: none; }' +
    'html.mv body { overflow: hidden; overscroll-behavior: none; }' +
    /* .exam-main keeps overflow-y:auto so a genuinely tall question can still scroll,
       but overscroll-behavior:none kills the rubber-band bounce — so a question that
       fits the screen can't be pulled/bounced even a tiny bit (Tijmen 2026-07-12). */
    'html.mv .exam-main { margin-top: 48px; height: calc(100vh - 48px); height: calc(100dvh - 48px);' +
    ' overflow-y: auto; overscroll-behavior: none; padding-top: 0; padding-bottom: 0; }' +
    'html.mv #mission-slot { min-height: 100%; display: flex; flex-direction: column; }' +
    'html.mv .q-block { display: none; border-bottom: none;' +
    ' transition: opacity ' + FADE + 'ms ease, transform ' + FADE + 'ms ease; }' +
    /* auto top/bottom margins centre a short question and never clip a tall one */
    'html.mv .q-block.mv-active { display: block; margin-top: auto; margin-bottom: auto;' +
    ' padding-top: 24px; padding-bottom: 44px; }' +
    /* opacity needs !important to beat revealAllLanding's inline opacity:1 */
    'html.mv .q-block.mv-enter { opacity: 0 !important; transform: translateY(16px); }' +
    'html.mv .q-block.mv-leave { opacity: 0 !important; transform: translateY(-12px); }' +
    'html.mv .pd-dot.mv-cur::before { box-shadow: 0 0 0 2px rgba(28,176,246,0.55); }' +
    /* Missions have NO exam-reset: hide the reset pill and kill the bar's
       click-to-reset affordance (the function itself is neutralised below). */
    'html.mv .pd-reset-wrap { display: none !important; }' +
    'html.mv #streak-wrap { cursor: default !important; }';
  var st = document.createElement('style');
  st.id = 'mv-style';
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.classList.add('mv');

  /* Missions must not be resettable. Both reset entry points — the #streak-wrap
     inline onclick and progressdots' reset pill — call window.openResetModal at
     CLICK time, and this script runs after openResetModal is defined in the page,
     so overriding it to a no-op disables every path. */
  window.openResetModal = function () {};
  try { var _sw = document.getElementById('streak-wrap'); if (_sw) _sw.removeAttribute('title'); } catch (e) {}

  /* De examen-runtime zet onderaan <main> een "Examen inleveren"-knop. In een
     missie hoort die er niet: je levert geen missie in, je speelt 'm uit. Hij
     stond bovendien ONDER #mission-slot (min-height:100%), dus hij verscheen
     onder ELKE vraag én maakte .exam-main altijd ~108px te hoog — dat was de
     grijze scrollbar die permanent rechts in beeld stond. De wrapper (een
     naamloze div met eigen marges) moet mee weg, anders blijft die hoogte —
     en daarmee de scrollbar — gewoon staan. */
  try {
    var _sub = document.getElementById('end-submit-btn');
    if (_sub) (_sub.parentElement || _sub).style.display = 'none';
    window.openSubmitModal = function () {};
  } catch (e) {}

  /* ── State helpers ──────────────────────────────────────────────────── */
  function answeredMap() {
    try { if (typeof state !== 'undefined' && state && state.answered) return state.answered; } catch (e) {}
    try {
      if (typeof SAVE_KEY !== 'undefined') {
        var s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
        if (s && s.answered) return s.answered;
      }
    } catch (e) {}
    return {};
  }

  function isOpenBlock(i) { return !!blocks[i].querySelector('.open-input'); }

  // "attempted" = answered at least once; "mastered" = done for the lesson.
  // Closed questions must be answered CORRECT to be mastered; open (essay)
  // questions can't be auto-graded to a single truth, so attempting them counts.
  function attempted(i) { return !!answeredMap()[qnums[i]]; }
  function mastered(i) {
    var st = answeredMap()[qnums[i]];
    if (!st) return false;
    if (isOpenBlock(i)) return true;      // open: an attempt is enough
    return st === 'correct';
  }

  // Duolingo lesson order: first every not-yet-attempted question (round 1),
  // then loop over the ones still not mastered (the wrong ones) until none
  // remain. -1 means every question is mastered → the lesson is complete.
  function nextToPresent(from) {
    var n = blocks.length, i, j;
    for (i = 1; i <= n; i++) { j = (from + i) % n; if (!attempted(j)) return j; }
    for (i = 1; i <= n; i++) { j = (from + i) % n; if (!mastered(j)) return j; }
    return -1;
  }
  function firstToPresent() {
    var t = nextToPresent(blocks.length - 1);   // start the search at index 0
    return t === -1 ? 0 : t;
  }
  function allMastered() {
    for (var i = 0; i < blocks.length; i++) if (!mastered(i)) return false;
    return true;
  }

  /* ── No mid-mission persistence (Tijmen 2026-07-20) ──────────────────────
     A mission is all-or-nothing: leaving halfway must NOT keep the answers
     given so far — a retry starts the lesson from the beginning. Two layers:
     1. saveProgress is gated: it only persists once EVERY question is
        mastered, so the completed lesson keeps its row (the dashboard tile
        stays done) but every mid-lesson call is a no-op — closing the tab
        loses the attempt.
     2. _applyProgress discards a PARTIAL saved lesson instead of restoring
        it (rows from before this rule, or an old foutenreview/opgeslagen
        session whose question set no longer matches this page) and deletes
        the stored copies so the dashboard stops counting them. */
  function savedComplete(saved) {
    var ans = (saved && saved.answered) || null;
    if (!ans) return false;
    for (var i = 0; i < blocks.length; i++) {
      var st = ans[qnums[i]];
      if (!st) return false;
      if (!isOpenBlock(i) && st !== 'correct') return false;
    }
    return true;
  }
  function wipeSaved() {
    try { if (typeof SAVE_KEY !== 'undefined') localStorage.removeItem(SAVE_KEY); } catch (e) {}
    try {
      var sb = (typeof getSB === 'function') ? getSB() : null;
      if (sb && typeof EXAM_KEY !== 'undefined') {
        sb.auth.getSession().then(function (r) {
          var u = r && r.data && r.data.session && r.data.session.user;
          if (u) return sb.from('exam_progress').delete().eq('user_id', u.id).eq('exam_key', EXAM_KEY);
        }).catch(function () {});
      }
    } catch (e) {}
  }
  if (typeof window.saveProgress === 'function') {
    var _origSave = window.saveProgress;
    window.saveProgress = function () {
      if (!allMastered()) return;              // partial lesson: never persist
      return _origSave.apply(this, arguments);
    };
  }
  if (typeof window._applyProgress === 'function') {
    var _origApply = window._applyProgress;
    window._applyProgress = function (saved) {
      if (saved && saved.answered && Object.keys(saved.answered).length && !savedComplete(saved)) {
        wipeSaved();
        return;                                // start the lesson from scratch
      }
      return _origApply.apply(this, arguments);
    };
  }

  /* ── Reset a wrong question so it can be answered again ──────────────────
     The runtime locks a question once answered (disables inputs, hides the
     check button, marks correct/wrong). To re-ask it, undo all of that and
     clear its saved answer so a fresh attempt is possible. Runs while the
     block is invisible (mid cross-fade), so the reset isn't seen. */
  function resetQuestion(idx) {
    var block = blocks[idx], qn = qnums[idx];
    try {
      if (typeof state !== 'undefined' && state) {
        delete state.answered[qn];
        if (state.selected)   delete state.selected[qn];
        if (state.multiSel)   delete state.multiSel[qn];
        if (state.dropdownSel) delete state.dropdownSel[qn];
        if (state.dndPlaced)  delete state.dndPlaced[qn];
      }
    } catch (e) {}
    block.querySelectorAll('.opt-btn').forEach(function (b) {
      b.disabled = false; b.classList.remove('selected', 'correct', 'wrong');
    });
    block.querySelectorAll('.dd-select').forEach(function (s) {
      s.disabled = false; s.classList.remove('dd-correct', 'dd-wrong'); s.value = '';
    });
    try {
      if (typeof _dnd !== 'undefined' && _dnd[qn]) {
        _dnd[qn].done = false; _dnd[qn].placed = {}; _dnd[qn].selected = null;
        if (typeof _dndRender === 'function') _dndRender(qn);
      }
    } catch (e) {}
    var res = document.getElementById('result-' + qn);
    if (res) res.classList.remove('show');
    var badge = document.getElementById('badge-' + qn);
    if (badge) { badge.className = 'result-badge'; badge.textContent = ''; }
    var btn = document.getElementById('check-' + qn);
    if (btn) { btn.classList.remove('cb-vanish', 'cb-correct'); btn.style.display = ''; btn.disabled = true; }
    try { if (typeof updateStreakBar === 'function') updateStreakBar(); } catch (e) {}  // repaint bar/dots + persist the cleared answer
  }

  // A wrong closed question that we're about to (re)present needs resetting.
  function resetIfNeeded(idx) {
    if (attempted(idx) && !mastered(idx) && !isOpenBlock(idx)) resetQuestion(idx);
  }

  /* ── Show / navigate ────────────────────────────────────────────────── */
  var cur = -1;
  var fadeTimer = null;
  var userTouched = false;   // any manual navigation/answer cancels the post-restore reposition
  // Missions: you may navigate BACK to questions you've already reached, but not
  // skip AHEAD to ones you haven't. `maxReached` = furthest question reached this
  // session; seeded from already-answered questions so a reload keeps the frontier.
  var maxReached = -1;
  (function seedFrontier() {
    for (var i = 0; i < blocks.length; i++) if (attempted(i) && i > maxReached) maxReached = i;
  })();

  function reveal(next) {
    blocks.forEach(function (b) { if (b !== next) b.classList.remove('mv-active', 'mv-leave'); });
    next.classList.remove('mv-leave');
    next.classList.add('mv-active', 'mv-enter');
    void next.offsetWidth;                       // commit the start state
    next.classList.remove('mv-enter');
    var main = document.querySelector('.exam-main');
    if (main) main.scrollTop = 0;
    paintDots();
  }

  function show(idx, instant, force) {
    if (idx < 0 || idx >= blocks.length) return;
    if (idx === cur && !force) return;
    if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }
    var prev = cur >= 0 ? blocks[cur] : null;
    cur = idx;
    if (idx > maxReached) maxReached = idx;   // legitimate progression extends the frontier
    var next = blocks[idx];
    if (prev && !instant) {
      prev.classList.add('mv-leave');
      fadeTimer = setTimeout(function () {
        fadeTimer = null;
        resetIfNeeded(idx);            // clear a wrong answer while it's invisible
        reveal(next);
      }, FADE);
    } else {
      // Boot / restore reposition (instant): don't reset here — the runtime's
      // own restore replay would just re-lock it. The retry loop resets later.
      reveal(next);
    }
  }

  /* ── Dot bar = the navigation (capture beats progressdots' scroll) ──── */
  document.addEventListener('click', function (e) {
    var d = e.target && e.target.closest ? e.target.closest('.pd-dot') : null;
    if (!d || !d.parentNode) return;
    e.stopPropagation();                         // also keeps it off #streak-wrap's reset
    e.preventDefault();
    var targetIdx = [].indexOf.call(d.parentNode.children, d);
    if (targetIdx > maxReached) return;          // back-navigation only: never skip ahead to an unreached question
    userTouched = true;
    show(targetIdx);
  }, true);

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var t = e.target;
    if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    var targetIdx = cur + (e.key === 'ArrowRight' ? 1 : -1);
    if (targetIdx > maxReached) return;          // ArrowRight can't jump past the reached frontier
    userTouched = true;
    show(targetIdx);
  });

  document.addEventListener('mousedown', function (e) {
    if (e.target && e.target.closest && e.target.closest('.q-block')) userTouched = true;
  }, true);

  /* ── Dot colours by real qnum (+ current-question ring) ─────────────── */
  function paintDots() {
    var row = document.querySelector('.pd-dots');
    if (!row) return;
    var ans = answeredMap();
    var dark = document.documentElement.classList.contains('dark');
    var C = { correct: '#58CC02', wrong: '#FF3B30', answered: '#1CB0F6' };
    for (var i = 0; i < row.children.length && i < qnums.length; i++) {
      row.children[i].style.setProperty('--dc', C[ans[qnums[i]]] || (dark ? '#48484A' : '#E5E5EA'));
      row.children[i].classList.toggle('mv-cur', i === cur);
    }
  }

  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('.pd-theme-btn')) setTimeout(paintDots, 60);
  });

  function finishLesson() {
    // A completed mission qualifies today for the day-streak (progressdots.js).
    try {
      localStorage.setItem('vumed_missionday', new Date().toISOString().slice(0, 10));
      if (window.pdCheckStreak) window.pdCheckStreak();
    } catch (e) {}
    try { if (typeof showResults === 'function') showResults(); } catch (e) {}
  }

  /* ── Advance after answering (Duolingo retry loop) ──────────────────────
     Correct → move on. Wrong → the runtime keeps state.answered = 'wrong', so
     nextToPresent will circle back to it (resetting it) until it's answered
     right. When every question is mastered, the lesson finishes. */
  function maybeAdvance(qnum, ok) {
    try { if (typeof _restoring !== 'undefined' && _restoring) return; } catch (e) {}
    var idx = qnums.indexOf(String(qnum));
    if (idx === -1 || idx !== cur) return;
    var isOpen = isOpenBlock(idx);
    var done = allMastered();
    // Open (essay) questions reveal a model answer to read; only auto-move when
    // answering one completes the whole lesson. Otherwise the student advances
    // them manually (arrows / dots).
    if (isOpen && !done) return;
    userTouched = true;
    var target = done ? -1 : nextToPresent(idx);
    var delay = done ? (isOpen ? 2600 : 1400) : (ok ? ADVANCE_DELAY : WRONG_DELAY);
    setTimeout(function () {
      if (cur !== idx) return;                   // user already navigated away
      if (target === -1) finishLesson();
      else if (target === idx) show(idx, false, true);   // re-ask the same (last wrong) question
      else show(target);
    }, delay);
  }

  var _origResolve = window.resolveCheckBtn;
  if (typeof _origResolve === 'function') {
    window.resolveCheckBtn = function (qnum, ok) {
      var r = _origResolve.apply(this, arguments);
      try { maybeAdvance(qnum, ok); } catch (e) {}
      return r;
    };
  }

  /* ── AI tab → the current question ──────────────────────────────────────
     The left-edge chat tab normally opens a blank chat (openChatForQuestion(null)).
     With one question on screen, point it at that question so clicking the AI
     icon explains the question you're looking at. */
  (function wireChatTab() {
    var tab = document.querySelector('.chat-tab');
    if (!tab || typeof window.openChatForQuestion !== 'function') return;
    tab.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var qn = qnums[cur];
      if (qn) window.openChatForQuestion(parseInt(qn, 10), true);
      else window.openChatForQuestion(null);
    };
    tab.setAttribute('title', 'Vraag de AI over deze vraag');
  })();

  /* ── Boot ───────────────────────────────────────────────────────────── */
  show(firstToPresent(), true);                  // from localStorage, synchronously

  // progressdots wraps updateStreakBar in its DOMContentLoaded init; this
  // listener registers later, so our wrapper runs AFTER its refreshDots and
  // our gid-correct colours win.
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.updateStreakBar === 'function') {
      var orig = window.updateStreakBar;
      window.updateStreakBar = function () {
        var r = orig.apply(this, arguments);
        try { paintDots(); } catch (e) {}
        return r;
      };
    }
    paintDots();
  });

  // Supabase restore can add progress localStorage didn't have; once it has
  // settled, repaint and (if the user hasn't touched anything) move to the
  // first question that still needs presenting.
  [900, 1800, 3000].forEach(function (t) {
    setTimeout(function () {
      paintDots();
      if (userTouched) return;
      if (mastered(cur)) {
        var target = firstToPresent();
        if (target !== cur) show(target);
      }
    }, t);
  });
})();
