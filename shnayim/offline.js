self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('shmos').then(function(cache) {
      return cache.addAll([
        "/shnayim/index.html',
        "/shnayim/Bereshit.html",
        "/shnayim/Noach.html",
        "/shnayim/Lech-lecha.html",
        "/shnayim/Vayera.html",
        "/shnayim/Chayei Sara.html",
        "/shnayim/Toldot.html",
        "/shnayim/Vayetzei.html",
        "/shnayim/Vayishlach.html",
        "/shnayim/Vayeshev.html",
        "/shnayim/Miketz.html",
        "/shnayim/Vayigash.html",
        "/shnayim/Vayechi.html",
        "/shnayim/Shemot.html",
        "/shnayim/Vaera.html",
        "/shnayim/Bo.html",
        "/shnayim/Beshalach.html",
        "/shnayim/Yitro.html",
        "/shnayim/Mishpatim.html",
        "/shnayim/Terumah.html",
        "/shnayim/Tetzaveh.html",
        "/shnayim/Ki Tisa.html",
        "/shnayim/Vayakhel.html",
        "/shnayim/Pekudei.html",
        "/shnayim/Vayikra.html",
        "/shnayim/Tzav.html",
        "/shnayim/Shmini.html",
        "/shnayim/Tazria.html",
        "/shnayim/Metzora.html",
        "/shnayim/Acharei Mot.html",
        "/shnayim/Kedoshim.html",
        "/shnayim/Emor.html",
        "/shnayim/Behar.html",
        "/shnayim/Bechukotai.html",
        "/shnayim/Bamidbar.html",
        "/shnayim/Nasso.html",
        "/shnayim/Beha'alotcha.html",
        "/shnayim/Sh'lach.html",
        "/shnayim/Korach.html",
        "/shnayim/Chukat.html",
        "/shnayim/Balak.html",
        "/shnayim/Pinchas.html",
        "/shnayim/Matot.html",
        "/shnayim/Masei.html",
        "/shnayim/Devarim.html",
        "/shnayim/Vaetchanan.html",
        "/shnayim/Eikev.html",
        "/shnayim/Re'eh.html",
        "/shnayim/Shoftim.html",
        "/shnayim/Ki Teitzei.html",
        "/shnayim/Ki Tavo.html",
        "/shnayim/Nitzavim.html",
        "/shnayim/Vayelech.html",
        "/shnayim/Ha'azinu.html"
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
