// VUmed service worker.
//
// DESIGN GOAL: installable + offline-resilient, WITHOUT ever hiding a bug fix.
//   • HTML pages/navigations  -> NETWORK-FIRST: always try the live server first,
//     fall back to cache only when truly offline. So a redeploy is seen immediately.
//   • Static assets (js/css/png/mp3/json/svg) -> STALE-WHILE-REVALIDATE: served fast
//     from cache, refreshed in the background. (App JS already uses ?v=N cache-busting,
//     so a bumped version is a new URL = fresh fetch anyway.)
//   • Cross-origin (Supabase, the ai-proxy, Google Fonts) is NEVER intercepted —
//     auth and AI always hit the network directly.
//
// To force-clear every client's cache after a big change, bump CACHE_VERSION.

const CACHE_VERSION = 'vumed-v8';
const OFFLINE_FALLBACK = 'dashboard.html';
const PRECACHE = ['splash.html', 'dashboard.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // non-fatal: a missing asset must not fail the install
    await Promise.allSettled(PRECACHE.map((u) => cache.add(u)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // leave Supabase / ai-proxy / fonts alone

  const isDoc = req.mode === 'navigate' ||
                (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    // NETWORK-FIRST for documents
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_VERSION);
        cache.put(req, fresh.clone());       // keep a copy only for offline revisits
        return fresh;
      } catch (_e) {
        const cache = await caches.open(CACHE_VERSION);
        return (await cache.match(req)) ||
               (await cache.match(OFFLINE_FALLBACK)) ||
               Response.error();
      }
    })());
    return;
  }

  // STALE-WHILE-REVALIDATE for static assets
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(req);
    const network = fetch(req).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }).catch(() => cached);
    return cached || network;
  })());
});
