const CACHE = 'pd-nav-v1';
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./assets/main-map.png", "./assets/routes/hippo.png", "./assets/routes/bunny.png", "./assets/routes/iguana.png", "./assets/routes/beetle.png", "./assets/routes/croc.png", "./assets/routes/giraffe.png", "./assets/routes/bird.png", "./assets/routes/ladybug.png", "./assets/routes/tortoise.png", "./assets/routes/frog.png", "./assets/routes/mouse.png", "./assets/routes/fish.png", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
