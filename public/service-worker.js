// public/service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  // Optionnel : pré-cacher certains assets ici
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
  // Optionnel : nettoyer les caches obsolètes ici
});

self.addEventListener("fetch", (event) => {
  // Vous pouvez intercepter les requêtes pour mettre en cache des ressources, etc.
  // Pour l'instant, on laisse passer la requête normalement :
  event.respondWith(fetch(event.request));
});