/**
 * user_popup.js — VumedUserPopup.open(uid)
 * Toont het publieke profiel van een andere gebruiker (gebruiker.html) in een
 * modal-popup i.p.v. een paginanavigatie. Zelfde origin → iframe deelt de
 * sessie; gebruiker.html?popup=1 verbergt zelf navbar/wallet/terugknop.
 * Sluiten: X, klik op de achtergrond, of Escape.
 */
(function () {
  var CSS =
    '.up-overlay{position:fixed;inset:0;z-index:760;background:rgba(0,0,0,0.42);' +
    '  backdrop-filter:blur(9px);-webkit-backdrop-filter:blur(9px);' +
    '  display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.2s;}' +
    '.up-overlay.show{opacity:1;}' +
    '.up-card{position:relative;width:680px;max-width:94vw;height:min(86vh,820px);' +
    '  background:#fff;border-radius:24px;overflow:hidden;' +
    '  box-shadow:0 32px 80px rgba(0,0,0,0.25);' +
    '  transform:translateY(14px) scale(0.97);transition:transform 0.22s cubic-bezier(0.25,0.46,0.45,0.94);}' +
    '.up-overlay.show .up-card{transform:translateY(0) scale(1);}' +
    '.up-close{position:absolute;top:12px;right:12px;z-index:2;width:36px;height:36px;' +
    '  border-radius:50%;border:none;background:rgba(0,0,0,0.28);cursor:pointer;padding:0;' +
    '  display:flex;align-items:center;justify-content:center;transition:background 0.15s,transform 0.12s;}' +
    '.up-close:hover{background:rgba(0,0,0,0.45);transform:scale(1.08);}' +
    '.up-frame{width:100%;height:100%;border:none;display:block;background:#fff;}' +
    'html.dark .up-card{background:#1C1C1E;}' +
    'html.dark .up-frame{background:#1C1C1E;}' +
    '@media (max-width:768px){.up-card{width:100vw;max-width:100vw;height:100%;border-radius:0;}}';

  var styleEl = null, overlay = null;

  function ensureStyle() {
    if (styleEl) return;
    styleEl = document.createElement('style');
    styleEl.id = 'user-popup-styles';
    styleEl.textContent = CSS;
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function close() {
    if (!overlay) return;
    var o = overlay;
    overlay = null;
    o.classList.remove('show');
    document.removeEventListener('keydown', onKey);
    setTimeout(function () { if (o.parentNode) o.parentNode.removeChild(o); }, 220);
  }

  function onKey(e) { if (e.key === 'Escape') close(); }

  function open(uid) {
    if (!uid) return;
    ensureStyle();
    close();

    overlay = document.createElement('div');
    overlay.className = 'up-overlay';

    var card = document.createElement('div');
    card.className = 'up-card';

    var frame = document.createElement('iframe');
    frame.className = 'up-frame';
    frame.setAttribute('title', 'Profiel');
    frame.src = 'gebruiker.html?u=' + encodeURIComponent(uid) + '&popup=1';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'up-close';
    closeBtn.setAttribute('aria-label', 'Sluiten');
    closeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none">' +
      '<path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/></svg>';
    closeBtn.onclick = close;

    card.appendChild(frame);
    card.appendChild(closeBtn);
    overlay.appendChild(card);
    // Alleen een échte klik op de achtergrond sluit (niet een drag die daar eindigt)
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    document.body.appendChild(overlay);
    document.addEventListener('keydown', onKey);
    // Geen rAF: die bevriest in achtergrond-tabs. Reflow forceren + timeout
    // zorgt dat de open-transition ook daar gewoon start.
    overlay.getBoundingClientRect();
    setTimeout(function () { if (overlay) overlay.classList.add('show'); }, 20);
  }

  window.VumedUserPopup = { open: open, close: close };
})();
