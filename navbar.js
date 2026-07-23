/**
 * navbar.js — Shared sidebar navigation for all VUmed pages.
 * Include with: <script src="navbar.js" data-active="tentamens"></script>
 * Valid data-active values: dashboard | tentamens | voortgang | trofeeenpad | shop | profiel | instellingen
 */
(function () {
  var script = document.currentScript;
  var ACTIVE = (script && script.getAttribute('data-active')) || window.NAVBAR_ACTIVE || 'tentamens';

  // True in de native app of een geïnstalleerde (standalone) PWA — daar moet je
  // altijd inloggen, dus stuurt uitloggen je naar de kale login.html.
  function _vumedInApp() {
    try {
      return !!(window.VUMED_NATIVE ||
        (window.matchMedia && matchMedia('(display-mode: standalone)').matches) ||
        window.navigator.standalone === true);
    } catch (e) { return false; }
  }

  /* ── Account-scope: lokale spiegels horen bij ÉÉN account ──────────────
     localStorage spiegelt per-account gegevens (avatar, dagenreeks, dagdoel,
     examenvoortgang). Bleef dat staan bij uitloggen, dan erfde het VOLGENDE
     account op hetzelfde toestel die gegevens: de spiegels die vumed_stats
     onvoorwaardelijk uit de DB overneemt (munten/XP/hartjes) corrigeren
     zichzelf, maar avatar (profile.html adopteert alleen als de DB er één
     heeft) en dagenreeks (alleen als last_active_date gevuld is) niet.
     Daarom: wissen bij uitloggen, én wissen zodra de sessie een ander
     account blijkt te bevatten dan de laatst bekende — dat laatste dekt
     Google/Apple-login, waar de uitlogknop nooit langskomt. */
  var SCOPE_KEEP = {           // apparaat-voorkeuren, niet accountgebonden
    vumed_theme: 1, vumed_sound: 1, vumed_sidebar_hidden: 1, vumed_splash: 1,
    vumed_skip_splash: 1, vumed_scroll: 1, vumed_return: 1,
    vumed_native_opened: 1, vumed_push_token: 1, vumed_admin_view: 1
  };
  function scopeWipe() {
    try {
      var kill = [], i, k;
      for (i = 0; i < localStorage.length; i++) {
        k = localStorage.key(i);
        if (!k || SCOPE_KEEP[k]) continue;
        // vumed_* = spelstaat/avatar/dagdoel, medeace_progress_* = examenvoortgang
        if (k.indexOf('vumed_') === 0 || k.indexOf('medeace_progress_') === 0) kill.push(k);
      }
      for (i = 0; i < kill.length; i++) localStorage.removeItem(kill[i]);
    } catch (e) {}
    try {
      sessionStorage.removeItem('vumed_notif_unread');
      sessionStorage.removeItem('vumed_notif_unread_t');
    } catch (e) {}
  }
  /* Wist alleen als er een ANDER account bekend was. Eerste keer (of gast die
     inlogt) = niets wissen, alleen onthouden — anders zou een bestaande
     gebruiker bij de eerste load na deze update zijn lokale staat verliezen. */
  function scopeGuard(uid) {
    if (!uid) return;
    var prev = null;
    try { prev = localStorage.getItem('vumed_uid'); } catch (e) { return; }
    if (prev && prev !== uid) scopeWipe();
    try { localStorage.setItem('vumed_uid', uid); } catch (e) {}
  }
  window.VumedScope = { wipe: scopeWipe, guard: scopeGuard };

  /* Pagina's maken hun Supabase-client op eigen tempo (window._sbInstance) →
     kort pollen, dan de sessie lezen en op elke latere login meekijken. */
  function watchAccountScope() {
    var tries = 0;
    (function tick() {
      var sb = window._sbInstance;
      if (sb && sb.auth) {
        try {
          sb.auth.getSession().then(function (r) {
            var s = r && r.data && r.data.session;
            scopeGuard(s && s.user && s.user.id);
          }).catch(function () {});
          sb.auth.onAuthStateChange(function (ev, sess) {
            if (ev === 'SIGNED_IN' || ev === 'INITIAL_SESSION') {
              scopeGuard(sess && sess.user && sess.user.id);
            }
          });
        } catch (e) {}
        return;
      }
      if (++tries < 40) setTimeout(tick, 250);   // max ~10s
    })();
  }

  /* ── 1. Inject CSS immediately (synchronous — no flash) ── */
  var style = document.createElement('style');
  style.id = 'shared-navbar-styles';
  style.textContent = [
    '.main-sidebar{width:258px;flex-shrink:0;display:flex;flex-direction:column;',
    '  padding:24px 14px;background:#fff;border-right:1.5px solid #f0f0f0;height:100vh;}',
    '.main-sidebar-logo{font-size:30px;font-weight:900;color:#1CB0F6;',
    '  padding:0 14px;margin-bottom:22px;font-family:"Nunito",sans-serif;',
    '  display:flex;align-items:center;gap:9px;line-height:1;letter-spacing:-0.8px;}',
    '.main-sidebar-logo svg{display:block;flex-shrink:0;}',
    '.vle-pulse{animation:vlePulse 3.6s ease-in-out infinite;',
    '  filter:drop-shadow(0 0 3px rgba(28,176,246,.75));}',
    '@keyframes vlePulse{0%{stroke-dashoffset:1.3}46%,100%{stroke-dashoffset:-0.32}}',
    '@media (prefers-reduced-motion:reduce){.vle-pulse{animation:none;opacity:0;}}',
    '.ms-nav-item{display:flex;align-items:center;gap:14px;padding:3px 14px;',
    '  border-radius:16px;margin-bottom:4px;cursor:pointer;border:2px solid transparent;',
    '  transition:background 0.15s,transform 0.1s;text-decoration:none;}',
    '.ms-nav-item:hover{background:#f0f9ff;}',
    '.ms-nav-item:active{transform:scale(0.97);}',
    '.ms-nav-item.active{background:#EAF6FF;border:2px solid rgba(28,176,246,0.28);',
    '  border-bottom:3px solid rgba(28,176,246,0.38);}',
    '.ms-nav-icon{width:46px;height:46px;border-radius:14px;flex-shrink:0;position:relative;',
    '  display:flex;align-items:center;justify-content:center;}',
    /* Rode stip op Profiel bij ongelezen meldingen (notifications-tabel) */
    '.nav-notif-dot{position:absolute;top:6px;right:7px;width:9px;height:9px;border-radius:50%;',
    '  background:#FF4B4B;box-shadow:0 0 0 2px #fff;display:none;}',
    'html.dark .nav-notif-dot{box-shadow:0 0 0 2px #1C1C1E;}',
    '.ms-nav-icon.col-active{background:transparent;}',
    '.ms-nav-icon.col-inactive{background:#f4f6f8;}',
    '.ms-nav-label{font-size:12px;font-weight:700;color:#777;',
    '  text-transform:uppercase;letter-spacing:0.05em;}',
    '.ms-nav-label.active{font-weight:800;color:#1CB0F6;}',
    '.ms-meer{cursor:pointer;}',
    '.meer-dropdown{overflow:hidden;max-height:0;',
    '  transition:max-height 0.3s cubic-bezier(0.25,0.46,0.45,0.94);padding:0 4px;}',
    '.ms-meer:hover .meer-dropdown{max-height:200px;}',
    '.meer-dropdown.always-open{max-height:200px;}',
    '.meer-dropdown-item{display:flex;align-items:center;gap:14px;',
    '  padding:9px 14px;border-radius:12px;margin:1px 0;font-size:14px;',
    '  font-weight:700;color:#777;text-transform:uppercase;letter-spacing:0.05em;',
    '  cursor:pointer;transition:background 0.12s;}',
    '.meer-dropdown-item:hover{background:#f0f9ff;color:#1C1C1E;}',
    '.meer-dropdown-item.current{color:#1CB0F6;}',
    '.meer-dropdown-logout{color:#FF3B30!important;}',
    '.meer-dropdown-logout:hover{background:#fff0f0!important;}',
    /* ── Collapsible sidebar ── */
    '.main-sidebar{transition:width 0.28s cubic-bezier(0.4,0,0.2,1),padding 0.28s cubic-bezier(0.4,0,0.2,1);overflow:hidden;}',
    '.main-sidebar>*{width:230px;flex-shrink:0;}',
    'html.sb-hidden .main-sidebar{width:0;padding-left:0;padding-right:0;border-right-width:0;}',
    '.sb-toggle{position:fixed;top:50%;left:258px;transform:translate(-50%,-50%);width:28px;height:28px;',
    '  border-radius:50%;background:#fff;border:1.5px solid #D1D1D6;display:flex;align-items:center;',
    '  justify-content:center;cursor:pointer;padding:0;z-index:200;',
    '  transition:left 0.28s cubic-bezier(0.4,0,0.2,1),background 0.15s,border-color 0.15s;}',
    '.sb-toggle:hover{background:#EBF7FF;border-color:#1CB0F6;}',
    '.sb-toggle svg{transition:transform 0.28s;display:block;}',
    'html.sb-hidden .sb-toggle{left:26px;}',
    'html.sb-hidden .sb-toggle svg{transform:rotate(180deg);}',
    'html.dark .sb-toggle{background:#2C2C2E;border-color:#48484A;}',
    'html.dark .sb-toggle:hover{background:#3A3A3C;border-color:#1CB0F6;}',
    /* ── Mobile: bottom tab bar replaces the sidebar (≤768px) ── */
    '.ms-tabbar{display:none;}',
    '.ms-sheet-backdrop{display:none;}.ms-sheet{display:none;}',
    '@media (max-width:768px){',
    '  .main-sidebar{display:none!important;}',
    '  .sb-toggle{display:none!important;}',
    '  .main-content,#root{padding-bottom:max(80px, calc(70px + env(safe-area-inset-bottom)))!important;}',
    '  .ms-tabbar{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:300;',
    '    background:#fff;border-top:1.5px solid #ececec;box-shadow:0 -2px 12px rgba(0,0,0,0.05);',
    /* env() is 0 without viewport-fit=cover, so lift the icons clear of the iOS home indicator */
    '    padding:6px 1px max(16px, calc(6px + env(safe-area-inset-bottom)));}',
    '  .ms-tab{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:2px;',
    '    text-decoration:none;padding:3px 0;border:none;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;}',
    '  .ms-tab-ic{height:24px;display:flex;align-items:center;justify-content:center;position:relative;}',
    '  .ms-tab-ic .nav-notif-dot{top:-2px;right:-5px;}',
    '  .ms-tab-ic svg{width:22px;height:22px;}',
    '  .ms-tab-lb{font-size:9px;font-weight:800;color:#b0b8c4;letter-spacing:0;font-family:"Nunito",sans-serif;',
    '    white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis;}',
    '  .ms-tab.active .ms-tab-lb{color:#1CB0F6;}',
    '  .ms-sheet-backdrop{display:block;position:fixed;inset:0;background:rgba(0,0,0,0.35);z-index:310;',
    '    opacity:0;pointer-events:none;transition:opacity 0.2s;}',
    '  .ms-sheet-backdrop.open{opacity:1;pointer-events:auto;}',
    '  .ms-sheet{display:block;position:fixed;left:0;right:0;bottom:0;z-index:320;background:#fff;',
    '    border-radius:20px 20px 0 0;padding:8px 14px calc(16px + env(safe-area-inset-bottom));',
    '    transform:translateY(105%);transition:transform 0.28s cubic-bezier(0.4,0,0.2,1);box-shadow:0 -6px 24px rgba(0,0,0,0.12);}',
    '  .ms-sheet.open{transform:translateY(0);}',
    '  .ms-sheet-grab{width:40px;height:4px;border-radius:2px;background:#ddd;margin:6px auto 10px;}',
    '  .ms-sheet-row{display:flex;align-items:center;gap:14px;width:100%;padding:14px 12px;border-radius:14px;',
    '    text-decoration:none;border:none;background:none;font-size:15px;font-weight:700;color:#333;',
    '    font-family:"Nunito",sans-serif;cursor:pointer;text-align:left;box-sizing:border-box;}',
    '  .ms-sheet-row:active{background:#f0f9ff;}',
    '  .ms-sheet-row.logout{color:#FF3B30;}',
    '  .ms-sheet-row svg{width:24px;height:24px;flex-shrink:0;}',
    '  html.dark .ms-tabbar{background:#1C1C1E;border-top-color:#2C2C2E;}',
    '  html.dark .ms-sheet{background:#1C1C1E;}',
    '  html.dark .ms-sheet-row{color:#EBEBF0;}',
    '  html.dark .ms-sheet-grab{background:#48484A;}',
    '}',
  ].join('');
  (document.head || document.documentElement).appendChild(style);

  /* Apply saved collapsed state before first paint (no flash) */
  try {
    if (localStorage.getItem('vumed_sidebar_hidden') === '1') {
      document.documentElement.classList.add('sb-hidden');
    }
  } catch (e) {}

  /* ── 2. SVG icons ── */
  var ICONS = {
    dashboard: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<rect x="3" y="3" width="8" height="8" rx="2" fill="#1CB0F6"/>' +
      '<rect x="13" y="3" width="8" height="5" rx="2" fill="#1CB0F6" opacity="0.6"/>' +
      '<rect x="13" y="10" width="8" height="11" rx="2" fill="#1CB0F6"/>' +
      '<rect x="3" y="13" width="8" height="8" rx="2" fill="#1CB0F6" opacity="0.6"/></svg>',
    dashboardInactive: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<rect x="3" y="3" width="8" height="8" rx="2" fill="#b0b8c4"/>' +
      '<rect x="13" y="3" width="8" height="5" rx="2" fill="#b0b8c4" opacity="0.55"/>' +
      '<rect x="13" y="10" width="8" height="11" rx="2" fill="#b0b8c4"/>' +
      '<rect x="3" y="13" width="8" height="8" rx="2" fill="#b0b8c4" opacity="0.55"/></svg>',
    tentamens: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" fill="#1CB0F6"/>' +
      '<rect x="9" y="15" width="6" height="6" rx="1" fill="#1CB0F6" opacity="0.6"/></svg>',
    tentamensInactive: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z" fill="#b0b8c4"/>' +
      '<rect x="9" y="15" width="6" height="6" rx="1" fill="#b0b8c4" opacity="0.5"/></svg>',
    voortgang: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<rect x="9" y="3" width="6" height="18" rx="1.5" fill="#1CB0F6"/>' +
      '<rect x="2" y="9" width="6" height="12" rx="1.5" fill="#1CB0F6" opacity="0.6"/>' +
      '<rect x="16" y="12" width="6" height="9" rx="1.5" fill="#1CB0F6" opacity="0.6"/></svg>',
    voortgangInactive: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none">' +
      '<rect x="9" y="3" width="6" height="18" rx="1.5" fill="#b0b8c4"/>' +
      '<rect x="2" y="9" width="6" height="12" rx="1.5" fill="#b0b8c4" opacity="0.55"/>' +
      '<rect x="16" y="12" width="6" height="9" rx="1.5" fill="#b0b8c4" opacity="0.55"/></svg>',
    trofeeenpad: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
      '<path d="M6 2H18V14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14V2Z" fill="#1CB0F6"/>' +
      '<path d="M2 4H6V9C4.5 9 2 8 2 4Z" fill="#1CB0F6" opacity="0.6"/>' +
      '<path d="M22 4H18V9C19.5 9 22 8 22 4Z" fill="#1CB0F6" opacity="0.6"/>' +
      '<rect x="10" y="20" width="4" height="2" fill="#1CB0F6" opacity="0.6"/>' +
      '<rect x="8" y="22" width="8" height="1.5" rx="0.75" fill="#1CB0F6"/></svg>',
    trofeeenpadInactive: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
      '<path d="M6 2H18V14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14V2Z" fill="#b0b8c4"/>' +
      '<path d="M2 4H6V9C4.5 9 2 8 2 4Z" fill="#b0b8c4" opacity="0.6"/>' +
      '<path d="M22 4H18V9C19.5 9 22 8 22 4Z" fill="#b0b8c4" opacity="0.6"/>' +
      '<rect x="10" y="20" width="4" height="2" fill="#b0b8c4" opacity="0.7"/>' +
      '<rect x="8" y="22" width="8" height="1.5" rx="0.75" fill="#b0b8c4"/></svg>',
    shop: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
      '<path d="M5 8H19L18 21H6L5 8Z" fill="#1CB0F6"/>' +
      '<path d="M9 10V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V10" stroke="#1CB0F6" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M12 12.1c-1.1 0-1.8.6-2.2 1.3h4.4c-.4-.7-1.1-1.3-2.2-1.3z" fill="#fff" opacity="0"/>' +
      '<path d="M12 18.6s-2.6-1.7-3.4-3.2c-.5-1.1.1-2.3 1.2-2.3.7 0 1.1.35 1.4.8h1.6c.3-.45.7-.8 1.4-.8 1.1 0 1.7 1.2 1.2 2.3-.8 1.5-3.4 3.2-3.4 3.2z" fill="#fff" opacity="0.92"/></svg>',
    shopInactive: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
      '<path d="M5 8H19L18 21H6L5 8Z" fill="#b0b8c4"/>' +
      '<path d="M9 10V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V10" stroke="#b0b8c4" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M12 18.6s-2.6-1.7-3.4-3.2c-.5-1.1.1-2.3 1.2-2.3.7 0 1.1.35 1.4.8h1.6c.3-.45.7-.8 1.4-.8 1.1 0 1.7 1.2 1.2 2.3-.8 1.5-3.4 3.2-3.4 3.2z" fill="#fff" opacity="0.88"/></svg>',
    meer: '<svg width="28" height="28" viewBox="0 0 38 38" fill="none">' +
      '<circle cx="19" cy="19" r="19" fill="#1CB0F6"/>' +
      '<circle cx="10" cy="19" r="2.5" fill="white"/>' +
      '<circle cx="19" cy="19" r="2.5" fill="white"/>' +
      '<circle cx="28" cy="19" r="2.5" fill="white"/></svg>',
  };

  /* ── 3. Build sidebar HTML ── */
  function buildSidebar(active) {
    var isMeer = active === 'instellingen';

    function item(id, href, icon, inactiveIcon, label, noBg) {
      var isActive = active === id;
      var clickAttr = href ? ' onclick="window.location.href=\'' + href + '\'"' : '';
      if (id === 'profiel') {
        clickAttr = ' onclick="window._openProfile?window._openProfile():window.location.href=\'profile.html\'"';
      }
      return '<div class="ms-nav-item' + (isActive ? ' active' : '') + '"' + clickAttr + '>' +
        '<div class="ms-nav-icon col-active">' +
          icon +
        '</div>' +
        '<span class="ms-nav-label' + (isActive ? ' active' : '') + '">' + label + '</span>' +
        '</div>';
    }

    var profileIcon = '<div class="ms-nav-icon" id="sidebar-profile-icon-wrap" ' +
      'style="background:transparent;display:flex;align-items:center;justify-content:center;">' +
      '<span id="sidebar-profile-icon"></span><span class="nav-notif-dot"></span></div>';

    var profielItem = '<div class="ms-nav-item' + (active === 'profiel' ? ' active' : '') + '" ' +
      'onclick="window._openProfile?window._openProfile():window.location.href=\'profile.html\'">' +
      profileIcon +
      '<span class="ms-nav-label' + (active === 'profiel' ? ' active' : '') + '">Profiel</span>' +
      '</div>';

    var meerDropdownClass = 'meer-dropdown' + (isMeer ? ' always-open' : '');

    var meer = '<div class="ms-meer" id="ms-meer">' +
      '<div class="ms-nav-item' + (isMeer ? ' active' : '') + '" style="margin-bottom:0;">' +
        '<div class="ms-nav-icon col-active">' + ICONS.meer + '</div>' +
        '<span class="ms-nav-label' + (isMeer ? ' active' : '') + '">Meer</span>' +
      '</div>' +
      '<div class="' + meerDropdownClass + '">' +
        '<div class="meer-dropdown-item' + (active === 'instellingen' ? ' current' : '') + '" onclick="window.location.href=\'instellingen.html\'">Instellingen</div>' +
        '<div class="meer-dropdown-item" onclick="window.location.href=\'helpcentrum.html\'">Help</div>' +
        '<div class="meer-dropdown-item meer-dropdown-logout" id="meer-logout">Uitloggen</div>' +
      '</div>' +
      '</div>';

    return '<div class="main-sidebar">' +
      '<div class="main-sidebar-logo">VUmed</div>' +
      item('dashboard', 'dashboard.html', ICONS.dashboard, ICONS.dashboardInactive, 'Dashboard') +
      item('tentamens', 'vumed.html', ICONS.tentamens, ICONS.tentamensInactive, 'Tentamens') +
      item('voortgang', 'voortgang.html', ICONS.voortgang, ICONS.voortgang, 'Klassement', true) +
      item('trofeeenpad', 'trofeeenpad.html', ICONS.trofeeenpad, ICONS.trofeeenpadInactive, 'Trofeeënpad') +
      item('shop', 'shop.html', ICONS.shop, ICONS.shopInactive, 'Shop') +
      profielItem +
      meer +
      '</div>';
  }

  /* ── Logged-in check: supabase-js persists the session as sb-<ref>-auth-token ── */
  function hasSbSession() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('sb-') === 0 && k.slice(-11) === '-auth-token') {
          var v = localStorage.getItem(k);
          if (v && v !== 'null') return true;
        }
      }
    } catch (e) {}
    return false;
  }

  function updateLogoutVisibility() {
    var vis = hasSbSession() ? '' : 'none';
    var btn = document.getElementById('meer-logout'); if (btn) btn.style.display = vis;
    var tb = document.getElementById('tab-logout'); if (tb) tb.style.display = vis;
  }

  /* ── 4. Inject sidebar into DOM ── */
  function inject() {
    var existing = document.getElementById('shared-navbar-root');
    if (existing) existing.parentNode.removeChild(existing);

    var wrapper = document.createElement('div');
    wrapper.id = 'shared-navbar-root';
    wrapper.innerHTML = buildSidebar(ACTIVE);
    document.body.insertBefore(wrapper.firstChild, document.body.firstChild);

    // Collapse/expand toggle (pinned on the sidebar's right border)
    var oldTgl = document.getElementById('sb-toggle');
    if (oldTgl) oldTgl.parentNode.removeChild(oldTgl);
    var tgl = document.createElement('button');
    tgl.id = 'sb-toggle';
    tgl.className = 'sb-toggle';
    tgl.setAttribute('aria-label', 'Zijbalk in-/uitklappen');
    tgl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none">' +
      '<path d="M14.5 6L9 12L14.5 18" stroke="#8E8E93" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    tgl.addEventListener('click', function () {
      var hidden = document.documentElement.classList.toggle('sb-hidden');
      try { localStorage.setItem('vumed_sidebar_hidden', hidden ? '1' : '0'); } catch (e) {}
    });
    document.body.appendChild(tgl);

    // ── Mobile bottom tab bar + "Meer" sheet (shown only ≤768px via CSS) ──
    ['ms-tabbar', 'ms-sheet-backdrop', 'ms-sheet'].forEach(function (id) {
      var o = document.getElementById(id); if (o) o.parentNode.removeChild(o);
    });
    var profBlue = '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7.5" r="4.5" fill="#1CB0F6"/>' +
      '<path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1z" fill="#1CB0F6" opacity="0.6"/></svg>';
    var profGrey = profBlue.replace(/#1CB0F6/g, '#b0b8c4');
    function dots(c) { return '<svg viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill="' + c + '"/>' +
      '<circle cx="12" cy="12" r="2" fill="' + c + '"/><circle cx="19" cy="12" r="2" fill="' + c + '"/></svg>'; }
    function tab(key, href, icOn, icOff, label) {
      var on = ACTIVE === key;
      var dot = key === 'profiel' ? '<span class="nav-notif-dot"></span>' : '';
      return '<a class="ms-tab' + (on ? ' active' : '') + '" href="' + href + '">' +
        '<span class="ms-tab-ic">' + (on ? icOn : icOff) + dot + '</span>' +
        '<span class="ms-tab-lb">' + label + '</span></a>';
    }
    var tabbar = document.createElement('nav');
    tabbar.id = 'ms-tabbar'; tabbar.className = 'ms-tabbar';
    tabbar.innerHTML =
      tab('dashboard', 'dashboard.html', ICONS.dashboard, ICONS.dashboardInactive, 'Dashboard') +
      tab('tentamens', 'vumed.html', ICONS.tentamens, ICONS.tentamensInactive, 'Tentamens') +
      tab('voortgang', 'voortgang.html', ICONS.voortgang, ICONS.voortgangInactive, 'Klassement') +
      tab('trofeeenpad', 'trofeeenpad.html', ICONS.trofeeenpad, ICONS.trofeeenpadInactive, 'Trofeeën') +
      tab('shop', 'shop.html', ICONS.shop, ICONS.shopInactive, 'Shop') +
      tab('profiel', 'profile.html', profBlue, profGrey, 'Profiel');
    document.body.appendChild(tabbar);
    // ("Meer" removed — Admin/Uitloggen now live on the settings page,
    //  reached via the gear icon on the profile page.)

    // Logout handler
    var logoutBtn = document.getElementById('meer-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async function () {
        var sb = window._sbInstance;
        if (sb) await sb.auth.signOut();
        scopeWipe();   // lokale spiegels horen bij het account dat net uitlogde
        // In de app (native / geïnstalleerde PWA) moet je altijd inloggen →
        // naar de kale inlogpagina. In een gewone browser blijft dit de hub.
        window.location.href = _vumedInApp() ? 'login.html' : 'vumed.html';
      });
    }

    updateLogoutVisibility();
    checkNotifDot();
    watchAccountScope();

    // Init profile icon
    renderSidebarProfileIcon('?');

    // Shared persistent stats bar (hearts/streak/coins/gems/XP). Pages that
    // already render their own currency pills set window.VUMED_STATS_OFF.
    try {
      if (!window.VUMED_STATS_OFF && !window.VumedStats && !document.querySelector('script[data-vumed-stats]')) {
        var ss = document.createElement('script');
        ss.src = 'vumed_stats.js?v=20'; ss.async = true; ss.setAttribute('data-vumed-stats', '1');
        (document.head || document.documentElement).appendChild(ss);
      }
    } catch (e) {}
  }

  /* Het beheer (admin.html) is een los teamportaal met een EIGEN staff-login —
     bewust NIET meer bereikbaar vanuit het student-menu. Je opent het via de
     bekende URL en logt daar apart in. (Vroeger stond hier revealAdminItem.) */

  /* ── Ongelezen meldingen → rode stip op Profiel (sidebar + tabbar).
     Cache 60s in sessionStorage; profile.html zet 'vumed_notif_unread'
     op '0' zodra de meldingen gelezen zijn. ── */
  function setNotifDot(on) {
    var dots = document.querySelectorAll('.nav-notif-dot');
    for (var i = 0; i < dots.length; i++) dots[i].style.display = on ? 'block' : 'none';
  }
  function checkNotifDot(attempt) {
    attempt = attempt || 0;
    if (!hasSbSession()) return;
    try {
      var cached = sessionStorage.getItem('vumed_notif_unread');
      var ts = parseInt(sessionStorage.getItem('vumed_notif_unread_t') || '0', 10);
      if (cached !== null && Date.now() - ts < 60000) { setNotifDot(cached === '1'); return; }
    } catch (e) {}
    var sb = window._sbInstance;
    if (!sb && window.supabase && window.SUPABASE_URL) {
      try { sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY); window._sbInstance = sb; } catch (e) {}
    }
    if (!sb) { if (attempt < 5) setTimeout(function () { checkNotifDot(attempt + 1); }, 700); return; }
    sb.auth.getSession().then(function (res) {
      var uid = res && res.data && res.data.session && res.data.session.user && res.data.session.user.id;
      if (!uid) return;
      return sb.from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', uid).eq('read', false)
        .then(function (r) {
          var n = (r && r.count) || 0;
          try {
            sessionStorage.setItem('vumed_notif_unread', n > 0 ? '1' : '0');
            sessionStorage.setItem('vumed_notif_unread_t', '' + Date.now());
          } catch (e) {}
          setNotifDot(n > 0);
        });
    }).catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* ── 5. Profile icon renderer (exposed globally) ── */
  function renderSidebarProfileIcon(initial) {
    updateLogoutVisibility();
    var el = document.getElementById('sidebar-profile-icon');
    if (!el) return;
    el.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">' +
      '<circle cx="12" cy="7.5" r="4.5" fill="#1CB0F6"/>' +
      '<path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1z" fill="#1CB0F6" opacity="0.6"/>' +
      '</svg>';
  }
  window.renderSidebarProfileIcon = renderSidebarProfileIcon;

})();
