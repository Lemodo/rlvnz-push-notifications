importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// TODO: fill in messaging sender id
firebase.initializeApp({
  'messagingSenderId': '66487122200'
});

const messaging = firebase.messaging();

// Installs service worker
self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('notificationclick', (event) => {
  // Event actions derived from event.notification.data from data received
  var eventURL = event.notification.data;
  event.notification.close();
  if (event.action === 'confirmAttendance') {
    clients.openWindow(eventURL.confirm);
  } else {
    clients.openWindow(eventURL.decline);
  }
}, false);
messaging.setBackgroundMessageHandler((payload) => {
  // Parses data received and sets accordingly
  const data = JSON.parse(payload.data.notification);
  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarketplace.haendlerbund.de%2Fpartnerangebot-relevanz-dynamisches-retargeting&psig=AOvVaw2wMnqRyhndJloLd_Z6qyki&ust=1643279047927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCc2NGZz_UCFQAAAAAdAAAAABAD",
    actions: [
      {action: 'confirmAttendance', title: '👍 Confirm'},
      {action: 'cancel', title: '👎 Deny'}
    ],
    // For additional data to be sent to event listeners, needs to be set in this data {}
    data: {confirm: data.confirm, decline: data.decline}
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});