var mongoose = require('mongoose');
//var mongodb = require('mongodb');
//var bcrypt=require('bcrypt-nodejs');
//var crypto=require('crypto');

var userSchema = new mongoose.Schema({
    id:Number,
    name:String,
    userid:String,
    password:String
});

module.exports = mongoose.model('User',userSchema);