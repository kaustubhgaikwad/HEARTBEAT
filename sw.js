const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];


//install service worker
self.addEventListener('install',evt =>{
    // evt.waitUntil(
    //     caches.open(staticCacheName).then((cache) => {
    //       console.log('caching shell assets');
    //       cache.addAll(assets);
    //     })
    //   );
    //console.log('service worker installed');
});

//activate service worker
self.addEventListener('activate',evt =>{
    //console.log('service worker activated');
    // evt.waitUntil(
    //     caches.keys().then(keys => {
    //       //console.log(keys);
    //       return Promise.all(keys
    //         .filter(key => key !== staticCacheName)
    //         .map(key => caches.delete(key))
    //       );
    //     })
    //   );
});

//fetch request
self.addEventListener('fetch',evt =>{
   // console.log('fetch event',evt);
  //  evt.respondWith(
  //   caches.match(evt.request).then(cacheRes => {
  //     return cacheRes || fetch(evt.request).then(fetchRes => {
  //       return caches.open(dynamicCacheName).then(cache => {
  //         cache.put(evt.request.url, fetchRes.clone());
  //         return fetchRes;
  //       })
  //     });
  //   })
  // );
});