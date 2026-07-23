/* bg-decor.js — shared faint scattered medical-icon background + ENDLESS scroll parallax.
   Self-contained: injects its own CSS, builds a #bg-decor layer of decor/*.svg icons, and
   drifts it OPPOSITE to the scroll (down when scrolling up, up when scrolling down) for a
   "moving in the distance" feel. The layer is two IDENTICAL stacked blocks and the drift is
   wrapped with a modulo, so it loops seamlessly and never stops (endless slide).
   Include on any hub page:  <script src="bg-decor.js?v=2"></script>   Icons live in decor/. */
(function () {
  if (window.__vumedDecor) return;
  window.__vumedDecor = true;

  if (!document.getElementById('bg-decor-style')) {
    var css =
      '#bg-decor{position:fixed;left:0;right:0;top:0;z-index:-1;pointer-events:none;' +
      'overflow:hidden;will-change:transform;}' +
      '.bg-block{position:absolute;left:0;right:0;}' +
      '.bg-decor-icon{position:absolute;opacity:0.045;}' +
      'html.dark .bg-decor-icon{opacity:0.06;filter:invert(1);}';
    var style = document.createElement('style');
    style.id = 'bg-decor-style';
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  var ICONS = ['pills','syringe','dna','thermometer','stethoscope','medicine','x-ray',
    'electrocardiogram','emergency-kit','tablet','transfusion','science','pill'];

  // One block's worth of scattered icons (positions in % of the block height).
  function buildBlock() {
    var cols = 5, rows = 7, k = 0, html = '';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var ic = ICONS[k % ICONS.length]; k++;
        var top = ((r + 0.5) / rows) * 100 + (Math.random() - 0.5) * 11;
        var left = ((c + 0.5) / cols) * 100 + (Math.random() - 0.5) * 13;
        var size = (35 + Math.random() * 42).toFixed(0);
        var rot = (Math.random() * 360).toFixed(0);
        html += '<img class="bg-decor-icon" src="decor/' + ic + '.svg" alt="" ' +
          'style="top:' + top.toFixed(1) + '%;left:' + left.toFixed(1) + '%;width:' + size +
          'px;transform:rotate(' + rot + 'deg)">';
      }
    }
    return html;
  }

  function build() {
    if (!document.body || document.getElementById('bg-decor')) return;
    var H = Math.max(window.innerHeight || 800, 800);
    window.__decorH = H;
    var block = buildBlock();                              // built ONCE → both blocks identical
    var wrap = document.createElement('div');
    wrap.id = 'bg-decor';
    wrap.style.height = (2 * H) + 'px';
    wrap.innerHTML =
      '<div class="bg-block" style="top:0;height:' + H + 'px">' + block + '</div>' +
      '<div class="bg-block" style="top:' + H + 'px;height:' + H + 'px">' + block + '</div>';
    document.body.appendChild(wrap);
  }

  function scroller() {
    // Most hub pages scroll .main-content; vumed.html scrolls #root instead.
    var cands = [document.querySelector('.main-content'), document.getElementById('root')];
    for (var i = 0; i < cands.length; i++) {
      var el = cands[i];
      if (el && el.scrollHeight > el.clientHeight + 4) return el;
    }
    return null;
  }
  function apply() {
    var d = document.getElementById('bg-decor');
    if (!d) return;
    var mc = scroller();
    var st = mc ? mc.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || 0);
    var H = window.__decorH || 800;
    // opposite to the scroll, wrapped with modulo so it loops forever (endless slide)
    var off = (-(st * 0.06)) % H;
    d.style.transform = 'translateY(' + off.toFixed(1) + 'px)';
  }

  function init() {
    build();
    document.addEventListener('scroll', apply, { capture: true, passive: true });
    window.addEventListener('scroll', apply, { passive: true });
    apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
