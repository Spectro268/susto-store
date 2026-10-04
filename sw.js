self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Aquí más adelante podríamos hacer que funcione sin internet
});
