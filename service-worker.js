const cacheName = 'octava-v3';
const appFiles = [
    './',
    './index.html',
    './dist/app.js',
    './dist/styles.css',
    './favicon.ico',
    './icon-192.png',
    './icon-512.png',
    './icon.svg'
];

// Thanks https://github.com/mdn/pwa-examples/tree/master/js13kpwa
// Cache app before install
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching');
        await cache.addAll(appFiles);
    })());
});

// Delete cache for previous versions
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key === cacheName) { return; }
            return caches.delete(key);
        }))
    }));
});

self.addEventListener('fetch', (e) => {
    // Chrome needs this listener to exist, but this app doesn't use fetch
});