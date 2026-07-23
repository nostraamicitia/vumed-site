const state = { answered: {}, selected: {}, multiSel: {}, streak: 0 };
let _restoring = false;  // true while _applyProgress is running — suppresses animations & streak mutations
let wrongStreak = 0;       // consecutive wrong answers, resets on correct
let _flatLineFired = false; // prevents double-firing flat-line RPC per streak event

function selectOption(qnum, letter) {
  if (state.answered[qnum]) return;
  state.selected[qnum] = letter;
  document.querySelectorAll('[data-qnum="'+qnum+'"].opt-btn')
    .forEach(b => b.classList.toggle('selected', b.dataset.letter === letter));
  document.getElementById('check-'+qnum).disabled = false;
}

function toggleMulti(qnum, letter) {
  if (state.answered[qnum]) return;
  if (!state.multiSel[qnum]) state.multiSel[qnum] = {};
  state.multiSel[qnum][letter] = !state.multiSel[qnum][letter];
  const btn = document.querySelector('[data-qnum="'+qnum+'"][data-letter="'+letter+'"]');
  if (btn) btn.classList.toggle('selected', !!state.multiSel[qnum][letter]);
  const anySelected = Object.values(state.multiSel[qnum]).some(Boolean);
  document.getElementById('check-'+qnum).disabled = !anySelected;
}

function fireCorrectAnimation(qnum) {
  try { saveProgress(); } catch(e) {}   /* MISSIONSAVEFIX: persist meteen, niet pas na de 600ms balk-animatie */
  const correctBtn = document.querySelector('[data-qnum="'+qnum+'"].opt-btn.correct');
  const fill       = document.getElementById('streak-fill');
  const wrap       = document.getElementById('streak-wrap');
  if (!correctBtn || !fill || !wrap) { updateStreakBar(); return; }

  const src  = correctBtn.getBoundingClientRect();
  const dest = wrap.getBoundingClientRect();
  const startX = src.left  + src.width  / 2;
  const startY = src.top   + src.height / 2;
  const endX   = dest.left + dest.width  * 0.15;
  const endY   = dest.top  + dest.height / 2;

  const dot = document.createElement('div');
  dot.className = 'fly-dot';
  dot.style.left = startX + 'px';
  dot.style.top  = startY + 'px';
  document.body.appendChild(dot);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    dot.style.left    = endX + 'px';
    dot.style.top     = endY + 'px';
    dot.style.width   = '8px';
    dot.style.height  = '8px';
    dot.style.opacity = '0';
  }));

  setTimeout(() => {
    dot.remove();
    updateStreakBar();
    fill.classList.remove('bar-pop');
    void fill.offsetWidth;
    fill.classList.add('bar-pop');
    fill.addEventListener('animationend', () => fill.classList.remove('bar-pop'), { once: true });
  }, 600);
}

function resolveCheckBtn(qnum, ok) {
  const btn = document.getElementById('check-' + qnum);
  if (!btn) return;
  btn.disabled = true;
  if (_restoring) { btn.style.display = 'none'; return; }  // reload: hide instantly, no animation
  if (ok) btn.classList.add('cb-correct');      // flash green + pop (correct only)
  setTimeout(function() {
    btn.classList.add('cb-vanish');             // collapse + fade out
    let hidden = false;
    const done = function() { if (hidden) return; hidden = true; btn.style.display = 'none'; };
    btn.addEventListener('transitionend', done, { once: true });
    setTimeout(done, 500);                       // fallback if transitionend doesn't fire
  }, 420);
}

function checkMCQ(qnum, correct) {
  const chosen = state.selected[qnum];
  if (!chosen) return;
  document.querySelectorAll('[data-qnum="'+qnum+'"].opt-btn').forEach(b => {
    b.disabled = true;
    b.classList.remove('selected');  // always clean up selected highlight
    if (b.dataset.letter === correct) b.classList.add('correct');
    else if (b.dataset.letter === chosen && chosen !== correct) b.classList.add('wrong');
  });
  const ok = chosen === correct;
  state.answered[qnum] = ok ? 'correct' : 'wrong';
  resolveCheckBtn(qnum, ok);
  if (!_restoring) {
    if (ok) {
      state.streak++;
      wrongStreak = 0;
      _flatLineFired = false;
      playSoundCorrect(state.streak);
      fireCorrectAnimation(qnum);
      awardXP(xpForQuestion(qnum), qnum);
    } else {
      state.streak = 0;
      playSoundWrong();
      wrongStreak++;
      if (wrongStreak >= 5 && !_flatLineFired) { _flatLineFired = true; _doFlatLine(); }
      updateSummary();
      updateStreakBar();
    }
  }
}

function checkMulti(qnum, correctLetters) {
  const sel = state.multiSel[qnum] || {};
  document.querySelectorAll('[data-qnum="'+qnum+'"].opt-btn').forEach(b => {
    b.disabled = true;
    b.classList.remove('selected');  // clean up selection highlight
    const l = b.dataset.letter;
    const shouldBeSelected = correctLetters.includes(l);
    const wasSelected = !!sel[l];
    if (shouldBeSelected) b.classList.add('correct');
    else if (wasSelected && !shouldBeSelected) b.classList.add('wrong');
  });
  const allCorrect = correctLetters.every(l => !!sel[l]) &&
    Object.keys(sel).filter(l => sel[l]).every(l => correctLetters.includes(l));
  state.answered[qnum] = allCorrect ? 'correct' : 'wrong';
  resolveCheckBtn(qnum, allCorrect);
  if (!_restoring) {
    if (allCorrect) {
      state.streak++;
      wrongStreak = 0;
      _flatLineFired = false;
      playSoundCorrect(state.streak);
      fireCorrectAnimation(qnum);
      awardXP(xpForQuestion(qnum), qnum);
    } else {
      state.streak = 0;
      playSoundWrong();
      wrongStreak++;
      if (wrongStreak >= 5 && !_flatLineFired) { _flatLineFired = true; _doFlatLine(); }
      updateSummary();
      updateStreakBar();
    }
  }
}

function showAnswer(qnum) {
  state.answered[qnum] = 'answered';
  document.getElementById('check-'+qnum).disabled = true;
  document.getElementById('result-'+qnum).classList.add('show');
  updateSummary();
}

function updateSummary() {
  const vals = Object.values(state.answered);
  const correct = vals.filter(v => v === 'correct').length;
  const wrong   = vals.filter(v => v === 'wrong').length;
  const answered= vals.length;
  document.getElementById('sum-correct').textContent = correct;
  document.getElementById('sum-wrong').textContent   = wrong;
  document.getElementById('sum-done').textContent    = answered;
  const total = document.querySelectorAll('.q-block').length;
  document.querySelector('.progress-fill').style.width =
    (answered / total * 100).toFixed(1) + '%';
}

/* ── Progress persistence (localStorage + Supabase) ─────────────────────── */

/* Supabase client — shared singleton, mirrors getSB() in vumed.html */
let _sbClient = null;
function getSB() {
  if (_sbClient) return _sbClient;
  if (!window.SUPABASE_URL || !window.supabase) return null;
  try { _sbClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY); }
  catch(e) { return null; }
  return _sbClient;
}

/* Save progress. Progress is ONLY persisted for logged-in users — guests get
   nothing written (neither localStorage nor Supabase). When logged in we write
   localStorage (fast local restore) plus Supabase (cross-device sync). */
