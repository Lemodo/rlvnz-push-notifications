//init firebase
//TODO: add firebase config stuff

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

const popupBefore = localStorage.getItem('popupBefore');
    if (popupBefore != "true") {
      $(document).ready(function(){
        localStorage.setItem('popupBefore', "true");
        $("#staticBackdrop").modal('show');
      });
    }


// On load register service worker
if ('serviceWorker' in navigator) {
  document.getElementById("preNotificationSubmit").addEventListener('click', () => {

    const webinars = document.getElementById("webinars").checked;
    const casestudies = document.getElementById("casestudies").checked;
    const podcasts = document.getElementById("podcasts").checked;
    const blogarticles = document.getElementById("blogartices").checked;
    const ebooks = document.getElementById("ebooks").checked;
    const videos = document.getElementById("videos").checked;
    
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
      $.post({
        type: 'POST',
        url: 'https://leo.adrule-labs.com/api/preNotificationAdd',
        crossDomain: true,
        data: JSON.stringify({
          "token": token, 
          "webinars": webinars, 
          "casestudies": casestudies, 
          "podcasts": podcasts, 
          "blogarticles": blogarticles, 
          "ebooks": ebooks, 
          "videos": videos}),
        contentType: 'application/json',
        success: (data) => {
          console.log('Success ', data);
        },
        error: (err) => {
          console.log('Error ', err);
        }
      })
    })
    .then(() => {
      const token = localStorage.getItem('browserToken');
      //document.getElementById("token").innerHTML =token;  //! delete this if you dont want to print the token to the html page
      // Simple ajax call to send user token to server for saving
      $.post({
        type: 'POST',
        url: 'https://leo.adrule-labs.com/api/setToken',
        crossDomain: true,
        data: JSON.stringify({token: token}),
        contentType: 'application/json',
        success: (data) => {
          console.log('Success ', data);
        },
        error: (err) => {
          console.log('Error ', err);
        }
      })
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  }, false);
  }