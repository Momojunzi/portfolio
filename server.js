var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('pages/portfolio');
});

app.listen(PORT, function(){
  console.log("listening on port: " + PORT);
});
