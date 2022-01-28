const express = require('express');
const req = require('express/lib/request');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 3000;

const tokenRouter = require(__dirname + '/routes/token_routes');

app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/api/notificationSend', function(req, res){
  const requestData = req.body.token;
  const title = req.body.title;
  const message = req.body.message;
  const confirmLink = req.body.accept;
  const declineLink = req.body.deny;
  res.send("recieved request!");

  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
    'Content-Type': 'application/json'
  };

  console.log("sending to:" + requestData);
  const dataString = "{\"to\":\""+requestData+"\",\"data\":{\"notification\":{\"body\":\""+message+"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}";

  const options = {
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }

  request(options, callback);

});

app.use('/api', tokenRouter);
app.use('/', express.static(__dirname + '/app'));

module.exports = exports = app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});