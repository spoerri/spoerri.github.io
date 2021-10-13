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
