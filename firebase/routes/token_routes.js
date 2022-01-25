const app = require('express');
const parser = require('body-parser').json();

var tokenRouter = module.exports = exports = app.Router();

tokenRouter.post("/setToken", parser, (req, res) => {
    console.log('TOKEN' + req.body.token);
});


