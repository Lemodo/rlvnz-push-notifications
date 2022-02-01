const mysql = require('mysql2');
const jsonParser = require('body-parser').json();


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'noti'
});

firebase.initializeApp({
    apiKey: "AIzaSyDO9Wmq8ONeKAqaNpRRtGwXEQFMaq_UfKw",
    authDomain: "relvnz-push-notifications.firebaseapp.com",
    projectId: "relvnz-push-notifications",
    storageBucket: "relvnz-push-notifications.appspot.com",
    messagingSenderId: "66487122200",
    appId: "1:66487122200:web:366a60aa62b8a456ac466d",
    measurementId: "G-RZK789TB4B"
  });
  const messaging = firebase.messaging();
  document.getElementById("preNotificationSubmit").addEventListener('click', () => {
      /*
    const webinars = document.getElementById("webinars").checked;
    const casestudies = document.getElementById("casestudies").checked;
    const podcasts = document.getElementById("podcasts").checked;
    const blogarticles = document.getElementById("blogartices").checked;
    const ebooks = document.getElementById("ebooks").checked;
    const videos = document.getElementById("videos").checked;
    */
    navigator.serviceWorker.register('https://leo.adrule-labs.com/firebase-messaging-sw.js').then((registration) => {
      // Successfully registers service worker
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      messaging.useServiceWorker(registration);
    })
    .then(() => {
      // Requests user browser permission
      return messaging.requestPermission();
    })
    .then(() => {
      // Gets token
      return messaging.getToken();
    })
    .then((token) => {
      localStorage.setItem('browserToken', token);
      const token = localStorage.getItem('browserToken');
      console.log(token)
      connection.query(
          'INSERT INTO token VALUES ?',[token],
          function (err, results, fields) {
              console.log(results);
              console.log(fields);
          }
      )
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  }, false);