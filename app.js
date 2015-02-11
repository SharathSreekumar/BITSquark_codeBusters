/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// setup middleware

var routeController = require('./controllers/route');
var routeModel = require('./models/Route2');
var userController = require('./controllers/users');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended:false
}));

app.use(express.static('public'));
//mongoose

/*if (process.env.VCAP_SERVICES) {
   var env = JSON.parse(process.env.VCAP_SERVICES);
   var mongo = env['mongodb-2.4'][0].credentials;
} else {
   var mongo = {
      "username" : "bluebus",
      "password" : "secret",
      "url" : "mongodb://bluebus:secret@localhost:27017/test"
   }
};*/

mongoose.connect('mongodb://localhost:27017/travel2');
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});


app.get('/', function(req, res){
	res.render('index');
});

//app.get('/',routeController.initPage);
app.get('/search',routeController.disRoute);
app.get('/all',routeController.displayAllRoute);
app.post('/search',routeController.displayRoute);
app.get('/admin',routeController.createRoute);
app.post('/admin',routeController.postNewRoute);
app.get('/adduser',userController.createUser);
app.post('/adduser',userController.postNewUser);
app.get('/login',userController.checkUser);
app.post('/login',userController.getUserByUser);

//app.listen(3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
app.listen(port, host);
