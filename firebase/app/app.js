//init firebase
//TODO: add firebase config stuff

var config = {
    apiKey: "AIzaSyDO9Wmq8ONeKAqaNpRRtGwXEQFMaq_UfKw",
    authDomain: "relvnz-push-notifications.firebaseapp.com",
    projectId: "relvnz-push-notifications",
    storageBucket: "relvnz-push-notifications.appspot.com",
    messagingSenderId: "66487122200",
    appId: "1:66487122200:web:366a60aa62b8a456ac466d",
    measurementId: "G-RZK789TB4B"
};
firebase.initializeApp(config);
var messages = firebase.messaging();

//register the service worker with firebase
if ("serverWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(registration => {
            //successful registration
            console.log("registration successful with scope: " + registration.scope);
            messaging.useServiceWorker(registration);
        })
        .then(() => {
            //requesting browser perms
            return messaging.requestPermission();
        })
        .then(() => {
            //fetch the token
            return messaging.getToken;
        })
        .then((token) => {
            //!ajax call to send user token for saving
            $.ajax({
                type: 'POST',
                url: '/api/setToken',
                dataType: 'json',
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
            console.log('Registration failed: ', err);
        });
    });

}