/* ============================================================================
   tutorial.js — VUmed in-app rondleiding (coach marks)

   ÉÉN gedeelde motor + de stapteksten per scherm. Wordt LAZY geladen door
   navbar.js (hub-pagina's) en progressdots.js (alle ~418 examens), zodat geen
   enkele HTML een extra <script>-tag hoeft te krijgen — dus geen retrofit over
   de fleet en geen handwerk in de 2 mwo_2-bestanden.

   API
     VumedTutorial.auto()          start de eerste ongeziene rondleiding van deze pagina
     VumedTutorial.run(id)         start er één, ook als hij al gezien is
     VumedTutorial.seen(id)        boolean
     VumedTutorial.reset(id)       markeer als ongezien
     VumedTutorial.resetAll()      alles ongezien + rondleidingen weer AAN
     VumedTutorial.off()/isOff()   globale uit-vlag (de schakelaar in het helpcentrum)
     VumedTutorial.list()          [{id, title, page}] voor het helpcentrum

   STAAT: localStorage `vumed_tut_<id>` + `vumed_tut_off`. Beide vallen onder de
   `vumed_`-prefix van VumedScope.wipe (navbar.js) → een accountwissel op
   hetzelfde toestel begint schoon.

   HARDE REGELS (uit eerdere sessies, niet zomaar wijzigen)
   · Het gat is een box-shadow-spotlight, GEEN clip-path / -webkit-mask. WebKit
     rastert een gemaskeerde container met animerende children in een layer die
     z'n eerste paint cachet (splash-les 2026-07-21).
   · Sluiten verwijdert de hele overlay-node uit de DOM. Nooit alleen een class
     weghalen en een inline display laten staan — dan blijft er een onzichtbare
     full-screen laag liggen die alle kliks opslokt (les 2026-07-27).
   · Een stap waarvan het doel ontbreekt wordt STIL overgeslagen. Exam-pagina's
     verschillen onderling (open vragen, dnd, missies) — een harde selector-eis
     zou daar een dode rondleiding opleveren.
   · Dark mode via `html.dark …:not(.state)` waar een state-class meedoet
     (gotcha 5: `html.dark .cls` = 0,2,1 verslaat `.cls.on` = 0,2,0).
============================================================================ */
(function () {
  'use strict';
  if (window.VumedTutorial) return;

  var LS_SEEN = 'vumed_tut_';
  var LS_OFF  = 'vumed_tut_off';
  var Z       = 1000500;   /* boven de image-zoom (999999) en de exam-overlays (1000000) */

  /* ---------------------------------------------------------------- helpers */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) {} }

  function isPhone()   { try { return window.matchMedia('(max-width:768px)').matches; } catch (e) { return false; } }
  function isReduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  /* Een doel mag een selector, een functie of een element zijn. Faalt stil.
     Bij een selector pakken we het eerste ZICHTBARE element, niet simpelweg
     het eerste uit de DOM: vumed.html houdt alle drie de studiejaren in de
     pagina en verbergt de twee inactieve — querySelector zou dan een tegel
     in een verborgen sectie kiezen en de stap onterecht laten wegvallen. */
  /* Een doel mag ook een GROEPJE elementen zijn (een array): de lichtvlek wordt
     dan het omhullende vlak. Nodig voor "je leerpad" — daar veren vier tegels
     op en die horen samen in het licht te staan; het blok eromheen (`.pnodes`)
     vult bijna het hele scherm en is dus geen bruikbaar doel. */
  function firstEl(x) { return Array.isArray(x) ? x[0] : x; }
  function hasTarget(x) {
    if (Array.isArray(x)) return x.length > 0 && visible(x[0]);
    return !!x && visible(x);
  }

  function resolve(t) {
    try {
      if (!t) return null;
      if (typeof t === 'function') {
        var out = t();
        if (Array.isArray(out)) { out = out.filter(visible); return out.length ? out : null; }
        return out || null;
      }
      if (t.nodeType === 1) return t;
      if (typeof t === 'string') {
        var list = document.querySelectorAll(t);
        for (var i = 0; i < list.length; i++) { if (visible(list[i])) return list[i]; }
        return list[0] || null;
      }
    } catch (e) {}
    return null;
  }

  function visible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    var cs;
    try { cs = getComputedStyle(el); } catch (e) { return true; }
    return cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity || '1') > 0.02;
  }

  /* ================= INTERACTIELAAG ========================================
     De rondleiding wijst niet alleen aan, hij BEDIENT de pagina: tabs schakelen
     echt, panelen schuiven echt open, tegels reageren. Vier primitieven, alle
     vier generiek — ze werken zonder iets van de pagina-CSS te weten.

     VEILIGHEIDSREGEL: alleen UI-toggles. Nooit iets aanklikken dat naar de
     database schrijft of je voortgang verandert (een antwoord kiezen kost een
     hartje, een bladwijzer schrijft een rij weg, inleveren sluit je tentamen af).
     Voor die knoppen gebruiken we `poke` — de tik zonder het gevolg.
  ========================================================================= */

  /* Onze eigen transform ACHTER die van het element plakken i.p.v. hem te
     vervangen. De originele inline waarde onthouden we op de node zelf, zodat
     opruimen altijd exact terugzet wat er stond — ook als twee effecten elkaar
     overlappen. */
  var TF_SAVE = '_vtutTf';
  function squeeze(el, extra, ms, ease) {
    if (!el) return;
    try {
      if (!(TF_SAVE in el)) el[TF_SAVE] = el.style.transform || '';
      var base = '';
      try {
        var c = getComputedStyle(el).transform;
        if (c && c !== 'none') base = c + ' ';
      } catch (e) {}
      el.style.transition = 'transform ' + (ms || 220) + 'ms ' +
        (ease || 'cubic-bezier(.34,1.56,.64,1)') + ', box-shadow .22s ease';
      el.style.transform = base + extra;
    } catch (e) {}
  }
  function unsqueeze(el) {
    if (!el || !(TF_SAVE in el)) return;
    try {
      el.style.transform = el[TF_SAVE];
      el.style.transition = '';
      delete el[TF_SAVE];
    } catch (e) {}
  }

  /* Een tik: het element veert kort in en er loopt een ring vanaf de rand weg. */
  function poke(el) {
    if (!el) return;
    try {
      el.classList.add('vtut-poked');
      if (!isReduced()) {
        squeeze(el, 'scale(.965)', 150, 'ease-out');
        setTimeout(function () { squeeze(el, 'scale(1)', 260); }, 160);
        setTimeout(function () { unsqueeze(el); }, 470);
      }
      setTimeout(function () { el.classList.remove('vtut-poked'); }, 460);
      var r = el.getBoundingClientRect();
      var d = document.createElement('div');
      d.className = 'vtut-ripple';
      var size = Math.max(r.width, r.height);
      d.style.left = (r.left + r.width / 2) + 'px';
      d.style.top = (r.top + r.height / 2) + 'px';
      d.style.width = d.style.height = Math.min(size, 260) + 'px';
      document.body.appendChild(d);
      setTimeout(function () { try { d.parentNode.removeChild(d); } catch (e) {} }, 620);
    } catch (e) {}
  }

  /* Hover: de CSS-:hover van de pagina kunnen we niet forceren, dus we tillen
     het element zelf op én vuren de muis-events af zodat JS-handlers meedoen. */
  function lift(el, ms) {
    if (!el) return;
    try {
      el.classList.add('vtut-lifted');
      if (!isReduced()) squeeze(el, 'translateY(-3px) scale(1.015)');
      ['mouseover', 'mouseenter', 'pointerover'].forEach(function (t) {
        el.dispatchEvent(new MouseEvent(t, { bubbles: t !== 'mouseenter', cancelable: true, view: window }));
      });
      setTimeout(function () {
        el.classList.remove('vtut-lifted');
        unsqueeze(el);
        ['mouseout', 'mouseleave', 'pointerout'].forEach(function (t) {
          el.dispatchEvent(new MouseEvent(t, { bubbles: t !== 'mouseleave', cancelable: true, view: window }));
        });
      }, ms || 900);
    } catch (e) {}
  }

  /* Tik + de echte klik, met de tik iets eerder zodat je 'm ziet aankomen. */
  function tap(el, after) {
    if (!el) return;
    poke(el);
    setTimeout(function () {
      try { el.click(); } catch (e) {}
      if (typeof after === 'function') setTimeout(after, 40);
    }, 190);
  }

  /* Een reeks handelingen met rust ertussen. Stopt zodra de gebruiker doorklikt
     naar een volgende stap — anders lopen twee choreografieën door elkaar. */
  var _seq = 0;
  function seq(steps) {
    var mine = ++_seq, i = 0;
    (function run() {
      if (mine !== _seq || !cur) return;
      if (i >= steps.length) return;
      var s = steps[i++];
      try { if (typeof s[0] === 'function') s[0](); } catch (e) {}
      setTimeout(run, s[1] || 300);
    })();
  }
  function stopSeq() { _seq++; }

  /* ------------------------------------------------------------------- css */
  function injectCss() {
    if (document.getElementById('vtut-style')) return;
    var s = document.createElement('style');
    s.id = 'vtut-style';
    s.textContent = [
      '#vtut{position:fixed;inset:0;z-index:' + Z + ';',
      "  font-family:'Nunito',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;",
      '  -webkit-font-smoothing:antialiased;}',
      /* vangt elke klik/veeg zolang de rondleiding loopt */
      '#vtut .vtut-catch{position:fixed;inset:0;cursor:pointer;}',
      /* het gat: de dimlaag is de box-shadow ERBUITEN */
      '#vtut .vtut-hole{position:fixed;border-radius:16px;pointer-events:none;',
      '  box-shadow:0 0 0 9999px rgba(10,16,26,0.60);',
      '  transition:top .36s cubic-bezier(.4,0,.2,1),left .36s cubic-bezier(.4,0,.2,1),',
      '             width .36s cubic-bezier(.4,0,.2,1),height .36s cubic-bezier(.4,0,.2,1),',
      '             border-radius .36s ease;}',
      '#vtut .vtut-ring{position:fixed;border-radius:18px;pointer-events:none;',
      '  border:2.5px solid #1CB0F6;box-shadow:0 0 0 4px rgba(28,176,246,0.20);',
      '  transition:top .36s cubic-bezier(.4,0,.2,1),left .36s cubic-bezier(.4,0,.2,1),',
      '             width .36s cubic-bezier(.4,0,.2,1),height .36s cubic-bezier(.4,0,.2,1),',
      '             border-radius .36s ease,opacity .2s ease;}',
      '#vtut .vtut-ring.vtut-none{opacity:0;}',
      '@keyframes vtutPulse{0%,100%{box-shadow:0 0 0 4px rgba(28,176,246,0.20);}',
      '  50%{box-shadow:0 0 0 9px rgba(28,176,246,0.05);}}',
      '#vtut .vtut-ring.vtut-pulse{animation:vtutPulse 2s ease-in-out infinite;}',

      /* de kaart */
      '#vtut .vtut-card{position:fixed;width:326px;max-width:calc(100vw - 28px);',
      '  background:#fff;border-radius:20px;padding:17px 18px 13px;',
      '  box-shadow:0 18px 46px rgba(0,0,0,0.24);color:#1C1C1E;',
      '  transition:top .36s cubic-bezier(.4,0,.2,1),left .36s cubic-bezier(.4,0,.2,1);}',
      '#vtut.vtut-in .vtut-card{animation:vtutPop .34s cubic-bezier(.34,1.56,.64,1) backwards;}',
      '@keyframes vtutPop{from{opacity:0;transform:translateY(10px) scale(.97);}}',
      /* Kop en zin even groot (Tijmen 2026-08-05) — de rangorde zit in het
         gewicht en de kleur, niet in de puntgrootte. Geen labelregel erboven:
         die zei alleen "RONDLEIDING" en dat zie je zelf ook wel.
         `padding-right` houdt de kop vrij van het kruisje rechtsboven. */
      '#vtut .vtut-h{font-size:21px;font-weight:900;line-height:1.18;margin:0;letter-spacing:-0.3px;',
      '  padding-right:30px;}',
      '#vtut .vtut-p{font-size:14.5px;font-weight:600;line-height:1.45;color:#6C6C70;margin:7px 0 0;}',
      '#vtut .vtut-p:empty{display:none;margin:0;}',
      '#vtut .vtut-p b{font-weight:800;color:#1C1C1E;}',
      '#vtut .vtut-foot{display:flex;align-items:center;gap:10px;margin-top:15px;}',
      '#vtut .vtut-dots{display:flex;align-items:center;gap:5px;flex:1 1 auto;min-width:0;flex-wrap:wrap;}',
      '#vtut .vtut-d{width:7px;height:7px;border-radius:50%;background:#DCDCE2;flex-shrink:0;',
      '  transition:background .2s ease,transform .2s ease;}',
      '#vtut .vtut-d.on{background:#1CB0F6;transform:scale(1.2);}',
      '#vtut .vtut-d.done{background:#A9DDF7;}',
      '#vtut .vtut-count{font-size:12.5px;font-weight:800;color:#8E8E93;letter-spacing:.02em;}',
      /* Sluitkruisje rechtsboven i.p.v. een tekstknop "Alles overslaan"
         (Tijmen 2026-08-05). Het sluit ALLEEN deze rondleiding — alles in één
         klap uitzetten kan in het helpcentrum. */
      '#vtut .vtut-card.vtut-swap{opacity:0;transition:opacity .15s ease;}',
      '#vtut .vtut-x{position:absolute;top:9px;right:9px;width:30px;height:30px;',
      '  display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;',
      '  background:none;border-radius:50%;color:#A0A0A6;padding:0;',
      '  transition:background .15s ease,color .15s ease;}',
      '#vtut .vtut-x:hover{background:#F2F2F7;color:#3C3C43;}',
      '#vtut .vtut-next{background:#1CB0F6;color:#fff;border:none;border-radius:12px;',
      '  padding:10px 17px;font-family:inherit;font-size:14.5px;font-weight:800;cursor:pointer;',
      '  box-shadow:0 4px 0 #0E85B5;transition:transform .1s ease,box-shadow .1s ease;flex-shrink:0;}',
      '#vtut .vtut-next:active{transform:translateY(2px);box-shadow:0 2px 0 #0E85B5;}',

      /* ── interactielaag: de pagina reageert ── */
      /* Deze twee klassen landen op ECHTE pagina-elementen, dus buiten #vtut.
         Bewust met !important: ze moeten winnen van de eigen transform van
         een tegel of knop, zonder dat we die per pagina hoeven te kennen. */
      /* ⚠️ De classes raken `transform` NIET aan — dat gebeurt in JS (zie squeeze()),
         omdat een CSS-regel de EIGEN transform van het element zou wissen. De
         wallet-balk staat gecentreerd met `transform:translateX(-50%)` en sprong
         daardoor 146px naar rechts om daarna terug te vallen (Tijmen 2026-08-05:
         "die balk tript een beetje"). Gemeten, niet gegokt. */
      '.vtut-poked{position:relative;z-index:2;}',
      '.vtut-lifted{box-shadow:0 10px 26px rgba(28,176,246,0.28) !important;',
      '  position:relative;z-index:2;}',
      '.vtut-ripple{position:fixed;z-index:' + (Z - 1) + ';border-radius:50%;pointer-events:none;',
      '  transform:translate(-50%,-50%) scale(.35);opacity:.55;',
      '  border:2.5px solid #1CB0F6;background:rgba(28,176,246,0.12);',
      '  animation:vtutRipple .6s cubic-bezier(.22,.9,.3,1) forwards;}',
      '@keyframes vtutRipple{to{transform:translate(-50%,-50%) scale(1.35);opacity:0;}}',
      '@media(prefers-reduced-motion:reduce){',
      '  .vtut-ripple{animation:none !important;}',
      '}',

      /* dark */
      'html.dark #vtut .vtut-hole{box-shadow:0 0 0 9999px rgba(0,0,0,0.68);}',
      'html.dark #vtut .vtut-card{background:#1F1F22;color:#EBEBF0;box-shadow:0 18px 46px rgba(0,0,0,0.6);}',
      'html.dark #vtut .vtut-p{color:#B8B8C0;}',
      'html.dark #vtut .vtut-p b{color:#EBEBF0;}',
      'html.dark #vtut .vtut-d:not(.on):not(.done){background:#48484A;}',
      'html.dark #vtut .vtut-x{color:#8E8E93;}',
      'html.dark #vtut .vtut-x:hover{background:#3A3A3C;color:#EBEBF0;}',

      /* telefoon: de kaart wordt een sheet onderin (of bovenin als het doel laag staat) */
      '@media(max-width:768px){',
      '  #vtut .vtut-card{left:10px!important;right:10px!important;width:auto;',
      '    top:auto!important;bottom:calc(12px + env(safe-area-inset-bottom));',
      '    border-radius:24px;padding:18px 18px 14px;}',
      '  #vtut .vtut-card.vtut-attop{top:calc(10px + env(safe-area-inset-top))!important;bottom:auto;}',
      '  #vtut .vtut-card::before{content:"";position:absolute;top:8px;left:50%;',
      '    transform:translateX(-50%);width:38px;height:5px;border-radius:99px;background:#D1D1D6;}',
      '  html.dark #vtut .vtut-card::before{background:#48484A;}',
      '  #vtut .vtut-card{padding-top:22px;}',
      '  #vtut .vtut-h{font-size:19px;}',
      '  #vtut .vtut-next{padding:12px 20px;font-size:15px;}',
      '}',

      /* geen animatie voor wie daarom vraagt */
      '@media(prefers-reduced-motion:reduce){',
      '  #vtut .vtut-hole,#vtut .vtut-ring,#vtut .vtut-card{transition:none!important;animation:none!important;}',
      '}'
    ].join('');
    (document.head || document.documentElement).appendChild(s);
  }

  /* ------------------------------------------------------------- de runner */
  var cur = null;   /* {id, steps, i, root, hole, ring, card, raf, onKey} */

  function buildDom() {
    var root = document.createElement('div');
    root.id = 'vtut';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-live', 'polite');
    root.innerHTML =
      '<div class="vtut-catch"></div>' +
      '<div class="vtut-hole"></div>' +
      '<div class="vtut-ring vtut-pulse"></div>' +
      '<div class="vtut-card">' +
      '  <button type="button" class="vtut-x" aria-label="Rondleiding sluiten">' +
      '    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      '      stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '  </button>' +
      '  <div class="vtut-h"></div>' +
      '  <p class="vtut-p"></p>' +
      '  <div class="vtut-foot">' +
      '    <div class="vtut-dots"></div>' +

      '    <button type="button" class="vtut-next"></button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(root);
    return root;
  }

  /* Plaats gat + ring + kaart. Draait elke frame zolang de rondleiding loopt,
     zodat scrollen, een openklappend paneel of een resize vanzelf meelopen. */
  /* Eén element → z'n eigen vlak. Meerdere → het omhullende vlak. */
  function unionRect(el) {
    var list = Array.isArray(el) ? el : [el];
    var t = Infinity, l = Infinity, r = -Infinity, b = -Infinity, n = 0;
    for (var i = 0; i < list.length; i++) {
      var e = list[i];
      if (!e || e.isConnected === false) continue;
      var q = e.getBoundingClientRect();
      if (q.width < 1 || q.height < 1) continue;
      t = Math.min(t, q.top); l = Math.min(l, q.left);
      r = Math.max(r, q.right); b = Math.max(b, q.bottom); n++;
    }
    if (!n) return null;
    return { top: t, left: l, width: r - l, height: b - t };
  }

  function place() {
    if (!cur) return;
    var st = cur.steps[cur.i] || {};
    var el = cur.el;
    var vw = window.innerWidth, vh = window.innerHeight;
    var pad = typeof st.pad === 'number' ? st.pad : 8;
    var r = null;

    /* Een pagina die hertekent (de quests-flyout, een tab-wissel) vervangt zijn
       nodes; ons doel is dan LOSGEKOPPELD en levert geen maten meer op — de
       lichtvlek klapte daardoor dicht tot 0×0 en het scherm werd helemaal
       gedimd. Eén keer opnieuw opzoeken lost dat op. */
    if (el && !unionRect(el) && st.target) {
      var vers = resolve(st.target);
      if (vers && hasTarget(vers)) { cur.el = vers; el = vers; }
    }
    if (el) {
      var b = unionRect(el);
      if (b && b.width > 1 && b.height > 1) {
        r = { top: b.top - pad, left: b.left - pad, w: b.width + pad * 2, h: b.height + pad * 2 };
        /* klem binnen het scherm zodat een half-zichtbaar doel geen gat buiten beeld maakt */
        if (r.left < 4) { r.w += r.left - 4; r.left = 4; }
        if (r.top < 4) { r.h += r.top - 4; r.top = 4; }
        if (r.left + r.w > vw - 4) r.w = vw - 4 - r.left;
        if (r.top + r.h > vh - 4) r.h = vh - 4 - r.top;
        /* Vult het doel bijna het hele scherm (een heel vraagblok, een vakkaart),
           dan blijft er nergens ruimte voor de kaart en valt die eroverheen.
           Licht dan alleen de BOVENKANT uit — nog steeds herkenbaar, en er
           blijft onderin plek over. ⚠️ Alleen als het doel óók BREED is: naast
           een smalle, hoge kolom (de sidebar) past de kaart prima, en die half
           uitlichten ziet er kapot uit (Tijmen 2026-08-05). */
        if (r.h > vh * 0.56 && r.w > vw * 0.55) r.h = Math.round(vh * 0.56);
        /* Staat het doel (nog) buiten beeld — de smooth-scroll ernaartoe loopt
           nog — dan klemt de berekening hierboven de hoogte negatief. Nooit naar
           `null` vallen: dat dimt in één klap het hele scherm, wat leest als een
           kapotte rondleiding. Een streepje aan de schermrand dat vervolgens
           binnenschuift is veel rustiger (Tijmen 2026-08-05). */
        if (r.h < 8) { r.h = 8; if (r.top > vh - 12) r.top = vh - 12; if (r.top < 4) r.top = 4; }
        if (r.w < 8) { r.w = 8; if (r.left > vw - 12) r.left = vw - 12; if (r.left < 4) r.left = 4; }
      }
    }

    var hole = cur.hole, ring = cur.ring, card = cur.card;
    cur.rect = r;                       /* onthouden voor de sprongbeslissing */
    if (r) {
      var rad = st.round ? Math.min(r.w, r.h) / 2
                         : Math.min(18, Math.max(10, Math.min(r.w, r.h) / 2.6));
      hole.style.top = r.top + 'px'; hole.style.left = r.left + 'px';
      hole.style.width = r.w + 'px'; hole.style.height = r.h + 'px';
      hole.style.borderRadius = rad + 'px';
      ring.style.top = r.top + 'px'; ring.style.left = r.left + 'px';
      ring.style.width = r.w + 'px'; ring.style.height = r.h + 'px';
      ring.style.borderRadius = rad + 'px';
      ring.classList.remove('vtut-none');
    } else {
      /* geen doel: hele scherm dimmen (gat midden, 0×0) */
      hole.style.top = (vh / 2) + 'px'; hole.style.left = (vw / 2) + 'px';
      hole.style.width = '0px'; hole.style.height = '0px'; hole.style.borderRadius = '0px';
      ring.classList.add('vtut-none');
    }

    if (isPhone()) {
      /* Sheet aan de kant met de meeste vrije ruimte NAAST het gat — anders
         legt hij zich over het uitgelichte vlak heen (gemeten op 393px). */
      var above = r ? r.top : 0;
      var below = r ? vh - (r.top + r.h) : vh;
      card.classList.toggle('vtut-attop', !!(r && above > below));
      card.style.top = ''; card.style.left = '';
      return;
    }

    card.classList.remove('vtut-attop');
    var cw = card.offsetWidth || 326, ch = card.offsetHeight || 160, gap = 14;
    var top, left;
    if (!r) {
      top = Math.round((vh - ch) / 2);
      left = Math.round((vw - cw) / 2);
    } else {
      var below = vh - (r.top + r.h), above = r.top;
      var right = vw - (r.left + r.w), leftSp = r.left;
      if (below >= ch + gap + 8) {                       /* onder */
        top = r.top + r.h + gap; left = r.left + r.w / 2 - cw / 2;
      } else if (above >= ch + gap + 8) {                /* boven */
        top = r.top - ch - gap; left = r.left + r.w / 2 - cw / 2;
      } else if (right >= cw + gap + 8) {                /* rechts */
        left = r.left + r.w + gap; top = r.top + r.h / 2 - ch / 2;
      } else if (leftSp >= cw + gap + 8) {               /* links */
        left = r.left - cw - gap; top = r.top + r.h / 2 - ch / 2;
      } else {                                           /* nergens ruimte: verste hoek */
        left = r.left + r.w / 2 - cw / 2;
        top = below > above ? vh - ch - 16 : 16;
      }
    }
    card.style.top = Math.round(Math.max(12, Math.min(vh - ch - 12, top))) + 'px';
    card.style.left = Math.round(Math.max(12, Math.min(vw - cw - 12, left))) + 'px';
  }

  /* Een doel dat pas DOOR de handeling ontstaat (de quests-flyout, een paneel dat
     openschuift) mag je niet meteen volgen: het speelt z'n eigen entree-animatie
     en de lichtvlek zou daar frame voor frame overheen morphen — precies de
     glitch die Tijmen op 2026-08-05 beschreef ("die div verandert daardoor en
     glitcht een beetje"). We laten de vlek staan waar hij stond, wachten tot het
     nieuwe doel er is ÉN stil ligt (twee identieke metingen), en glijden er dan
     in ÉÉN vloeiende beweging heen via de gewone CSS-overgang. */
  /* Glijden mag ALLEEN binnen hetzelfde stukje scherm: de vlakken moeten elkaar
     raken of vlak bij elkaar liggen (de tabs-toggle, van munt naar gem in de
     balk). In elk ander geval zet de vlek zich meteen neer. Een lichtvlek die
     dwars over de pagina reist terwijl er ondertussen een paneel openschuift is
     precies waar Tijmen vier rondes over viel — en hij heeft gelijk: er is dan
     geen visuele lijn om te volgen, dus de beweging voegt niets toe. */
  function dichtbij(a, b) {
    if (!a || !b) return false;
    var overlapt = !(a.left + a.w < b.left || b.left + b.width < a.left ||
                     a.top + a.h < b.top  || b.top + b.height < a.top);
    if (overlapt) return true;
    var dx = (a.left + a.w / 2) - (b.left + b.width / 2);
    var dy = (a.top + a.h / 2) - (b.top + b.height / 2);
    return Math.hypot(dx, dy) < 200;
  }

  /* Een sprong naar een heel ander deel van de pagina. De KAART teleporteerde
     eerst mee — "dat vind ik echt kankerlelijk" (Tijmen 2026-08-05, en terecht).
     Nu: de kaart fadet weg wáár hij staat, verhuist onzichtbaar, en popt op de
     nieuwe plek opnieuw in; de lichtvlek verschijnt daar als een punt en groeit
     eroverheen. Niets reist over het scherm, niets verspringt hard.
     ⚠️ De bevriezing moet AAN blijven tijdens de fade — anders sleept de
     rAF-loop de kaart alvast mee naar het nieuwe doel. */
  function openAt() {
    if (!cur) return;
    var hole = cur.hole, ring = cur.ring, card = cur.card, root = cur.root;
    cur.frozen = true;
    card.style.transition = 'opacity .15s ease';
    card.style.opacity = '0';
    setTimeout(function () {
      if (!cur) return;
      var n2 = unionRect(cur.el);
      [hole, ring].forEach(function (n) { n.style.transition = 'none'; });
      if (n2) {
        var cx = n2.left + n2.width / 2, cy = n2.top + n2.height / 2;
        [hole, ring].forEach(function (n) {
          n.style.top = cy + 'px'; n.style.left = cx + 'px';
          n.style.width = '0px'; n.style.height = '0px';
        });
      }
      card.style.transition = 'none';
      cur.frozen = false;
      /* ⚠️ VOLGORDE IS ALLES. Eerst alles op z'n eindplek zetten (kaart is nog
         onzichtbaar), dán het gat TERUGZETTEN naar een punt, en pas dán de
         overgang aanzetten en opnieuw plaatsen. Stond hier eerder één place()
         met `transition:none` gevolgd door een tweede met dezelfde waarden: de
         browser heeft dan niets te animeren en de lichtvlek stond ineens kant en
         klaar in beeld — precies Tijmens "die highlight is er zomaar, zonder
         animatie" (2026-08-05). */
      place();
      if (n2) {
        var cx2 = n2.left + n2.width / 2, cy2 = n2.top + n2.height / 2;
        [hole, ring].forEach(function (n) {
          n.style.top = cy2 + 'px'; n.style.left = cx2 + 'px';
          n.style.width = '0px'; n.style.height = '0px';
        });
      }
      void root.offsetWidth;
      [hole, ring].forEach(function (n) {
        n.style.transition = 'top .28s cubic-bezier(.22,.9,.3,1), left .28s cubic-bezier(.22,.9,.3,1),' +
                             'width .28s cubic-bezier(.22,.9,.3,1), height .28s cubic-bezier(.22,.9,.3,1)';
      });
      place();                      /* → het gat groeit nu ECHT open op het nieuwe doel */
      /* Kaart opnieuw laten inpoppen op z'n nieuwe plek. ⚠️ De fade-in NIET aan
         de pop-animatie overlaten: die heeft `backwards` fill, dus als hij om
         wat voor reden dan ook niet draait blijft de kaart op opacity 0 hangen
         en is je rondleiding onzichtbaar. Expliciet terugfaden, animatie erbij. */
      root.classList.remove('vtut-in');
      void root.offsetWidth;
      root.classList.add('vtut-in');
      card.style.transition = 'opacity .2s ease';
      card.style.opacity = '1';
      setTimeout(function () {
        if (cur) { cur.card.style.opacity = ''; cur.card.style.transition = ''; }
      }, 420);   /* ná de pop-animatie (340ms), zodat ze elkaar niet bijten */
      setTimeout(function () {
        if (cur) [cur.hole, cur.ring].forEach(function (n) { n.style.transition = ''; });
      }, 320);
    }, 160);
  }

  function arrive(st, instant) {
    if (!cur) return;
    if (instant || !st.target) { cur.frozen = false; place(); return; }
    /* Bevriezen: de vlek blijft staan waar hij stond terwijl de pagina scrolt of
       een paneel openschuift, en glijdt er dáárna in één beweging heen. Zonder
       dit kleeft hij aan een doel dat zelf nog beweegt en zwerft hij raar over
       het scherm (Tijmen 2026-08-05, gemeld bij zowel het leerpad als de quests).
       Bewust één vaste timer i.p.v. wachten-tot-het-stil-ligt: die poll bleef in
       de praktijk soms hangen en dan bewoog de vlek helemaal niet meer. */
    cur.frozen = true;
    var stap = st;
    /* Smooth scrollen duurt langer dan de vaste wachttijd. Pas landen als de
       pagina echt stilstaat, anders belandt de vlek op een doel dat nog
       onderweg is. */
    function whenStil(cb) {
      if (!stap.smooth) { cb(); return; }
      var t0 = Date.now(), vorige = null, stil = 0;
      (function tik() {
        if (!cur || cur.steps[cur.i] !== stap) return;
        var y = Math.round(window.scrollY);
        if (y === vorige) stil++; else { stil = 0; vorige = y; }
        if (stil >= 2 || Date.now() - t0 > 1600) { cb(); return; }
        setTimeout(tik, 90);
      })();
    }
    /* ⚠️ Eén keer landen, en pas als het doel STILSTAAT. Eerder landde ik meteen
       en corrigeerde ik 420ms later — dan zie je de lichtvlek eerst op de oude
       plek van een nog openschuivend paneel verschijnen en daarna alsnog
       verspringen ("eerst helemaal links, dan naar rechts", Tijmen 2026-08-05).
       Twee metingen van 140ms uit elkaar moeten gelijk zijn; daarna landt hij. */
    function land(pogingen, vorigeSleutel) {
      if (!cur || cur.steps[cur.i] !== stap) return;
      var el = resolve(stap.target);
      var maat = el ? unionRect(el) : null;
      if (!el || !maat) {
        if (pogingen > 0) { setTimeout(function () { land(pogingen - 1, null); }, 140); return; }
        next();                       /* doel komt niet → stap stil overslaan */
        return;
      }
      var sleutel = [Math.round(maat.top), Math.round(maat.left),
                     Math.round(maat.width), Math.round(maat.height)].join(',');
      /* Staat er nog helemaal niets uitgelicht (eerste stap), dan niet wachten:
         dan kijk je tegen een volledig donker scherm aan. */
      if (cur.rect && sleutel !== vorigeSleutel && pogingen > 0) {
        setTimeout(function () { land(pogingen - 1, sleutel); }, 140);
        return;
      }
      var verschoven = Math.abs(window.scrollY - (cur.scrollAt || 0)) > 4;
      var vanaf = cur.rect;
      cur.el = el;
      if (verschoven || !dichtbij(vanaf, maat)) { openAt(); return; }
      cur.frozen = false;
      place();                        /* dichtbij → gewoon overschuiven */
    }

    setTimeout(function () { whenStil(function () { land(5, null); }); }, st.wait || 260);
  }

  function loop() {
    if (!cur) return;
    if (!cur.frozen) {
      /* `follow` = het doel wisselt TIJDENS de stap (de actieve tab schuift op).
         Dan elke frame opnieuw opzoeken, zodat de vlek als een schuifknop
         meebeweegt. */
      var st = cur.steps[cur.i];
      if (st && st.follow && st.target) {
        var f = resolve(st.target);
        if (f && hasTarget(f)) cur.el = f;
      }
      place();
    }
    cur.raf = requestAnimationFrame(loop);
  }

  /* Scroll het doel in beeld. `auto` i.p.v. `smooth`: smooth-scroll bevriest in
     een niet-gefocuste tab (gotcha 3) en de rAF-loop hierboven volgt toch. */
  function bring(el, smooth) {
    if (!el) return;
    try {
      var b = el.getBoundingClientRect();
      var vh = window.innerHeight;
      if (b.top < 80 || b.bottom > vh - 120) {
        /* `auto` is de norm: smooth-scroll ligt stil in een niet-gefocuste tab
           (gotcha 3). Een stap mag er expliciet om vragen — in de shop wíl je
           dat de pagina rustig naar het volgende item zakt (Tijmen 2026-08-05). */
        el.scrollIntoView({ block: 'center', inline: 'nearest',
                            behavior: smooth ? 'smooth' : 'auto' });
      }
    } catch (e) {}
  }

  function show(i) {
    if (!cur) return;
    /* opruimen van de vorige stap — eerst de lopende choreografie stilzetten,
       anders tikt een late actie door over de volgende stap heen */
    stopSeq();
    var prev = cur.steps[cur.i];
    if (prev && typeof prev.after === 'function' && cur.i !== i) { try { prev.after(); } catch (e) {} }

    /* sla stappen zonder (zichtbaar) doel stil over */
    var st = null, el = null;
    while (i < cur.steps.length) {
      st = cur.steps[i];
      if (typeof st.before === 'function') { try { st.before(); } catch (e) {} }
      el = st.target ? resolve(st.target) : null;
      /* Een stap met `wait` wijst iets aan dat er nog NIET is (een paneel dat
         net is opengeklikt en nog uitklapt). Die niet meteen weggooien — arrive()
         zoekt hem zo op en slaat 'm alsnog over als hij wegblijft. */
      if (!st.target || hasTarget(el) || st.wait) break;
      if (typeof st.after === 'function') { try { st.after(); } catch (e) {} }
      i++; st = null; el = null;
    }
    /* Viel ALLES weg voordat er ooit een stap in beeld kwam, dan is de pagina
       kennelijk niet wat we dachten — dan telt de rondleiding niet als gezien. */
    if (!st) { finish(cur.i < 0 ? 'empty' : 'done'); return; }

    var eersteStap = cur.i < 0;
    cur.i = i; cur.el = el;
    cur.scrollAt = window.scrollY;      /* om te zien of de pagina straks verschoof */
    bring(Array.isArray(el) ? el[Math.floor(el.length / 2)] : el, st.smooth);

    var total = cur.steps.length;
    cur.card.querySelector('.vtut-h').textContent = st.title || '';
    cur.card.querySelector('.vtut-p').innerHTML = st.body || '';

    /* Meer dan 8 stappen past niet op één regel in de kaart (de rondleiding
       voor het tentamenscherm heeft er 12) → dan een compacte teller. */
    var dots = '';
    if (total > 8) {
      dots = '<span class="vtut-count">' + (i + 1) + ' / ' + total + '</span>';
    } else {
      for (var d = 0; d < total; d++) {
        dots += '<span class="vtut-d' + (d === i ? ' on' : (d < i ? ' done' : '')) + '"></span>';
      }
    }
    cur.card.querySelector('.vtut-dots').innerHTML = dots;

    var last = i >= total - 1;
    cur.card.querySelector('.vtut-next').textContent = last ? 'Klaar' : 'Volgende';

    cur.root.classList.remove('vtut-in');
    void cur.root.offsetWidth;              /* reflow: hertrigger de pop-animatie */
    cur.root.classList.add('vtut-in');
    /* De ALLEREERSTE stap zet de vlek meteen neer (er is nog niets om vandaan te
       glijden); elke volgende wacht tot het doel stil ligt en glijdt er dan heen. */
    arrive(st, eersteStap);
    /* Sommige doelen bestaan pas NA de handeling: de quests-flyout wordt door
       een klik aangemaakt, een paneel schuift met een animatie in beeld. Na de
       wachttijd het doel opnieuw bepalen — anders blijft de lichtvlek op de
       knop liggen die het paneel opende. */


    /* De pagina laten reageren. Bewust ná de kaart: eerst zie je wát er wordt
       aangewezen, dán gebeurt het. De rAF-loop laat de lichtvlek meelopen als
       de klik de lay-out verandert. */
    if (typeof st.act === 'function') {
      var mine = cur.i;
      setTimeout(function () {
        if (cur && cur.i === mine) { try { st.act(cur.el); } catch (e) {} }
      }, st.actDelay || 480);
    }
  }

  function next() {
    if (!cur) return;
    if (cur.i >= cur.steps.length - 1) { finish('done'); return; }
    show(cur.i + 1);
  }

  function finish(reason) {
    if (!cur) return;
    var c = cur; cur = null;                /* eerst losknippen: after() mag niets meer herstarten */
    stopSeq();
    try { cancelAnimationFrame(c.raf); } catch (e) {}
    try { clearInterval(c.guard); } catch (e) {}
    /* Onze sporen op de ECHTE pagina weghalen — een achtergebleven .vtut-lifted
       zou een tegel permanent opgetild laten staan. */
    try {
      document.querySelectorAll('.vtut-lifted,.vtut-poked').forEach(function (el) {
        el.classList.remove('vtut-lifted', 'vtut-poked');
        unsqueeze(el);
      });
      document.querySelectorAll('.vtut-ripple').forEach(function (el) {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    } catch (e) {}
    var st = c.steps[c.i];
    if (st && typeof st.after === 'function') { try { st.after(); } catch (e) {} }
    if (typeof c.onEnd === 'function') { try { c.onEnd(reason); } catch (e) {} }
    try { document.removeEventListener('keydown', c.onKey, true); } catch (e) {}
    /* de HELE node gaat weg — nooit een onzichtbare laag laten staan */
    try { if (c.root && c.root.parentNode) c.root.parentNode.removeChild(c.root); } catch (e) {}

    /* 'done' = uitgekeken, 'close' = weggeklikt met Escape → allebei gezien.
       'skip' NIET: dat zet alle rondleidingen uit, en wie ze later weer
       aanzet hoort deze gewoon nog te krijgen. 'empty'/'abort' evenmin. */
    if (reason === 'done' || reason === 'close') markSeen(c.id);
    if (reason === 'skip') {
      lsSet(LS_OFF, '1');
      toast('Rondleidingen uit. Terug te zetten in het Helpcentrum.');
    }
    if ((reason === 'done' || reason === 'empty') && typeof c.then === 'function') {
      setTimeout(c.then, reason === 'empty' ? 0 : 380);
    }
    /* Weggegaan voor een modal (meestal de onboarding): zodra die klaar is
       beginnen we alsnog, met DEZELFDE rondleiding. Niet via auto(): die slaat
       een al geziene rondleiding over, dus een handmatig gestarte zou nooit
       terugkomen. De onboarding gaat vóór, de rondleiding komt erna. */
    if (reason === 'blocked' && c.def) {
      whenUnblocked(function (free) {
        if (free && !cur) setTimeout(function () { if (!cur) start(c.def, c.opts || {}); }, 500);
      });
    }
  }

  /* Kleine bevestigingstoast; eigen node, ruimt zichzelf op. */
  function toast(txt) {
    try {
      var t = document.createElement('div');
      t.textContent = txt;
      t.style.cssText = 'position:fixed;left:50%;bottom:calc(22px + env(safe-area-inset-bottom));' +
        'transform:translateX(-50%) translateY(8px);z-index:' + (Z + 5) + ';' +
        'background:rgba(28,28,30,0.94);color:#fff;padding:11px 18px;border-radius:14px;' +
        "font-family:'Nunito',sans-serif;font-size:13.5px;font-weight:700;max-width:calc(100vw - 40px);" +
        'text-align:center;opacity:0;transition:opacity .22s ease,transform .22s ease;pointer-events:none;';
      document.body.appendChild(t);
      /* reflow + setTimeout, geen rAF: rAF bevriest in een achtergrondtab */
      void t.offsetWidth;
      setTimeout(function () { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; }, 10);
      setTimeout(function () {
        t.style.opacity = '0';
        setTimeout(function () { try { t.parentNode.removeChild(t); } catch (e) {} }, 300);
      }, 3400);
    } catch (e) {}
  }

  /* ------------------------------------------------------------------ start */
  function start(def, opts) {
    opts = opts || {};
    if (cur) finish('abort');
    if (!def || !def.steps || !def.steps.length) return false;
    if (!document.body) return false;
    injectCss();

    var root = buildDom();
    cur = {
      id: def.id, steps: def.steps, i: -1,
      root: root,
      hole: root.querySelector('.vtut-hole'),
      ring: root.querySelector('.vtut-ring'),
      card: root.querySelector('.vtut-card'),
      then: opts.then, onEnd: opts.onEnd, raf: 0, guard: 0, el: null,
      def: def, opts: opts          /* om deze rondleiding te kunnen hervatten */
    };
    /* Wijken voor een modal die tíjdens de rondleiding opduikt. Bewust een timer
       en niet de rAF-loop: rAF ligt stil in een achtergrondtab, en dan zou de
       rondleiding daar over de onboarding heen blijven liggen. */
    cur.guard = setInterval(function () {
      if (cur && blocked()) finish('blocked');
    }, 400);
    if (isReduced()) cur.ring.classList.remove('vtut-pulse');

    root.querySelector('.vtut-next').addEventListener('click', function (e) { e.stopPropagation(); next(); });
    root.querySelector('.vtut-x').addEventListener('click', function (e) { e.stopPropagation(); finish('close'); });
    root.querySelector('.vtut-catch').addEventListener('click', function () { next(); });

    cur.onKey = function (e) {
      if (!cur) return;
      /* Escape sluit alléén deze rondleiding — alles uitzetten doe je met de knop. */
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish('close'); }
      else if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); }
    };
    document.addEventListener('keydown', cur.onKey, true);

    show(0);
    /* Viel elke stap weg, dan heeft show() al finish() gedraaid en is cur weg —
       niet alsnog een rAF-loop aanhangen (dat gooide een TypeError). */
    if (!cur) return false;
    cur.raf = requestAnimationFrame(loop);
    return true;
  }

  /* ------------------------------------------------------------ staat / api */
  function isOff()      { return lsGet(LS_OFF) === '1'; }
  function seen(id)     { return lsGet(LS_SEEN + id) === '1'; }
  function markSeen(id) { lsSet(LS_SEEN + id, '1'); }

  /* ------------------------------------------------------------ definities */
  /* Elke stap: {target, title, body, pad, before, after, wait}.
     `target` mag ontbreken → gecentreerde kaart met dim over het hele scherm. */
  var TOURS = {};
  function def(id, o) { o.id = id; TOURS[id] = o; return o; }

  /* --- de balk bovenin (hartjes/reeks/munten/gems/XP) -------------------- */
  /* --- dashboard --------------------------------------------------------- */
  /* De tabs schakelen ECHT: je ziet Opgeslagen en Foutenreview openklappen en
     daarna keert hij netjes terug naar Pad. */
  function dashBtn(name) { return document.querySelector('.hero-tabs .tab[data-tab="' + name + '"]'); }
  function dashTab(name)   { var b = dashBtn(name); if (b) tap(b); }
  function dashHover(name) { var b = dashBtn(name); if (b) lift(b, 620); }

  /* De navigatieknoppen oplichten met de class die de pagina ZELF gebruikt als
     een item geselecteerd is (`.ms-nav-item.active` → lichtblauw met rand), niet
     met onze eigen highlight — dan ziet het eruit alsof je er echt doorheen
     klikt (Tijmen 2026-08-05). De echte selectie onthouden en na afloop exact
     terugzetten. */
  var navWas = null;
  function navItems() {
    var n = document.querySelectorAll('.main-sidebar .ms-nav-item, .ms-tabbar .ms-tab');
    var list = [];
    for (var i = 0; i < n.length && list.length < 6; i++) { if (visible(n[i])) list.push(n[i]); }
    return list;
  }
  function navSweep() {
    var items = navItems();
    if (!items.length) return;
    navWas = items.filter(function (e) { return e.classList.contains('active'); });
    items.forEach(function (e) { e.style.transition = 'background .26s ease, border-color .26s ease'; });
    seq(items.map(function (el) {
      return [function () {
        items.forEach(function (e) { e.classList.remove('active'); });
        el.classList.add('active');
      }, 420];
    }).concat([[function () { navRestore(); }, 0]]));
  }
  function navRestore() {
    if (!navWas) return;
    navItems().forEach(function (e) { e.classList.remove('active'); e.style.transition = ''; });
    navWas.forEach(function (e) { e.classList.add('active'); });
    navWas = null;
  }

  def('dashboard', {
    ready: '.yr-pill',
    title: 'Je dashboard',
    page: 'dashboard.html',
    steps: [
      { title: 'Welkom bij VUmed' },

      /* ÉÉN stap voor de hele balk (Tijmen 2026-08-05: "niet hartjes en dan
         dingetjes en dan datjes — gewoon die balk highlighten"). Uitgelogd
         bestaat de balk niet en valt deze stap stil weg. */
      { target: '#vumed-stats',
        title: 'Je statistieken',
        body: 'Hartjes, dagenreeks, munten, gems en XP.',
        act: function (el) {
          lift(el, 1400);
          var d = el.querySelectorAll('.vs-hearts, .vs-streak, .vs-coins, .vs-gems, .vs-xp');
          if (d.length) seq([].map.call(d, function (x) { return [function () { poke(x); }, 240]; }));
        } },

      /* De hele jaarbalk, en er één voor één langs (Tijmen 2026-08-05).
         ⚠️ NIET aanklikken: een jaarwissel schrijft de keuze naar de database
         (`setYear` → `pushStudyYear`). Aanwijzen mag, veranderen niet — dezelfde
         regel als bij antwoordknoppen en Inleveren. */
      { target: '.yr-nav, .yr-pill',
        title: 'Selecteer je jaar',
        body: 'Alles hieronder volgt je keuze.',
        actDelay: 700,
        act: function (el) {
          var p = el.querySelectorAll ? el.querySelectorAll('.yr-pill') : [];
          if (!p.length) { lift(el, 900); return; }
          seq([].map.call(p, function (x) { return [function () { lift(x, 780); }, 620]; }));
        } },

      /* ⚠️ ALLEEN de huidige tegel uitlichten. Drie tegels samen leverde een hoge
         witte kolom op met de lege ruimte ertussen erin — Tijmen stuurde er een
         schermafbeelding van (2026-08-05): "moet alleen de tile goed belicht
         worden". `round` maakt het gat rond, want de tegel is een cirkel. */
      { target: function () {
          var n = document.querySelectorAll('.pnode');
          for (var i = 0; i < n.length; i++) { if (visible(n[i])) return n[i]; }
          var fb = document.querySelector('.psubject-head');
          return (fb && visible(fb)) ? fb : null;
        },
        round: true,
        pad: 10,
        title: 'Je leerpad',
        body: 'Per vak een pad van missies.',
        actDelay: 950,          /* pas optillen NA het landen, anders hobbelt hij */
        act: function (el) { lift(el, 900); setTimeout(function () { poke(el); }, 260); } },

      /* De vlek ligt op de ACTIEVE tab en schuift mee als een schuifknop:
         `follow` laat hem het doel elke frame opnieuw opzoeken (Tijmen
         2026-08-05: "echt als een toggle button"). */
      { target: '.hero-tabs .tab.active',
        follow: true,
        title: 'Pad, Opgeslagen, Fouten',
        body: 'Je bewaarde vragen en je fouten, apart te oefenen.',
        /* Eerst even op Pad blijven staan zodat je ziet wáár je bent; pas daarna
           doorschakelen (Tijmen 2026-08-05: "hij gaat nu heel snel door"). */
        actDelay: 1400,
        act: function () {
          seq([
            [function () { dashHover('opgeslagen'); }, 520],
            [function () { dashTab('opgeslagen'); },  2200],
            [function () { dashHover('fouten'); },     520],
            [function () { dashTab('fouten'); },      2200],
            [function () { dashHover('pad'); },        520],
            [function () { dashTab('pad'); },          300]
          ]);
        },
        after: function () { dashTab('pad'); } },

      /* Eerst het bliksemknopje zelf, dat opent zichzelf; de volgende stap pakt
         het paneel dat er dan staat. */
      /* ⚠️ Deze stap NIET het paneel laten openen: de flyout schuift over het
         bliksemknopje heen, dus je las "Je opdrachten" terwijl het aangewezen
         knopje al onder het paneel lag — je zag alleen een wit sliertje aan de
         rand (Tijmen 2026-08-05, met screenshot). Eerst het knopje laten zien,
         pas bij de VOLGENDE stap openen. */
      { target: '.quest-tab',
        title: 'Je opdrachten',
        body: 'Dagdoel, dagelijkse kist en je taken.',
        actDelay: 560,
        act: function (el) { lift(el, 900); setTimeout(function () { poke(el); }, 280); } },

      { target: '.quest-panel',
        before: function () {
          if (document.querySelector('.quest-panel')) return;
          var t = document.querySelector('.quest-tab');
          if (t) { poke(t); t.click(); }
        },
        wait: 760,
        title: 'Elke dag nieuw',
        body: 'Haal je dagdoel en open je kist.',
        after: function () {
          var c = document.querySelector('.quest-panel .qp-close');
          if (c) c.click();
        } },

      /* De hele balk uitlichten, en de knoppen oplichten met de EIGEN
         selectie-stijl van de pagina i.p.v. onze eigen highlight. */
      { target: function () {
          var s = ['.main-sidebar', '#ms-tabbar', '.ms-tabbar'];
          for (var i = 0; i < s.length; i++) {
            var el = document.querySelector(s[i]);
            if (el && visible(el)) return el;
          }
          return null;
        },
        title: 'Navigatie',
        body: 'Hiermee kom je overal in de app.',
        act: function () { navSweep(); },
        after: function () { navRestore(); } }
    ]
  });

  /* --- tentamenoverzicht (vumed.html) ------------------------------------ */
  /* De pills openen hun paneel echt — dat is precies wat je wilt zien. */
  /* De pill-rij van de EERSTE zichtbare vakkaart (vumed.html houdt alle drie de
     jaren in de DOM). De actieve pill krijgt class `on` — niet `active`. */
  /* De uitleg van boven naar beneden langs de onderwerpen laten lopen. Gaat via
     het haakje `window.__vumedInsHover` dat InsightsPanel publiceert zolang het
     paneel open staat: ⚠️ nagebootste mouseover-events doen in React 18 NIETS
     (onMouseEnter wordt uit echte muisbewegingen afgeleid — gemeten, niet
     gegokt), dus die route bestaat niet. Zo licht ook het donutsegment mee op. */
  function insHover(i) {
    try { if (typeof window.__vumedInsHover === 'function') window.__vumedInsHover(i); } catch (e) {}
  }

  function vRow() {
    var rows = document.querySelectorAll('.subj-pills');
    for (var i = 0; i < rows.length; i++) { if (visible(rows[i])) return rows[i]; }
    return null;
  }
  function vPill(label) {
    var row = vRow(); if (!row) return null;
    var btns = row.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].textContent.toLowerCase().indexOf(label) >= 0) return btns[i];
    }
    return null;
  }
  function vPillOpen() {
    var row = vRow(); if (!row) return null;
    return row.querySelector('button.on');
  }
  function vClosePanels() {
    var p = vPillOpen();
    if (p) p.click();
  }
  /* Het opengeklapte inzicht-paneel. Dat heeft GEEN eigen class (React rendert
     een kale div) — het is het blok tussen de gekleurde kop en de lijst met
     toetsmomenten. Vandaar positioneel zoeken in plaats van op selector. */
  function vPanel() {
    var row = vRow(); if (!row) return null;
    var card = row.closest ? row.closest('.subject-card') : null;
    if (!card) return row;
    var head = card.querySelector('.subj-head');
    var body = card.querySelector('.subj-body');
    var kids = card.children;
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k === head || k === body) continue;
      if (k.getBoundingClientRect().height > 60) return k;
      /* De wrapper zelf meet 0 hoog (React rendert 'm zonder eigen hoogte, de
         inhoud steekt eruit) — dan het grootste blok DAARBINNEN nemen. */
      var inner = k.querySelectorAll('*'), best = null, bestA = 0;
      for (var j = 0; j < inner.length; j++) {
        var r = inner[j].getBoundingClientRect();
        if (r.height > 60 && r.width * r.height > bestA) { bestA = r.width * r.height; best = inner[j]; }
      }
      if (best) return best;
    }
    return (body && body.getBoundingClientRect().height > 60) ? body : row;
  }

  def('tentamens', {
    ready: '.subject-card',
    title: 'Tentamens',
    page: 'vumed.html',
    steps: [
      { title: 'Alle tentamens',
        body: 'Elk toetsmoment, per vak en jaar.' },

      { target: '.yr-tabs',
        title: 'Kies je jaar',
        act: function (el) {
          var t = el.querySelectorAll('.yr-tab');
          seq([].map.call(t, function (x) { return [function () { lift(x, 620); }, 190]; }));
        } },

      { target: '.subj-head',
        title: 'Klap een vak open',
        body: '',
        actDelay: 420,
        act: function (el) { lift(el, 700); setTimeout(function () { poke(el); }, 300); } },

      { target: '.subj-pills',
        title: 'Inzicht',
        body: 'Zie meteen hoe je ervoor staat.',
        actDelay: 500,
        /* het paneel blijft hierna OPEN staan — de volgende stap gaat erover */
        act: function () { var p = vPill('inzicht'); if (p) tap(p); } },

      /* Van boven naar beneden langs de onderwerpen "hoveren": elke rij stuurt
         React's onHover aan, dus de donut licht het bijbehorende segment op —
         één doorlopende lijn (Tijmen 2026-08-05). Echte muis-events, want een
         CSS-:hover valt niet te forceren. */
      { target: vPanel,
        title: 'Je verdeling per onderwerp',
        body: 'Tik een onderwerp om het apart te oefenen.',
        wait: 460,
        actDelay: 620,
        act: function () {
          var n = document.querySelectorAll('.ins-legend .ins-row').length;
          if (!n || typeof window.__vumedInsHover !== 'function') return;
          var stappen = [];
          for (var i = 0; i < n; i++) {
            stappen.push([(function (k) { return function () { insHover(k); }; })(i), 340]);
          }
          stappen.push([function () { insHover(-1); }, 0]);
          seq(stappen);
        },
        after: function () { insHover(-1); vClosePanels(); } },

      { target: '.subj-pills',
        title: 'Opgeslagen en Fouten',
        body: 'Direct naar je bewaarde vragen of je fouten.',
        actDelay: 460,
        act: function () {
          seq([
            [function () { var p = vPill('opgeslagen'); if (p) tap(p); }, 1500],
            [function () { var p = vPill('fout'); if (p) tap(p); }, 1500],
            [vClosePanels, 200]
          ]);
        } },

      { target: '.year-btn',
        title: 'En dan beginnen',
        body: 'Je voortgang blijft staan als je stopt.',
        act: function (el) { lift(el, 1000); poke(el); } }
    ]
  });

  /* --- het tentamenscherm zelf (de belangrijkste) ------------------------ */
  /* Hier BEDIENT de rondleiding de echte functies: de begrippenbank gaat open,
     de AI-chat klapt uit met een voorbeeldgesprek, tekst wordt echt
     geselecteerd. Wat bewust NIET gebeurt: een antwoord kiezen (kost een
     hartje), een bladwijzer zetten (schrijft een rij weg) of inleveren. */
  function firstTerm() {
    var t = document.querySelectorAll('.gterm');
    for (var i = 0; i < t.length; i++) { if (visible(t[i])) return t[i]; }
    return null;
  }
  function openGloss() {
    try {
      var t = firstTerm();
      if (t && typeof window.openGlossary === 'function') window.openGlossary(t.dataset.term);
    } catch (e) {}
  }
  function closeGloss() {
    try {
      var p = document.getElementById('g-panel');
      if (p) p.classList.remove('open');
      document.body.classList.remove('g-open');
    } catch (e) {}
  }
  function showDots(on) {
    try {
      var w = document.querySelector('.streak-bar-wrap');
      if (w) w.classList[on ? 'add' : 'remove']('pd-split');
    } catch (e) {}
  }
  /* Chat openen ZONDER AI-verzoek (autoSend=false) en er zelf een kort
     voorbeeldgesprek in zetten, inclusief de wachtstippen. Wordt bij het
     verlaten van de stap weer helemaal opgeruimd. */
  function demoChat() {
    try {
      if (typeof window.openChatForQuestion !== 'function') return;
      var q = document.querySelector('.q-num-ai'), n = 1;
      if (q && q.getAttribute('onclick')) {
        var m = q.getAttribute('onclick').match(/\((\d+)/);
        if (m) n = parseInt(m[1], 10);
      }
      window.openChatForQuestion(n, false);
      if (typeof window._appendMsg !== 'function') return;
      seq([
        [function () { window._appendMsg('user', 'Waarom is dit het goede antwoord?'); }, 600],
        [function () { window._appendMsg('ai typing', 'aan het typen…'); }, 1100],
        [function () {
          var box = document.getElementById('chat-messages');
          var t = box && box.querySelector('.chat-msg.typing');
          if (t && t.parentNode) t.parentNode.removeChild(t);
          window._appendMsg('ai', 'Voorbeeld: hier legt de AI stap voor stap uit waarom dit antwoord klopt — en waarom de andere opties afvallen.');
        }, 100]
      ]);
    } catch (e) {}
  }
  function closeChatDemo() {
    try {
      var box = document.getElementById('chat-messages');
      if (box) box.innerHTML = '';
      if (typeof window.closeChat === 'function') window.closeChat();
    } catch (e) {}
  }
  /* Echte tekstselectie: toont de blauwe markering én laat de "Vraag de AI"-
     popup verschijnen. Het mouseup-event MOET op een element gedispatcht
     worden, niet op document — de handler doet e.target.closest(). */
  function demoSelect() {
    try {
      var host = document.querySelector('.q-context, .q-text, .q-question');
      if (!host) return;
      var walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT), node = null;
      while (walker.nextNode()) {
        if (walker.currentNode.nodeValue.trim().length > 40) { node = walker.currentNode; break; }
      }
      if (!node) return;
      var start = node.nodeValue.indexOf(' ') + 1;
      var r = document.createRange();
      r.setStart(node, start);
      r.setEnd(node, Math.min(node.nodeValue.length, start + 46));
      var sel = window.getSelection();
      sel.removeAllRanges(); sel.addRange(r);
      host.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
    } catch (e) {}
  }
  function clearSelect() {
    try {
      window.getSelection().removeAllRanges();
      if (typeof window.hideSelPopup === 'function') window.hideSelPopup();
    } catch (e) {}
  }
  /* De meldmodus zit in progressdots (interne `repMode`-vlag). Alleen de class
     weghalen zou hem half aan laten staan — de knop toggelt hem echt uit. */
  function reportOff() {
    try {
      if (!document.documentElement.classList.contains('pd-rep')) return;
      var b = document.querySelector('.pd-report-btn');
      if (b) b.click(); else document.documentElement.classList.remove('pd-rep');
    } catch (e) {}
  }

  def('exam', {
    /* Elk tentamen ziet er anders uit: meerkeuze, open vragen, sleepvragen,
       missies. De startvoorwaarde accepteert daarom élke vraagvorm, anders start
       de rondleiding op zo'n tentamen helemaal niet (Tijmen 2026-08-05: "voor elk
       examen dat je kunt openen moet die tutorial werken"). Stappen waarvan het
       doel ontbreekt vallen vanzelf stil weg. */
    ready: '.q-block, .opt-btn, .open-answer, textarea, .dd-select, .dnd-item, #mission-slot',
    title: 'Een tentamen maken',
    page: 'Tentamen- en missiepagina',
    steps: [
      { title: 'Zo werkt een tentamen',
        body: 'Even laten zien wat erin zit.' },

      /* Wijs aan wat DIT tentamen gebruikt: meerkeuzeknoppen, anders het
         antwoordveld, een keuzelijst of een sleepvraag, en pas als laatste het
         hele vraagblok. */
      { target: function () {
          var b = document.querySelectorAll('.opt-btn');
          for (var i = 0; i < b.length; i++) { if (visible(b[i])) return b[i].parentNode || b[i]; }
          var rest = ['.open-answer', 'textarea', '.dd-select', '.cat-row', '.dnd-item'];
          for (var r = 0; r < rest.length; r++) {
            var e = document.querySelectorAll(rest[r]);
            for (var j = 0; j < e.length; j++) { if (visible(e[j])) return e[j]; }
          }
          var q = document.querySelectorAll('.q-block');
          for (var k = 0; k < q.length; k++) { if (visible(q[k])) return q[k]; }
          return null;
        },
        title: 'Kies je antwoord',
        body: 'Meteen goed of fout. Fout kost een hartje.',
        act: function (el) {
          var o = el.querySelectorAll ? el.querySelectorAll('.opt-btn') : [];
          if (!o.length) { lift(el, 900); return; }
          seq([].map.call(o, function (b) { return [function () { lift(b, 560); }, 190]; }));
        } },

      /* Speelt de ECHTE openingsanimatie van de balk opnieuw af (stippen poppen
         op, groene golf, smelten samen) — dezelfde die je bij het openen van een
         tentamen ziet (Tijmen 2026-08-05). Valt terug op het simpelweg uit
         elkaar zetten van de stippen als die functie er niet is. */
      { target: '.streak-bar-wrap',
        pad: 6,
        wait: 320,
        title: 'De progressiebar',
        body: 'Elke stip is een vraag. Tik erop om te springen.',
        actDelay: 360,
        act: function () {
          if (typeof window.pdPlayBarIntro === 'function') window.pdPlayBarIntro();
          else showDots(true);
        },
        after: function () { showDots(false); } },

      { target: firstTerm,
        pad: 4,
        title: 'Onderstreepte woorden',
        body: 'Dat zijn begrippen. Tik erop voor uitleg.',
        act: poke },

      { target: '#g-panel',
        before: openGloss,
        after: closeGloss,
        /* Het paneel schuift van rechts in; met een te korte wachttijd meet je
           z'n STARTpositie buiten beeld en landt de vlek op een sliver aan de
           schermrand (gemeten 2026-08-05). */
        wait: 760,
        actDelay: 900,
        title: 'De begrippenbank',
        body: 'Definitie en beeld, zonder het tentamen te verlaten.',
        act: function (el) { lift(el, 900); } },

      { target: '.q-num-ai',
        pad: 6,
        title: 'Vraag het de AI',
        body: 'Uitleg op maat bij deze vraag.',
        actDelay: 360,
        act: function (el) { poke(el); setTimeout(demoChat, 240); },
        after: closeChatDemo },

      { target: '#chat-panel',
        before: function () { if (!document.querySelector('#chat-panel.open')) demoChat(); },
        after: closeChatDemo,
        wait: 400,
        title: 'En hij legt het uit',
        body: 'Vraag door zo veel je wilt. Een foto meesturen kan ook.' },

      { target: '.q-context, .q-text, .q-question',
        pad: 46,
        before: demoSelect,
        after: clearSelect,
        wait: 260,
        title: 'Of selecteer wat je niet snapt',
        body: 'Sleep over een zin en vraag er direct naar.' },

      { target: '.pd-bm',
        pad: 6,
        title: 'Bewaar een vraag',
        body: 'Komt op je dashboard onder Opgeslagen.',
        act: poke },

      { target: '.pd-report-btn',
        pad: 6,
        title: 'Klopt er iets niet?',
        body: 'Meld de vraag — wij kijken ernaar.',
        actDelay: 360,
        act: tap,
        after: reportOff },

      { target: '.vs-hearts',
        pad: 6,
        title: 'Je hartjes',
        body: 'Op nul kun je niet verder.',
        act: poke },

      { target: '.submit-btn, #end-submit-btn',
        title: 'Inleveren',
        body: 'Je uitslag met een analyse per onderwerp.',
        act: function (el) { lift(el, 1000); poke(el); } }
    ]
  });

  /* --- klassement --------------------------------------------------------- */
  def('klassement', {
    ready: '#podium',
    title: 'Klassement',
    page: 'voortgang.html',
    steps: [
      { target: '#podium',
        title: 'Elke week opnieuw',
        body: 'Je positie loopt op de XP van deze week.',
        act: function (el) {
          var p = el.querySelectorAll('.pod, .pod-name, [class*="pod"]');
          var list = [];
          for (var i = 0; i < p.length && list.length < 3; i++) { if (visible(p[i])) list.push(p[i]); }
          if (!list.length) { lift(el, 1000); return; }
          seq(list.map(function (x) { return [function () { lift(x, 700); poke(x); }, 240]; }));
        } },
      { target: '#tileRank, #tileWeekXP, #tileLevel',
        title: 'Waar sta jij',
        act: function () {
          var t = ['#tileRank', '#tileWeekXP', '#tileLevel'].map(function (q) { return document.querySelector(q); });
          seq(t.filter(Boolean).map(function (x) { return [function () { lift(x, 720); }, 220]; }));
        } },
      { target: '#lbList',
        title: 'Bekijk elkaars profiel',
        body: 'Tik op een naam voor badges en statistieken.',
        act: function (el) {
          var r = el.querySelectorAll('.lb-row, li, div');
          for (var i = 0; i < r.length; i++) { if (visible(r[i]) && r[i].offsetHeight > 30) { lift(r[i], 900); poke(r[i]); return; } }
          lift(el, 900);
        } }
    ]
  });

  /* --- profiel ------------------------------------------------------------ */
  def('profiel', {
    ready: '#hero-avatar',
    title: 'Je profiel',
    page: 'profile.html',
    steps: [
      { target: '#hero-avatar',
        title: 'Je avatar',
        body: 'Tik erom te bewerken.',
        act: function (el) { lift(el, 1000); poke(el); } },
      /* De hele kalenderkaart, niet alleen het rasterfragment: `#heat-grid` is op
         desktop maar een strook van het geheel (Tijmen 2026-08-05). */
      { target: '.heat-card, #heat-grid',
        smooth: true,
        title: 'Je activiteit',
        body: 'Hoe donkerder, hoe meer vragen die dag.',
        act: function (el) { lift(el, 1100); } },
      { target: '#badge-grid, #achievements',
        title: 'Prestaties',
        body: 'Tik op een badge voor wat je ervoor moet doen.',
        act: function (el) {
          var b = el.querySelectorAll('.badge-card, .badge');
          var list = [];
          for (var i = 0; i < b.length && list.length < 4; i++) { if (visible(b[i])) list.push(b[i]); }
          if (!list.length) { lift(el, 900); return; }
          seq(list.map(function (x) { return [function () { lift(x, 620); poke(x); }, 200]; }));
        } },
      /* De hele kaart met de tabs Vrienden/Meldingen en de uitleg eronder — niet
         alleen het getal in de hero (Tijmen 2026-08-05). */
      /* ⚠️ `.add-friends-card` EERST: dat is de kaart rechts met "Vrienden
         toevoegen / zoeken / uitnodigen" die Tijmen aanwijst — niet het cijfer
         in de hero en niet de tabbenkaart links (2026-08-05). */
      { target: eersteVan('.add-friends-card', '.social-tabs-card', '#friends-count'),
        smooth: true,
        title: 'Vrienden',
        body: 'Zoek klasgenoten en zie je meldingen.',
        act: function (el) {
          lift(el, 1000);
          var t = el.querySelectorAll ? el.querySelectorAll('.social-tab') : [];
          if (t.length) seq([].map.call(t, function (b) { return [function () { lift(b, 620); }, 260]; }));
        } }
    ]
  });

  /* --- shop --------------------------------------------------------------- */
  /* De kaarten in een shop-rij één voor één laten opveren. */
  function shopSweep(el) {
    if (!el) return;
    var it = el.querySelectorAll('.item');
    var list = [];
    for (var i = 0; i < it.length && list.length < 3; i++) { if (visible(it[i])) list.push(it[i]); }
    if (!list.length) list = [el];
    seq(list.map(function (x) { return [function () { lift(x, 760); }, 240]; }));
  }

  def('shop', {
    ready: '#shop-row',
    title: 'De shop',
    page: 'shop.html',
    /* Rustig naar beneden zakken: elke stap scrolt smooth naar het volgende blok
       en licht dat pas dán uit (Tijmen 2026-08-05). `wait` geeft de scroll de
       tijd voordat de lichtvlek landt. */
    steps: [
      { target: '#shop-row',
        title: 'Hartjes bijkopen',
        body: 'Met gems, als je door wilt.',
        smooth: true, wait: 900, actDelay: 1000,
        act: function (el) { shopSweep(el); } },

      { target: '#freeze-row',
        title: 'Bescherm je reeks',
        body: 'Een bevriezer vangt een gemiste dag op. De amulet dekt het weekend.',
        smooth: true, wait: 900, actDelay: 1000,
        act: function (el) { shopSweep(el); } },

      /* ⚠️ NIET het hele `#avatar-cats` uitlichten: dat is de complete lijst met
         alle categorieën onder elkaar, dus de lichtvlek werd een groot vaag blok
         (Tijmen 2026-08-05: "vooral bij het Avatar-gedeelte"). Twee gerichte
         stappen: eerst de categoriekop, dan de rij kaarten eronder. */
      { target: function () {
          var h = document.querySelectorAll('#avatar-cats .cat-head');
          for (var i = 0; i < h.length; i++) { if (visible(h[i])) return h[i]; }
          return null;
        },
        title: 'Per categorie',
        body: 'Haar, kleding, brillen en meer.',
        smooth: true, wait: 900, actDelay: 900,
        act: function (el) {
          var c = el.querySelector('.cat-chip');
          if (c) { lift(c, 800); setTimeout(function () { poke(c); }, 260); }
        } },

      { target: function () {
          var r = document.querySelectorAll('#avatar-cats .av-row');
          for (var i = 0; i < r.length; i++) { if (visible(r[i])) return r[i]; }
          return null;
        },
        title: 'Je avatar aankleden',
        body: 'Alles eerst passen, pas dan kopen.',
        smooth: true, wait: 900, actDelay: 900,
        act: function (el) { shopSweep(el); } }
    ]
  });

  /* ⚠️ NIET `#classTrack`/`#classNodes` uitlichten: dat is de complete slinger van
     60 klassen, honderden pixels hoog, dus de lichtvlek werd een vormeloos blok
     en de "golf" over de nodes was nergens te zien (Tijmen 2026-08-05: "dit werkt
     helemaal niet, verzin iets anders"). Nu wijzen we per stap één concreet ding
     aan — de rangbanner, JOUW klas, een beloning, een promotiepoort — en laten we
     de pagina er smooth naartoe scrollen, net als in de shop. De badges zijn
     cirkels, dus `round`. */
  /* Selectors één voor één proberen en de eerste ZICHTBARE treffer pakken.
     ⚠️ NIET als komma-lijst in één querySelectorAll: die geeft DOM-volgorde
     terug, dus `.cl-node.current` (de rij over de volle breedte) won het van
     `.cl-node.current .cl-badge` (de cirkel erin) — de lichtvlek werd 1086px
     breed i.p.v. 60. Zelfde valkuil bij de vriendenkaart op het profiel. */
  function eersteVan() {
    var sels = [].slice.call(arguments);
    return function () {
      for (var s = 0; s < sels.length; s++) {
        var n = document.querySelectorAll(sels[s]);
        for (var i = 0; i < n.length; i++) { if (visible(n[i])) return n[i]; }
      }
      return null;
    };
  }

  def('trofeeen', {
    ready: '#classNodes',
    title: 'Trofeeënpad',
    page: 'trofeeenpad.html',
    steps: [
      { target: '#tierBanner',
        title: 'Je rang',
        body: 'Van student tot hoogleraar.',
        act: function (el) { lift(el, 1100); } },

      { target: eersteVan('.cl-node.current .cl-badge', '.cl-node.current'),
        round: true, pad: 12, smooth: true, wait: 900,
        title: 'Hier sta je nu',
        body: 'Elke 1000 XP een klas erbij.',
        actDelay: 900,
        act: function (el) { lift(el, 1000); setTimeout(function () { poke(el); }, 300); } },

      /* Een op te halen kist als die er is; anders gewoon de eerstvolgende
         mijlpaal-badge, zodat de stap nooit leeg valt. */
      { target: eersteVan('.cl-badge.claimable', '.cl-badge.mil'),
        round: true, pad: 12, smooth: true, wait: 900,
        /* ⚠️ Elke klas opent een KIST (`VumedGift.open` in trofeeenpad.html), niet
           alleen elke tiende — de mijlpalen zijn enkel groter. */
        title: 'Beloningen',
        body: 'Bij elke klas open je een kist.',
        actDelay: 900,
        act: function (el) { lift(el, 1000); setTimeout(function () { poke(el); }, 300); } },

      { target: eersteVan('.cl-gate'),
        pad: 10, smooth: true, wait: 900,
        title: 'Promotie',
        body: 'Elke tien klassen een nieuwe rang.',
        actDelay: 900,
        act: function (el) { lift(el, 1100); } },

      { target: '#classBackBtn',
        pad: 8, smooth: true, wait: 700,
        title: 'Kwijt geraakt?',
        body: 'Hiermee spring je terug naar je eigen klas.',
        actDelay: 700,
        act: poke }
    ]
  });

  /* ---------------------------------------------------- welke pagina is dit */
  function pageKey() {
    var p = '';
    try { p = (location.pathname.split('/').pop() || '').toLowerCase(); } catch (e) {}
    if (document.querySelector('.exam-main') || document.getElementById('mission-slot')) return 'exam';
    if (p.indexOf('dashboard') === 0) return 'dashboard';
    if (p.indexOf('vumed.html') === 0) return 'tentamens';
    if (p.indexOf('voortgang') === 0) return 'klassement';
    if (p.indexOf('profile') === 0) return 'profiel';
    if (p.indexOf('shop') === 0) return 'shop';
    if (p.indexOf('trofee') === 0) return 'trofeeen';
    return '';
  }

  /* Per pagina: eerst de balk (één keer in je leven), dan het scherm zelf. */
  var PAGE_QUEUE = {
    dashboard:  ['dashboard'],
    tentamens:  ['tentamens'],
    klassement: ['klassement'],
    profiel:    ['profiel'],
    shop:       ['shop'],
    trofeeen:   ['trofeeen'],
    exam:       ['exam']
  };

  /* Wacht tot de pagina z'n eigen UI heeft gemount. De wallet-balk, het
     missiepad en de glossary-termen worden ALLEMAAL na de eerste paint
     opgebouwd — zonder deze poll begint de rondleiding op een halflege pagina
     en verdwijnen de stappen stil in de skip-tak hierboven. */
  function whenReady(sel, cb, timeoutMs) {
    if (!sel) { cb(true); return; }
    var t0 = Date.now(), max = timeoutMs || 6000;
    (function tick() {
      var ok = false;
      try { ok = !!document.querySelector(sel); } catch (e) { ok = true; }
      if (ok) return cb(true);
      if (Date.now() - t0 > max) return cb(false);
      setTimeout(tick, 160);
    })();
  }

  /* Draai de eerste ongeziene rondleiding; ketent door naar de volgende.
     Komt de pagina niet op tijd op gang, dan slaan we die rondleiding over
     ZONDER hem als gezien te markeren — hij komt gewoon een volgende keer. */
  function runQueue(ids) {
    if (!ids || !ids.length) return false;
    var id = ids[0], rest = ids.slice(1);
    if (seen(id) || !TOURS[id]) return runQueue(rest);
    whenReady(TOURS[id].ready, function (ok) {
      if (!ok) { runQueue(rest); return; }
      if (!start(TOURS[id], { then: function () { runQueue(rest); } })) runQueue(rest);
    });
    return true;
  }

  /* Een openstaande blokkade: inlogpoort, onboarding, splash. De rondleiding
     ligt op z-index 1000500 en de inlogpoort op 1000, dus zou hij er dwars
     overheen lopen — en omdat .vtut-catch élke klik opvangt kun je dan niet eens
     meer inloggen (Tijmen 2026-08-05: "ik kan nu niet inloggen en de rondleiding
     doen"). We starten daarom niet, maar wachten tot de blokkade weg is. */
  /* `.modal-back` = de backdrop van élke modal (onboarding jaar + dagdoel, reset,
     bevestigingen). Bewust breed: staat er een modal open, dan is dát het gesprek
     en wacht de rondleiding. ⚠️ `.goal-modal.open` stond hier eerst — die class
     BESTAAT NIET; de dagdoel-picker is `div.modal-back > .modal.goal-modal`, dus
     de rondleiding liep er dwars overheen (Tijmen 2026-08-05). */
  var BLOCKERS = '#auth-gate, #snr-gate, .modal-back, .lbc-overlay.open, #vumed-splash';
  /* Op zichtbaarheid toetsen, niet op aanwezigheid: sommige pagina's houden een
     lege overlay in de DOM. */
  function blocked() {
    try {
      var list = document.querySelectorAll(BLOCKERS);
      for (var i = 0; i < list.length; i++) { if (visible(list[i])) return true; }
    } catch (e) {}
    return false;
  }
  /* Inloggen mag lang duren (wachtwoordmanager, e-mail erbij pakken), vandaar de
     ruime limiet. auth_gate herlaadt de pagina na een geslaagde login, dus in de
     praktijk pikt de nieuwe pageload het meestal al op — dit dekt de rest. */
  function whenUnblocked(cb, timeoutMs) {
    if (!blocked()) { cb(true); return; }
    var t0 = Date.now(), max = timeoutMs || 300000;
    (function tick() {
      if (!blocked()) return cb(true);
      if (Date.now() - t0 > max) return cb(false);
      setTimeout(tick, 300);
    })();
  }

  function auto() {
    if (isOff()) return false;
    if (cur) return false;
    var k = pageKey();
    if (!k) return false;
    if (document.documentElement.classList.contains('pop-mode')) return false;
    var q = PAGE_QUEUE[k] || [];
    if (!q.length) return false;
    whenUnblocked(function (free) { if (free && !cur) runQueue(q); });
    return true;
  }

  /* --------------------------------------------------------------- exports */
  /* Handmatig starten (helpcentrum, instellingen, ?tutorial=…) wacht óók op de
     UI van de pagina — anders begint de rondleiding op een halfgevulde pagina
     en wordt de helft van de stappen weggeskipt. */
  function launch(id, opts) {
    var t = TOURS[id];
    if (!t) return false;
    /* Wachten tot je binnen bent, en zeggen dat we wachten — anders lijkt de
       Start-knop kapot terwijl de inlogpoort gewoon nog open staat. */
    if (blocked()) {
      toast(document.querySelector('#auth-gate')
              ? 'Log eerst in — de rondleiding start daarna vanzelf.'
              : 'De rondleiding start zodra dit scherm klaar is.');
    }
    whenUnblocked(function (free) {
      if (!free) return;
      startWhenReady(t, opts);
    });
    return true;
  }

  function startWhenReady(t, opts) {
    whenReady(t.ready, function (ok) {
      /* Stilte is hier de ergste uitkomst: klikte je op "De balk bovenin"
         terwijl je uitgelogd bent, dan bestaat die balk niet (dashboard.html
         zet `html.vumed-guest #vumed-stats{display:none}`) en leek de knop
         kapot. Zeg dan wát er mist. */
      if (!ok || !start(t, opts || {})) {
        toast('Deze rondleiding hoort bij een ander scherm.');
      }
    });
    return true;
  }

  window.VumedTutorial = {
    auto: auto,
    run: launch,
    runPage: function () { var k = pageKey(); return k ? runQueue((PAGE_QUEUE[k] || []).slice()) : false; },
    seen: seen,
    reset: function (id) { lsDel(LS_SEEN + id); },
    resetAll: function () {
      lsDel(LS_OFF);
      for (var id in TOURS) { if (Object.prototype.hasOwnProperty.call(TOURS, id)) lsDel(LS_SEEN + id); }
    },
    off: function () { lsSet(LS_OFF, '1'); },
    on: function () { lsDel(LS_OFF); },
    isOff: isOff,
    stop: function () { finish('abort'); },
    next: next,
    /* Wat staat er nu in beeld — handig om van buitenaf te controleren. */
    current: function () {
      return cur ? { id: cur.id, index: cur.i, total: cur.steps.length, target: cur.el } : null;
    },
    page: pageKey,
    list: function () {
      var out = [];
      for (var id in TOURS) {
        if (!Object.prototype.hasOwnProperty.call(TOURS, id)) continue;
        out.push({ id: id, title: TOURS[id].title, page: TOURS[id].page, seen: seen(id) });
      }
      return out;
    }
  };

  /* Zelfstart, tenzij de loader het zelf wil doen. `?tutorial=<id>` forceert
     er één (dev), `?tutorial=1` de rondleiding van deze pagina. */
  function boot() {
    var forced = null;
    try { forced = new URLSearchParams(location.search).get('tutorial'); } catch (e) {}
    if (forced) {
      if (forced === '1') { window.VumedTutorial.runPage(); }
      else { launch(forced); }
      return;
    }
    if (window.VUMED_TUT_MANUAL) return;
    auto();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 700); });
  } else {
    setTimeout(boot, 700);
  }
})();
