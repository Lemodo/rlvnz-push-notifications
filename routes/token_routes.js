const express = require('express');
const jsonParser = require('body-parser').json();
const fs = require('fs');

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
});