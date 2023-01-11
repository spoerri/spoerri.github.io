self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('shmos').then(function(cache) {
      return cache.addAll([
        '/shnayim/'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
