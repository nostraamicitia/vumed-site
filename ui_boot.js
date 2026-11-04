/* ui_boot.js — gedeelde UX-basis voor ÁLLE pagina's (hub + ~420 examenpagina's).
 *
 * Laadt SYNCHROON vlak voor </head>, dus vóór de eerste paint. Klein houden:
 * alles hier draait op elke pagina.
 *
 *  1. Thema    — expliciete keuze (vumed_theme = light|dark) wint; zonder keuze
 *                (of 'system') volgt de site het toestel. Geen witte flits meer
 *                op examenpagina's (die zetten hun thema pas onderaan de body).
 *  2. Tikken   — :active-feedback (scale), geen grijze iOS-tapflits, geen
 *                dubbeltik-zoom, kleine sluit-/verstuurknoppen ≥ 44px op touch.
 *  3. Dubbeltik — dezelfde knop binnen 350 ms nogmaals = genegeerd, zodat één
 *                trillende tik niet twee keer verstuurt/koopt/inlevert.
 *                Uitzondering: data-repeat op de knop.
 *  4. Toetsenbord — --vkb (hoogte schermtoetsenbord) + html.vkb; vaste panelen
 *                (AI-chat, uitleg) schuiven mee omhoog en een gefocust veld
 *                wordt in beeld gescrold.
 *  5. Tekst    — geen iOS-autozoom bij focus (invoer ≥ 16px op touch), geen
 *                tekst-opblazen in landscape.
 *  6. Foutteksten — window.vumedErrorText(err) vertaalt ruwe (Engelse)
 *                Supabase/netwerk-fouten naar nette Nederlandse zinnen.
 *  7. Husselen — meerkeuze-, dropdown- en sleepopties in willekeurige
 *                volgorde bij elke paginalaad (goede antwoord stond vaak boven).
 */
