var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routeController = require('./controllers/route');
var routeModel = require('./models/Route2');
var userController = require('./controllers/users');
var app=express();

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
mongoose.connect('mongodb://localhost:27017/travel2');
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});

app.get('/',routeController.initPage);
app.get('/search',routeController.disRoute);
app.get('/all',routeController.displayAllRoute);
app.post('/search',routeController.displayRoute);
app.get('/admin',routeController.createRoute);
app.post('/admin',routeController.postNewRoute);
app.get('/adduser',userController.createUser);
app.post('/adduser',userController.postNewUser);
app.get('/login',userController.checkUser);
app.post('/login',userController.getUserByUser);

app.listen(3000);