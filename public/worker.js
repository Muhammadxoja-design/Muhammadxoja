console.log('Service worker file loaded.');

// Cache name and files to cache
const CACHE_NAME = 'v1_cache';
const CACHE_FILES = [
  '/',                  // Home page
  '/index.html',         // Index page
  '/styles.css',         // CSS file
  '/app.js',             // JavaScript file
  '/images/logo.png',    // Example image
  // Add other static assets here
];

/**
 * * INSTALL event
 * * Triggered when the service worker is installed
 * * This is the best place to cache the app's static resources
 */
self.addEventListener("install", (event) => {
  console.log('Installing service worker...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app resources...');
      return cache.addAll(CACHE_FILES);
    })
  );
});

/**
 * * FETCH event
 * * Triggered when a resource is requested by the browser
 * * Serve cached resources or fetch them from the network
 */
self.addEventListener("fetch", (event) => {
  console.log('Fetching:', event.request.url);

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If resource is found in cache, return it
      if (cachedResponse) {
        console.log('Serving from cache:', event.request.url);
        return cachedResponse;
      }

      // If not in cache, fetch from network
      console.log('Fetching from network:', event.request.url);
      return fetch(event.request).then((response) => {
        // Optionally, cache new resources
        return caches.open(CACHE_NAME).then((cache) => {
          // Cache the new resource if it's a successful response
          if (response && response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      });
    })
  );
});

/**
 * * ACTIVATED event (optional)
 * * Triggered when a new service worker takes control
 */
self.addEventListener("activate", (event) => {
  console.log('Service worker activated');

  // Clean up old caches if necessary
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
