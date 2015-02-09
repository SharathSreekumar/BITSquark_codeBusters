var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
//var mongoose = require('mongoose');

var routeModel = require('../models/Route2');

exports.initPage = function(req,res){
    res.render('index');
}

exports.createRoute = function(req,res){
    res.render('create');
}

exports.postNewRoute = function(req,res){    // this function is to store value using 'post' operation   
    /*var routee = new routeModel();
    routee.operator = req.body.operator;
    routee.busType = req.body.bustype;
    routee.src1 = req.body.src1;
    routee.dept1 = req.body.dept1;
    routee.src2 = req.body.src2;
    routee.dept2 = req.body.dept2;
    routee.src3 = req.body.src3;
    routee.dept3 = req.body.dept3;
    routee.dest1 = req.body.dest1;
    routee.arr1 =req.body.arr1;
    routee.dest2 = req.body.dest2;
    routee.arr2 =req.body.arr2;
    routee.dest3 = req.body.dest3;
    routee.arr3 =req.body.arr3;
    routee.price = req.body.cost;
    routee.save();*/
    
    require('mongodb').connect(mongo.url, function(err, conn) {
      var collection = conn.collection('route');

      // create message record
      var parsedUrl = require('url').parse(req.url, true);
      var queryObject = parsedUrl.query;
      //var name = (queryObject["name"] || 'Bluemix');
      //var message = { 'message': 'Hello, ' + name, 'ts': new Date() };
      collection.insert(message, {safe:true}, function(err){
         if (err) { console.log(err.stack); }
         //res.writeHead(200, {'Content-Type': 'text/plain'});
         res.write(JSON.stringify(message));
         res.end('\n');
      });
   });
}

exports.displayAllRoute = function(req,res){
    routeModel.find(function(err,routes){
        if(err)
            res.send(err);
        //res.json(courses);
        res.render('displayList',{
            routes : routes
        });
    });
}

exports.disRoute = function(req,res){
    res.render('displayList');
}

exports.displayRoute = function(req,res){
    routeModel.find(req.body.start,req.body.ending,function(err,routes){
        for(var r in routes)
        {
            if(routes[r].src1==req.body.start)
            {   
                if(routes[r].dest1==req.body.ending)
                {
                    if(err)
                        res.send(err);
                    //res.json(courses);
                    res.render('displayList',{
                        routes : routes[r]
                    });
                }
                else
                {
                    res.json("");
                }
            }
        }
    });
}