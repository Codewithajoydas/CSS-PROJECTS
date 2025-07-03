const CACHE_NAME = "css_projects_v1";
const urls = ["/", "/style.css", "/script.js", "/sw.js", "/manifest.json"];
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urls);
        })
    )
})
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
  