const express = require('express');
const jsonParser = require('body-parser').json();
const request = require('request');
const cors = require('cors');
const mysql = require('mysql2');
const tokenRouter = module.exports = exports = express.Router();


const connection = mysql.createConnection({
    host: '35.210.247.152',
    user: 'root',
    password: 'ASduy93hsiodh8f*@hasdf',
    database: 'noti',
  });

tokenRouter.use(cors())
// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => { 
    console.log("TOKEN: " + req.body.token);
    res.send(req.body.token);
});



tokenRouter.post('/preNotificationAdd', jsonParser, function(req, res){

  const token = req.body.token;
  const webinars = (req.body.webinars ===true ? 1 : 0);
  const casestudies = (req.body.casestudies ===true ? 1 : 0);
  const podcasts = (req.body.podcasts ===true ? 1 : 0);
  const blogarticles = (req.body.blogarticles ===true ? 1 : 0);
  const ebooks = (req.body.ebooks ===true ? 1 : 0);
  const videos = (req.body.videos  ? 1 : 0);
  const shop = (req.body.host);
  const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
  };
  res.send("recieved request!");
  
    if (token != null || token !== undefined) {
        const options = {
            url: 'https://iid.googleapis.com/iid/v1/\"'+token+'\"/rel/topics/shop1',
            method: "POST",
            headers: headers
        };
        connection.query(
            'INSERT IGNORE INTO noti (token, webinars, casestudies, podcasts, blogarticles, ebooks, videos, shop) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [token, webinars, casestudies, podcasts, blogarticles, ebooks, videos, shop],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
            }
          );
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
        request(options, callback);
    }

    if (webinars == "1"){
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
    if (casestudies == "1"){
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
    if (podcasts == "1"){
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
    if (blogarticles == "1"){
        const options = {
        url: 'https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/shop1_blogarticles',
        method: "POST",
        headers: headers
        };
        console.log(options);
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
        request(options, callback);
    }
    if (ebooks == "1"){
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
    if (videos == "1"){
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
