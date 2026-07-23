// VUmed PWA bootstrap — one file, loaded from the <head> of the hub pages.
// Injects the manifest link + iOS/Android app meta tags and registers the
// service worker. Keeping it in one place means branding changes happen here,
// not across dozens of pages.
(function () {
  var head = document.head || document.getElementsByTagName('head')[0];

  function ensure(sel, make) {
    if (!document.querySelector(sel)) head.appendChild(make());
  }
  function meta(name, content) {
    var m = document.createElement('meta'); m.setAttribute('name', name);
    m.setAttribute('content', content); return m;
  }
  function link(rel, href) {
    var l = document.createElement('link'); l.rel = rel; l.href = href; return l;
  }

  ensure('link[rel="manifest"]',              function () { return link('manifest', 'manifest.json'); });
  ensure('meta[name="theme-color"]',          function () { return meta('theme-color', '#ffffff'); });
  ensure('meta[name="mobile-web-app-capable"]',            function () { return meta('mobile-web-app-capable', 'yes'); });
  ensure('meta[name="apple-mobile-web-app-capable"]',      function () { return meta('apple-mobile-web-app-capable', 'yes'); });
  ensure('meta[name="apple-mobile-web-app-status-bar-style"]', function () { return meta('apple-mobile-web-app-status-bar-style', 'default'); });
  ensure('meta[name="apple-mobile-web-app-title"]',        function () { return meta('apple-mobile-web-app-title', 'VUmed'); });
  ensure('link[rel="apple-touch-icon"]',      function () { return link('apple-touch-icon', 'apple-touch-icon.png'); });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* SW optional */ });
    });
  }
})();

