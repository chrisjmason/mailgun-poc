var emoji = require('node-emoji');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

var routes = require("./src/routes/routes.js")(app);
app.route('/', routes);    

app.listen(4200);

console.log(emoji.get('cat'), emoji.get('joy'), "up and running", emoji.get('joy'), emoji.get('cat')); 
