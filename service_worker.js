// キャッシュファイルの指定
// 引用：https://qiita.com/poster-keisuke/items/6651140fa20c7aa18474
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
  '/hurohukidaikon.github.io/',
];

// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request);
      })
  );
});
