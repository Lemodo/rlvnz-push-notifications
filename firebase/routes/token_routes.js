const express = require('express');
const jsonParser = require('body-parser').json();
const fs = require('fs');

var tokenRouter = module.exports = exports = express.Router();

// Simple route to accept token from user
tokenRouter.post('/setToken', jsonParser, (req, res) => {
    let data = JSON.stringify(req.body.token);
    fs.writeFileSync("tokens.json", data);  //! write the file somewhere here 
    console.log('TOKEN RECEIVED: ' + req.body.token);
});