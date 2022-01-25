const express = require('express');
const app = express();

const tokenRouter = require(__dirname + '/routes/token_routes');


app.use('/api', tokenRouter);
app.use('/', express.static(__dirname + "/app"));

module.exports = exports = app.listen(1337, () => {
    console.log("listening on port 1337");
});