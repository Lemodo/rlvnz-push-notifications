const fs = require('fs');
const request = require('request');


let rawData = fs.readFileSync('tokens.json');
const requestData = JSON.parse(rawData);


const headers = {
    'Authorization': 'key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4',
    'Content-Type': 'application/json'
};

const body = "Welcome hi this is a test";
const title = "test123";
const confirmLink = "https://www.google.com/";
const declineLink = "https://www.github.com";


console.log("sending to:" + requestData);
const dataString = "{\"to\":\""+requestData+"\",\"data\":{\"notification\":{\"body\":\""+ body +"\",\"title\":\"" + title +"\",\"confirm\":\"" + confirmLink + "\",\"decline\":\""+ declineLink +"\"}},\"priority\":10}";

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




//?curl POST --Header "Authorization: key=AAAAD3rw-Rg:APA91bG4zeV4RiSqlR7r5Xv-RCrXkHZ4zp9d0X8_X19ZZtZvLZlQXTQEgxAhB6OXvXwCWxPAXjfY2Y5coE8E4ROz0KBCjYyDGQiwo8WGZQr15NmrbWUkTUpihieNFWJOcdUOqHYz79k4" --Header "Content-Type:application/json" https://fcm.googleapis.com/fcm/send -d "{\"to\":\"fd-H4ZVr0jQ:APA91bETET_IFr4hfH5GRURWHN4V6EhC8OkRNwb8hzh2iUGF3Z8-jNDtT8Ei6vpSeWYV0B0DESrDCkbNT54NDXaYi6B2qNABLz1HUL39YYvGL-QT7Pbtnwp10TDa8wq2v3Y47JLI7fl_\",\"data\":{\"notification\":{\"body\":\"Are you coming to our party?\",\"title\":\"This is a tester tester\",\"confirm\":\"https://developers.google.com/web/\",\"decline\":\"https://www.yahoo.com/\"}},\"priority\":10}"