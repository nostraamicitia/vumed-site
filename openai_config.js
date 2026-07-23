// AI proxy shim (public, safe to deploy).
//
// The real OpenAI key NO LONGER lives here — it sits server-side as a Supabase
// Edge Function secret (OPENAI_API_KEY). This file transparently reroutes every
// browser call to api.openai.com/v1/chat/completions to that proxy, so all 265
// exam pages + openreview.js + medeace-runtime.js keep working unchanged.
//
// (Local backup of the pre-proxy key file: openai_config.secret.bak — gitignored.)
(function () {
  var PROXY_URL = 'https://dxhawldqluihhvfeswlc.supabase.co/functions/v1/ai-proxy';

  // Sentinel so every `if (OPENAI_API_KEY)` / `'Bearer ' + OPENAI_API_KEY` gate
  // still treats AI as available. The proxy ignores this value and injects the
  // real key on the server.
  window.OPENAI_API_KEY = 'proxy';

  if (window.__aiProxyPatched) return;
  window.__aiProxyPatched = true;

  // Grab the logged-in user's Supabase access token from localStorage so the
  // proxy can meter the weekly AI budget PER USER (not per IP). No session →
  // returns null and the proxy falls back to an IP-based budget for guests.
  function userAccessToken() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!k || k.indexOf('sb-') !== 0 || k.indexOf('-auth-token') === -1) continue;
        var raw = localStorage.getItem(k);
        if (!raw) continue;
        var v = JSON.parse(raw);
        var tok = v && (v.access_token
          || (v.currentSession && v.currentSession.access_token)
          || (Array.isArray(v) && v[0]));
        if (typeof tok === 'string' && tok.split('.').length === 3) return tok;
      }
    } catch (e) { /* ignore — guest / private mode */ }
    return null;
  }

  var _fetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    try {
      var url = (typeof input === 'string')
        ? input
        : (input && typeof input.url === 'string' ? input.url : '');
      if (url.indexOf('api.openai.com/v1/chat/completions') !== -1) {
        // Send the real user JWT as Authorization (overrides the 'Bearer proxy'
        // sentinel the call sites set) so the proxy can identify the user.
        var tok = userAccessToken();
        if (tok) {
          var h = new Headers((init && init.headers) || (input && input.headers) || {});
          h.set('Authorization', 'Bearer ' + tok);
          init = Object.assign({}, init, { headers: h });
        }
        if (typeof input === 'string') {
          input = PROXY_URL;                 // string URL + init (all our call sites)
        } else {
          input = new Request(PROXY_URL, input); // defensive: Request object
        }
      }
    } catch (e) { /* never break fetch */ }
    return _fetch(input, init);
  };
})();
