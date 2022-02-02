const express = require('express');
const jsonParser = require('body-parser').json();
const request = require('request');
const cors = require('cors');
const mysql = require('mysql2');
const tokenRouter = module.exports = exports = express.Router();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'noti',
    port: '3307'
  });

tokenRouter.use(cors())
// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => {
    const token = JSON.stringify(req.body.token, 4);
    
    connection.query(
        'INSERT INTO noti (token) VALUES (?)', [token],
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
      
    console.log("TOKEN: " + req.body.token);
    res.send(req.body.token);
});



tokenRouter.post('/preNotificationAdd', jsonParser, function(req, res){
  const token = req.body.token;
  const webinars = JSON.stringify(req.body.webinars);
  const casestudies = JSON.stringify(req.body.casestudies);
  const podcasts = JSON.stringify(req.body.podcasts);
  const blogarticles = JSON.stringify(req.body.blogarticles);
  const ebooks = JSON.stringify(req.body.ebooks);
  const videos = JSON.stringify(req.body.videos);
  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
  };
  res.send("recieved request!");

  
    if (token != null || token !== undefined) {
        const options = {
            url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1',
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

    if (webinars === "true"){
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
    if (casestudies === "true"){
        const options = {
            url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_casestudies',
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
    if (podcasts === "true"){
    const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_podcasts',
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
    if (blogarticles === "true"){
        const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_blogarticles',
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
    if (ebooks === "true"){
        const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_ebooks',
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
    if (videos === "true"){
        const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_videos',
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