async function saveProgress() {
  if (window.__examSubmitted) return;   /* MISSIONSAVEFIX-GUARD */
  const sb = getSB();
  if (!sb) return;

  let session;
  try { ({ data: { session } } = await sb.auth.getSession()); } catch(e) { return; }
  if (!session?.user) return;

  const data = { answered: state.answered, selected: state.selected, multiSel: state.multiSel, streak: state.streak };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch(e) {}
  try {
    await sb.from('exam_progress').upsert({
      user_id:    session.user.id,
      exam_key:   EXAM_KEY,
      progress:   data,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,exam_key' });
  } catch(e) {}
}

/* Apply a saved progress object to the DOM */
function _applyProgress(saved) {
  if (!saved || !saved.answered) return;
  _restoring = true;
  try { window._restoring = true; } catch(e) {}   // progressdots reads this to suppress goal/currency re-counting during restore
  Object.keys(saved.answered).forEach(function(qnum) {
    const n = parseInt(qnum);
    const checkBtn = document.getElementById('check-' + n);

    // ── MCQ ──
    const mcqMatch = checkBtn && checkBtn.getAttribute('onclick')
      ? checkBtn.getAttribute('onclick').match(/checkMCQ\((\d+),\s*'([a-z])'\)/)
      : null;
    if (mcqMatch) {
      const correct = mcqMatch[2];
      const sel = (saved.selected || {})[n];
      if (sel) {
        state.selected[n] = sel;
        // Clear any stale .selected class first, then mark the chosen option
        document.querySelectorAll('[data-qnum="'+n+'"].opt-btn')
          .forEach(function(b){ b.classList.remove('selected'); });
        document.querySelectorAll('[data-qnum="'+n+'"].opt-btn')
          .forEach(function(b){ b.classList.toggle('selected', b.dataset.letter === sel); });
        checkBtn.disabled = false;
        checkMCQ(n, correct);
      } else {
        // sel missing (edge case): lock the question and reveal the correct answer
        document.querySelectorAll('[data-qnum="'+n+'"].opt-btn')
          .forEach(function(b){
            b.disabled = true;
            if (b.dataset.letter === correct) b.classList.add('correct');
          });
        state.answered[n] = saved.answered[n];
        checkBtn.disabled = true;
        checkBtn.style.display = 'none';
      }
      return;
    }

    // ── Multi-select ──
    const multiMatch = checkBtn && checkBtn.getAttribute('onclick')
      ? checkBtn.getAttribute('onclick').match(/checkMulti\((\d+),\s*(\[.*?\])\)/)
      : null;
    if (multiMatch) {
      let correctLetters;
      try { correctLetters = JSON.parse(multiMatch[2]); } catch(e) { return; }
      const ms = (saved.multiSel || {})[n] || {};
      state.multiSel[n] = ms;
      Object.keys(ms).forEach(function(l) {
        if (ms[l]) {
          const b = document.querySelector('[data-qnum="'+n+'"][data-letter="'+l+'"]');
          if (b) b.classList.add('selected');
        }
      });
      checkBtn.disabled = false;
      checkMulti(n, correctLetters);
      return;
    }

    // ── DND / matching table — restore with color indicator only, no text ──
    state.answered[n] = saved.answered[n];
    const badge = document.getElementById('badge-' + n);
    if (badge) {
      const v = saved.answered[n];
      badge.className = 'result-badge ' + (v === 'correct' ? 'correct' : v === 'wrong' ? 'wrong' : '');
      badge.textContent = '';
    }
    const resultDiv = document.getElementById('result-' + n);
    if (resultDiv) resultDiv.classList.add('show');
    if (checkBtn) { checkBtn.disabled = true; checkBtn.style.display = 'none'; }
  });
  _restoring = false;
  try { window._restoring = false; } catch(e) {}
  // XP streak always resets on exam open/reload — never carry over from previous session
  state.streak = 0;
  wrongStreak = 0;
  _flatLineFired = false;
  updateSummary();
  // Restore bar fill based on answered count (never 0 just because streak was reset)
  const totalAnswered = Object.keys(state.answered).length;
  const totalQ        = document.querySelectorAll('.q-block').length || 55;
  const fill  = document.getElementById('streak-fill');
  if (fill) fill.style.width = Math.min(totalAnswered / totalQ * 100, 100) + '%';
  const label = document.getElementById('streak-label');
  if (label) { label.style.opacity = '0'; label.textContent = ''; }
}

/*
 * Restore order of priority:
 *   1. Supabase (logged-in user — cross-device, most authoritative)
 *   2. localStorage (always written — works without login, same browser)
 * If restored from localStorage while logged in, immediately syncs to Supabase.
 */
async function restoreProgress() {
  // If the user just reset, skip all restore so the page stays blank
  try {
    if (sessionStorage.getItem(SAVE_KEY + '_reset')) {
      sessionStorage.removeItem(SAVE_KEY + '_reset');
      return;
    }
  } catch(e) {}

  let saved = null;
  let fromSupabase = false;
  let loggedIn = false;

  // 1. Try Supabase if logged in
  const sb = getSB();
  if (sb) {
    try {
      const { data: { session } } = await sb.auth.getSession();
      if (session?.user) {
        loggedIn = true;
        const { data: row } = await sb
          .from('exam_progress')
          .select('progress')
          .eq('user_id', session.user.id)
          .eq('exam_key', EXAM_KEY)
          .maybeSingle();
        if (row?.progress) { saved = row.progress; fromSupabase = true; }
      }
    } catch(e) {}
  }

  // 2. Fall back to localStorage — only when logged in (Supabase had no row yet,
  //    e.g. progress made before this device synced). Guests restore nothing.
  if (!saved && loggedIn) {
    try { saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch(e) {}
  }

  if (saved) {
    _applyProgress(saved);
    // If we got data from localStorage but user is now logged in, push it up to Supabase
    if (!fromSupabase) saveProgress();
  }
}

document.addEventListener('DOMContentLoaded', restoreProgress);

/* If user logs out while on this page, reload so the DOM reflects a blank state */
(function() {
  const sb = getSB();
  if (!sb) return;
  sb.auth.onAuthStateChange(function(event) {
    if (event === 'SIGNED_OUT') {
      try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
      window.location.reload();
    }
  });
})();

/* ── Progress bar ────────────────────────────────────────────────────────── */
/* Bar fill = total answered / total questions (never resets on wrong answers).
   Streak label = "X achter elkaar" floats above the green portion and fades. */
let _streakTimer = null;

let _lastBarPct = 0;

function fireBarSparkles(pct) {
  if (_restoring) return;
  const wrap = document.getElementById('streak-wrap');
  if (!wrap) return;
  const bg = wrap.querySelector('.streak-bar-bg');
  if (!bg) return;
  const rect = bg.getBoundingClientRect();
  // x = left edge of bar + pct% of bar width
  const x = rect.left + (pct / 100) * rect.width;
  const y = rect.top + rect.height / 2;

  const colors = ['#58CC02','#7DE820','#A8F05A','#FFD700','#FFFFFF'];
  const count  = 10;
  for (let i = 0; i < count; i++) {
    const el    = document.createElement('div');
    el.className = 'bar-sparkle';
    const angle  = (Math.random() * 360) * Math.PI / 180;
    const dist   = 18 + Math.random() * 28;
    const sx     = Math.round(Math.cos(angle) * dist) + 'px';
    const sy     = Math.round(Math.sin(angle) * dist) + 'px';
    el.style.setProperty('--sx', sx);
    el.style.setProperty('--sy', sy);
    el.style.left    = x + 'px';
    el.style.top     = y + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDelay = (Math.random() * 0.12) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
}

function updateStreakBar() {
  const fill  = document.getElementById('streak-fill');
  const label = document.getElementById('streak-label');
  if (!fill || !label) return;

  // Bar fill: total answered progress — always grows, never resets
  const totalAnswered = Object.keys(state.answered).length;
  const totalQ        = document.querySelectorAll('.q-block').length || 55;
  const pct           = Math.min(totalAnswered / totalQ * 100, 100);

  // Fire sparkles when bar actually grows (not on restore)
  if (pct > _lastBarPct && !_restoring) {
    // Wait for the CSS width transition to reach the new position
    setTimeout(() => fireBarSparkles(pct), 480);
  }
  _lastBarPct = pct;

  fill.style.width    = pct + '%';

  // Streak label: floats above the middle of the green fill
  const s = state.streak;
  label.style.left = (pct / 2) + '%';

  if (_streakTimer) { clearTimeout(_streakTimer); _streakTimer = null; }

  if (s >= 2) {
    label.textContent = s + ' achter elkaar';
    requestAnimationFrame(() => { label.style.opacity = '1'; });
    _streakTimer = setTimeout(() => { label.style.opacity = '0'; }, 2000);
  } else {
    label.style.opacity = '0';
    label.textContent   = '';
  }

  saveProgress();
}

/* ── Drag-and-drop matching ─────────────────────────────────────────────── */
const _dnd = {};

function dndInit(qnum, opts) {
  _dnd[qnum] = { opts: opts.slice(), placed: {}, selected: null, done: false };
  _dndRender(qnum);
}

function _dndRender(qnum) {
  const st = _dnd[qnum];
  if (!st) return;

  // Rebuild pool: show cards that are not yet placed anywhere
  const placedVals = new Set(Object.values(st.placed));
  const pool = document.getElementById('dnd-pool-'+qnum);
  if (pool) {
    pool.innerHTML = '';
    st.opts.forEach(function(val) {
      if (!placedVals.has(val)) {
        pool.appendChild(_dndMakeCard(qnum, val, 'pool'));
      }
    });
    // hint text when empty
    if (pool.children.length === 0) {
      const hint = document.createElement('span');
      hint.className = 'dnd-hint';
      hint.textContent = 'Alle opties zijn geplaatst';
      pool.appendChild(hint);
    }
  }

  // Rebuild zones
  const zones = document.querySelectorAll('[data-dnd-zone="'+qnum+'"]');
  zones.forEach(function(zone) {
    const letter = zone.dataset.letter;
    zone.innerHTML = '';
    zone.classList.remove('dnd-over', 'dnd-filled', 'dnd-correct', 'dnd-wrong');
    if (st.placed[letter]) {
      zone.classList.add('dnd-filled');
      zone.appendChild(_dndMakeCard(qnum, st.placed[letter], 'zone-'+letter));
    } else {
      const hint = document.createElement('span');
      hint.className = 'dnd-hint';
      hint.textContent = 'Sleep hier naartoe';
      zone.appendChild(hint);
    }
  });

  // Enable check button only if all zones filled
  const zoneCount = document.querySelectorAll('[data-dnd-zone="'+qnum+'"]').length;
  const placedCount = Object.keys(st.placed).length;
  const btn = document.getElementById('check-'+qnum);
  if (btn && !st.done) btn.disabled = (placedCount < zoneCount);
}

function _dndMakeCard(qnum, value, src) {
  const card = document.createElement('div');
  card.className = 'dnd-card';
  card.textContent = value;
  card.draggable = true;
  card.dataset.val = value;
  card.dataset.src = src;

  // Drag events (mouse)
  card.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', value);
    e.dataTransfer.setData('application/dnd-src', src);
    e.dataTransfer.setData('application/dnd-qnum', String(qnum));
    setTimeout(function(){ card.classList.add('dnd-ghost'); }, 0);
  });
  card.addEventListener('dragend', function() {
    card.classList.remove('dnd-ghost');
  });

  // Tap-to-select (touch/click)
  card.addEventListener('click', function(e) {
    e.stopPropagation();
    const st = _dnd[qnum];
    if (!st || st.done) return;
    if (st.selected === value) {
      // deselect
      st.selected = null;
      _dndRender(qnum);
    } else {
      st.selected = value;
      // highlight
      _dndRender(qnum);
      // re-find and highlight the selected card
      document.querySelectorAll('[data-dnd-qnum="'+qnum+'"]').forEach(function(c){
        if (c.dataset.val === value) c.classList.add('dnd-sel');
      });
    }
  });

  card.dataset.dndQnum = qnum;
  return card;
}

function _dndOver(e)  { e.preventDefault(); e.currentTarget.classList.add('dnd-over'); }
function _dndLeave(e) { e.currentTarget.classList.remove('dnd-over'); }

function _dndZoneDrop(e, qnum, letter) {
  e.preventDefault();
  e.currentTarget.classList.remove('dnd-over');
  const val  = e.dataTransfer.getData('text/plain');
  const src  = e.dataTransfer.getData('application/dnd-src');
  const st   = _dnd[qnum];
  if (!st || !val || st.done) return;
  // If dragged from another zone, clear that zone first
  if (src && src.startsWith('zone-')) {
    const oldLetter = src.replace('zone-', '');
    if (st.placed[oldLetter] === val) delete st.placed[oldLetter];
  }
  // If something is already in target zone, return it to pool
  // (it'll show up automatically since it won't be in placed)
  st.placed[letter] = val;
  _dndRender(qnum);
}

function _dndZoneClick(e, qnum, letter) {
  const st = _dnd[qnum];
  if (!st || st.done) return;
  if (st.selected) {
    // Place selected card here
    const val = st.selected;
    // Clear previous location of this val
    for (const l in st.placed) {
      if (st.placed[l] === val) delete st.placed[l];
    }
    st.placed[letter] = val;
    st.selected = null;
    _dndRender(qnum);
  } else if (st.placed[letter]) {
    // Tap a filled zone to pick up its card
    st.selected = st.placed[letter];
    delete st.placed[letter];
    _dndRender(qnum);
    document.querySelectorAll('[data-dnd-qnum="'+qnum+'"]').forEach(function(c){
      if (c.dataset.val === st.selected) c.classList.add('dnd-sel');
    });
  }
}

function _dndPoolDrop(e, qnum) {
  e.preventDefault();
  e.currentTarget.classList.remove('dnd-over');
  const val  = e.dataTransfer.getData('text/plain');
  const src  = e.dataTransfer.getData('application/dnd-src');
  const st   = _dnd[qnum];
  if (!st || st.done) return;
  // Return card from zone to pool
  if (src && src.startsWith('zone-')) {
    const oldLetter = src.replace('zone-', '');
    if (st.placed[oldLetter] === val) delete st.placed[oldLetter];
  }
  _dndRender(qnum);
}

function _dndPoolClick(e, qnum) {
  const st = _dnd[qnum];
  if (!st || st.done) return;
  // Clicking the pool background while a card is selected → deselect
  if (st.selected) {
    st.selected = null;
    _dndRender(qnum);
  }
}

function checkMatchingDnD(qnum, correctMap) {
  const st = _dnd[qnum];
  if (!st || st.done) return;
  st.done = true;

  let allCorrect = true;
  const zones = document.querySelectorAll('[data-dnd-zone="'+qnum+'"]');
  zones.forEach(function(zone) {
    const letter  = zone.dataset.letter;
    const correct = correctMap[letter];
    const placed  = st.placed[letter];
    const ok      = placed && placed === correct;
    const label   = document.getElementById('dnd-label-'+qnum+'-'+letter);
    zone.classList.remove('dnd-over','dnd-filled');
    if (ok) {
      zone.classList.add('dnd-correct');
      if (label) label.classList.add('dnd-correct');
    } else {
      zone.classList.add('dnd-wrong');
      if (label) label.classList.add('dnd-wrong');
      allCorrect = false;
    }
    // Style the card inside the zone
    const card = zone.querySelector('.dnd-card');
    if (card) card.classList.add(ok ? 'correct' : 'wrong');
  });

  // Grey out pool
  const pool = document.getElementById('dnd-pool-'+qnum);
  if (pool) pool.style.opacity = '0.5';

  state.answered[qnum] = allCorrect ? 'correct' : 'wrong';
  const badge = document.getElementById('badge-'+qnum);
  badge.className = 'result-badge ' + (allCorrect ? 'correct' : 'wrong');
  badge.textContent = '';
  document.getElementById('result-'+qnum).classList.add('show');

  resolveCheckBtn(qnum, allCorrect);
  if (allCorrect) {
    state.streak++;
    playSoundCorrect(state.streak);
    awardXP(xpForQuestion(qnum), qnum);
  } else {
    state.streak = 0;
    playSoundWrong();
  }
  updateSummary();
  updateStreakBar();
}

/* ── Glossary popup ─────────────────────────────────────────────────────── */
// ── Hover tooltip ───────────────────────────────────────────────────────
document.addEventListener('mouseover', function(e) {
  var el = e.target.closest && e.target.closest('.gterm');
  if (!el) return;
  var entry = GLOSSARY[el.dataset.term];
  if (!entry) return;
  var tip = document.getElementById('g-tip');
  var short = entry.short || (entry.definition || '').replace(/<[^>]+>/g, '').slice(0, 88) + '…';
  tip.textContent = short;
  var rect = el.getBoundingClientRect();
  tip.style.left = Math.min(rect.left, window.innerWidth - 228) + 'px';
  tip.style.top  = (rect.bottom + 8) + 'px';
  tip.classList.add('show');
});
document.addEventListener('mouseout', function(e) {
  if (e.target.closest && e.target.closest('.gterm'))
    document.getElementById('g-tip').classList.remove('show');
});

document.addEventListener('click', function(e) {
  var el = e.target.closest && e.target.closest('.gterm');
  if (!el) return;
  e.stopPropagation();
  openGlossary(el.dataset.term);
});


var _gImgs = [], _gImgIdx = 0;

function _fetchWikiImg(title) {
  var nl = /^nl:/.test(title);
  var base = nl ? 'https://nl.wikipedia.org/api/rest_v1/page/summary/' : 'https://en.wikipedia.org/api/rest_v1/page/summary/';
  var t = nl ? title.slice(3) : title;
  return fetch(base + encodeURIComponent(t))
    .then(function(r) { return r.json(); })
    .then(function(d) { return (d.thumbnail && d.thumbnail.source) ? d.thumbnail.source : null; })
    .catch(function() { return null; });
}

function _gShowImg(idx) {
  var img = document.getElementById('g-img');
  var nav = document.getElementById('g-img-nav');
  var ctr = document.getElementById('g-img-counter');
  _gImgIdx = idx;
  if (!_gImgs.length) { img.style.display='none'; nav.style.display='none'; return; }
  img.src = _gImgs[idx];
  img.style.display = 'block';
  img.onerror = function(){ img.style.display='none'; };
  if (_gImgs.length > 1) { nav.style.display='flex'; ctr.textContent=(idx+1)+' / '+_gImgs.length; }
  else { nav.style.display='none'; }
}

function gImgPrev() { if (_gImgs.length>1) _gShowImg((_gImgIdx-1+_gImgs.length)%_gImgs.length); }
function gImgNext() { if (_gImgs.length>1) _gShowImg((_gImgIdx+1)%_gImgs.length); }

// ── Click → right panel ──────────────────────────────────────────────────
function openGlossary(termKey) {
  var entry = GLOSSARY[termKey];
  if (!entry) return;
  document.getElementById('g-tip').classList.remove('show');
  document.getElementById('g-title').textContent = entry.title || termKey;
  var defEl = document.getElementById('g-def');
  var defText = entry.definition || '(Geen definitie beschikbaar.)';
  if (defText.indexOf('<') !== -1) { defEl.innerHTML = defText; } else { defEl.textContent = defText; }

  // Reset image carousel
  _gImgs = []; _gImgIdx = 0;
  var img = document.getElementById('g-img');
  var nav = document.getElementById('g-img-nav');
  img.style.display = 'none'; nav.style.display = 'none';

  if (entry.image_url) {
    _gImgs = [entry.image_url];
    _gShowImg(0);
  } else {
    var titles = entry.wiki_titles || (entry.wiki_title ? [entry.wiki_title] : []);
    if (titles.length) {
      Promise.all(titles.map(_fetchWikiImg)).then(function(urls) {
        _gImgs = urls.filter(function(u){ return !!u; });
        if (_gImgs.length) _gShowImg(0);
      });
    }
  }

  if (typeof closeChat === 'function') closeChat();
  document.body.classList.add('g-open');
  document.getElementById('g-panel').classList.add('open');
}




function closeGlossary() {
  document.body.classList.remove('g-open');
  document.getElementById('g-panel').classList.remove('open');
}

// Close glossary panel when clicking outside of it
document.addEventListener('click', function(e) {
  if (!document.body.classList.contains('g-open')) return;
  if (document.getElementById('g-panel').contains(e.target)) return;
  if (e.target.closest && e.target.closest('.gterm')) return;
  closeGlossary();
});

/* ══════════════════════════════════════════════════════════════════════════
   CHAT FEATURE
   ══════════════════════════════════════════════════════════════════════════ */
const OPENAI_API_KEY = window.OPENAI_API_KEY || '';
const CHAT_MODEL     = 'gpt-4o-mini';

/* ── Sound effects ────────────────────────────────────────────────────────── */
function _snd(path) {
  try { const a = new Audio(path); a.volume = 0.8; a.play().catch(()=>{}); } catch(_) {}
}
// Sound 1 or 3 (random) → plays when the AI response appears
function playSoundAI()   { _snd(Math.random() < 0.5 ? 'sound1.mp3' : 'sound3.mp3'); }
// Sound 5 or 7 (random) → plays when "Vraag chat" popup is clicked
function playSoundChat() { _snd(Math.random() < 0.5 ? 'sound5.mp3' : 'sound7.mp3'); }
// Correct answer → sound_correct.mp3, wrong answer → sound_wrong.mp3
// (streak arg kept for call-site compat; never plays during restore)
function playSoundCorrect(streak) {
  if (typeof _restoring !== 'undefined' && _restoring) return;
  _snd('sound_correct.mp3');
}
function playSoundWrong() {
  if (typeof _restoring !== 'undefined' && _restoring) return;
  _snd('sound_wrong.mp3');
}

/* ── XP system ───────────────────────────────────────────────────────────── */
// XP per correct answer: 10 × streak, capped at 50 (resets to 10 on wrong answer)
function xpForStreak(streak) {
  return Math.min(streak * 10, 50);
}

// XP is awarded per point: a question's point value (data-points on its
// .q-points span) times 10. Closed questions carry no point value -> 1 point -> 10 XP.
function qPoints(qnum) {
  var b = document.getElementById('qblock-' + qnum);
  var s = b && b.querySelector('.q-points');
  var p = s && parseFloat(s.getAttribute('data-points'));
  return (p && p > 0) ? p : 1;
}
function xpForQuestion(qnum) {
  return Math.round(qPoints(qnum) * 10);
}

function fireXPAnimation(xp, qnum) {
  // Anchor the popup above the check button for this question
  const btn = document.getElementById('check-' + qnum);
  const el = document.createElement('div');
  el.className = 'xp-pop';
  el.textContent = '+' + xp + ' XP';
  const rect = btn ? btn.getBoundingClientRect() : null;
  el.style.left = rect ? (rect.left + rect.width / 2) + 'px' : '50%';
  el.style.top  = rect ? (rect.top - 8) + 'px' : '120px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

function getTodayNL() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' }).format(new Date());
}

function trackDailyQuestion(sb, userId) {
  try {
    const today = getTodayNL();
    const raw = JSON.parse(localStorage.getItem('vumed_daily') || '{}');
    const stored = raw.date === today ? raw : { date: today };
    const count = (stored.questionsAnswered || 0) + 1;
    const already = stored.streakUpdatedToday || false;
    stored.questionsAnswered = count;
    localStorage.setItem('vumed_daily', JSON.stringify(stored));
    if (count >= 10 && !already && sb && userId) {
      stored.streakUpdatedToday = true;
      localStorage.setItem('vumed_daily', JSON.stringify(stored));
      sb.rpc('update_question_streak', { p_user_id: userId }).catch(() => {});
    }
  } catch(e) {}
}

async function awardXP(xp, qnum) {
  fireXPAnimation(xp, qnum);
  const sb = getSB();
  if (!sb) return;
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (!session?.user) return;
    const uid = session.user.id;
    await sb.rpc('add_xp', { p_user_id: uid, p_amount: xp });
    trackDailyQuestion(sb, uid);
    sb.rpc('update_max_streak', { p_user_id: uid, p_streak: state.streak }).catch(()=>{});
    const _h = parseInt(new Intl.DateTimeFormat('en-CA', {hour:'numeric',hour12:false,timeZone:'Europe/Amsterdam'}).format(new Date()));
    if (_h < 5) sb.rpc('increment_night_question', { p_user_id: uid }).catch(()=>{});
  } catch(e) {}
}

async function _doFlatLine() {
  const sb = getSB();
  if (!sb) return;
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (!session?.user) return;
    sb.rpc('increment_flat_line', { p_user_id: session.user.id }).catch(()=>{});
  } catch(e) {}
}

