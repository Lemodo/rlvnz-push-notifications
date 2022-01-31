const express = require('express');
const jsonParser = require('body-parser').json();
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const tokenRouter = module.exports = exports = express.Router();

// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => {
    const token = JSON.stringify(req.body.token, 4);
    fs.writeFile("tokens.json", token, "utf8", function (err){
        if (err) {
            return console.log(err);
        }
    });
    console.log("TOKEN: " + req.body.token);
    res.send(req.body.token);
});


//send topic button
tokenRouter.post('/preNotificationAdd', function(req, res){
  const token = req.body.token;
  const webinars = req.body.webinars;
  const casestudies = req.body.casestudies;
  const podcasts = req.body.podcasts;
  const blogarticles = req.body.blogarticles;
  const ebooks = req.body.ebooks;
  const videos = req.body.videos;
  res.send("recieved request!");

  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
  };
    if (webinars == true){
    const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_webinars',
        method: "POST",
        headers: headers
    };
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
        request(options, callback);
    }
}); 
