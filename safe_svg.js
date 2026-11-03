/* safe_svg.js — maakt een avatar-SVG uit de database veilig vóór innerHTML.
 *
 * avatar_svg is door gebruikers zelf schrijfbaar en wordt bij ANDERE gebruikers
 * getoond (klassement, vrienden, profielen, admin). Zonder opschoning kan iemand
 * er script in verstoppen (stored XSS). De database weigert dit sinds 2026-11 ook
 * zelf (trigger guard_profile_content); dit is de tweede verdedigingslinie.
 *
 * Allowlist: alleen vorm-elementen, geen event-handlers (on*), geen (xlink:)href.
 * Geeft '' terug als de input geen geldige SVG is → aanroeper toont dan de initiaal.
 */
(function () {
  var OK_TAGS = {
    svg: 1, g: 1, path: 1, circle: 1, ellipse: 1, rect: 1, polygon: 1, polyline: 1,
    line: 1, clippath: 1, defs: 1, lineargradient: 1, radialgradient: 1, stop: 1,
    mask: 1, title: 1, desc: 1
  };

  function vumedSafeSvg(input) {
    if (!input || typeof input !== 'string' || input.length > 60000) return '';
    try {
      var doc = new DOMParser().parseFromString(input, 'image/svg+xml');
      var root = doc.documentElement;
      if (!root || root.nodeName.toLowerCase() !== 'svg' ||
          doc.getElementsByTagName('parsererror').length) return '';
      var all = [root].concat(Array.prototype.slice.call(root.getElementsByTagName('*')));
      for (var i = all.length - 1; i >= 0; i--) {
        var el = all[i];
        if (!OK_TAGS[el.nodeName.toLowerCase()]) {
          if (el.parentNode) el.parentNode.removeChild(el);
          continue;
        }
        for (var j = el.attributes.length - 1; j >= 0; j--) {
          var n = el.attributes[j].name.toLowerCase();
          var v = String(el.attributes[j].value || '').toLowerCase();
          if (n.indexOf('on') === 0 || n.indexOf('href') !== -1 ||
              v.indexOf('javascript:') !== -1 || (v.indexOf('url(') !== -1 && v.indexOf('url(#') === -1)) {
            el.removeAttribute(el.attributes[j].name);
          }
        }
      }
      return new XMLSerializer().serializeToString(root);
    } catch (e) {
      return '';
    }
  }

  window.vumedSafeSvg = vumedSafeSvg;
})();