/* ── Markdown → HTML renderer for AI responses ───────────────────────────── */
function mdToHtml(md) {
  // Escape raw HTML to prevent injection
  let s = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Block-level: headings
  s = s.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  s = s.replace(/^## (.+)$/gm,  '<h3>$1</h3>');

  // Block-level: horizontal rule
  s = s.replace(/^---$/gm, '<hr>');

  // Block-level: unordered lists (lines starting with - or *)
  s = s.replace(/^[\-\*] (.+)$/gm, '<li>$1</li>');

  // Block-level: ordered lists (lines starting with 1. 2. etc.)
  s = s.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> blocks in <ul>
  s = s.replace(/(<li>[\s\S]*?<\/li>)(\n(?!<li>)|$)/g, (m) => {
    return '<ul>' + m.replace(/\n/g, '') + '</ul>';
  });

  // Inline: bold+italic
  s = s.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Inline: bold
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Inline: italic
  s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Paragraphs: split on double newline, wrap non-block-element lines
  const blocks = s.split(/\n{2,}/);
  s = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    // Already a block element — leave as-is
    if (/^<(h[3-4]|ul|ol|hr|li)/.test(block)) return block;
    // Replace remaining single newlines with <br>
    return '<p>' + block.replace(/\n/g, '<br>') + '</p>';
  }).join('\n');

  return s;
}