// ── Launch splash (phone / installed app) ───────────────────────────────────
// One brand moment per session, on a solid VUmed-blue field: a white ECG
// traces itself like a live monitor (a glow point rides the leading edge),
// the heartbeat "lands" in a soft white bloom, and the wordmark + credit
// settle in. Exit = the wordmark does a heartbeat "anticipation" pop and
// collapses to the centre while the blue field irises closed around it.
// Runs synchronously from <head> so it paints before any page content.
// Desktop browser tabs never see it (unless ?splash=1).
(function () {
  var KEY = 'vumed_splash';
  var force = /[?&]splash=1/.test(location.search);
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  var phone = window.matchMedia && matchMedia('(max-width: 768px)').matches;
  try {
    // A login triggers a reload/navigation to dashboard.html. In the native
    // WKWebView sessionStorage does NOT reliably survive that reload, so the
    // intro would replay OVER the already-loaded app and get cut off half-way.
    // The login flow sets this localStorage flag (survives reload) right before
    // navigating; consume it here so the intro is skipped exactly once.
    if (!force && localStorage.getItem('vumed_skip_splash')) {
      localStorage.removeItem('vumed_skip_splash');
      sessionStorage.setItem(KEY, '1');   // count it as already shown this session
      return;
    }
    if (!force && (sessionStorage.getItem(KEY) || (!standalone && !phone))) return;
    sessionStorage.setItem(KEY, '1');
  } catch (e) { return; }

  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Native app: paint the status-bar strip brand-blue for the whole splash so
  // the battery/signal area isn't a white bar over the blue field. The native
  // bridge reads this flag in paintStatusBar(); we clear it + repaint on exit.
  try { window.__vumedSplashActive = true; } catch (e) {}
  // Wordmark = Nunito 900 (the icon's own weight), the actual brand face
  // (already cached from every hub page). NEVER load a splash-only webfont
  // here: it arrives async, so the first paint fell back to a system font and
  // swapped mid-animation — that was the "ugly font" bug. Weight 900 makes the
  // glyphs sit at the same visual weight as the thick ECG stroke.
  var NUN = 'Nunito,\'Avenir Next\',\'Trebuchet MS\',sans-serif';

  var css = [
    // The blue field is its OWN layer (.sp-bg) so the iris-out masks ONLY the
    // background — blue peels away centre-out revealing the page (dashboard) behind
    // — while the logo (.sp-stage, on top) shrinks cleanly into the centre. The mask
    // exists ONLY on .sp-out (exit): a static mask on the box makes iOS WebKit cache
    // the first paint and freeze child animations (the "nothing draws" bug); an
    // animating mask at exit forces per-frame recompositing, and by then the intro
    // is done/static. .sp-bg has no animating children so masking it is safe. (2026-07-22)
    '@property --sp-hole{syntax:"<percentage>";inherits:false;initial-value:0%;}',
    '#vumed-splash{position:fixed;inset:0;z-index:2147483000;overflow:hidden;}',
    '#vumed-splash .sp-bg{position:absolute;inset:0;--sp-hole:0%;',
    'background:radial-gradient(130% 95% at 50% 38%,#2BBDFF 0%,#1CB0F6 54%,#0E85B5 100%);',
    'transition:--sp-hole .62s cubic-bezier(.42,0,.66,.9);}',
    '#vumed-splash.sp-out{pointer-events:none;}',
    '#vumed-splash.sp-out .sp-bg{--sp-hole:155%;',
    '-webkit-mask:radial-gradient(circle at 50% 50%,transparent calc(var(--sp-hole) - 3%),#000 var(--sp-hole));',
    'mask:radial-gradient(circle at 50% 50%,transparent calc(var(--sp-hole) - 3%),#000 var(--sp-hole));}',
    // soft white bloom that fires when the trace reaches the end of its run
    '#vumed-splash .sp-flash{position:absolute;left:50%;top:50%;width:86vmin;height:86vmin;border-radius:50%;',
    'transform:translate(-50%,-50%) scale(.5);pointer-events:none;opacity:0;',
    'background:radial-gradient(circle,rgba(255,255,255,.38) 0%,rgba(255,255,255,0) 62%);',
    'animation:sp-flash .9s ease-out .6s forwards;}',
    // the ECG monitor: a recognisable heartbeat traces itself left→right —
    // baseline · P wave · a sharp R spike · then the QRS plunges into a bold V
    // (that V IS the letter) · recovers · T wave · and the line runs on over
    // "umed", which fades in beneath it. All one SVG so the line lands exactly.
    '#vumed-splash .sp-stage{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);',
    'display:flex;flex-direction:column;align-items:center;justify-content:center;}',
    // exit: the logo shrinks toward the centre until it vanishes to a point.
    '#vumed-splash.sp-out .sp-stage{animation:sp-stage-out .5s cubic-bezier(.5,0,.75,.2) forwards;}',
    '#vumed-splash .sp-ecg{width:min(94vw,560px);height:auto;overflow:visible;position:relative;z-index:1;}',
    // Steady white halo behind the wordmark — this is the "glow coming off the
    // white". It's a real CSS radial-gradient (NOT an SVG filter): WKWebView on
    // iOS renders SVG drop-shadows far too faintly, so the glow was invisible in
    // the app. This paints reliably everywhere. Fades in as the letters land,
    // gives one bump with the heartbeat.
    '#vumed-splash .sp-glow{position:absolute;left:50%;top:50%;width:min(88vw,540px);height:230px;',
    'transform:translate(-50%,-50%) scale(.9);pointer-events:none;opacity:0;z-index:0;',
    'background:radial-gradient(ellipse 54% 48% at 50% 50%,rgba(255,255,255,.32) 0%,rgba(255,255,255,.11) 40%,rgba(255,255,255,.03) 60%,rgba(255,255,255,0) 76%);',
    'filter:blur(3px);animation:sp-glow-in .9s ease .9s forwards,sp-glow-beat .55s cubic-bezier(.34,.06,.36,1) 1.78s;}',
    // line + wordmark share ONE gradient (userSpace: same y→colour for both) so
    // they read as a single object — white up top melting into a clear sky-blue.
    '#vumed-splash .sp-trace{fill:none;stroke:url(#sp-grad);stroke-width:6.6;stroke-linecap:round;stroke-linejoin:round;',
    'stroke-dasharray:1 1;stroke-dashoffset:1;filter:drop-shadow(0 0 5px rgba(255,255,255,.4));',
    'animation:sp-draw 1.1s linear .12s forwards;}',
    '#vumed-splash .sp-dot{fill:#fff;opacity:0;',
    'filter:drop-shadow(0 0 4px #fff) drop-shadow(0 0 10px rgba(255,255,255,.9));',
    'animation:sp-dot 1.25s ease .12s forwards;}',
    // wordmark: brand font 900, gradient fill matches the stroke; per-letter
    // reveal is SMIL-driven on the tspans; a soft glow keeps them in the same
    // light as the ECG line.
    // per-letter x is pinned on the tspans (kerned) so the 4 animated letters sit
    // tight like one word (matches the logo); letter-spacing is therefore moot.
    // "Umed" is baked SVG outlines (paths), no font — see umedGroup below.
    '#vumed-splash .sp-umed{fill:url(#sp-grad);',
    'filter:drop-shadow(0 0 6px rgba(255,255,255,.22)) drop-shadow(0 0 14px rgba(255,255,255,.09));}',
    // one gentle heartbeat "bump" of the finished wordmark once every letter
    // has landed — echoes the monitor it just drew.
    '#vumed-splash .sp-ecg{animation:sp-beat .55s cubic-bezier(.34,.06,.36,1) 1.78s;}',
    // credit = deliberately subtle: light system font, wide tracking, low contrast.
    '#vumed-splash .sp-credit{position:absolute;left:0;right:0;bottom:calc(32px + env(safe-area-inset-bottom,0px));',
    "text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;font-weight:300;font-size:9.5px;letter-spacing:.36em;",
    'text-transform:uppercase;color:rgba(255,255,255,.4);opacity:0;',
    'animation:sp-credit-in .8s cubic-bezier(.22,.61,.36,1) 1.3s forwards;}',
    '#vumed-splash .sp-credit .sp-name{color:rgba(255,255,255,.72);font-weight:500;}',
    // hairline divider above the credit, scales open from centre
    '#vumed-splash .sp-credit::before{content:"";display:block;margin:0 auto 12px;width:26px;height:1px;',
    'background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.4) 50%,rgba(255,255,255,0));',
    'transform:scaleX(.2);animation:sp-rule-in .7s cubic-bezier(.22,.8,.3,1.1) 1.34s forwards;}',
    '#vumed-splash.sp-out .sp-credit{animation:sp-credit-out .25s ease forwards;}',
    '@keyframes sp-draw{to{stroke-dashoffset:0;}}',
    '@keyframes sp-dot{0%{opacity:0;}7%{opacity:1;}90%{opacity:1;}100%{opacity:0;}}',
    '@keyframes sp-flash{0%{opacity:0;transform:translate(-50%,-50%) scale(.5);}',
    '24%{opacity:1;}100%{opacity:0;transform:translate(-50%,-50%) scale(1.25);}}',
    '@keyframes sp-beat{0%{transform:scale(1);}28%{transform:scale(1.045);}62%{transform:scale(.985);}100%{transform:scale(1);}}',
    '@keyframes sp-glow-in{from{opacity:0;transform:translate(-50%,-50%) scale(.9);}to{opacity:1;transform:translate(-50%,-50%) scale(1);}}',
    '@keyframes sp-glow-beat{0%{transform:translate(-50%,-50%) scale(1);}30%{transform:translate(-50%,-50%) scale(1.08);}100%{transform:translate(-50%,-50%) scale(1);}}',
    '@keyframes sp-rule-in{to{transform:scaleX(1);}}',
    '@keyframes sp-credit-in{from{opacity:0;letter-spacing:.55em;}to{opacity:1;letter-spacing:.34em;}}',
    '@keyframes sp-credit-out{from{opacity:1;}to{opacity:0;}}',
    '@keyframes sp-stage-out{from{transform:translateY(-50%) scale(1);opacity:1;}',
    'to{transform:translateY(-50%) scale(0);opacity:0;}}',
    '@media (prefers-reduced-motion: reduce){',
    '#vumed-splash{transition:opacity .4s ease;}',
    '#vumed-splash.sp-out{opacity:0;}',
    '#vumed-splash.sp-out .sp-bg{-webkit-mask:none;mask:none;}',
    '#vumed-splash .sp-trace{animation:none;stroke-dashoffset:0;}',
    '#vumed-splash .sp-dot,#vumed-splash .sp-flash{display:none;}',
    '#vumed-splash .sp-ecg{animation:none;}',
    '#vumed-splash .sp-glow{animation:none;opacity:1;transform:translate(-50%,-50%) scale(1);}',
    '#vumed-splash.sp-out .sp-stage{animation:none;}',
    '#vumed-splash .sp-credit{animation:none;opacity:1;}',
    '#vumed-splash .sp-credit::before{animation:none;transform:none;}}'
  ].join('');

  // ECG line (cap-line y16, text baseline y54): isoelectric baseline · rounded
  // P wave · PR segment · one continuous QRS — small Q dip, tall sharp R, then
  // the R plunges straight down into a bold V (the S limb, the letter) and
  // recovers · ST segment · rounded T wave · the line runs on over "umed".
  // The WORD "Vumed" (V drawn by the line + "umed" text, x=70) is centred; the
  // left lead-in now STARTS at x=4 (was -16, which ran off the left edge on a
  // phone) so nothing spills off-screen — the word keeps its position.
  var ecgD = 'M4,16 H12 Q18,10 24,16 H32 L34,20 L40,2 L52,54 L64,16 H72 Q81,6 90,16 H214';
  // Per-letter reveal: each glyph of "Umed" rises onto the baseline with a
  // small overshoot, staggered so it lands just as the glowing dot sweeps
  // past it (dot reaches x≈88 at ~0.74s, x≈220 at ~1.22s). SMIL on the
  // tspans keeps native text flow (no hand-tuned x per letter) and, unlike a
  // CSS transform, animating the y attribute works on tspans everywhere.
  // "Umed" baked to SVG glyph OUTLINES (Nunito-900 paths) — device-independent,
  // no webfont to load (iOS WebKit was unreliable with data-URI fonts). Each
  // letter fades + bounces in (animateTransform translate) like the old tspans.
  var umedGroup = '<g class="sp-umed">' + (reduced
    ? "<path class=\"sp-ltr\" d=\"M87.3 54.51Q83.75 54.51 81.04 53.61Q78.33 52.71 76.46 50.92Q74.6 49.12 73.66 46.43Q72.71 43.74 72.71 40.2V25.43Q72.71 23.32 73.82 22.24Q74.92 21.16 76.95 21.16Q79.02 21.16 80.1 22.24Q81.18 23.32 81.18 25.43V40.29Q81.18 43.83 82.74 45.63Q84.31 47.42 87.3 47.42Q90.24 47.42 91.8 45.63Q93.37 43.83 93.37 40.29V25.43Q93.37 23.32 94.45 22.24Q95.53 21.16 97.55 21.16Q99.58 21.16 100.64 22.24Q101.69 23.32 101.69 25.43V40.2Q101.69 44.94 100.06 48.14Q98.43 51.33 95.21 52.92Q91.99 54.51 87.3 54.51Z\"/><path class=\"sp-ltr\" d=\"M110.94 54.41Q109.01 54.41 107.95 53.36Q106.89 52.3 106.89 50.27V35.05Q106.89 33.07 107.93 32.01Q108.96 30.95 110.89 30.95Q112.83 30.95 113.84 32.01Q114.85 33.07 114.85 35.05V37.58L114.34 35.32Q115.31 33.3 117.22 32.08Q119.13 30.86 121.75 30.86Q124.23 30.86 126 32.06Q127.78 33.25 128.56 35.69H127.91Q128.97 33.44 131.09 32.15Q133.2 30.86 135.78 30.86Q138.45 30.86 140.15 31.9Q141.85 32.93 142.7 35.12Q143.55 37.3 143.55 40.61V50.27Q143.55 52.3 142.47 53.36Q141.39 54.41 139.41 54.41Q137.48 54.41 136.42 53.36Q135.37 52.3 135.37 50.27V40.84Q135.37 38.87 134.77 37.99Q134.17 37.12 132.79 37.12Q131.09 37.12 130.19 38.31Q129.29 39.51 129.29 41.72V50.27Q129.29 52.3 128.24 53.36Q127.18 54.41 125.2 54.41Q123.22 54.41 122.16 53.36Q121.11 52.3 121.11 50.27V40.84Q121.11 38.87 120.51 37.99Q119.91 37.12 118.53 37.12Q116.87 37.12 115.98 38.31Q115.08 39.51 115.08 41.72V50.27Q115.08 54.41 110.94 54.41Z\"/><path class=\"sp-ltr\" d=\"M160.62 54.51Q156.48 54.51 153.47 53.06Q150.45 51.61 148.84 48.94Q147.23 46.27 147.23 42.64Q147.23 39.14 148.78 36.5Q150.32 33.85 153.01 32.36Q155.7 30.86 159.15 30.86Q161.68 30.86 163.75 31.67Q165.82 32.47 167.29 34.01Q168.76 35.55 169.52 37.72Q170.28 39.88 170.28 42.55Q170.28 43.47 169.77 43.9Q169.27 44.34 168.16 44.34H154.09V40.48H164.3L163.56 41.07Q163.56 39.37 163.1 38.31Q162.64 37.26 161.75 36.7Q160.85 36.15 159.52 36.15Q158.09 36.15 157.06 36.82Q156.02 37.49 155.47 38.77Q154.92 40.06 154.92 41.99V42.41Q154.92 45.67 156.37 47.08Q157.81 48.48 160.85 48.48Q161.86 48.48 163.17 48.23Q164.48 47.97 165.68 47.51Q166.88 47.05 167.75 47.35Q168.62 47.65 169.11 48.37Q169.59 49.08 169.64 49.98Q169.68 50.87 169.22 51.72Q168.76 52.57 167.7 53.03Q166.09 53.77 164.28 54.14Q162.46 54.51 160.62 54.51Z\"/><path class=\"sp-ltr\" d=\"M182.65 54.51Q179.76 54.51 177.53 53.08Q175.29 51.65 174.03 48.99Q172.76 46.32 172.76 42.68Q172.76 38.96 174.03 36.34Q175.29 33.71 177.53 32.29Q179.76 30.86 182.65 30.86Q185.18 30.86 187.21 32.06Q189.23 33.25 189.92 35.14H189.42V25.3Q189.42 23.27 190.47 22.21Q191.53 21.16 193.51 21.16Q195.44 21.16 196.52 22.21Q197.6 23.27 197.6 25.3V50.27Q197.6 52.3 196.57 53.36Q195.53 54.41 193.56 54.41Q191.62 54.41 190.57 53.36Q189.51 52.3 189.51 50.27V47.65L190.01 49.91Q189.37 51.98 187.32 53.24Q185.28 54.51 182.65 54.51ZM185.28 48.48Q186.52 48.48 187.48 47.86Q188.45 47.24 188.98 45.97Q189.51 44.71 189.51 42.68Q189.51 39.6 188.31 38.25Q187.12 36.89 185.28 36.89Q184.03 36.89 183.07 37.49Q182.1 38.08 181.55 39.35Q181 40.61 181 42.68Q181 45.72 182.19 47.1Q183.39 48.48 185.28 48.48Z\"/>"
    : "<path class=\"sp-ltr\" d=\"M87.3 54.51Q83.75 54.51 81.04 53.61Q78.33 52.71 76.46 50.92Q74.6 49.12 73.66 46.43Q72.71 43.74 72.71 40.2V25.43Q72.71 23.32 73.82 22.24Q74.92 21.16 76.95 21.16Q79.02 21.16 80.1 22.24Q81.18 23.32 81.18 25.43V40.29Q81.18 43.83 82.74 45.63Q84.31 47.42 87.3 47.42Q90.24 47.42 91.8 45.63Q93.37 43.83 93.37 40.29V25.43Q93.37 23.32 94.45 22.24Q95.53 21.16 97.55 21.16Q99.58 21.16 100.64 22.24Q101.69 23.32 101.69 25.43V40.2Q101.69 44.94 100.06 48.14Q98.43 51.33 95.21 52.92Q91.99 54.51 87.3 54.51Z\" opacity=\"0\"><animate attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.26s\" begin=\"0.74s\" fill=\"freeze\"/><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 11;0 -1.4;0 0\" keyTimes=\"0;0.6;1\" calcMode=\"spline\" keySplines=\"0.16 0.6 0.24 1;0.35 0 0.5 1\" dur=\"0.5s\" begin=\"0.74s\" fill=\"freeze\"/></path><path class=\"sp-ltr\" d=\"M110.94 54.41Q109.01 54.41 107.95 53.36Q106.89 52.3 106.89 50.27V35.05Q106.89 33.07 107.93 32.01Q108.96 30.95 110.89 30.95Q112.83 30.95 113.84 32.01Q114.85 33.07 114.85 35.05V37.58L114.34 35.32Q115.31 33.3 117.22 32.08Q119.13 30.86 121.75 30.86Q124.23 30.86 126 32.06Q127.78 33.25 128.56 35.69H127.91Q128.97 33.44 131.09 32.15Q133.2 30.86 135.78 30.86Q138.45 30.86 140.15 31.9Q141.85 32.93 142.7 35.12Q143.55 37.3 143.55 40.61V50.27Q143.55 52.3 142.47 53.36Q141.39 54.41 139.41 54.41Q137.48 54.41 136.42 53.36Q135.37 52.3 135.37 50.27V40.84Q135.37 38.87 134.77 37.99Q134.17 37.12 132.79 37.12Q131.09 37.12 130.19 38.31Q129.29 39.51 129.29 41.72V50.27Q129.29 52.3 128.24 53.36Q127.18 54.41 125.2 54.41Q123.22 54.41 122.16 53.36Q121.11 52.3 121.11 50.27V40.84Q121.11 38.87 120.51 37.99Q119.91 37.12 118.53 37.12Q116.87 37.12 115.98 38.31Q115.08 39.51 115.08 41.72V50.27Q115.08 54.41 110.94 54.41Z\" opacity=\"0\"><animate attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.26s\" begin=\"0.90s\" fill=\"freeze\"/><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 11;0 -1.4;0 0\" keyTimes=\"0;0.6;1\" calcMode=\"spline\" keySplines=\"0.16 0.6 0.24 1;0.35 0 0.5 1\" dur=\"0.5s\" begin=\"0.90s\" fill=\"freeze\"/></path><path class=\"sp-ltr\" d=\"M160.62 54.51Q156.48 54.51 153.47 53.06Q150.45 51.61 148.84 48.94Q147.23 46.27 147.23 42.64Q147.23 39.14 148.78 36.5Q150.32 33.85 153.01 32.36Q155.7 30.86 159.15 30.86Q161.68 30.86 163.75 31.67Q165.82 32.47 167.29 34.01Q168.76 35.55 169.52 37.72Q170.28 39.88 170.28 42.55Q170.28 43.47 169.77 43.9Q169.27 44.34 168.16 44.34H154.09V40.48H164.3L163.56 41.07Q163.56 39.37 163.1 38.31Q162.64 37.26 161.75 36.7Q160.85 36.15 159.52 36.15Q158.09 36.15 157.06 36.82Q156.02 37.49 155.47 38.77Q154.92 40.06 154.92 41.99V42.41Q154.92 45.67 156.37 47.08Q157.81 48.48 160.85 48.48Q161.86 48.48 163.17 48.23Q164.48 47.97 165.68 47.51Q166.88 47.05 167.75 47.35Q168.62 47.65 169.11 48.37Q169.59 49.08 169.64 49.98Q169.68 50.87 169.22 51.72Q168.76 52.57 167.7 53.03Q166.09 53.77 164.28 54.14Q162.46 54.51 160.62 54.51Z\" opacity=\"0\"><animate attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.26s\" begin=\"1.00s\" fill=\"freeze\"/><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 11;0 -1.4;0 0\" keyTimes=\"0;0.6;1\" calcMode=\"spline\" keySplines=\"0.16 0.6 0.24 1;0.35 0 0.5 1\" dur=\"0.5s\" begin=\"1.00s\" fill=\"freeze\"/></path><path class=\"sp-ltr\" d=\"M182.65 54.51Q179.76 54.51 177.53 53.08Q175.29 51.65 174.03 48.99Q172.76 46.32 172.76 42.68Q172.76 38.96 174.03 36.34Q175.29 33.71 177.53 32.29Q179.76 30.86 182.65 30.86Q185.18 30.86 187.21 32.06Q189.23 33.25 189.92 35.14H189.42V25.3Q189.42 23.27 190.47 22.21Q191.53 21.16 193.51 21.16Q195.44 21.16 196.52 22.21Q197.6 23.27 197.6 25.3V50.27Q197.6 52.3 196.57 53.36Q195.53 54.41 193.56 54.41Q191.62 54.41 190.57 53.36Q189.51 52.3 189.51 50.27V47.65L190.01 49.91Q189.37 51.98 187.32 53.24Q185.28 54.51 182.65 54.51ZM185.28 48.48Q186.52 48.48 187.48 47.86Q188.45 47.24 188.98 45.97Q189.51 44.71 189.51 42.68Q189.51 39.6 188.31 38.25Q187.12 36.89 185.28 36.89Q184.03 36.89 183.07 37.49Q182.1 38.08 181.55 39.35Q181 40.61 181 42.68Q181 45.72 182.19 47.1Q183.39 48.48 185.28 48.48Z\" opacity=\"0\"><animate attributeName=\"opacity\" from=\"0\" to=\"1\" dur=\"0.26s\" begin=\"1.10s\" fill=\"freeze\"/><animateTransform attributeName=\"transform\" type=\"translate\" values=\"0 11;0 -1.4;0 0\" keyTimes=\"0;0.6;1\" calcMode=\"spline\" keySplines=\"0.16 0.6 0.24 1;0.35 0 0.5 1\" dur=\"0.5s\" begin=\"1.10s\" fill=\"freeze\"/></path>") + '</g>';
  var el = document.createElement('div');
  el.id = 'vumed-splash';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="sp-bg"></div>' +
    '<div class="sp-flash"></div>' +
    '<div class="sp-stage">' +
      '<div class="sp-glow"></div>' +
      '<svg class="sp-ecg" viewBox="0 0 222 64" preserveAspectRatio="xMidYMid meet" ' +
        'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        '<defs><linearGradient id="sp-grad" gradientUnits="userSpaceOnUse" x1="0" y1="14" x2="0" y2="56">' +
          '<stop offset="0" stop-color="#ffffff"/>' +
          '<stop offset="0.5" stop-color="#EEF9FF"/>' +
          '<stop offset="1" stop-color="#B4E0F7"/>' +
        '</linearGradient></defs>' +
        '<path class="sp-trace" id="sp-path" pathLength="1" d="' + ecgD + '"/>' +
        umedGroup +
        '<circle class="sp-dot" r="2.6">' +
          '<animateMotion dur="1.1s" begin="0.12s" fill="freeze" calcMode="linear" ' +
            'keyPoints="0;1" keyTimes="0;1" rotate="0"><mpath xlink:href="#sp-path"/></animateMotion>' +
        '</circle>' +
      '</svg>' +
    '</div>' +
    '<div class="sp-credit">een <span class="sp-name">Tijmen Korteweg</span> productie</div>';

  var style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
  document.documentElement.appendChild(el);

  // last letter lands ~1.6s, heartbeat bump runs 1.78–2.33s — hold past it
  var hold = reduced ? 1000 : 2500;
  function exit() {
    el.classList.add('sp-out');
    // splash done → let the native status bar go back to the app colour
    try { window.__vumedSplashActive = false; } catch (e) {}
    try { window.VumedNative && VumedNative.repaintStatusBar && VumedNative.repaintStatusBar(); } catch (e) {}
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
      if (style.parentNode) style.parentNode.removeChild(style);
    }, 700);
  }
  // Start the hold ONLY once the splash has actually PAINTED a frame. On a cold
  // native/PWA launch the page does heavy synchronous startup work; if the hold
  // countdown started right now it would burn away while the native splash is
  // still on top → when native lifts you'd see only the last split-second of the
  // animation (exactly Tijmen's bug). Two rAFs guarantee the overlay composited.
  // __vumedSplashPainted also tells the native bridge the precise moment to lift
  // the native splash, so there's never a gap that flashes the dashboard.
  var begun = false;
  function begin() {
    if (begun) return; begun = true;
    try { window.__vumedSplashPainted = true; } catch (e) {}
    setTimeout(exit, hold);
  }
  requestAnimationFrame(function () { requestAnimationFrame(begin); });
  // Safety: never hang if rAF is starved indefinitely.
  setTimeout(begin, 4000);
})();
