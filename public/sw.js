const CACHE_NAME = "komek-cache-v1";
const ASSETS_TO_CACHE = [
    "/",
    "/manifest.json",
    "/images/icons/icon-192.png",
    "/images/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchedResponse = fetch(event.request).then(
                    (networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }
                );

                return cachedResponse || fetchedResponse;
            });
        })
    );
});