let _chatHistory   = [];   // [{role, content}]
let _chatSelection = '';   // selected text that triggered the chat
let _chatContext   = '';   // question text context (used for button-triggered chats)
let _chatImages    = [];   // <img> elements from the question (sent to the vision model)
let _selRange      = null; // saved selection range

/* Convert an already-loaded (same-origin) <img> to a downscaled data URL so the
   AI vision model can actually SEE the question figure. Returns null on failure. */
function _imgElToDataUrl(img) {
  try {
    const w = img.naturalWidth, h = img.naturalHeight;
    if (!w || !h) return null;
    const max = 1024, scale = Math.min(1, max / Math.max(w, h));
    const cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
    const c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    c.getContext('2d').drawImage(img, 0, 0, cw, ch);
    return c.toDataURL('image/jpeg', 0.85);
  } catch (e) { return null; }
}
function _collectChatImages() {
  const out = [];
  _chatImages.forEach(function(img) {
    const u = _imgElToDataUrl(img);
    if (u) out.push(u);
  });
  return out;
}

// ── Selection popup ────────────────────────────────────────────────────────
const _selPopup = document.getElementById('sel-popup');

document.addEventListener('mouseup', function(e) {
  // Don't trigger from inside the chat or glossary panels
  if (e.target.closest('#chat-panel') || e.target.closest('#g-panel') || e.target.closest('#sel-popup')) return;

  setTimeout(function() {
    const sel = window.getSelection();
    const txt = sel ? sel.toString().trim() : '';
    if (!txt || txt.length < 2) { hideSelPopup(); return; }

    _selRange = sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    _chatSelection = txt;

    const rect = sel.getRangeAt(0).getBoundingClientRect();
    _selPopup.style.left = Math.min(rect.left + rect.width / 2 - 56, window.innerWidth - 160) + 'px';
    _selPopup.style.top  = (rect.top - 44) + 'px';
    _selPopup.classList.add('show');
  }, 10);
});

