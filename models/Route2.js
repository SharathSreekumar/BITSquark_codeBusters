var mongodb = require('mongodb');
var routeSchema = new mongodb.Schema({
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

module.exports = mongodb.model('Route',routeSchema);