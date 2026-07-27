/**
 * vumed_stats.js — shared persistent stats bar (hearts · streak · coins · gems · XP)
 * AND the single hearts/wallet engine.
 *
 * Injected on every page via navbar.js (hub pages) and progressdots.js (exam pages).
 * Reads/writes the existing user_profiles columns (total_xp, total_gems, total_coins)
 * and the hearts columns (`hearts`, `hearts_day`, `heart_gift_day`), with a
 * localStorage mirror for anonymous users. All icons are inline SVG — never emoji.
 *
 * Hearts model (Tijmen's spec, 2026-07-11): every day starts with 20 hearts
 * (refill on the first load of a new day — no timed regen). A wrong answer costs
 * one heart (progressdots calls loseHeart). At 0 hearts, exam pages (.q-block)
 * get a full-page blocker: buy hearts in shop.html with gems, claim the daily
 * gift (+3), or come back tomorrow.
 * Overflow (Tijmen, 2026-07-20): hearts CAN exceed 20 — a chest/daily-gift +3
 * at full hearts lands on top (20 → 23). Only SHOP purchases still cap at 20.
 * The daily refill tops up to 20 but never takes overflow away.
 *
 * Opt out on a page by setting `window.VUMED_STATS_OFF = true` BEFORE this loads.
 * Currently only vumed.html opts out (it has its own top-right header + Daily
 * Quests/Klassement gamification cards that the bar would overlap). The bar is
 * ON everywhere else: dashboard, exam pages, voortgang, trofeeenpad, profile,
 * admin. `window.VUMED_STATS_BAR_OFF = true` loads the engine but hides the bar
 * (shop.html — it renders its own big balances).
 *
 * Dagdoel model (Tijmen's spec, 2026-07-16): a SECOND counter next to the 🔥
 * day-streak, which is untouched (still 10 questions / a mission, owned by
 * progressdots.js). The dagdoel is the user's own target — 10/20/30/50, picked
 * in a first-login popup on the dashboard, changeable in instellingen.html. The
 * dagdoel-reeks counts consecutive days the target was met; at 7/30/100 days a
 * chest is claimable, its RARITY from the dagdoel and its SIZE from the
 * milestone (GOAL_TIERS × GOAL_MILESTONES below). So with dagdoel 20 you can
 * hold your 🔥 streak on 10 questions and still miss your dagdoel that day.
 *
 * Public API: window.VumedStats = { awardGems, awardCoins, awardHearts,
 * loseHeart, buyHearts, buyFreezes, claimGift, syncStreak, refresh, getState,
 * HEART_MAX, GIFT_HEARTS, REFILL_COST, GOALS, goalInfo, setGoal, checkGoalDay,
 * claimGoalMilestone }.
 * Every repaint dispatches a 'vumed-stats' CustomEvent on document.
 */