document.addEventListener('mousedown', function(e) {
  if (!e.target.closest('#sel-popup')) hideSelPopup();
});

function hideSelPopup() {
  _selPopup.classList.remove('show');
}

// ── Open chat with selected text ───────────────────────────────────────────
function openChatWithSelection() {
  hideSelPopup();
  if (window.getSelection) window.getSelection().removeAllRanges();

  _chatContext = ''; // clear any question-button context
  _chatImages  = [];
  closeGlossary();

  // Reset chat
  _chatHistory = [];
  document.getElementById('chat-messages').innerHTML = '';

  // Show context pill
  const pill = document.getElementById('chat-context-pill');
  if (_chatSelection) {
    pill.style.display = 'block';
    pill.innerHTML = 'Over: <strong>"' + _escHtml(_chatSelection) + '"</strong>';
  } else {
    pill.style.display = 'none';
  }

  // Open panel
  playSoundChat();
  document.body.classList.add('chat-open');
  document.getElementById('chat-panel').classList.add('open');
  document.getElementById('chat-input').focus();

  // Auto-send selected text as first message
  if (_chatSelection) {
    _sendMessage('Leg uit: ' + _chatSelection);
  }
}

function openChatForQuestion(qnum, autoSend) {
  closeGlossary();
  _chatHistory   = [];
  _chatSelection = '';
  _chatContext   = '';
  _chatImages    = [];
  document.getElementById('chat-messages').innerHTML = '';

  const pill = document.getElementById('chat-context-pill');

  if (qnum !== null) {
    const block = document.getElementById('qblock-' + qnum);
    const parts = [];
    if (block) {
      // Question text (context + question + plain text)
      block.querySelectorAll('.q-context, .q-question, .q-text').forEach(function(el) {
        const t = el.innerText.trim();
        if (t) parts.push(t);
      });
      // Answer options (opt-btn spans)
      const opts = block.querySelectorAll('.opt-btn');
      if (opts.length) {
        parts.push('');  // blank line before options
        opts.forEach(function(btn) {
          const letter = (btn.querySelector('.opt-letter') || {}).innerText || '';
          const text   = Array.from(btn.querySelectorAll('span'))
                              .slice(1).map(s => s.innerText.trim()).join(' ').trim();
          if (text) parts.push((letter ? letter + '. ' : '') + text);
        });
      }
      block.querySelectorAll('img').forEach(function(im) {
        if (!im || (im.naturalWidth && im.naturalWidth < 32)) return;
        if (_chatImages.indexOf(im) === -1) _chatImages.push(im);
      });
    }
    _chatContext = parts.length ? 'Vraag ' + qnum + ':\n' + parts.join('\n') : 'Vraag ' + qnum;
    if (pill) {
      pill.style.display = 'block';
      pill.innerHTML = 'Over: <strong>Vraag ' + qnum + '</strong>';
    }
  } else {
    if (pill) pill.style.display = 'none';
  }

  playSoundChat();
  document.body.classList.add('chat-open');
  document.getElementById('chat-panel').classList.add('open');
  document.getElementById('chat-input').focus();

  // Auto-send: explain the whole question with all options
  if (autoSend && _chatContext) {
    _sendMessage(
      'Leg deze vraag volledig uit. Verklaar elke antwoordoptie: ' +
      'waarom is het goede antwoord juist, en waarom zijn de andere opties onjuist?\n\n' +
      _chatContext
    );
  }
}

function closeChat() {
  document.body.classList.remove('chat-open');
  document.getElementById('chat-panel').classList.remove('open');
  _chatContext = '';
}

// Close chat when clicking outside
document.addEventListener('click', function(e) {
  if (!document.body.classList.contains('chat-open')) return;
  if (document.getElementById('chat-panel').contains(e.target)) return;
  if (e.target.closest('#sel-popup')) return;
  if (e.target.closest('.chat-tab')) return;
  if (e.target.closest('.q-ai-btn') || e.target.closest('.q-num-ai')) return;
  closeChat();
});

// ── Send message ───────────────────────────────────────────────────────────
function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';
  input.style.height = '';
  _sendMessage(text);
}

function _escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function _appendMsg(role, text) {
  const box = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
  return div;
}

async function _sendMessage(text) {
  const sendBtn = document.getElementById('chat-send');
  const box     = document.getElementById('chat-messages');
  sendBtn.disabled = true;

  _appendMsg('user', text);
  // On the first message of a button-triggered chat, prepend question context for the API
  const _isFirst = _chatHistory.length === 0;
  const apiText = (_chatContext && _isFirst)
    ? 'Vraagcontext:\n' + _chatContext + '\n\nMijn vraag: ' + text
    : text;
  let apiContent = apiText;
  if (_isFirst && _chatImages.length) {
    const _imgs = _collectChatImages();
    if (_imgs.length) {
      apiContent = [{ type: 'text', text: apiText }].concat(
        _imgs.map(function(u) { return { type: 'image_url', image_url: { url: u, detail: 'auto' } }; })
      );
    }
  }
  _chatHistory.push({ role: 'user', content: apiContent });

  // Create the AI bubble immediately — we'll stream into it
  const aiDiv = document.createElement('div');
  aiDiv.className = 'chat-msg ai streaming';
  box.appendChild(aiDiv);
  box.scrollTop = box.scrollHeight;
  playSoundAI();

  let fullText = '';

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + OPENAI_API_KEY
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages: [
          { role: 'system', content: CHAT_SYSTEM },
          ..._chatHistory
        ],
        max_tokens: 500,
        temperature: 0.4,
        stream: true
      })
    });

    if (!res.ok || !res.body) throw new Error('Stream niet beschikbaar');

    const reader  = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      for (const line of chunk.split('\n')) {
        if (!line.startsWith('data: ')) continue;
        const raw = line.slice(6).trim();
        if (raw === '[DONE]') break;
        try {
          const token = JSON.parse(raw).choices?.[0]?.delta?.content || '';
          if (token) {
            fullText += token;
            aiDiv.innerHTML = mdToHtml(fullText);
            box.scrollTop = box.scrollHeight;
          }
        } catch(_) {}
      }
    }

    aiDiv.classList.remove('streaming');
    if (fullText) {
      _chatHistory.push({ role: 'assistant', content: fullText });
    } else {
      aiDiv.innerHTML = '<p>⚠️ Geen antwoord ontvangen.</p>';
    }

  } catch(err) {
    aiDiv.classList.remove('streaming');
    aiDiv.innerHTML = '<p>⚠️ Kan geen verbinding maken met de AI. Controleer je internetverbinding.</p>';
  }

  sendBtn.disabled = false;
  document.getElementById('chat-input').focus();
}

// Enter = send, Shift+Enter = newline
document.getElementById('chat-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
});

// Auto-resize textarea
document.getElementById('chat-input').addEventListener('input', function() {
  this.style.height = '';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});

document.getElementById('chat-send').addEventListener('click', sendChatMessage);

// Double-click on answer option → open chat and explain that answer
document.addEventListener('dblclick', function(e) {
  const btn = e.target.closest('.opt-btn');
  if (!btn) return;
  // Extract answer text (skip the letter badge span)
  const textSpan = btn.querySelectorAll('span')[1];
  const text = textSpan ? textSpan.textContent.trim() : btn.textContent.replace(/^[A-Z]\s*/, '').trim();
  if (!text) return;
  _chatSelection = text;
  openChatWithSelection();
});

