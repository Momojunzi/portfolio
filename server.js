var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(express.static('public'));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// app.get('/', function(req, res) {
//   res.render('pages/portfolio');
// })


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
