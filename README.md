<div id="top"></div>


<br />
<div align="center">
  <a href="https://github.com/lemodo/rlvnz-push-notifications">
  </a>

<h3 align="center">Firebase push notifications</h3>

  <p align="center">
    This is a app for web-push notifications. It was created using the Firebase Cloud Messaging API and nodejs (express).
    <br />
    <a href="https://leo.adrule-labs.com">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Push notification has been one of the effective ways to improve retention rate and increase user engagement. The timely received push notification reminds users to react to online messaging, go to check out the cart before the offers and sales end, and even to notify users that their kingdom is under attacked by the enemy player so users can react before it's too late.
<br>
The Project was built to create a simple and easy way to send web-push notifications to users. By using the Firebase Cloud Messaging API I could focus on improving the core features than having to create a whole web-push system in the limited time I had.
Firebase Cloud Messaging is a free of charge service offered by Google.

#### This README is not complete. Some steps, especially at the installation will be missing.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [HTML & CSS](https://getbootstrap.com/)
* [Firebase Cloud Messaging](https://firebase.com)
* [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is a simple example on how to setup the app on your localhost.

### Prerequisites

Make sure you have installed nodejs and npm and head over to the main directory.

### Installation

1. Go to [https://firebase.com](https://firebase.com) and register a free account, create a project and copy all codes. These should include an API Key, authDomain, projectID, storageBucket, messagingSenderId, appId and a measurementId.
2. Clone the repo
   ```sh
   git clone https://github.com/lemodo/rlvnz-push-notifications.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Keys into the `notification.js` and your messagingSenderId into the `firebase-messaging-sw.js`
   ```js
   firebase.initializeApp({
      apiKey: "YOUR API KEY",
      authDomain: "YOUR AUTHDOMAIN",
      projectId: "YOUR PROJECTID",
      storageBucket: "YOUR STORAGEBUCKET",
      messagingSenderId: "YOUR MESSAGINGSENDERID",
      appId: "YOUR APPID",
      measurementId: "YOUR MEASURMENTID"
    });
   ```
   
  ### Start

1. Execute the `server.js` to start the app
```sh
   node server.js
   ```
   The Server is now running on Port `3000`, so open up your browser and navigate to `localhost:3000` to see the App.
   Keep in mind: You can't recieve push notifications if the website is in the foreground.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To implement notifications on another website you'll need to copy the modal loading in and all of the script tags.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src='https://www.gstatic.com/firebasejs/3.6.2/firebase.js'></script>
<script src='https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
```
Then upload the firebase-messaging-sw.js to your server. This is the service worker file needed and can not be imported through a CDN.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- EXPLANATION -->
## Explanation

### Tokens
Every user has its own `token` which looks similar to this `dgA14ixp-Uk:APA91bGhuUJBhvL4QVAH7KM-UVU6Rqbnopmd3WtZaoxpY-OLtlrJmrboMtPWLX-4c-A-D2MXWdqCUXX1Uu6td24rtZzBvCjdIx1Mh9GpkfqYl6GNcgN_HVw2tFKRBFUYgJ0lX67tRmEW`. <br>
These tokens aren't permanent tokens and can be used to identify a client. <br> They regenerate at random, sometimes after a timeperiod, after a computer restart, after clearing your browser data and so on. So users will need to accept push notifications again frequently.

<hr>

### Topics
Topics are a way of sending notification to multiple users. For example every shop has its own topic and sub topics. For example shop1, shop1_blog, shop1_webinars, etc. When loading the page a window pops up which promts you to select multiple topics. When submitting it subscribes you to the topics you want to get notified about.
<br>
You can add users to topics by sending a `POST` request looking like this.
```js
url: "https://iid.googleapis.com/iid/v1/TOKEN/rel/topics/TOPIC",
headers: "Authorization": "key=AUTHCODE"
```

<hr>

### Sending Notifications
Notifications can also be sent by using POST requests. 
```js
      url: "https://fcm.googleapis.com/fcm/send"
      headers: "Authorization": "key=AUTHCODE",
               "Content-Type": "application/json",
      body: {
          "notification": {
              "title": "Firebase",
              "body": "Firebase topic message",
              "click_action": "http://localhost:3000/",
            },
          /*
          "to": "/topics/TOPIC"
          OR
          "to": "TOKEN"
          */
      }
```

_The frontend is completely made by posting the data to the server and from there posting it to the google api servers._




<p align="right">(<a href="#top">back to top</a>)</p>