/* ── Term-wrapping (runs after DOM ready) ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  if (typeof GLOSSARY === 'undefined' || !Object.keys(GLOSSARY).length) return;

  // Build (pattern, key) pairs.
  // entry.match (pipe-separated) gives the actual display text to search for.
  // If absent, the key itself is used (keys with spaces match directly;
  // single-word keys like "leukemie" also match directly).
  // This ensures compound terms like "acute myeloïde leukemie" are matched as a
  // whole and their constituent words (e.g. "leukemie") are NOT independently
  // highlighted within them.
  var pairs = [];
  Object.keys(GLOSSARY).forEach(function(k) {
    var patterns = GLOSSARY[k].match ? GLOSSARY[k].match.split('|') : [k];
    patterns.forEach(function(p) {
      p = p.trim();
      if (p) pairs.push({ key: k, pattern: p });
    });
  });

  // Sort longest pattern first so compound terms win before single-word constituents
  pairs.sort(function(a, b) { return b.pattern.length - a.pattern.length; });

  var escaped = pairs.map(function(p) {
    return p.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });
  var termRe = new RegExp('(?<![\\w])(' + escaped.join('|') + ')(?![\\w])', 'gi');

  // Lookup: lowercased matched text → GLOSSARY key
  var patToKey = {};
  pairs.forEach(function(p) { patToKey[p.pattern.toLowerCase()] = p.key; });

  function wrapTextNode(node) {
    // Skip text nodes already inside an existing gterm span (avoids double-marking)
    var anc = node.parentNode;
    while (anc) {
      if (anc.classList && anc.classList.contains('gterm')) return;
      if (anc.classList && anc.classList.contains('q-text',
          'q-context', 'q-question')) break;
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
      var k = patToKey[m[1].toLowerCase()] || m[1].toLowerCase();
      span.dataset.term = k;
      span.textContent  = m[1];
      (function(key) {
        span.addEventListener('click', function(e) { e.stopPropagation(); openGlossary(key); });
      })(k);
      frag.appendChild(span);
      last = termRe.lastIndex;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  var root = document.querySelector('.exam-main');
  if (!root) return;
  root.querySelectorAll('.q-text, .q-context, .q-question').forEach(function(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var nodes  = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(wrapTextNode);
  });
});

/* ── Submit / Results / Reset ────────────────────────────────────────────── */
function openSubmitModal()  { document.getElementById('submit-modal').classList.add('show'); }
function closeSubmitModal() { document.getElementById('submit-modal').classList.remove('show'); }
function openResetModal()   { document.getElementById('reset-modal').classList.add('show'); }
function closeResetModal()  { document.getElementById('reset-modal').classList.remove('show'); }

async function showResults() {
  closeSubmitModal();
  const vals      = Object.values(state.answered);
  const correct   = vals.filter(v => v === 'correct').length;
  const wrong     = vals.filter(v => v === 'wrong').length;
  const answered  = vals.filter(v => v === 'answered').length;
  const totalQ    = document.querySelectorAll('.q-block').length || 55;
  const notDone   = totalQ - correct - wrong - answered;
  const pct       = Math.round(correct / totalQ * 100);

  document.getElementById('score-num').textContent  = correct;
  document.getElementById('score-den').textContent  = '/ ' + totalQ;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent   = wrong + answered;
  document.getElementById('res-open').textContent    = notDone;
  document.getElementById('score-ring').style.setProperty('--pct', pct + '%');

  document.getElementById('results-overlay').classList.add('show');
  window.scrollTo(0, 0);
  /* MISSIONSAVEFIX-RESET: inleveren = reset voor de volgende keer (resultaten blijven uit geheugen) */
  window.__examSubmitted = true;
  try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
  try { sessionStorage.setItem(SAVE_KEY + '_reset', '1'); } catch(e) {}
  try { var _rsb = getSB(); if (_rsb) _rsb.auth.getSession().then(function(r){ var u = r && r.data && r.data.session && r.data.session.user; if (u) _rsb.from('exam_progress').delete().eq('user_id', u.id).eq('exam_key', EXAM_KEY); }); } catch(e) {}

  // Save completion to Supabase
  const sb = getSB();
  if (sb) {
    try {
      const { data: { session } } = await sb.auth.getSession();
      if (session?.user) {
        await sb.from('exam_completions')
          .upsert({ user_id: session.user.id, exam_key: EXAM_KEY, score_pct: pct },
                  { onConflict: 'user_id,exam_key' });
        await sb.rpc('update_exam_streak', { p_user_id: session.user.id });
      }
    } catch(e) {}
  }
}

function closeResults() {
  document.getElementById('results-overlay').classList.remove('show');
}

async function resetExam() {
  closeResetModal();
  closeResults();
  // Wipe localStorage
  try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
  // Set a flag so restoreProgress() on the next load skips all restore
  // (prevents Supabase data from re-applying before the delete propagates)
  try { sessionStorage.setItem(SAVE_KEY + '_reset', '1'); } catch(e) {}
  // Wipe Supabase (best-effort — flag above is the reliable guard)
  const sb = getSB();
  if (sb) {
    try {
      const { data: { session } } = await sb.auth.getSession();
      if (session?.user) {
        await sb.from('exam_progress')
          .delete()
          .eq('user_id', session.user.id)
          .eq('exam_key', EXAM_KEY);
      }
    } catch(e) {}
  }
  window.location.reload();
}

// Close modals on backdrop click
document.getElementById('submit-modal').addEventListener('click', function(e) {
  if (e.target === this) closeSubmitModal();
});
document.getElementById('reset-modal').addEventListener('click', function(e) {
  if (e.target === this) closeResetModal();
});

/* ── Instant bar restore from localStorage (synchronous, no network needed) ─
   Runs immediately after DOM is built so the bar is correct before any async
   Supabase call resolves. The async restoreProgress() will update questions
   and confirm/override this value shortly after. */
(function instantBarRestore() {
  try {
    // Skip if user just reset — page should be blank
    if (sessionStorage.getItem(SAVE_KEY + '_reset')) return;
    var saved = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (!saved || !saved.answered) return;
    var count  = Object.keys(saved.answered).length;
    var totalQ = document.querySelectorAll('.q-block').length || 55;
    var fill   = document.getElementById('streak-fill');
    if (!fill || count === 0) return;
    // Disable transition so it snaps instantly (no 0→X animation on load)
    fill.style.transition = 'none';
    fill.style.width = Math.min(count / totalQ * 100, 100) + '%';
    // Re-enable transition after one paint so normal answers still animate
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { fill.style.transition = ''; });
    });
  } catch(e) {}
})();


