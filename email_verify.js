/* ─────────────────────────────────────────────────────────────────────────
   VUmed – zachte e-mailverificatie
   Iedereen kan meteen inloggen ("Confirm email" staat uit in Supabase).
   Zolang het adres niet bevestigd is, verschijnt na het inloggen (één keer
   per sessie) een popup met "Stuur bevestigingslink" / "Later".

   Bevestigd = app_metadata.vumed_email_verified (alleen server-side te zetten
   via de RPC mark_email_verified). Die RPC zet de vlag zodra de sessie is
   gestart via een mail-link (magic link/herstel) of via Google/Apple.
   De link zelf is een gewone Supabase magic link → template "Magic Link".
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  if (window.VumedEmailVerify) return;
  window.VumedEmailVerify = true;

  var SEEN_KEY = 'vumed_verify_prompted';
  var checkedFor = null;   // user-id waarvoor de RPC al gedraaid heeft
  var el = null;
  // Supabase haalt de tokens straks uit de URL; nu nog zien of we via een mail-link binnenkomen.
  var arrivedViaLink = /type=(magiclink|recovery|signup)/.test(location.hash || '');

  function landingUrl() {
    try { if (window.VUMED_NATIVE) return 'https://vumed.nl/vumed.html'; } catch (e) {}
    return window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'vumed.html';
  }
  function ss(k, v) {
    try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; }
  }

  /* ── UI ──────────────────────────────────────────────────────────────── */
  function css() {
    if (document.getElementById('ev-css')) return;
    var s = document.createElement('style');
    s.id = 'ev-css';
    s.textContent = ''
      + '#ev-gate{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.45);display:flex;align-items:center;'
      + 'justify-content:center;padding:16px;animation:evIn .2s ease;}'
      + '@keyframes evIn{from{opacity:0}to{opacity:1}}'
      + '.ev-card{background:#fff;color:#1C1C1E;border-radius:24px;padding:32px 28px 24px;max-width:400px;width:100%;'
      + "text-align:center;font-family:'Nunito',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;"
      + 'box-shadow:0 20px 60px rgba(0,0,0,.25);}'
      + '.ev-icon{font-size:44px;line-height:1;margin-bottom:12px;}'
      + '.ev-card h2{font-size:22px;font-weight:900;margin:0 0 8px;}'
      + '.ev-card p{font-size:15px;line-height:1.5;color:#636366;margin:0 0 20px;word-break:break-word;}'
      + '.ev-card p b{color:inherit;}'
      + '.ev-btn{display:block;width:100%;border:none;border-radius:16px;padding:14px;font-family:inherit;font-size:16px;'
      + 'font-weight:800;cursor:pointer;background:#1CB0F6;color:#fff;box-shadow:0 4px 0 #1899D6;margin-bottom:10px;}'
      + '.ev-btn:disabled{background:#AEAEB2;box-shadow:0 4px 0 #8E8E93;cursor:default;}'
      + '.ev-later{background:none;border:none;color:#8E8E93;font-family:inherit;font-size:15px;font-weight:700;'
      + 'cursor:pointer;padding:8px;}'
      + '.ev-msg{font-size:14px;font-weight:700;margin:-6px 0 12px;line-height:1.45;}'
      + '.ev-msg.ok{color:#34C759;}.ev-msg.err{color:#FF3B30;}'
      + '#ev-toast{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom));transform:translateX(-50%);'
      + 'z-index:9999;background:#34C759;color:#fff;padding:12px 20px;border-radius:14px;font-weight:800;'
      + "font-family:'Nunito',-apple-system,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.2);max-width:calc(100% - 32px);}"
      + 'html.dark .ev-card{background:#2C2C2E;color:#fff;}'
      + 'html.dark .ev-card p{color:#AEAEB2;}';
    document.head.appendChild(s);
  }

  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return '&#' + c.charCodeAt(0) + ';'; }); }

  function hide() { if (el) { el.remove(); el = null; } }

  function show(sb, email) {
    if (el) return;
    css();
    el = document.createElement('div');
    el.id = 'ev-gate';
    el.innerHTML = '<div class="ev-card" role="dialog" aria-modal="true" aria-labelledby="ev-title">'
      + '<div class="ev-icon">📬</div>'
      + '<h2 id="ev-title">Bevestig je e-mailadres</h2>'
      + '<p>Zo weten we zeker dat <b>' + esc(email) + '</b> van jou is, en kun je altijd je wachtwoord herstellen.</p>'
      + '<div class="ev-msg" id="ev-msg" style="display:none"></div>'
      + '<button type="button" class="ev-btn" id="ev-send">Stuur bevestigingslink</button>'
      + '<button type="button" class="ev-later" id="ev-later">Later</button>'
      + '</div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (e) { if (e.target === el) hide(); });
    el.querySelector('#ev-later').addEventListener('click', hide);
    el.querySelector('#ev-send').addEventListener('click', function () { send(sb, email, this); });
  }

  function msg(type, text) {
    var m = el && el.querySelector('#ev-msg');
    if (!m) return;
    m.className = 'ev-msg ' + type;
    m.textContent = text;
    m.style.display = 'block';
  }

  async function send(sb, email, btn) {
    btn.disabled = true;
    var r;
    try {
      r = await sb.auth.signInWithOtp({
        email: email,
        options: { shouldCreateUser: false, emailRedirectTo: landingUrl() }
      });
    } catch (e) { r = { error: e }; }
    if (r.error) {
      var raw = r.error.message || '';
      msg('err', /rate limit|60 seconds|too many|for security purposes/i.test(raw)
        ? 'Je kunt maar één bevestigingsmail per minuut aanvragen. Probeer het zo opnieuw.'
        : (window.vumedErrorText ? window.vumedErrorText(r.error) : 'Er ging iets mis. Probeer het opnieuw.'));
      btn.disabled = false;
      return;
    }
    msg('ok', 'Verstuurd! Klik op de link in je mail (check ook je spam-map).');
    var left = 60;
    btn.textContent = 'Opnieuw versturen (' + left + 's)';
    var t = setInterval(function () {
      left--;
      if (!el || left <= 0) {
        clearInterval(t);
        if (el) { btn.disabled = false; btn.textContent = 'Opnieuw versturen'; }
        return;
      }
      btn.textContent = 'Opnieuw versturen (' + left + 's)';
    }, 1000);
  }

  function toast(text) {
    css();
    var t = document.createElement('div');
    t.id = 'ev-toast';
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3500);
  }

  /* ── Logica ──────────────────────────────────────────────────────────── */
  async function check(sb, session) {
    var u = session && session.user;
    if (!u || !u.email) { hide(); return; }
    if (u.app_metadata && u.app_metadata.vumed_email_verified) { hide(); return; }
    if (checkedFor === u.id) return;
    checkedFor = u.id;

    var r;
    try { r = await sb.rpc('mark_email_verified'); } catch (e) { r = { error: e }; }
    if (r.error) return;                 // RPC (nog) niet beschikbaar → niemand lastigvallen
    if (r.data === true) {
      hide();
      // Nieuwe JWT ophalen zodat app_metadata klopt (dan stopt de check vanzelf).
      try { await sb.auth.refreshSession(); } catch (e) {}
      // Alleen een toast als iemand net via de bevestigingslink binnenkomt.
      if (arrivedViaLink) toast('E-mailadres bevestigd ✓');
      return;
    }
    if (ss(SEEN_KEY)) return;            // één keer per sessie
    ss(SEEN_KEY, '1');
    // Kort wachten zodat de popup niet over het opstartscherm/de login-animatie valt.
    setTimeout(function () { show(sb, u.email); }, 900);
  }

  function boot(tries) {
    var sb = window._sbInstance || (typeof window.getSB === 'function' && window.getSB());
    if (!sb) {
      if (tries < 50) setTimeout(function () { boot(tries + 1); }, 200);
      return;
    }
    sb.auth.onAuthStateChange(function (ev, session) {
      if (ev === 'SIGNED_OUT') { checkedFor = null; hide(); return; }
      if (ev === 'INITIAL_SESSION' || ev === 'SIGNED_IN' || ev === 'TOKEN_REFRESHED' || ev === 'USER_UPDATED') {
        // Buiten de auth-callback om (supabase-js raadt await binnen de callback af).
        setTimeout(function () { check(sb, session); }, 0);
      }
    });
  }
  boot(0);
})();