(function () {
  if (window.VumedStats || window.VUMED_STATS_OFF) return;

  var HEART_MAX = 20;                // fresh hearts every day
  // Legacy (2026-07-20: the daily gift is now a random chest — hearts come from
  // the chest roll, see gift_modal.js HEART_CHANCE). Still exported so a
  // cache-skewed page reading VS().GIFT_HEARTS doesn't render "undefined".
  var GIFT_HEARTS = 3;
  var REFILL_COST = 350;             // gems to refill hearts to full
  var LS = {
    gems: 'vumed_gems', coins: 'vumed_coins', xp: 'vumed_xp',
    hearts: 'vumed_hearts', heartsDay: 'vumed_hearts_day',
    gift: 'vumed_heartgift', streak: 'vumed_daystreak',
    freezes: 'vumed_freezes',
    goal: 'vumed_daygoal',          // the chosen dagdoel — the key dashboard's dailyRing already read
    goalRun: 'vumed_goalstate'      // {streak,lastDay,minGoal,claimed[]} mirror of the DB run
  };

  /* ── Dagdoel: the tunable table ──────────────────────────────────────────
     The dagdoel picks the chest's RARITY (a gift_modal RARITIES key), the
     milestone picks its SIZE (a multiplier on the rolled gems/coins). Both
     multipliers compose: doel 50 at 100 days = legendarisch × 10.
     Change the numbers here; nothing else needs to know.                    */
  var GOALS = [10, 20, 30, 50];
  var DEFAULT_GOAL = 20;                    // what the ring showed before this existed
  var GOAL_TIERS = {
    10: { rarity: 'gewoon',       mult: 1, label: 'Rustig'  },
    20: { rarity: 'zeldzaam',     mult: 1, label: 'Normaal' },
    30: { rarity: 'episch',       mult: 1, label: 'Serieus' },
    50: { rarity: 'legendarisch', mult: 1, label: 'Intens'  }
  };
  var GOAL_MILESTONES = [
    { days: 7,   mult: 1  },
    { days: 30,  mult: 3  },
    { days: 100, mult: 10 }
  ];

  function today() { return new Date().toISOString().slice(0, 10); }
  function yesterday() { return new Date(Date.now() - 86400000).toISOString().slice(0, 10); }
  /* Floor at 0 only — hearts may exceed HEART_MAX (chest/gift overflow).
     Shop purchases cap explicitly in buyHearts. */
  function clampH(h) { return Math.max(0, Math.round(h || 0)); }

  var state = {
    hearts: HEART_MAX, giftDay: null, streak: 0, freezes: 0, coins: 0, gems: 0, xp: 0,
    uid: null, loaded: false,
    goal: null,                             // null = never chosen → dashboard shows the picker
    goalRun: { streak: 0, lastDay: null, minGoal: null, claimed: [] }
  };

  /* ── Supabase (reuse any existing client) ── */
  var _sb = null;
  function sb() {
    if (_sb) return _sb;
    if (window._sbInstance) return (_sb = window._sbInstance);
    if (!window.SUPABASE_URL || !window.supabase) return null;
    try { _sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY); window._sbInstance = _sb; }
    catch (e) { return null; }
    return _sb;
  }
  function uid() {
    var c = sb(); if (!c) return Promise.resolve(null);
    return c.auth.getSession().then(function (r) {
      return (r && r.data && r.data.session) ? r.data.session.user.id : null;
    }).catch(function () { return null; });
  }

  /* ── Icons ── */
  var IC = {
    heart: function (full) {
      var c = full ? '#FF4B4B' : (document.documentElement.classList.contains('dark') ? '#48484A' : '#E0E0E4');
      return '<svg viewBox="0 0 24 24" width="19" height="19"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="' + c + '"/></svg>';
    },
    /* static frame of streak_anim.json (dagenreeks-vlam) in the lottie's own colours */
    flame: '<svg viewBox="0 0 27.5 36.7" width="15" height="19"><path d="M13.01,0.81C13.38,0.27 14.15,0.25 14.54,0.77C14.54,0.77 24.54,14.24 24.54,14.24C26.24,16.55 27.25,19.43 27.25,22.55C27.25,30.20 21.21,36.39 13.75,36.39C6.41,36.39 0.43,30.39 0.25,22.91C0.25,22.91 0.25,6.19 0.25,6.19C0.25,5.45 1.02,4.99 1.64,5.34C1.64,5.34 6.93,8.29 6.93,8.29C7.35,8.53 7.88,8.40 8.16,7.99C8.16,7.99 13.01,0.81 13.01,0.81Z" fill="#EB6C31"/><path d="M13.21,15.25C13.48,14.89 14.02,14.89 14.29,15.25C14.29,15.25 19.51,22.18 19.51,22.18C20.41,23.39 20.95,24.90 20.95,26.54C20.95,30.56 17.73,33.81 13.75,33.81C9.77,33.81 6.55,30.56 6.55,26.54C6.55,24.90 7.09,23.39 7.99,22.18C7.99,22.18 13.21,15.25 13.21,15.25Z" fill="#EFEF65"/></svg>',
    coin: '<svg viewBox="0 0 24 24" width="19" height="19"><circle cx="12" cy="12" r="9.5" fill="#FFC800"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#E0A800" stroke-width="1.6"/><path d="M6 12 H8.6 L9.7 8.9 L11.4 15 L12.7 10.6 L13.6 12 H18" stroke="#E0A800" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    gem: '<svg viewBox="0 0 24 24" width="19" height="19"><path d="M6 3h12l4 6-10 12L2 9z" fill="#1CB0F6"/><path d="M2 9h20M8 3l-2 6 6 12M16 3l2 6-6 12" fill="none" stroke="#0A8BD0" stroke-width="1.1" stroke-linejoin="round"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="#58CC02"/></svg>'
  };

  function nf(n) { return (n || 0).toLocaleString('nl-NL'); }

  /* ── Animated streak flame (same lottie as the profile Dagenreeks tile) ──
     paint() rebuilds the bar's innerHTML, which would destroy a lottie instance,
     so the flame lives in ONE persistent node that gets re-appended into the
     streak pill's slot after every paint (moving a node keeps the animation). */
  var _flameEl = null, _flameAnim = null;
  function ensureLottie(cb) {
    if (window.lottie) { cb(); return; }
    var s = document.getElementById('vs-lottie-cdn');
    if (!s) {
      s = document.createElement('script');
      s.id = 'vs-lottie-cdn';
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
      document.head.appendChild(s);
    }
    s.addEventListener('load', cb);
  }
  function flameNode() {
    if (!_flameEl) {
      _flameEl = document.createElement('span');
      _flameEl.className = 'vs-flame';
      _flameEl.innerHTML = IC.flame;             // static fallback until lottie is up
      ensureLottie(function () {
        if (_flameAnim || !window.lottie || !_flameEl) return;
        _flameEl.innerHTML = '';
        try {
          _flameAnim = window.lottie.loadAnimation({
            container: _flameEl, renderer: 'svg', loop: true, autoplay: true,
            path: 'streak_anim.json'
          });
        } catch (e) { _flameEl.innerHTML = IC.flame; }
      });
    }
    _flameEl.style.filter = state.streak > 0 ? 'none' : 'grayscale(1) opacity(0.45)';
    return _flameEl;
  }

  /* ── Persistence ── */
  function readLocal() {
    try {
      var d = localStorage.getItem(LS.heartsDay);
      var h = localStorage.getItem(LS.hearts);
      // new day → top up to 20, but overflow hearts (chest at full) carry over
      state.hearts = (d === today() && h !== null)
        ? clampH(parseInt(h, 10))
        : Math.max(HEART_MAX, h !== null ? clampH(parseInt(h, 10)) : 0);
      state.giftDay = localStorage.getItem(LS.gift);
      state.streak = parseInt(localStorage.getItem(LS.streak) || '0', 10) || 0;
      state.gems = parseInt(localStorage.getItem(LS.gems) || '0', 10) || 0;
      state.coins = parseInt(localStorage.getItem(LS.coins) || '0', 10) || 0;
      state.xp = parseInt(localStorage.getItem(LS.xp) || '0', 10) || 0;
      state.freezes = parseInt(localStorage.getItem(LS.freezes) || '0', 10) || 0;
      var g = parseInt(localStorage.getItem(LS.goal) || '', 10);
      state.goal = (GOALS.indexOf(g) >= 0) ? g : null;
      var run = JSON.parse(localStorage.getItem(LS.goalRun) || 'null');
      if (run && typeof run === 'object') {
        state.goalRun = {
          streak: parseInt(run.streak, 10) || 0,
          lastDay: run.lastDay || null,
          minGoal: parseInt(run.minGoal, 10) || null,
          claimed: Array.isArray(run.claimed) ? run.claimed.map(Number) : []
        };
      }
    } catch (e) {}
  }
  function mirrorGoal() {
    try {
      if (state.goal) localStorage.setItem(LS.goal, String(state.goal));
      localStorage.setItem(LS.goalRun, JSON.stringify(state.goalRun));
    } catch (e) {}
  }
  function persistHearts() {
    try { localStorage.setItem(LS.hearts, state.hearts); localStorage.setItem(LS.heartsDay, today()); } catch (e) {}
    if (state.uid) {
      var c = sb();
      if (c) c.from('user_profiles')
        .update({ hearts: state.hearts, hearts_day: today(), hearts_updated_at: new Date().toISOString() })
        .eq('user_id', state.uid).then(function () {}, function () {});
    }
  }
  function mirrorLocal() {
    try {
      localStorage.setItem(LS.gems, state.gems); localStorage.setItem(LS.coins, state.coins);
      localStorage.setItem(LS.xp, state.xp); localStorage.setItem(LS.freezes, state.freezes);
    } catch (e) {}
  }

  async function pull() {
    readLocal();
    state.uid = await uid();
    if (state.uid) {
      var c = sb();
      try {
        var r = await c.from('user_profiles').select('total_xp,total_gems,total_coins,streak_freezes,hearts,hearts_day,heart_gift_day,login_streak,last_active_date,daily_goal,goal_streak,goal_last_date,goal_min,goal_claimed').eq('user_id', state.uid).single();
        if (r && r.data) {
          state.xp = r.data.total_xp || 0;
          state.gems = r.data.total_gems || 0;
          state.coins = r.data.total_coins || 0;
          state.freezes = r.data.streak_freezes || 0;
          state.hearts = (r.data.hearts_day === today() && r.data.hearts != null)
            ? clampH(r.data.hearts)
            : Math.max(HEART_MAX, clampH(r.data.hearts));  // new day → refill to 20 (overflow carries)
          if (r.data.heart_gift_day) state.giftDay = r.data.heart_gift_day;
          // Dagdoel: the DB wins, except when a guest picked a goal and only then
          // logged in — carry that choice up instead of re-asking.
          var pending = state.goal;
          state.goal = (GOALS.indexOf(r.data.daily_goal) >= 0) ? r.data.daily_goal : null;
          state.goalRun = {
            streak: r.data.goal_streak || 0,
            lastDay: r.data.goal_last_date || null,
            minGoal: r.data.goal_min || null,
            claimed: Array.isArray(r.data.goal_claimed) ? r.data.goal_claimed.map(Number) : []
          };
          if (!state.goal && pending) { state.goal = pending; pushGoal(pending); }
          /* Day-streak: progressdots owns the local counter (vumed_daystreak),
             but that alone is per-device — phone and laptop drift apart. The
             DB's login_streak (update_login_streak RPC) is the cross-device
             truth. Adopt it when its run is LIVE (last qualified day = today
             or yesterday, same ISO-UTC clock as _today) and ahead of the live
             local run; a stale local counter never blocks the adoption, and a
             local run that's ahead (RPC not yet fired today) is kept. */
          try {
            var dbS = r.data.login_streak || 0;
            var dbD = r.data.last_active_date || null;   // 'YYYY-MM-DD'
            if (dbS > 0 && dbD) {
              var t = today(), y = yesterday();
              var locD = localStorage.getItem('vumed_lastactive');
              var locS = parseInt(localStorage.getItem(LS.streak) || '0', 10) || 0;
              if (dbD === t) {
                /* The DB already counted today: update_login_streak is the single
                   authority on the number (it applies the freeze/reset rules
                   idempotently per day). Adopt it UNCONDITIONALLY — this corrects
                   a per-device local counter that drifted either too HIGH (a day
                   double-counted against this device's own last-active) or too
                   LOW (spuriously reset), the drift that made phone and laptop
                   disagree. */
                if (locS !== dbS || locD !== t) {
                  localStorage.setItem(LS.streak, String(dbS));
                  localStorage.setItem('vumed_lastactive', t);
                }
              } else if (dbD === y) {
                /* Today not yet counted server-side. A live local run may be
                   legitimately one ahead (this device qualified today and its RPC
                   is still pending) — keep the higher of the two. */
                var locLive = (locD === t || locD === y) ? locS : 0;
                if (dbS > locLive) {
                  localStorage.setItem(LS.streak, String(dbS));
                  if (!locD || dbD > locD) localStorage.setItem('vumed_lastactive', dbD);
                }
              }
            }
          } catch (e2) {}
          mirrorLocal();
          mirrorGoal();
          persistHearts();                            // persists the daily refill
        }
      } catch (e) {}
    }
    // streak from localStorage (progressdots owns vumed_daystreak; the DB
    // reconcile above may just have raised it)
    state.streak = parseInt(localStorage.getItem(LS.streak) || '0', 10) || 0;
    state.loaded = true;
  }

  /* ── Public actions ── */
  async function awardGems(n) {
    n = n || 0; if (!n) return;
    state.gems = Math.max(0, state.gems + n); mirrorLocal(); pop('gems', '+' + n); paint();
    if (state.uid) { var c = sb(); if (c) { try { await c.rpc('add_gems', { p_user_id: state.uid, p_amount: n }); } catch (e) {} } }
  }
  async function awardCoins(n) {
    n = n || 0; if (!n) return;
    state.coins = Math.max(0, state.coins + n); mirrorLocal(); pop('coins', '+' + n); paint();
    if (state.uid) { var c = sb(); if (c) { try { await c.rpc('add_coins', { p_user_id: state.uid, p_amount: n }); } catch (e) {} } }
  }
  /* Chest loot (2026-07-20): random chests roll a small heart chance — credit
     rides the same path as the daily refill (persistHearts = local + direct
     user_profiles.hearts update; no RPC exists for hearts). May overflow past
     HEART_MAX (heart_overflow rule: chests can, the shop can't). */
  function awardHearts(n) {
    n = n || 0; if (!n) return;
    state.hearts = clampH(state.hearts + n);
    persistHearts(); pop('hearts', '+' + n); paint();
  }
  function loseHeart() {
    if (state.hearts <= 0) { paint(); return 0; }
    state.hearts = clampH(state.hearts - 1);
    // Local mirror + optimistic paint immediately.
    try { localStorage.setItem(LS.hearts, state.hearts); localStorage.setItem(LS.heartsDay, today()); } catch (e) {}
    shakeHearts(); paint();
    // Logged-in: the DB write goes through the ATOMIC lose_heart RPC (server-side
    // decrement with a 0 floor), not a plain last-writer-wins update — so a stale
    // tab can't overwrite a lower count and un-block the 0-hearts gate. Adopt the
    // server value only when it's not higher than local (never let the RPC's
    // new-day refill bump a mid-session count back up).
    if (state.uid) {
      var c = sb();
      if (c) c.rpc('lose_heart', { p_user_id: state.uid }).then(function (r) {
        if (r && !r.error && typeof r.data === 'number' && r.data <= state.hearts) {
          state.hearts = clampH(r.data);
          try { localStorage.setItem(LS.hearts, state.hearts); } catch (e) {}
          paint();
        }
      }, function () {});
    }
    return state.hearts;
  }
  /* Shop: spend coins on hearts. gain=HEART_MAX acts as "refill to full". */
  async function buyHearts(cost, gain) {
    if (!state.uid) return { ok: false, reason: 'login' };
    if (state.hearts >= HEART_MAX) return { ok: false, reason: 'full' };
    if (state.coins < cost) return { ok: false, reason: 'coins' };
    state.coins -= cost;
    state.hearts = Math.min(HEART_MAX, clampH(state.hearts + gain));  // shop never overflows past 20
    mirrorLocal(); persistHearts(); paint();
    var c = sb();
    if (c) { try { await c.rpc('add_coins', { p_user_id: state.uid, p_amount: -cost }); } catch (e) {} }
    return { ok: true };
  }
  /* Shop: spend gems on streak freezers (streakbevriezers). A freezer bridges one
     missed day so the day-streak survives — consumed by progressdots.js
     maybeBumpStreak (local) and the update_login_streak RPC (DB). */
  async function buyFreezes(cost, count) {
    if (!state.uid) return { ok: false, reason: 'login' };
    if (state.gems < cost) return { ok: false, reason: 'gems' };
    state.gems -= cost;
    state.freezes += count;
    mirrorLocal(); pop('gems', '-' + cost); paint();
    var c = sb();
    if (c) {
      try {
        await c.rpc('add_gems', { p_user_id: state.uid, p_amount: -cost });
        await c.rpc('add_freezes', { p_user_id: state.uid, p_amount: count });
      } catch (e) {}
    }
    return { ok: true, freezes: state.freezes };
  }
  /* Push the day-streak to the DB (update_login_streak consumes freezers server-side
     on a gap), then re-pull so the local freezer mirror matches. Callers must only
     invoke this on a day that QUALIFIES (progressdots gates on _dayQualifies). */
  function syncStreak() {
    var c = sb(); if (!c || !state.uid) return Promise.resolve();
    return c.rpc('update_login_streak', { p_user_id: state.uid })
      .then(function () { return pull().then(paint); }, function () {});
  }
  /* ── Dagdoel ─────────────────────────────────────────────────────────────
     The 🔥 day-streak above is untouched; this is the second, independent
     counter. Guests keep a localStorage-only run (so the ring works logged
     out), but claiming a chest needs an account — the reeks is only
     un-farmable because bump_goal_streak is idempotent per calendar day, and
     that guarantee lives in the DB.                                          */
  function effGoal() { return state.goal || DEFAULT_GOAL; }
  /* Today's answered count — progressdots.js owns this key (incDaily). */
  function todayCount() {
    try { return parseInt(localStorage.getItem('vumed_daily_' + today()) || '0', 10) || 0; }
    catch (e) { return 0; }
  }
  function tierFor(goal) { return GOAL_TIERS[goal] || GOAL_TIERS[DEFAULT_GOAL]; }
  function milestoneFor(days) {
    for (var i = 0; i < GOAL_MILESTONES.length; i++) if (GOAL_MILESTONES[i].days === days) return GOAL_MILESTONES[i];
    return null;
  }
  /* The chest for one milestone: rarity from the weakest dagdoel in the window
     (goal_min — so raising the goal on day 7 can't buy a bigger chest), size
     from the milestone. */
  function rewardFor(days, minGoal) {
    var ms = milestoneFor(days); if (!ms) return null;
    var t = tierFor(minGoal || effGoal());
    return { days: days, rarity: t.rarity, mult: t.mult * ms.mult, goal: minGoal || effGoal() };
  }
  /* Lowest reached-but-unclaimed milestone: claim 7 first, then 30 — two chests
     rather than silently swallowing the smaller one. */
  function claimableMilestone() {
    var r = state.goalRun;
    for (var i = 0; i < GOAL_MILESTONES.length; i++) {
      var d = GOAL_MILESTONES[i].days;
      if (r.streak >= d && r.claimed.indexOf(d) < 0) return d;
    }
    return null;
  }
  function nextMilestone() {
    var r = state.goalRun;
    for (var i = 0; i < GOAL_MILESTONES.length; i++) {
      var d = GOAL_MILESTONES[i].days;
      if (r.streak < d || r.claimed.indexOf(d) < 0) return d;
    }
    return null;
  }
  function goalInfo() {
    var g = effGoal(), c = todayCount(), cm = claimableMilestone();
    return {
      goal: g,
      chosen: !!state.goal,                 // false → dashboard shows the picker popup
      label: tierFor(g).label,
      count: c,
      done: c >= g,                         // dagdoel gehaald vandaag
      countedToday: state.goalRun.lastDay === today(),
      streak: state.goalRun.streak || 0,
      minGoal: state.goalRun.minGoal || g,
      claimed: state.goalRun.claimed.slice(),
      claimable: cm ? rewardFor(cm, state.goalRun.minGoal) : null,
      next: nextMilestone(),
      milestones: GOAL_MILESTONES.map(function (m) { return m.days; })
    };
  }
  function pushGoal(n) {
    if (!state.uid) return Promise.resolve();
    var c = sb(); if (!c) return Promise.resolve();
    return c.from('user_profiles').update({ daily_goal: n }).eq('user_id', state.uid)
      .then(function () {}, function () {});
  }
  async function setGoal(n) {
    n = parseInt(n, 10);
    if (GOALS.indexOf(n) < 0) return { ok: false, reason: 'invalid' };
    state.goal = n; mirrorGoal(); paint();
    await pushGoal(n);
    await checkGoalDay();                   // a lower goal may already be met today
    return { ok: true, goal: n };
  }
  /* Mirror of bump_goal_streak, for guests and for instant UI before the RPC
     answers. The RPC's return value overwrites this — it is the source of truth. */
  function bumpLocal(g) {
    var r = state.goalRun, t = today();
    if (r.lastDay === t) return;
    if (r.lastDay === yesterday()) {
      r.streak = (r.streak || 0) + 1;
      r.minGoal = Math.min(r.minGoal || g, g);
    } else {
      r.streak = 1; r.minGoal = g; r.claimed = [];
    }
    r.lastDay = t;
  }
  /* Count today towards the reeks once the dagdoel is met. Safe to call on every
     answer: it no-ops below the goal and again after the day is counted. */
  async function checkGoalDay() {
    /* Nothing accrues until the user has actually PICKED a goal. Without this a
       first-timer's day is counted against the fallback 20 before the picker
       even opens, which pins goal_min — and so the whole run's chest — to 20
       even if they then choose 30. setGoal() calls straight back here, so the
       day still counts the moment they choose, at their real goal. */
    if (!state.goal) return false;
    var g = effGoal();
    if (todayCount() < g) return false;
    if (state.goalRun.lastDay === today()) return false;
    bumpLocal(g); mirrorGoal(); paint();
    if (!state.uid) return true;            // guest: localStorage-only run
    var c = sb(); if (!c) return true;
    try {
      var r = await c.rpc('bump_goal_streak', { p_user_id: state.uid });
      var d = r && r.data;
      if (d) {
        state.goalRun = {
          streak: d.streak || 0, lastDay: d.lastDay || today(),
          minGoal: d.min || g, claimed: Array.isArray(d.claimed) ? d.claimed.map(Number) : []
        };
        mirrorGoal(); paint();
      }
    } catch (e) {}
    return true;
  }
  /* Server-validated claim. Returns the reward to hand to gift_modal — callers
     must only award what comes back ok, so two tabs can't open one chest twice. */
  async function claimGoalMilestone(days) {
    if (!state.uid) return { ok: false, reason: 'login' };
    var c = sb(); if (!c) return { ok: false, reason: 'offline' };
    try {
      var r = await c.rpc('claim_goal_milestone', { p_user_id: state.uid, p_milestone: days });
      var d = r && r.data;
      if (!d || !d.ok) return { ok: false, reason: (d && d.reason) || 'error' };
      var reward = rewardFor(days, d.min);
      if (state.goalRun.claimed.indexOf(days) < 0) state.goalRun.claimed.push(days);
      state.goalRun.minGoal = effGoal();     // window resets, same as the RPC
      mirrorGoal(); paint();
      return { ok: true, reward: reward };
    } catch (e) { return { ok: false, reason: 'error' }; }
  }

  /* Daily gift (quest flyout, once a day, also for guests). 2026-07-20: the
     reward is a RANDOM chest now (Tijmen: "make the Dagelijkse beloning
     random"), so this only marks today claimed — the caller credits whatever
     the chest rolled via awardGems/awardCoins/awardHearts. The ok:false return
     stays the double-claim guard (second tab loses, credits nothing). */
  async function claimGift() {
    // Guest: local-only guard (no account to double-claim against).
    if (!state.uid) {
      if (state.giftDay === today()) return { ok: false, reason: 'claimed' };
      state.giftDay = today();
      try { localStorage.setItem(LS.gift, state.giftDay); } catch (e) {}
      paint();
      return { ok: true };
    }
    // Logged-in: atomic server check-and-set (row lock) → not double-claimable
    // across tabs/devices; a second claimer gets ok:false and credits nothing.
    var c = sb();
    if (!c) return { ok: false, reason: 'noclient' };
    try {
      var r = await c.rpc('claim_daily_gift');
      var okNew = !r.error && r.data && r.data.ok === true;
      // Either way today is now claimed on the server → mirror locally.
      state.giftDay = today();
      try { localStorage.setItem(LS.gift, state.giftDay); } catch (e) {}
      paint();
      return okNew ? { ok: true } : { ok: false, reason: (r.data && r.data.reason) || 'claimed' };
    } catch (e) { return { ok: false, reason: 'error' }; }
  }
  function refill() {
    if (state.hearts >= HEART_MAX) return;
    if (state.coins < REFILL_COST) { pop('hearts', 'te weinig'); return; }
    buyHearts(REFILL_COST, HEART_MAX);
  }

  /* ── 0-hearts blocker (exam pages only) ── */
  function isExamPage() { return !!document.querySelector('.q-block'); }
  function maybeBlock() {
    if (!isExamPage()) return;
    var el = document.getElementById('vs-block');
    if (state.hearts <= 0) {
      if (el) return;
      el = document.createElement('div');
      el.id = 'vs-block';
      el.innerHTML =
        '<div class="vs-card">' +
        '<svg width="58" height="58" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E5E5EA"/><path d="M12.6 6.2l-2 4.3 2.9 1.2-2.1 4.6" stroke="#FF4B4B" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '<h2>Je hartjes zijn op</h2>' +
        '<p>Je hebt geen hartjes meer over — elke fout kost er één. Koop nieuwe hartjes in de shop of kom morgen terug: dan begin je weer met ' + HEART_MAX + '.</p>' +
        '<a class="vs-bbtn vs-bshop" href="shop.html">Naar de shop</a>' +
        '<a class="vs-bbtn vs-bback" href="dashboard.html">Terug naar het dashboard</a>' +
        '</div>';
      document.body.appendChild(el);
      try { document.body.style.overflow = 'hidden'; } catch (e) {}
    } else if (el) {
      el.remove();
      try { document.body.style.overflow = ''; } catch (e) {}
    }
  }

  /* ── Rendering ── */
  var bar = null;
  function css() {
    if (document.getElementById('vumed-stats-css')) return;
    var isExam = !!document.getElementById('streak-wrap');
    var s = document.createElement('style'); s.id = 'vumed-stats-css';
    s.textContent = [
      /* Hub pages: centre the bar over the CONTENT area, not the whole window —
         the 258px sidebar sits on the left, so nudge right by half its width. */
      '#vumed-stats{position:fixed;z-index:60;' + (isExam ? 'top:56px;right:16px;' : 'top:8px;left:calc(50% + 129px);transform:translateX(-50%);') +
      '  display:flex;align-items:center;gap:2px;padding:4px 6px;border-radius:16px;',
      '  background:rgba(255,255,255,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.10);',
      '  -webkit-backdrop-filter:saturate(180%) blur(12px);backdrop-filter:saturate(180%) blur(12px);',
      '  font-family:"Nunito",Arial,sans-serif;user-select:none;}',
      'html.dark #vumed-stats{background:rgba(44,44,46,0.92);box-shadow:0 2px 10px rgba(0,0,0,0.4);}',
      /* Exam/mission pages: hearts-only, sitting inside the header next to the
         progress bar (no floating panel). */
      '#vumed-stats.vs-inbar{position:static;top:auto;right:auto;left:auto;transform:none;padding:0;border-radius:0;',
      '  background:none;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;',
      '  pointer-events:auto;flex:0 0 auto;}',
      '#streak-wrap .streak-inner{display:flex;align-items:center;gap:12px;}',
      '#streak-wrap .streak-inner .streak-bar-wrap{flex:1 1 auto;min-width:0;}',
      '#vumed-stats.vs-inbar .vs-tip{right:0;left:auto;}',
      '.vs-pill{display:flex;align-items:center;gap:4px;padding:4px 8px;border-radius:12px;cursor:default;',
      '  transition:background 0.12s;}',
      '.vs-pill.vs-click{cursor:pointer;}',
      '.vs-pill.vs-click:hover{background:rgba(120,120,128,0.14);}',
      '.vs-pill svg{display:block;flex-shrink:0;}',
      '.vs-flame{display:block;width:19px;height:19px;flex-shrink:0;}',
      '.vs-flame svg{width:100%;height:100%;}',
      '.vs-num{font-size:14px;font-weight:800;color:#3C3C43;letter-spacing:-0.01em;font-variant-numeric:tabular-nums;}',
      'html.dark .vs-num{color:#EBEBF0;}',
      '.vs-num.vs-warn{color:#FF4B4B;}',
      '.vs-hearts{position:relative;}',
      '.vs-hearts.vs-shake{animation:vsShake 0.4s;}',
      '@keyframes vsShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-3px)}40%,80%{transform:translateX(3px)}}',
      '.vs-pop{position:absolute;top:-14px;left:50%;transform:translateX(-50%);font-size:12px;font-weight:900;',
      '  color:#1CB0F6;pointer-events:none;opacity:0;white-space:nowrap;}',
      '.vs-pop.vs-go{animation:vsPop 0.9s ease forwards;}',
      '@keyframes vsPop{0%{opacity:0;transform:translate(-50%,4px)}25%{opacity:1}100%{opacity:0;transform:translate(-50%,-16px)}}',
      '.vs-tip{position:absolute;top:calc(100% + 8px);right:0;background:#1C1C1E;color:#fff;font-size:12px;',
      '  font-weight:700;padding:8px 11px;border-radius:10px;white-space:nowrap;opacity:0;pointer-events:none;',
      '  transition:opacity 0.15s;box-shadow:0 4px 14px rgba(0,0,0,0.25);}',
      '.vs-hearts:hover .vs-tip{opacity:1;pointer-events:auto;}',
      '.vs-tip b{color:#FF4B4B;}',
      '.vs-refill{display:block;margin-top:7px;background:#1CB0F6;color:#fff;border:none;font-family:inherit;',
      '  font-weight:800;font-size:12px;padding:6px 10px;border-radius:8px;cursor:pointer;width:100%;',
      '  text-align:center;text-decoration:none;box-sizing:border-box;}',
      '.vs-refill:hover{background:#0A9EDC;}',
      '.vs-refill:disabled{opacity:0.45;cursor:not-allowed;}',
      /* 0-hearts blocker */
      '#vs-block{position:fixed;inset:0;z-index:900;display:flex;align-items:center;justify-content:center;',
      '  padding:20px;background:rgba(28,28,30,0.55);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);}',
      '.vs-card{background:#fff;border-radius:24px;padding:36px 32px;max-width:400px;width:100%;text-align:center;',
      '  font-family:"Nunito",Arial,sans-serif;box-shadow:0 16px 48px rgba(0,0,0,0.30);}',
      'html.dark .vs-card{background:#2C2C2E;color:#EBEBF0;}',
      '.vs-card h2{font-size:21px;font-weight:900;margin:14px 0 8px;}',
      '.vs-card p{font-size:14.5px;color:#6E6E73;line-height:1.5;margin-bottom:24px;}',
      'html.dark .vs-card p{color:#AEAEB2;}',
      '.vs-bbtn{display:block;width:100%;padding:13px;border:none;border-radius:13px;font-family:inherit;',
      '  font-size:15px;font-weight:800;cursor:pointer;text-decoration:none;box-sizing:border-box;}',
      '.vs-bshop{background:#1CB0F6;color:#fff;margin-bottom:10px;}',
      '.vs-bshop:hover{background:#0A9EDC;}',
      '.vs-bback{background:#F2F2F7;color:#3C3C43;}',
      '.vs-bback:hover{background:#E5E5EA;}',
      'html.dark .vs-bback{background:#48484A;color:#EBEBF0;}',
      '@media(max-width:560px){#vumed-stats{gap:1px;padding:4px 5px;}#vumed-stats .vs-pill{padding:4px 5px;gap:3px;}.vs-num{font-size:13px;}}'
    ].join('');
    document.head.appendChild(s);
  }
  function heartsTipText() {
    if (state.hearts >= HEART_MAX) return 'Hartjes vol';
    return 'Morgen weer ' + HEART_MAX + ' hartjes';
  }
  function paint() {
    maybeBlock();
    try { document.dispatchEvent(new CustomEvent('vumed-stats')); } catch (e) {}
    if (!bar) return;
    var warn = state.hearts <= 3 ? ' vs-warn' : '';
    var canRefill = state.hearts < HEART_MAX && state.coins >= REFILL_COST;
    var heartsPill =
      '<div class="vs-pill vs-hearts vs-click" onclick="window.location.href=\'shop.html\'" title="">' +
        IC.heart(state.hearts > 0) +
        '<span class="vs-num' + warn + '">' + state.hearts + '</span>' +
        '<span class="vs-pop" data-pop="hearts"></span>' +
        '<div class="vs-tip"><span>' + heartsTipText() + '</span>' +
          (state.hearts < HEART_MAX
            ? '<button class="vs-refill" onclick="event.stopPropagation();VumedStats._refill()"' + (canRefill ? '' : ' disabled') + '>Vul aan · ' + REFILL_COST + ' <span style="opacity:.85">munten</span></button>' +
              '<a class="vs-refill" style="background:#58CC02" href="shop.html" onclick="event.stopPropagation()">Naar de shop</a>'
            : '') +
        '</div>' +
      '</div>';
    // Exam/mission pages show hearts only (next to the progress bar); everywhere
    // else shows the full wallet.
    if (bar.classList.contains('vs-inbar')) {
      bar.innerHTML = heartsPill;
      return;
    }
    bar.innerHTML =
      heartsPill +
      '<div class="vs-pill" title="Dagstreak' + (state.freezes > 0 ? ' · ' + state.freezes + ' streakbevriezer' + (state.freezes === 1 ? '' : 's') : '') + '"><span class="vs-flameslot"></span><span class="vs-num">' + state.streak + '</span></div>' +
      '<div class="vs-pill vs-coins" title="Munten">' + IC.coin + '<span class="vs-num">' + nf(state.coins) + '<span class="vs-pop" data-pop="coins"></span></span></div>' +
      '<div class="vs-pill vs-gems" title="Gems">' + IC.gem + '<span class="vs-num">' + nf(state.gems) + '<span class="vs-pop" data-pop="gems"></span></span></div>' +
      '<div class="vs-pill" title="XP">' + IC.bolt + '<span class="vs-num">' + nf(state.xp) + '</span></div>';
    var slot = bar.querySelector('.vs-flameslot');
    if (slot) slot.appendChild(flameNode());   // persistent node — lottie survives repaints
  }
  function pop(which, txt) {
    if (!bar) return;
    var el = bar.querySelector('[data-pop="' + which + '"]'); if (!el) return;
    el.textContent = txt; el.classList.remove('vs-go'); void el.offsetWidth; el.classList.add('vs-go');
  }
  function shakeHearts() {
    if (!bar) return; var h = bar.querySelector('.vs-hearts'); if (!h) return;
    h.classList.remove('vs-shake'); void h.offsetWidth; h.classList.add('vs-shake');
  }

  function mount() {
    css();
    if (!window.VUMED_STATS_BAR_OFF) {
      // On exam/mission pages, dock hearts-only inside the header next to the
      // progress bar; elsewhere, float the full wallet top-right.
      var inner = document.querySelector('#streak-wrap .streak-inner');
      bar = document.getElementById('vumed-stats');
      if (!bar) { bar = document.createElement('div'); bar.id = 'vumed-stats'; }
      if (inner) { bar.classList.add('vs-inbar'); inner.appendChild(bar); }
      else { bar.classList.remove('vs-inbar'); document.body.appendChild(bar); }
    }
    paint();
  }

  /* ── Keep the floating bar centred over the CONTENT column, not the window ──
     Some pages shift/shrink their content when a right-side panel opens (e.g. the
     tentamen quest panel slides <main> aside via margin). The bar is position:fixed
     so it can't follow with CSS alone — recompute its centre from the live content
     element on resize and while such a panel animates. */
  function contentEl() {
    return document.querySelector('.main-content')
        || document.querySelector('#root main')
        || document.getElementById('root');
  }
  function repositionBar() {
    if (!bar || bar.classList.contains('vs-inbar')) return;   // exam pages dock in the header
    var el = contentEl(); if (!el) return;
    var r = el.getBoundingClientRect();
    if (r.width < 1) return;
    bar.style.left = Math.round(r.left + r.width / 2) + 'px';
    bar.style.transform = 'translateX(-50%)';
  }
  var _followT = 0;
  function followBar() {
    var end = performance.now() + 560;   // covers the panel's ~0.34s slide + slack
    cancelAnimationFrame(_followT);
    (function step() {
      repositionBar();
      if (performance.now() < end) _followT = requestAnimationFrame(step);
    })();
  }
  function setupBarCentering() {
    if (!bar || bar.classList.contains('vs-inbar')) return;
    repositionBar();
    window.addEventListener('resize', repositionBar, { passive: true });
    var el = contentEl();
    if (el) {
      try { new ResizeObserver(repositionBar).observe(el); } catch (e) {}
      // A right panel shifts the content via an inline style/class change — follow it.
      try {
        var target = document.querySelector('#root main') || el;
        new MutationObserver(followBar).observe(target, { attributes: true, attributeFilter: ['style', 'class'] });
      } catch (e) {}
    }
    setTimeout(repositionBar, 200);   // catch late layout (fonts / async render)
    setTimeout(repositionBar, 800);
  }

  window.VumedStats = {
    HEART_MAX: HEART_MAX, GIFT_HEARTS: GIFT_HEARTS, REFILL_COST: REFILL_COST,
    GOALS: GOALS.slice(), DEFAULT_GOAL: DEFAULT_GOAL, GOAL_TIERS: GOAL_TIERS,
    awardGems: awardGems, awardCoins: awardCoins, awardHearts: awardHearts, loseHeart: loseHeart,
    buyHearts: buyHearts, buyFreezes: buyFreezes, claimGift: claimGift, syncStreak: syncStreak,
    goalInfo: goalInfo, setGoal: setGoal, checkGoalDay: checkGoalDay,
    claimGoalMilestone: claimGoalMilestone,
    refresh: function () { return pull().then(paint); },
    getState: function () { return Object.assign({}, state); }, _refill: refill
  };

  function boot() {
    mount();
    setupBarCentering();
    // A day can be completed on a page this engine isn't watching (or while
    // logged out, then logged in) — settle the reeks once the profile is in.
    pull().then(paint).then(function () { return checkGoalDay(); });
    // repaint when tab regains focus (hearts/gems may have changed elsewhere)
    document.addEventListener('visibilitychange', function () { if (!document.hidden) { pull().then(paint); } });
  }
  if (document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