/* ── VUMED_DND_TOUCH v1: echte touch-drag voor dnd/bucket kaarten ────────── */
(function(){
  if (window._dndTouchInstalled) return;
  window._dndTouchInstalled = true;

  var css = document.createElement('style');
  css.textContent =
    '.dnd-card{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;touch-action:manipulation;}' +
    '.dnd-touch-clone{position:fixed;z-index:99999;pointer-events:none;margin:0;box-shadow:0 10px 26px rgba(0,0,0,0.28);opacity:0.95;transition:none;}' +
    '.dnd-card.dnd-lift{opacity:0.35;}';
  document.head.appendChild(css);

  var HOLD_MS = 130, SLOP = 8, EDGE = 110;
  var drag = null;

  function ctxFor(card){
    var q, st;
    if (card.dataset.bkQnum !== undefined && typeof _bucket !== 'undefined') {
      q = card.dataset.bkQnum; st = _bucket[q];
      if (st && !st.done) return { kind: 'bk', qnum: q, st: st };
      return null;
    }
    if (card.dataset.dndQnum !== undefined && typeof _dnd !== 'undefined') {
      q = card.dataset.dndQnum; st = _dnd[q];
      if (st && !st.done) return { kind: 'dnd', qnum: q, st: st };
    }
    return null;
  }

  function touchById(list, id){
    for (var i = 0; i < list.length; i++) if (list[i].identifier === id) return list[i];
    return null;
  }

  function zoneUnder(c, x, y){
    var el = document.elementFromPoint(x, y);
    if (!el || !el.closest) return null;
    var sel = (c.kind === 'bk')
      ? '[data-bk-zone="' + c.qnum + '"], #bk-pool-' + c.qnum
      : '[data-dnd-zone="' + c.qnum + '"], #dnd-pool-' + c.qnum;
    return el.closest(sel);
  }

  function startLift(){
    if (!drag || drag.lifted) return;
    drag.lifted = true;
    var r = drag.rect;
    var clone = drag.card.cloneNode(true);
    clone.className = 'dnd-card dnd-touch-clone';
    clone.style.left = r.left + 'px';
    clone.style.top = r.top + 'px';
    clone.style.width = r.width + 'px';
    clone.style.transform = 'translate(' + (drag.x - drag.x0) + 'px,' + (drag.y - drag.y0) + 'px) scale(1.05)';
    document.body.appendChild(clone);
    drag.clone = clone;
    drag.card.classList.add('dnd-lift');
    if (navigator.vibrate) { try { navigator.vibrate(8); } catch(e){} }
    if (!drag.raf) drag.raf = requestAnimationFrame(autoScroll);
  }

  function autoScroll(){
    if (!drag || !drag.lifted) return;
    var y = drag.y, h = window.innerHeight, dy = 0;
    if (y < EDGE) dy = -Math.min(14, (EDGE - y) * 0.2);
    else if (y > h - EDGE) dy = Math.min(14, (y - (h - EDGE)) * 0.2);
    if (dy) window.scrollBy(0, dy);
    drag.raf = requestAnimationFrame(autoScroll);
  }

  function highlight(z){
    if (drag.over && drag.over !== z) drag.over.classList.remove('dnd-over');
    if (z && z !== drag.over) z.classList.add('dnd-over');
    drag.over = z;
  }

  function cleanup(){
    if (!drag) return;
    if (drag.timer) clearTimeout(drag.timer);
    if (drag.raf) cancelAnimationFrame(drag.raf);
    if (drag.over) drag.over.classList.remove('dnd-over');
    if (drag.clone) drag.clone.remove();
    drag.card.classList.remove('dnd-lift');
    drag = null;
  }

  function doDrop(){
    var c = drag.ctx, val = drag.card.dataset.val, src = drag.card.dataset.src || '';
    var z = zoneUnder(c, drag.x, drag.y);
    if (z) {
      if (c.kind === 'bk') {
        if (z.dataset.bucket !== undefined) c.st.placed[val] = z.dataset.bucket;
        else delete c.st.placed[val];
      } else {
        if (z.dataset.letter !== undefined) {
          for (var l in c.st.placed) if (c.st.placed[l] === val) delete c.st.placed[l];
          c.st.placed[z.dataset.letter] = val;
        } else if (src.indexOf('zone-') === 0) {
          var old = src.slice(5);
          if (c.st.placed[old] === val) delete c.st.placed[old];
        }
      }
    }
    c.st.selected = null;
    if (c.kind === 'bk') { if (typeof _bucketRender === 'function') _bucketRender(c.qnum); }
    else { if (typeof _dndRender === 'function') _dndRender(c.qnum); }
  }

  document.addEventListener('touchstart', function(e){
    if (drag || e.touches.length !== 1) return;
    var card = (e.target && e.target.closest) ? e.target.closest('.dnd-card') : null;
    if (!card || card.classList.contains('correct') || card.classList.contains('wrong')) return;
    var ctx = ctxFor(card);
    if (!ctx) return;
    var t = e.touches[0];
    drag = { card: card, ctx: ctx, x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY,
             id: t.identifier, rect: card.getBoundingClientRect(),
             lifted: false, moved: false, over: null, clone: null, raf: 0,
             timer: setTimeout(startLift, HOLD_MS) };
  }, { passive: true, capture: true });

  document.addEventListener('touchmove', function(e){
    if (!drag) return;
    var t = touchById(e.touches, drag.id);
    if (!t) return;
    drag.x = t.clientX; drag.y = t.clientY;
    var dx = drag.x - drag.x0, dy = drag.y - drag.y0;
    if (!drag.lifted) {
      if (Math.abs(dx) <= SLOP && Math.abs(dy) <= SLOP) return;
      if (Math.abs(dx) > Math.abs(dy)) { startLift(); }
      else { cleanup(); return; }
    }
    drag.moved = true;
    if (e.cancelable) e.preventDefault();
    drag.clone.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(1.05)';
    highlight(zoneUnder(drag.ctx, drag.x, drag.y));
  }, { passive: false, capture: true });

  document.addEventListener('touchend', function(e){
    if (!drag) return;
    if (!touchById(e.changedTouches, drag.id)) return;
    if (drag.lifted && drag.moved) {
      if (e.cancelable) e.preventDefault();
      doDrop();
    }
    cleanup();
  }, { passive: false, capture: true });

  document.addEventListener('touchcancel', function(){ cleanup(); }, { passive: true, capture: true });

  document.addEventListener('contextmenu', function(e){
    if (drag && drag.lifted) e.preventDefault();
  }, true);
})();

/* ── VUMED_IMG_ZOOM v1: klik een inhoud-afbeelding (histologie/x-ray) → smooth
      vergroten met FLIP-animatie + verder in-/uitzoomen en pannen. DND-kaarten,
      opties, glossary-thumb, avatar/navbar/wallet-iconen zijn uitgesloten. ───── */
