/* auth_gate.js — the shared VUmed login pop-up.
 *
 * ONE login card for every page. Vanilla port of vumed.html's React <AuthModal>
 * (the newest login: real Google/Apple OAuth, "wachtwoord vergeten" with a 60s
 * cooldown, password-manager-friendly <form>). profile.html's old hand-rolled
 * #auth-gate — whose Google/Facebook buttons were cosmetic no-ops and which had
 * no recovery flow — is replaced by this.
 *
 *   VumedAuthGate.require()  → page needs an account: blocking gate, dismissing
 *                              leaves for the landing page.
 *   VumedAuthGate.open()     → optional prompt: dismissing just closes it.
 *
 * Class names (#auth-gate, .auth-card, .auth-input, .auth-divider-line, …) are
 * deliberately the ones dark-theme.css already styles — don't rename without
 * updating that file too.
 */
(function () {
  'use strict';

  if (window.VumedAuthGate) return;          // one gate per page

  var LEAVE_TO = 'dashboard.html';           // where "dismiss" sends a gated visitor

  /* ── Supabase client ────────────────────────────────────────────────────
     Reuse the host page's client when it has one — a second createClient()
     means a second auth listener and two sessions racing each other. */
  var _own = null;
  function getClient() {
    if (typeof window.getSB === 'function') {
      try { var c = window.getSB(); if (c) return c; } catch (e) {}
    }
    // vumed.html's getSB lives in babel-module scope, but it parks its client
    // on window._sbInstance — reuse that before ever creating our own.
    if (window._sbInstance) return window._sbInstance;
    if (_own) return _own;
    if (!window.SUPABASE_URL || !window.supabase) return null;
    try { _own = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY); }
    catch (e) { return null; }
    return _own;
  }

  /* ── Profanity filter (EN + NL) — same list the signup flows already use ── */
  function containsProfanity(text) {
    if (typeof window.containsProfanity === 'function' && window.containsProfanity !== containsProfanity) {
      try { return window.containsProfanity(text); } catch (e) {}
    }
    var bad = [
      'fuck', 'shit', 'ass', 'bitch', 'cunt', 'dick', 'cock', 'pussy', 'whore', 'slut',
      'bastard', 'asshole', 'motherfucker', 'nigger', 'faggot', 'retard', 'twat',
      'wank', 'prick', 'bollocks', 'bugger', 'arsehole', 'arse', 'dickhead', 'fuckface',
      'shithead', 'dumbass', 'jackass', 'dipshit', 'douchebag', 'fag', 'tit', 'tits',
      'kut', 'lul', 'klootzak', 'hoer', 'eikel', 'neuken', 'slet', 'teef', 'mongool',
      'kanker', 'kankerd', 'tyfus', 'godverdomme', 'godver', 'klote', 'tering',
      'pleur', 'poephoofd', 'kontgat', 'zeik', 'kankerwijk', 'debiel', 'idioot',
      'stommeling', 'trut', 'kutwijf', 'lulhannes', 'klere', 'fikker', 'nikker'
    ];
    // Whole-word match first: blocks standalone slurs without catching real names
    // that merely CONTAIN a short fragment (Hassan/Titus/Cassandra/Massimo/Letitia
    // vs 'ass'/'tit'). Then a substring pass for long, unambiguous swears that are
    // essentially never inside a legitimate name (catches concatenated evasion).
    var tokens = String(text || '').toLowerCase().split(/[^a-z]+/);
    for (var i = 0; i < bad.length; i++) if (tokens.indexOf(bad[i]) !== -1) return true;
    var strong = [
      'fuck', 'shit', 'cunt', 'nigger', 'nikker', 'faggot', 'fikker', 'motherfucker',
      'asshole', 'arsehole', 'bitch', 'whore', 'pussy', 'wanker', 'kanker', 'klootzak',
      'godverdomme', 'kutwijf', 'lulhannes', 'poephoofd', 'kontgat', 'kankerwijk'
    ];
    var flat = String(text || '').toLowerCase().replace(/[^a-z]/g, '');
    for (var j = 0; j < strong.length; j++) if (flat.indexOf(strong[j]) !== -1) return true;
    return false;
  }

  /* ── Icons ─────────────────────────────────────────────────────────────── */
  var EYE = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1CB0F6" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#1CB0F6"/></svg>';
  var EYE_OFF = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1CB0F6" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#1CB0F6"/><line x1="3" y1="3" x2="21" y2="21" stroke="#1CB0F6" stroke-width="2" stroke-linecap="round"/></svg>';
  var G_ICON = '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>';
  /* "Sign in with Apple" is DORMANT: the button ships hidden and only appears
     when /auth/v1/settings says the provider is enabled (needs Tijmen's paid
     Apple Developer account + Services ID — required anyway for the native
     iOS app, and App Store rule 4.8 mandates Apple login next to Google). */
  var APPLE_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.73 1.13-4.72 2.86-2.02 3.5-.52 8.67 1.45 11.51.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 1.99-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.54-1.41 3.49-2.81 1.1-1.61 1.55-3.17 1.58-3.25-.03-.02-3.03-1.16-3.06-4.61zM14.16 4.05c.8-.97 1.34-2.32 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63z"/></svg>';
  var X_ICON ='<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';

  /* ── CSS ────────────────────────────────────────────────────────────────
     dark-theme.css already covers #auth-gate / .auth-card / .auth-card h2 /
     .auth-input / .auth-divider-line; only the parts it doesn't know about
     carry their own html.dark rule here. */
  var CSS = ''
    + '#auth-gate{display:none;position:fixed;inset:0;z-index:1000;'
    + 'background:rgba(255,255,255,0.60);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);'
    + 'align-items:center;justify-content:center;padding:20px;overflow-y:auto;}'
    + '#auth-gate.visible{display:flex;}'
    + '.auth-card{position:relative;background:#fff;border-radius:24px;padding:40px 36px 32px;'
    + 'width:420px;max-width:92vw;box-shadow:0 32px 80px rgba(0,0,0,0.18);'
    + 'display:flex;flex-direction:column;gap:0;margin:auto;'
    + "font-family:'Nunito',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;"
    + 'animation:agIn 0.28s cubic-bezier(0.25,0.46,0.45,0.94) both;}'
    + '@keyframes agIn{from{opacity:0;transform:translateY(18px) scale(0.97)}to{opacity:1;transform:none}}'
    + '.auth-card h2{font-size:26px;font-weight:900;color:#1C1C1E;text-align:center;margin:0 0 28px;}'
    + '.auth-close{position:absolute;top:16px;right:16px;width:32px;height:32px;border:none;'
    + 'border-radius:50%;background:#F2F2F7;color:#8E8E93;cursor:pointer;display:flex;'
    + 'align-items:center;justify-content:center;padding:0;transition:background .15s,color .15s;}'
    + '.auth-close:hover{background:#E5E5EA;color:#3C3C43;}'
    + 'html.dark .auth-close{background:#3A3A3C;color:#8E8E93;}'
    + 'html.dark .auth-close:hover{background:#48484A;color:#EBEBF0;}'
    + '.auth-sub{font-size:14.5px;font-weight:600;color:#8E8E93;text-align:center;'
    + 'margin:-20px 0 24px;line-height:1.5;}'
    + '.auth-input{box-sizing:border-box;border:2px solid #e8e8e8;border-radius:14px;padding:16px 18px;font-size:16px;'
    + 'font-family:inherit;outline:none;width:100%;background:#f7f7f7;color:#1C1C1E;font-weight:500;'
    + 'transition:border-color .2s,box-shadow .2s;margin-bottom:12px;display:block;}'
    + '.auth-input:focus{border-color:#1CB0F6;box-shadow:0 0 0 3px rgba(28,176,246,0.18);}'
    + 'html.dark .auth-input::placeholder{color:#8E8E93;}'
    + '.auth-pw-wrap{position:relative;margin-bottom:12px;}'
    + '.auth-pw-wrap .auth-input{margin-bottom:0;padding-right:52px;}'
    + '.auth-pw-eye{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;'
    + 'border:none;cursor:pointer;padding:4px;color:#1CB0F6;display:flex;}'
    + '.auth-forgot-row{text-align:right;margin:6px 0 16px;}'
    + '.auth-forgot{background:none;border:none;color:#1CB0F6;cursor:pointer;font-family:inherit;'
    + 'font-size:13px;font-weight:700;padding:0;}'
    + '.auth-forgot:disabled{color:#8E8E93;cursor:default;}'
    + '.auth-submit{background:#1CB0F6;color:#fff;border:none;border-bottom:4px solid #0e85b5;'
    + 'border-radius:14px;padding:16px 0;font-size:15px;font-weight:900;letter-spacing:0.07em;'
    + 'text-transform:uppercase;cursor:pointer;font-family:inherit;width:100%;margin-bottom:20px;'
    + 'transition:background .15s;}'
    + '.auth-submit:hover:not(:disabled){background:#22c3ff;}'
    + '.auth-submit:disabled{opacity:0.6;cursor:default;}'
    + '.auth-divider{display:flex;align-items:center;gap:12px;margin-bottom:16px;}'
    + '.auth-divider-line{flex:1;height:1.5px;background:#e8e8e8;border-radius:2px;}'
    + '.auth-divider-text{font-size:13px;font-weight:700;color:#afafaf;letter-spacing:0.06em;}'
    + '.auth-social{display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:20px;}'
    + '.auth-soc-btn{display:flex;align-items:center;justify-content:center;gap:8px;'
    + 'border:2px solid #e8e8e8;border-radius:14px;padding:13px 0;background:#fff;cursor:pointer;'
    + 'font-family:inherit;font-size:13px;font-weight:800;letter-spacing:0.05em;'
    + 'text-transform:uppercase;transition:background .15s,border-color .15s;}'
    + '.auth-soc-btn:hover:not(:disabled){background:#f7f7f7;}'
    + '.auth-soc-btn:disabled{opacity:0.6;cursor:default;}'
    + '.auth-soc-google{color:#444;}'
    + '.auth-soc-apple{color:#000;}'
    + 'html.dark .auth-soc-btn{background:#3A3A3C;border-color:#48484A;color:#EBEBF0;}'
    + 'html.dark .auth-soc-btn:hover:not(:disabled){background:#48484A;}'
    + '.auth-terms{font-size:12px;color:#afafaf;text-align:center;line-height:1.6;}'
    + '.auth-terms a{color:#777;font-weight:700;text-decoration:underline;}'
    + 'html.dark .auth-terms a{color:#AEAEB2;}'
    + '.auth-switch{text-align:center;margin:-6px 0 18px;font-size:14px;'
    + 'font-weight:600;color:#8E8E93;}'
    + 'html.dark .auth-switch{color:#AEAEB2;}'
    + '.auth-switch button{background:none;border:none;color:#1CB0F6;cursor:pointer;'
    + 'font-family:inherit;font-size:14px;font-weight:800;padding:0;text-decoration:underline;}'
    + '.auth-msg{font-size:14px;margin-bottom:12px;font-weight:600;text-align:center;line-height:1.5;}'
    + '.auth-msg.err{color:#FF3B30;}'
    + '.auth-msg.ok{color:#34C759;}'
    + '@media (max-width:560px){.auth-card{padding:32px 22px 26px;}.auth-card h2{font-size:22px;}}';

  function injectCSS() {
    if (document.getElementById('auth-gate-style')) return;
    var st = document.createElement('style');
    st.id = 'auth-gate-style';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ── State ─────────────────────────────────────────────────────────────── */
  var el = null;            // the #auth-gate element
  var mode = 'login';
  var pwVisible = false;
  var loading = false;
  var cooldown = 0;
  var cooldownTimer = null;
  var cfg = {};             // { dismissible, leaveTo, onLoggedIn, title, subtitle }

  function $(id) { return el ? el.querySelector('#' + id) : null; }

  function setMsg(type, text) {
    var m = $('auth-msg');
    if (!m) return;
    m.style.display = text ? 'block' : 'none';
    m.className = 'auth-msg ' + (type || '');
    m.textContent = text || '';
  }

  function setLoading(on) {
    loading = on;
    var btn = $('auth-btn');
    if (btn) {
      btn.disabled = on;
      btn.textContent = on ? 'Even geduld…' : (mode === 'login' ? 'Inloggen' : 'Account aanmaken');
    }
    var socs = el ? el.querySelectorAll('.auth-soc-btn') : [];
    for (var i = 0; i < socs.length; i++) socs[i].disabled = on;
    paintForgot();
  }

  function paintForgot() {
    var f = $('auth-forgot');
    if (!f) return;
    f.disabled = loading || cooldown > 0;
    f.textContent = cooldown > 0 ? ('Opnieuw versturen kan over ' + cooldown + 's') : 'Wachtwoord vergeten?';
  }

  function startCooldown() {
    cooldown = 60;
    paintForgot();
    clearInterval(cooldownTimer);
    cooldownTimer = setInterval(function () {
      cooldown--;
      if (cooldown <= 0) { cooldown = 0; clearInterval(cooldownTimer); }
      paintForgot();
    }, 1000);
  }

  /* ── Markup ────────────────────────────────────────────────────────────── */
  function build() {
    if (el) return el;
    injectCSS();
    el = document.createElement('div');
    el.id = 'auth-gate';
    el.innerHTML = ''
      + '<div class="auth-card" id="auth-card">'
      + '<button class="auth-close" id="auth-close" type="button" aria-label="Sluiten">' + X_ICON + '</button>'
      + '<h2 id="auth-title">Inloggen</h2>'
      + '<div class="auth-sub" id="auth-sub" style="display:none"></div>'
      + '<form id="auth-form" style="display:flex;flex-direction:column;margin:0;">'
      + '<input id="auth-name" class="auth-input" type="text" name="name" autocomplete="name" placeholder="Naam" style="display:none">'
      + '<input id="auth-email" class="auth-input" type="email" name="email" autocomplete="username" placeholder="E-mailadres">'
      + '<div class="auth-pw-wrap">'
      + '<input id="auth-pw" class="auth-input" type="password" name="password" autocomplete="current-password" placeholder="Wachtwoord">'
      + '<button type="button" class="auth-pw-eye" id="auth-pw-eye" aria-label="Wachtwoord tonen">' + EYE + '</button>'
      + '</div>'
      + '<div class="auth-forgot-row" id="auth-forgot-row">'
      + '<button type="button" class="auth-forgot" id="auth-forgot">Wachtwoord vergeten?</button>'
      + '</div>'
      + '<div id="auth-msg" class="auth-msg" style="display:none"></div>'
      + '<button type="submit" class="auth-submit" id="auth-btn">Inloggen</button>'
      + '</form>'
      + '<div class="auth-switch" id="auth-switch"></div>'
      + '<div class="auth-divider"><div class="auth-divider-line"></div>'
      + '<div class="auth-divider-text">OF</div><div class="auth-divider-line"></div></div>'
      + '<div class="auth-social">'
      + '<button type="button" class="auth-soc-btn auth-soc-google" id="auth-google">' + G_ICON + 'Doorgaan met Google</button>'
      + '<button type="button" class="auth-soc-btn auth-soc-apple" id="auth-apple" style="display:none">' + APPLE_ICON + 'Doorgaan met Apple</button>'
      + '</div>'
      + '<div class="auth-terms">VUmed is een educatief oefenplatform en biedt geen medisch advies. '
      + 'Door in te loggen ga je akkoord met onze '
      + '<a href="voorwaarden.html">Gebruiksvoorwaarden</a> en '
      + '<a href="privacybeleid.html">Privacybeleid</a>.</div>'
      + '</div>';
    document.body.appendChild(el);

    el.addEventListener('click', function (e) { if (e.target === el) dismiss(); });
    $('auth-close').addEventListener('click', dismiss);
    $('auth-form').addEventListener('submit', function (e) { e.preventDefault(); submit(); });
    $('auth-pw-eye').addEventListener('click', togglePw);
    $('auth-forgot').addEventListener('click', forgotPassword);
    $('auth-google').addEventListener('click', function () { socialLogin('google'); });
    $('auth-apple').addEventListener('click', function () { socialLogin('apple'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && el && el.classList.contains('visible')) dismiss();
    });
    return el;
  }

  function paintMode() {
    var isSignup = mode === 'signup';
    $('auth-title').textContent = cfg.title || (isSignup ? 'Maak je profiel' : 'Inloggen');
    $('auth-btn').textContent = isSignup ? 'Account aanmaken' : 'Inloggen';
    $('auth-name').style.display = isSignup ? 'block' : 'none';
    $('auth-pw').setAttribute('autocomplete', isSignup ? 'new-password' : 'current-password');
    $('auth-forgot-row').style.display = isSignup ? 'none' : 'block';
    $('auth-switch').innerHTML = isSignup
      ? 'Al een account?&nbsp;<button type="button" data-mode="login">Inloggen</button>'
      : 'Nog geen account?&nbsp;<button type="button" data-mode="signup">Gratis account aanmaken</button>';
    $('auth-switch').querySelector('button').addEventListener('click', function () {
      mode = this.getAttribute('data-mode');
      setMsg('', '');
      paintMode();
    });
    setMsg('', '');
  }

  function togglePw() {
    pwVisible = !pwVisible;
    $('auth-pw').type = pwVisible ? 'text' : 'password';
    $('auth-pw-eye').innerHTML = pwVisible ? EYE_OFF : EYE;
  }

  /* ── Actions ───────────────────────────────────────────────────────────── */
  async function submit() {
    setMsg('', '');
    var email = $('auth-email').value.trim();
    var pw = $('auth-pw').value;
    var name = $('auth-name').value.trim();

    if (!email || !pw) { setMsg('err', 'Vul e-mail en wachtwoord in.'); return; }
    if (mode === 'signup' && !name) { setMsg('err', 'Vul je naam in.'); return; }
    if (mode === 'signup' && containsProfanity(name)) {
      setMsg('err', 'Kies alsjeblieft een andere naam.'); return;
    }
    var sb = getClient();
    if (!sb) { setMsg('err', 'Supabase is nog niet geconfigureerd.'); return; }

    setLoading(true);
    var result;
    if (mode === 'login') {
      result = await sb.auth.signInWithPassword({ email: email, password: pw });
    } else {
      result = await sb.auth.signUp({ email: email, password: pw, options: { data: { full_name: name } } });
    }
    setLoading(false);

    if (result.error) { setMsg('err', result.error.message); return; }
    if (mode === 'signup' && result.data.user && !result.data.session) {
      setMsg('ok', 'Check je e-mail voor de bevestigingslink.');
      return;
    }
    hide();
    // The reload/navigation below must NOT replay the launch splash over the
    // app (native WKWebView drops sessionStorage across the reload). One-shot
    // localStorage flag survives the reload; pwa.js consumes it and skips.
    try { localStorage.setItem('vumed_skip_splash', '1'); } catch (e) {}
    if (typeof cfg.onLoggedIn === 'function') cfg.onLoggedIn(result.data);
    else window.location.reload();
  }

  async function forgotPassword() {
    setMsg('', '');
    var addr = $('auth-email').value.trim().toLowerCase();
    if (!addr) { setMsg('err', 'Vul je e-mailadres in om je wachtwoord te herstellen.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(addr)) {
      setMsg('err', 'Dat lijkt geen geldig e-mailadres. Controleer op typfouten.'); return;
    }
    var sb = getClient();
    if (!sb) { setMsg('err', 'Supabase is nog niet geconfigureerd.'); return; }

    setLoading(true);
    // The recovery link must land on vumed.html — that page owns the
    // PASSWORD_RECOVERY handler and the "Nieuw wachtwoord" modal. On native the
    // WKWebView origin is capacitor://app.vumed.nl (a non-http scheme Supabase
    // won't honour and that can't reopen the app), so force the public https URL.
    var redir;
    try {
      if (window.VUMED_NATIVE) redir = 'https://vumed.nl/vumed.html';
    } catch (e) {}
    if (!redir) redir = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'vumed.html';
    var r = await sb.auth.resetPasswordForEmail(addr, { redirectTo: redir });
    setLoading(false);

    if (r.error) {
      if (/rate limit|60 seconds|too many/i.test(r.error.message)) {
        setMsg('err', 'Je kunt maar één herstel-mail per minuut aanvragen. Probeer het zo opnieuw.');
      } else {
        setMsg('err', r.error.message);
      }
      return;
    }
    startCooldown();
    setMsg('ok', 'Als er een account bestaat voor ' + addr + ' is er een herstel-link verstuurd. '
      + 'Geen mail na een paar minuten? Check je spam-map en of dit écht het adres is waarmee je bent geregistreerd.');
  }

  async function socialLogin(provider) {
    // Native app (Capacitor): Google weigert OAuth in een embedded webview —
    // route via de systeembrowser + deep-link (native-auth.js). Web ongewijzigd:
    // window.VUMED_NATIVE bestaat alleen in de app.
    if (window.VUMED_NATIVE && window.VumedNativeAuth) {
      provider === 'apple' ? VumedNativeAuth.signInWithApple()
                           : VumedNativeAuth.signInWithOAuth(provider);
      return;
    }
    setMsg('', '');
    var sb = getClient();
    if (!sb) { setMsg('err', 'Supabase is nog niet geconfigureerd.'); return; }
    setLoading(true);
    // A disabled provider makes Supabase's /authorize endpoint render a raw JSON
    // error page — check the public settings first and fail inside the card.
    try {
      var res = await fetch(window.SUPABASE_URL + '/auth/v1/settings', { headers: { apikey: window.SUPABASE_ANON_KEY } });
      var s = await res.json();
      if (s && s.external && !s.external[provider]) {
        setLoading(false);
        setMsg('err', 'Inloggen met ' + (provider === 'google' ? 'Google' : 'Apple')
          + ' is nog niet beschikbaar. Gebruik voorlopig je e-mail en wachtwoord.');
        return;
      }
    } catch (e) { /* settings unreachable → just attempt the redirect */ }

    var r = await sb.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: window.location.origin + window.location.pathname },
    });
    // On success the browser navigates away; we only land here on failure.
    if (r.error) { setLoading(false); setMsg('err', r.error.message); }
  }

  /* Apple is dormant: unhide the button only when the provider is actually
     enabled in Supabase (auto-appears once Tijmen configures Apple — no code
     change needed then). Checked once per page load. */
  var _appleChecked = false;
  function maybeShowApple() {
    if (_appleChecked || !window.SUPABASE_URL) return;
    _appleChecked = true;
    fetch(window.SUPABASE_URL + '/auth/v1/settings', { headers: { apikey: window.SUPABASE_ANON_KEY } })
      .then(function (r) { return r.json(); })
      .then(function (s) {
        if (s && s.external && s.external.apple) {
          var b = $('auth-apple');
          if (b) b.style.display = '';
        }
      })
      .catch(function () {});
  }

  /* ── Show / hide ───────────────────────────────────────────────────────── */
  function dismiss() {
    if (cfg.dismissible) { hide(); if (typeof cfg.onDismiss === 'function') cfg.onDismiss(); }
    // hardGate = truly inescapable (login.html): Escape / back / backdrop tap must
    // NOT navigate to leaveTo, because that surface (dashboard) isn't re-gated on
    // native → would drop the user into a guest session past a mandatory login.
    else if (cfg.hardGate) { return; }
    else window.location.href = cfg.leaveTo || LEAVE_TO;
  }

  function hide() {
    if (!el) return;
    el.classList.remove('visible');
    document.documentElement.style.overflow = '';
  }

  function show(opts) {
    opts = opts || {};
    // Already open → leave it alone. Pages repaint on events (shop redraws on
    // every 'vumed-stats'), and re-showing would reset the form under someone
    // mid-way through typing their password.
    if (el && el.classList.contains('visible')) return;
    build();
    maybeShowApple();
    cfg = {
      dismissible: opts.dismissible !== false,
      hardGate: opts.hardGate === true,
      leaveTo: opts.leaveTo || LEAVE_TO,
      onLoggedIn: opts.onLoggedIn,
      onDismiss: opts.onDismiss,
      title: opts.title,
    };
    mode = opts.mode === 'signup' ? 'signup' : 'login';
    paintMode();

    var sub = $('auth-sub');
    sub.textContent = opts.subtitle || '';
    sub.style.display = opts.subtitle ? 'block' : 'none';
    $('auth-close').setAttribute('aria-label', cfg.dismissible ? 'Sluiten' : 'Terug');

    if (opts.message) setMsg(opts.message.type || 'err', opts.message.text);

    el.classList.add('visible');
    document.documentElement.style.overflow = 'hidden';
    // Autofocus the email field on desktop only. On touch devices (native app +
    // mobile PWA) a programmatic focus pops the keyboard the instant the login
    // popup opens — the keyboard should appear only when the user taps a field.
    var _coarse = false;
    try { _coarse = !!(window.VUMED_NATIVE || (window.matchMedia && matchMedia('(pointer: coarse)').matches)); } catch (e) {}
    if (!_coarse) setTimeout(function () { var e = $('auth-email'); if (e) e.focus(); }, 60);
  }

  /* Blocking gate: this page is useless without an account. */
  function require_(opts) {
    opts = opts || {};
    opts.dismissible = false;
    show(opts);
  }

  /* Resolves to the session, or shows the gate and never resolves truthy.
     Pages call this instead of hand-rolling their own getSession + gate. */
  async function guard(opts) {
    opts = opts || {};
    var sb = getClient();
    if (!sb) { require_(opts); return null; }
    var r = await sb.auth.getSession();
    var session = r && r.data ? r.data.session : null;
    if (!session || !session.user) { require_(opts); return null; }
    return session;
  }

  window.VumedAuthGate = {
    open: show,
    require: require_,
    guard: guard,
    close: hide,
    isOpen: function () { return !!el && el.classList.contains('visible'); },
  };
})();
