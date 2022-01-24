const webPush = require('web-push');

const publicKey = process.env.PUBLIC_VAPID_KEY;
const privateKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails("mailto:contact@leoboedeker.de", publicKey, privateKey);