(function(){
  if (window._imgZoomInstalled) return;
  window._imgZoomInstalled = true;

  function eligible(img){
    if (!img || img.tagName !== 'IMG') return false;
    if (img.closest('.vz-overlay')) return false;
    if (img.classList.contains('g-img')) return false;
    if (img.closest('.dnd-card,.opt-btn,.navbar,#vumed-stats,.g-panel,.g-img-nav,' +
                    '[class*="avatar"],[id*="avatar"],.chest,.mascot,button')) return false;
    if (img.parentElement && img.parentElement.querySelector('[data-dnd-zone]')) return false;
    var src = img.getAttribute('src') || '';
    if (!src) return false;
    if (img.naturalWidth && img.naturalWidth < 42 && img.naturalHeight < 42) return false;
    return true;
  }

  var css = document.createElement('style');
  css.textContent = [
    'img.vz-hot{cursor:zoom-in;transition:filter .15s ease,box-shadow .15s ease;}',
    'img.vz-hot:hover{filter:brightness(.96);box-shadow:0 4px 16px rgba(0,0,0,.16);}',
    '.vz-overlay{position:fixed;inset:0;z-index:999999;overflow:hidden;',
      'background:rgba(255,255,255,0);-webkit-backdrop-filter:blur(0px);backdrop-filter:blur(0px);',
      'transition:background .3s ease,backdrop-filter .3s ease,-webkit-backdrop-filter .3s ease;',
      'touch-action:none;-webkit-user-select:none;user-select:none;}',
    '.vz-overlay.vz-in{background:rgba(255,255,255,.94);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);}',
    '.vz-overlay img.vz-big{position:absolute;top:0;left:0;margin:0;max-width:none;max-height:none;',
      'border-radius:10px;box-shadow:0 24px 74px rgba(0,0,0,.22);transform-origin:top left;',
      'will-change:transform;cursor:zoom-in;-webkit-user-drag:none;user-drag:none;}',
    '.vz-overlay.vz-zoomed img.vz-big{cursor:grab;}',
    '.vz-overlay.vz-drag img.vz-big{cursor:grabbing;}',
    '.vz-close{position:fixed;top:14px;right:16px;z-index:1000000;width:44px;height:44px;padding:0;',
      'border:none;border-radius:50%;background:rgba(0,0,0,.07);color:#3C3C43;font-size:24px;',
      'line-height:44px;text-align:center;cursor:pointer;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);',
      'opacity:0;transform:scale(.7);transition:opacity .3s .08s ease,transform .3s .08s cubic-bezier(.34,1.56,.64,1),background .15s;}',
    '.vz-close:hover{background:rgba(0,0,0,.14);}',
    '.vz-overlay.vz-in .vz-close{opacity:1;transform:scale(1);}',
    '.vz-hint{position:fixed;bottom:20px;left:50%;z-index:1000000;padding:8px 16px;border-radius:20px;',
      'background:rgba(0,0,0,.07);color:#3C3C43;font-size:13px;font-weight:700;',
      'font-family:Nunito,system-ui,-apple-system,sans-serif;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);',
      'pointer-events:none;white-space:nowrap;opacity:0;transform:translateX(-50%) translateY(10px);',
      'transition:opacity .3s .12s ease,transform .3s .12s ease;}',
    '.vz-overlay.vz-in .vz-hint{opacity:1;transform:translateX(-50%) translateY(0);}',
    '.vz-overlay.vz-in.vz-zoomed .vz-hint{opacity:0;transform:translateX(-50%) translateY(10px);}',
    'html.dark .vz-overlay{background:rgba(28,28,30,0);}',
    'html.dark .vz-overlay.vz-in{background:rgba(28,28,30,.95);}',
    'html.dark .vz-overlay img.vz-big{box-shadow:0 24px 74px rgba(0,0,0,.55);}',
    'html.dark .vz-close{background:rgba(255,255,255,.15);color:#fff;}',
    'html.dark .vz-close:hover{background:rgba(255,255,255,.28);}',
    'html.dark .vz-hint{background:rgba(255,255,255,.15);color:#fff;}',
    '@media (prefers-reduced-motion:reduce){.vz-overlay,.vz-overlay img.vz-big,.vz-close,.vz-hint{transition-duration:.01ms!important;}}'
  ].join('');
  (document.head || document.documentElement).appendChild(css);

  function markAll(root){
    var imgs = (root || document).querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++){
      if (eligible(imgs[i])) imgs[i].classList.add('vz-hot');
      else imgs[i].classList.remove('vz-hot');
    }
  }

  var S = null;   // active session state

  function clamp(){
    var W = S.w * S.k, H = S.h * S.k;
    if (W <= S.vw) S.px = (S.vw - W) / 2;
    else S.px = Math.min(0, Math.max(S.vw - W, S.px));
    if (H <= S.vh) S.py = (S.vh - H) / 2;
    else S.py = Math.min(0, Math.max(S.vh - H, S.py));
  }

  function render(){
    S.big.style.transform = 'translate(' + S.px + 'px,' + S.py + 'px) scale(' + S.k + ')';
    S.overlay.classList.toggle('vz-zoomed', S.k > 1.02);
  }

  function fit(){
    S.vw = window.innerWidth; S.vh = window.innerHeight;
    var nw = S.big.naturalWidth || S.rect.width || 300;
    var nh = S.big.naturalHeight || S.rect.height || 300;
    var s = Math.min((S.vw * 0.94) / nw, (S.vh * 0.90) / nh, 3);
    S.w = nw * s; S.h = nh * s;
    S.baseLeft = (S.vw - S.w) / 2; S.baseTop = (S.vh - S.h) / 2;
    S.big.style.width = S.w + 'px'; S.big.style.height = S.h + 'px';
    S.big.style.left = '0px'; S.big.style.top = '0px';
  }

  // zoom toward a viewport focal point, keeping it fixed under the finger/cursor
  function zoomTo(nk, fx, fy){
    nk = Math.min(5, Math.max(1, nk));
    var lx = (fx - S.px) / S.k, ly = (fy - S.py) / S.k;
    S.k = nk;
    S.px = fx - nk * lx; S.py = fy - nk * ly;
    clamp(); render();
  }

  function animateOpen(){
    // FLIP: element is laid out at its final fit position; start it transformed
    // back onto the thumbnail, then transition to identity.
    var tx = S.rect.left, ty = S.rect.top;
    var sc = S.rect.width / S.w;
    S.big.style.transition = 'none';
    S.big.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + sc + ')';
    void S.big.offsetWidth;                       // force reflow (no rAF; safe in bg tabs)
    S.big.style.transition = 'transform .34s cubic-bezier(.22,.61,.36,1)';
    S.px = 0; S.py = 0; S.k = 1; clamp();
    S.big.style.transform = 'translate(' + S.px + 'px,' + S.py + 'px) scale(1)';
    S.overlay.classList.add('vz-in');
  }

  function close(){
    if (!S) return;
    var st = S; S = null;
    var tx = st.rect.left, ty = st.rect.top;
    var sc = st.rect.width / st.w;
    st.big.style.transition = 'transform .3s cubic-bezier(.4,0,.2,1)';
    st.big.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + sc + ')';
    st.overlay.classList.remove('vz-in');
    window.removeEventListener('resize', st.onResize);
    window.removeEventListener('keydown', st.onKey, true);
    var done = false;
    var finish = function(){
      if (done) return; done = true;
      st.overlay.remove();
      if (st.src) st.src.style.visibility = '';
    };
    st.big.addEventListener('transitionend', finish);
    setTimeout(finish, 420);
  }

  function open(thumb){
    if (S) return;
    var rect = thumb.getBoundingClientRect();
    var overlay = document.createElement('div'); overlay.className = 'vz-overlay';
    var big = document.createElement('img'); big.className = 'vz-big';
    big.alt = thumb.alt || '';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'vz-close'; closeBtn.setAttribute('aria-label', 'Sluiten'); closeBtn.innerHTML = '&times;';
    var hint = document.createElement('div');
    hint.className = 'vz-hint'; hint.textContent = 'Scroll of dubbeltik om verder in te zoomen';
    overlay.appendChild(big); overlay.appendChild(closeBtn); overlay.appendChild(hint);
    document.body.appendChild(overlay);

    S = { overlay: overlay, big: big, src: thumb, rect: rect,
          k: 1, px: 0, py: 0, w: 0, h: 0, vw: 0, vh: 0, baseLeft: 0, baseTop: 0,
          pts: {}, npts: 0, pinch: null, moved: false, lastTap: 0, downX: 0, downY: 0 };

    var start = function(){
      thumb.style.visibility = 'hidden';   // hide source so the FLIP looks seamless
      fit(); animateOpen();
    };
    if (thumb.complete && thumb.naturalWidth) { big.src = thumb.currentSrc || thumb.src; start(); }
    else { big.onload = start; big.src = thumb.currentSrc || thumb.src; }

    S.onResize = function(){ if (!S) return; fit(); S.k = 1; S.px = 0; S.py = 0; clamp(); render(); };
    S.onKey = function(e){ if (e.key === 'Escape'){ e.preventDefault(); close(); } };
    window.addEventListener('resize', S.onResize);
    window.addEventListener('keydown', S.onKey, true);

    closeBtn.addEventListener('click', function(e){ e.stopPropagation(); close(); });

    // wheel = zoom toward cursor (desktop)
    overlay.addEventListener('wheel', function(e){
      if (!S) return; e.preventDefault();
      zoomTo(S.k * (e.deltaY < 0 ? 1.18 : 1 / 1.18), e.clientX, e.clientY);
    }, { passive: false });

    // double-click = toggle zoom (desktop)
    big.addEventListener('dblclick', function(e){
      if (!S) return; e.preventDefault();
      zoomTo(S.k > 1.02 ? 1 : 2.6, e.clientX, e.clientY);
    });

    // pointer pan / pinch / tap (mouse + touch, unified)
    overlay.addEventListener('pointerdown', function(e){
      if (!S) return;
      overlay.setPointerCapture && overlay.setPointerCapture(e.pointerId);
      S.pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      S.npts++;
      S.moved = false; S.downX = e.clientX; S.downY = e.clientY;
      if (S.npts === 2){
        var ids = Object.keys(S.pts), a = S.pts[ids[0]], b = S.pts[ids[1]];
        S.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: S.k,
                    cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
      }
    });
    overlay.addEventListener('pointermove', function(e){
      if (!S || !S.pts[e.pointerId]) return;
      var prev = S.pts[e.pointerId];
      var dx = e.clientX - prev.x, dy = e.clientY - prev.y;
      S.pts[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (Math.abs(e.clientX - S.downX) > 6 || Math.abs(e.clientY - S.downY) > 6) S.moved = true;
      if (S.npts >= 2 && S.pinch){
        var ids = Object.keys(S.pts), a = S.pts[ids[0]], b = S.pts[ids[1]];
        if (!a || !b) return;
        var nd = Math.hypot(a.x - b.x, a.y - b.y);
        zoomTo(S.pinch.k * (nd / S.pinch.d), S.pinch.cx, S.pinch.cy);
      } else if (S.k > 1.02){
        overlay.classList.add('vz-drag');
        S.px += dx; S.py += dy; clamp(); render();
      }
    });
    var up = function(e){
      if (!S || !S.pts[e.pointerId]) return;
      delete S.pts[e.pointerId]; S.npts = Math.max(0, S.npts - 1);
      if (S.npts < 2) S.pinch = null;
      if (S.npts === 0){
        overlay.classList.remove('vz-drag');
        if (!S.moved){
          var onBig = (e.target === big);
          var now = Date.now();
          if (now - S.lastTap < 300){          // double-tap toggle zoom
            S.lastTap = 0;
            zoomTo(S.k > 1.02 ? 1 : 2.6, e.clientX, e.clientY);
          } else {
            S.lastTap = now;
            if (!onBig && S.k <= 1.02) close();  // tap backdrop = sluiten
          }
        }
      }
    };
    overlay.addEventListener('pointerup', up);
    overlay.addEventListener('pointercancel', up);
  }

  document.addEventListener('click', function(e){
    if (S) return;
    var img = (e.target && e.target.closest) ? e.target.closest('img') : null;
    if (!img || !eligible(img)) return;
    e.preventDefault();
    open(img);
  });

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', function(){ markAll(); });
  else markAll();

  try {
    var mo = new MutationObserver(function(muts){
      for (var i = 0; i < muts.length; i++){
        var m = muts[i];
        for (var j = 0; j < m.addedNodes.length; j++){
          var n = m.addedNodes[j];
          if (n.nodeType !== 1) continue;
          if (n.tagName === 'IMG'){ if (eligible(n)) n.classList.add('vz-hot'); }
          else if (n.querySelectorAll) markAll(n);
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  } catch (e){}
})();
