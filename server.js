var express = require('express');
var exphbrs = require('express-handlebars');
var router = require('./controllers/burgers_controller');
var PORT = process.env.PORT || 8080;


var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

app.engine("handlebars", exphbrs({defaultLayout: main}));
app.set("view engine", "handlebars");

app.listen(PORT, function(){
  console.log('App is listening on http://localhost:' + PORT);
})