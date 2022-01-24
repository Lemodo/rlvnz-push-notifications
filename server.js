//VAPID
const webPush = require('web-push');

const publicKey = process.env.PUBLIC_VAPID_KEY;
const privateKey = process.env.PRIVATE_VAPID_KEY;

webPush.setVapidDetails("mailto:contact@leoboedeker.de", publicKey, privateKey);


//server
const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webPush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});
app.use(require('express-static')('./'));

app.listen(1337);
console.log('listening on http://localhost:1337');