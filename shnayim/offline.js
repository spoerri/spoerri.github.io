self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('shmos').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/1.html',
       '/2.html',
       '/3.html',
       '/4.html',
       '/5.html'
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