(function () {
  'use strict';
  var d = document, html = d.documentElement;

  /* ── 1. Thema ─────────────────────────────────────────────────────────── */
  var mq = null;
  try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch (e) {}
  function getMode() {
    var s = null;
    try { s = localStorage.getItem('vumed_theme'); } catch (e) {}
    return (s === 'dark' || s === 'light') ? s : 'system';
  }
  function resolve(mode) { return mode === 'dark' || (mode === 'system' && !!(mq && mq.matches)); }
  function paintMeta(dark) {
    var m = d.querySelector('meta[name="theme-color"]');
    if (!m) { m = d.createElement('meta'); m.name = 'theme-color'; (d.head || html).appendChild(m); }
    m.setAttribute('content', dark ? '#1C1C1E' : '#ffffff');
  }
  // Pagina's zonder dark-stijlen (landing, splash) zetten <html data-theme-fixed>.
  var fixed = html.hasAttribute('data-theme-fixed');
  function apply(dark) {
    if (fixed) return;
    html.classList.toggle('dark', dark);
    html.style.colorScheme = dark ? 'dark' : 'light';
    // Donkere <html>-achtergrond ALLEEN tot de body er is (tegen een witte flits).
    // Daarna moet hij weg: met een eigen achtergrond op <html> geeft de body zijn
    // achtergrond niet meer door aan het canvas, en dan dekt de body de
    // z-index:-1 laag van bg-decor.js (de medische icoontjes) helemaal af.
    if (!parsed) html.style.background = dark ? '#1C1C1E' : '';
    paintMeta(dark);
  }
  var parsed = false;
  apply(resolve(getMode()));
  // pwa.js zet later een witte theme-color; na het parsen nogmaals goed zetten.
  function afterParse() {
    if (!fixed) paintMeta(html.classList.contains('dark'));
    // Ook de eigen head-snippets van de pagina's (dashboard, profiel, …) zetten
    // style.background op <html>. Alleen opruimen op pagina's met bg-decor.js:
    // die laden dark-theme.css in de <head>, dus de body is al donker. Op de
    // examenpagina's komt die CSS pas later (progressdots.js) en houdt de
    // <html>-kleur een witte flits tegen.
    if (!d.querySelector('script[src^="bg-decor.js"]')) return;
    parsed = true;
    html.style.removeProperty('background');
    html.style.removeProperty('background-color');
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', afterParse); else afterParse();

  window.VumedTheme = {
    mode: getMode,                       // 'light' | 'dark' | 'system'
    isDark: function () { return html.classList.contains('dark'); },
    set: function (mode) {
      try {
        if (mode === 'system') localStorage.removeItem('vumed_theme');
        else localStorage.setItem('vumed_theme', mode);
      } catch (e) {}
      apply(resolve(mode === 'system' ? 'system' : mode));
      try { window.dispatchEvent(new CustomEvent('vumed-theme', { detail: { dark: html.classList.contains('dark') } })); } catch (e) {}
    }
  };
  if (mq) {
    var onSys = function () {
      if (getMode() !== 'system') return;
      apply(mq.matches);
      try { window.dispatchEvent(new CustomEvent('vumed-theme', { detail: { dark: mq.matches } })); } catch (e) {}
    };
    if (mq.addEventListener) mq.addEventListener('change', onSys); else if (mq.addListener) mq.addListener(onSys);
  }
  // Andere pagina/tab wisselde het thema → hier ook.
  window.addEventListener('storage', function (e) { if (e.key === 'vumed_theme') apply(resolve(getMode())); });

  /* ── 2 + 4 + 5. Gedeelde CSS ──────────────────────────────────────────── */
  var css =
    'html{-webkit-text-size-adjust:100%;text-size-adjust:100%;}' +
    'button,[role="button"],a,label,summary,input,select,textarea{touch-action:manipulation;}' +
    'button,[role="button"],a,label,summary{-webkit-tap-highlight-color:transparent;}' +
    /* Tik-feedback. `scale` (los van `transform`) stapelt op bestaande
       :active-transforms in plaats van ze te overschrijven. */
    'button:not(:disabled):active,[role="button"]:not([aria-disabled="true"]):active,' +
    'input[type="submit"]:not(:disabled):active,input[type="button"]:not(:disabled):active{scale:.96;}' +
    '@media (pointer:coarse){' +
      /* Geen autozoom van iOS bij focus op een veld < 16px. */
      'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]),' +
      'textarea,select{font-size:max(16px,1em) !important;}' +
      /* Kleine iconknoppen: minimaal 44×44 tikvlak (Apple HIG). */
      '.qp-close,.chat-close,.g-close,.g-img-btn,.vtut-x,.up-close,.pd-res-x,.congrats-btn,' +
      '.heat-nav-btn,.chat-send,.qrow-x,.friend-decline-btn{min-width:44px !important;min-height:44px !important;}' +
    '}' +
    /* Schermtoetsenbord open: vaste panelen boven het toetsenbord houden. */
    'html.vkb .chat-panel.open,html.vkb .g-panel.open{bottom:calc(var(--vkb,0px) + 8px) !important;}' +
    'html.vkb #auth-gate{padding-bottom:calc(var(--vkb,0px) + 20px) !important;}' +
    '@media (prefers-reduced-motion:reduce){button:active,[role="button"]:active{scale:none;}}';
  try {
    var st = d.createElement('style');
    st.id = 'vumed-ui-boot';
    st.textContent = css;
    (d.head || html).appendChild(st);
  } catch (e) {}

  /* ── 3. Dubbeltik-bescherming ─────────────────────────────────────────── */
  var lastTap = (typeof WeakMap === 'function') ? new WeakMap() : null;
  d.addEventListener('click', function (e) {
    if (!lastTap || !e.target || !e.target.closest) return;
    var b = e.target.closest('button,[role="button"],input[type="submit"],input[type="button"]');
    if (!b || b.hasAttribute('data-repeat')) return;
    var now = Date.now(), t = lastTap.get(b);
    if (t && now - t < 350) { e.preventDefault(); e.stopImmediatePropagation(); return; }
    lastTap.set(b, now);
  }, true);

  /* ── 4. Toetsenbord ───────────────────────────────────────────────────── */
  var vv = window.visualViewport;
  function isField(el) {
    if (!el || !el.tagName) return false;
    var t = el.tagName;
    if (t === 'TEXTAREA' || el.isContentEditable) return true;
    if (t !== 'INPUT') return false;
    return !/^(checkbox|radio|range|button|submit|reset|file|color|image|hidden)$/i.test(el.type || '');
  }
  function ensureVisible(el) {
    if (!isField(el) || d.activeElement !== el) return;
    var r = el.getBoundingClientRect();
    var top = vv ? vv.offsetTop : 0;
    var bottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
    if (r.bottom > bottom - 12 || r.top < top + 8) {
      try { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { el.scrollIntoView(); }
    }
  }
  function onViewport() {
    if (!vv) return;
    var kb = Math.round(window.innerHeight - vv.height - vv.offsetTop);
    if (kb < 80) kb = 0;               // adresbalk/zoom, geen toetsenbord
    html.style.setProperty('--vkb', kb + 'px');
    html.classList.toggle('vkb', kb > 0);
    if (kb) setTimeout(function () { ensureVisible(d.activeElement); }, 60);
  }
  if (vv) { vv.addEventListener('resize', onViewport); vv.addEventListener('scroll', onViewport); }
  d.addEventListener('focusin', function (e) {
    if (!isField(e.target)) return;
    var el = e.target;
    setTimeout(function () { ensureVisible(el); }, 320);   // na de toetsenbord-animatie
  });

  /* ── 6. Nette foutteksten ─────────────────────────────────────────────── */
  var RULES = [
    [/invalid login credentials|invalid_grant|invalid email or password/i, 'E-mailadres of wachtwoord klopt niet.'],
    [/email not confirmed/i, 'Bevestig eerst je e-mailadres via de link in je mail (check ook je spam-map).'],
    [/already registered|already been registered|user already exists|email_exists/i, 'Er bestaat al een account met dit e-mailadres. Log in of herstel je wachtwoord.'],
    [/different from the old|same_password|same password/i, 'Je nieuwe wachtwoord moet anders zijn dan je huidige.'],
    [/password should be at least (\d+)/i, function (m) { return 'Kies een wachtwoord van minstens ' + m[1] + ' tekens.'; }],
    [/weak.?password|password is too (short|weak)|pwned|leaked/i, 'Dit wachtwoord is te zwak of komt voor in gelekte lijsten. Kies een ander wachtwoord.'],
    [/unable to validate email|invalid email|email address .* is invalid|email_address_invalid/i, 'Dat e-mailadres klopt niet. Controleer het op typfouten.'],
    [/rate limit|too many|over_request|60 seconds|for security purposes/i, 'Te veel pogingen achter elkaar. Wacht even en probeer het dan opnieuw.'],
    [/signups? not allowed|signup is disabled|signup_disabled/i, 'Aanmelden is op dit moment niet mogelijk.'],
    [/provider is not enabled|unsupported provider|validation_failed.*provider/i, 'Deze inlogmethode is nog niet beschikbaar. Gebruik je e-mail en wachtwoord.'],
    [/captcha/i, 'De beveiligingscheck is mislukt. Probeer het opnieuw.'],
    [/jwt expired|refresh token|session.*(missing|expired|not found)|auth session missing|not authenticated/i, 'Je sessie is verlopen. Log opnieuw in.'],
    [/failed to fetch|networkerror|network request failed|load failed|fetch failed|err_internet|timeout|timed out/i, 'Geen verbinding met de server. Check je internet en probeer het opnieuw.'],
    [/permission denied|row-level security|42501|not allowed/i, 'Dat mag je (nog) niet doen. Log opnieuw in als dit niet klopt.']
  ];
  window.vumedErrorText = function (err, fallback) {
    var msg = '';
    try {
      msg = typeof err === 'string' ? err
        : String((err && (err.message || err.error_description || err.msg || err.code)) || '');
    } catch (e) {}
    for (var i = 0; i < RULES.length; i++) {
      var m = msg.match(RULES[i][0]);
      if (m) return typeof RULES[i][1] === 'function' ? RULES[i][1](m) : RULES[i][1];
    }
    if (msg) { try { console.warn('[vumed] onvertaalde fout:', msg); } catch (e) {} }
    return fallback || 'Er ging iets mis. Probeer het opnieuw.';
  };

  /* ── 7. Antwoorden husselen ───────────────────────────────────────────── */
  /* De vraag-HTML heeft de opties in een vaste volgorde, en bij dropdowns
   * (55%) en sleepvragen (34%) stond het goede antwoord vaak bovenaan /
   * in volgorde (feedback David, okt 2026). Elke keer dat een pagina laadt
   * schudden we daarom:
   *   - meerkeuze (.opt-btn): knoppen verplaatst, zichtbare letter A/B/C
   *     opnieuw gezet. data-letter blijft → nakijken + opgeslagen voortgang
   *     werken ongewijzigd.
   *   - dropdowns (.dd-select / .ddt-sel): <option>s; nakijken gaat op tekst.
   *   - sleepvragen: de kaartjes-pool (dndInit wordt omwikkeld).
   * NIET geschud: opties die naar elkaar verwijzen ("A en B", "geen van
   * bovenstaande", stellingen), juist/onjuist-paren en oplopende getallen.
   * Draait als eerste DOMContentLoaded-listener (ui_boot laadt vóór de
   * vragen), dus vóór restoreProgress en vóór de dndInit-aanroepen. */
  function rnd(n) {
    try { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; }
    catch (e) { return Math.floor(Math.random() * n); }
  }
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = rnd(i + 1), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  var REF = /bovenstaande|hierboven|hieronder|stelling|\b[A-H]\s*(,|en|of|\+|&)\s*[A-H]\b|zowel\s+(antwoord\s+)?[A-H]\s+als|\bantwoord\s+[A-H]\b|alle\s+(genoemde|antwoorden|opties|alternatieven|bovenstaande)|geen\s+van\s+(de|al|bovenstaande|deze|beide)|\b(I|II|III|IV)\s*(,|en|of)\s*(I|II|III|IV)\b|\b[1-4]\s*(,|en|of)\s*[1-4]\s+(zijn|is)\b/i;
  var FIXED = /^(juist|onjuist|waar|niet waar|onwaar|ja|nee|correct|incorrect|goed|fout)$/i;
  function clean(s) { return String(s || '').replace(/\s+/g, ' ').trim(); }
  function numericAsc(texts) {
    var prev = -Infinity;
    for (var i = 0; i < texts.length; i++) {
      var m = texts[i].match(/^[<>≤≥~±+-]?\s*(\d+(?:[.,]\d+)?)/);
      if (!m) return false;
      var v = parseFloat(m[1].replace(',', '.'));
      if (v < prev) return false;
      prev = v;
    }
    return true;
  }
  function canShuffle(texts) {
    if (texts.length < 2) return false;
    for (var i = 0; i < texts.length; i++) {
      if (REF.test(texts[i]) || FIXED.test(texts[i])) return false;
    }
    return !numericAsc(texts);
  }
  // Wissel nodes van plek binnen hun ouder, ook als er andere nodes tussen staan.
  function reorder(nodes, order) {
    var ph = nodes.map(function (n) {
      var c = d.createComment(''); n.parentNode.replaceChild(c, n); return c;
    });
    ph.forEach(function (c, i) { c.parentNode.replaceChild(order[i], c); });
  }

  function shuffleMC(root) {
    var groups = [];
    root.querySelectorAll('.opt-btn').forEach(function (b) {
      if (b.dataset.vmShuf) return;
      var p = b.parentNode, g = null;
      for (var i = 0; i < groups.length; i++) if (groups[i].p === p) { g = groups[i]; break; }
      if (!g) groups.push(g = { p: p, btns: [] });
      g.btns.push(b);
    });
    groups.forEach(function (g) {
      var btns = g.btns;
      btns.forEach(function (b) { b.dataset.vmShuf = '1'; });
      var texts = btns.map(function (b) {
        var t = clean(b.textContent), l = b.querySelector('.opt-letter');
        return l ? clean(t.slice(clean(l.textContent).length)) : t;
      });
      if (!canShuffle(texts)) return;
      var order = shuffled(btns);
      reorder(btns, order);
      order.forEach(function (b, i) {
        var l = b.querySelector('.opt-letter');
        if (l && /^[A-Z]$/.test(clean(l.textContent))) l.textContent = String.fromCharCode(65 + i);
      });
    });
  }

  function shuffleSelects(root) {
    root.querySelectorAll('select.dd-select, select.ddt-sel').forEach(function (s) {
      if (s.dataset.vmShuf) return;
      s.dataset.vmShuf = '1';
      var opts = Array.prototype.filter.call(s.options, function (o) { return o.value !== ''; });
      if (!canShuffle(opts.map(function (o) { return clean(o.textContent); }))) return;
      var keep = s.value;
      reorder(opts, shuffled(opts));
      s.value = keep;
    });
  }

  function wrapDnd() {
    var orig = window.dndInit;
    if (typeof orig !== 'function' || orig._vmShuf) return;
    var w = function (qnum, opts) {
      return orig.call(this, qnum, Array.isArray(opts) ? shuffled(opts) : opts);
    };
    w._vmShuf = true;
    try { window.dndInit = w; } catch (e) {}
  }

  window.vumedShuffleAnswers = function (root) {
    root = root || d;
    try { shuffleMC(root); } catch (e) {}
    try { shuffleSelects(root); } catch (e) {}
    try { wrapDnd(); } catch (e) {}
  };
  function shuffleOnLoad() { window.vumedShuffleAnswers(d); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', shuffleOnLoad); else shuffleOnLoad();
})();
