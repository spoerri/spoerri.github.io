self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('shmos').then(function(cache) {
     return cache.addAll([
       '/shnayim',
       '/shnayim/index.html',
       '/shnayim/1.html',
       '/shnayim/2.html',
       '/shnayim/3.html',
       '/shnayim/4.html',
       '/shnayim/5.html'
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
