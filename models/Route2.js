//var mongodb = require('mongodb');
var mongoose = require('mongoose');

var routeSchema = new mongoose.Schema({
    id:Number,
    operator:String,
    busType:String,
    src1:String,
    dept1:String,
    src2:String,
    dept2:String,
    src3:String,
    dept3:String,
    dest1:String,
    arr1:String,
    dest2:String,
    arr2:String,
    dest3:String,
    arr3:String,
    price:Number
});

module.exports = mongoose.model('Route',routeSchema);