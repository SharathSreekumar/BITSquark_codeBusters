var mongodb = require('mongodb');
//var bcrypt=require('bcrypt-nodejs');
//var crypto=require('crypto');

var userSchema = new mongodb.Schema({
    id:Number,
    name:String,
    userid:String,
    password:String
});

module.exports = mongodb.model('User',userSchema);