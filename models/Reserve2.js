//var mongodb = require('mongodb');
var mongoose = require('mongoose');
//var bcrypt=require('bcrypt-nodejs');
//var crypto=require('crypto');

var reserveSchema = new mongoose.Schema({
    id:Number,
    travllerN:String,
    travellerA:Number,
    gender:String,
    src:String,
    dept:String,
    dest:string,
    arr:String,
    seat:String,
    userid:String,
    mobileNo:Number
});

module.exports = mongoose.model('Reserve',reserveSchema);