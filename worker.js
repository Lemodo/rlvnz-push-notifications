console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: 'monkee',
    icon: 'https://img.posterlounge.de/images/big/1868016.jpg'
  });
});