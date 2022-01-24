// Hardcoded (https://www.npmjs.com/package/web-push <- sollte man lieber so machen)
const publicKey = 'BCWGu9MtcRGMVPptBvce16tD_VYXiQdR56eMAhDQwigqM_ughpB8bL_Gs9pwDNrDfsddcpI_GTNlHOuJtmFE3a8';



if ('serviceWorker' in navigator) {
  console.log('Registering service worker');

  run().catch(error => console.error(error));
}

async function run() {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.
    register('/notification.js', {scope: '/'});
  console.log('Registered service worker');

  console.log('Registering push');
  const subscription = await registration.pushManager.
    subscribe({
      userVisibleOnly: true,
      // The `urlBase64ToUint8Array()` function is the same as in
      // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
  console.log('Registered push');

  console.log('Sending push');
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
  console.log('Sent notification :)');
}