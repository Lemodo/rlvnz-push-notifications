const express = require('express');
const jsonParser = require('body-parser').json();
const fs = require('fs');

var tokenRouter = module.exports = exports = express.Router();

// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => {
    fs.writeFileSync("tokens.json", req.body.token, { flags:'a+' });
    console.log("TOKEN: " + req.body.token);
});