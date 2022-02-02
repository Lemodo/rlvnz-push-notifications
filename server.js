const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const tokenRouter = require(__dirname + '/routes/token_routes');




//Send notification button
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());
app.post('/api/notificationSend', function(req, res){
  const requestData = req.body.token;
  const title = req.body.title;
  const message = req.body.message;
  const confirmLink = req.body.accept;
  const declineLink = req.body.deny;
  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
    'Content-Type': 'application/json'
  };

  console.log("sending to:" + requestData);
  
  const options = {
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: headers,
    body: "{\"to\":\""+requestData+"\",\"data\":{\"notification\":{\"body\":\""+message+"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}"
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }

  request(options, callback);
  res.send("recieved request!");
});

//send topic button
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/api/topicSend', function(req, res){
  const requestData = req.body.topic;
  const title = req.body.title;
  const message = req.body.message;
  const confirmLink = req.body.accept;
  const declineLink = req.body.deny;
  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
    'Content-Type': 'application/json'
  };

  console.log("sending to:" + requestData);

  const options = {
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: headers,
    body: "{\"to\":\"/topics/"+requestData+"\",\"data\":{\"notification\":{\"body\":\""+ message +"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}"
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }

  request(options, callback);
  res.send("recieved request!");
});


app.use('/api', tokenRouter);
app.use('/', express.static(__dirname + '/app'));

module.exports = exports = app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});