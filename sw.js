const CACHE_NAME = 'simulador-prazos-belizza-v2';
const ASSETS = [
  './',
  './prazos.html', // Alterar se mudar o nome do arquivo acima
  'https://fonts.googleapis.com/css2?family=Satisfy&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});