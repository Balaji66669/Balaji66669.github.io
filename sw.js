self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/dragon.js',
        '/styles.css',
        '/css/bootstrap.min.css',
        '/first.jpg',
        '/js/jquery-3.2.1.slim.min.js',
        '/js/popper.min.js',
        '/js/bootstrap.min.js',
        '/second.jpg',
        '/third.jpg',
        '/7467-200.png',
        '/fifth.webp'

      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
});