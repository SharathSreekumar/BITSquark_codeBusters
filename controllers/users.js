var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
//var mongoose = require('mongoose');

var usr = require('../models/Users2');

exports.getAllUser = function(req,res){
    usr.find(function(err,user){ 
    if(err)
        res.send(err);
    res.json(user);
    });
}              
    
exports.createUser = function(req,res){
    res.render('signup');
}
    
exports.postNewUser = function(req,res){
    if(req.body.Password == req.body.cPassword)
    {
        var userAcc = new usr();  // usr is same as the variable
        userAcc.name = req.body.uName;
        userAcc.userid = req.body.UserId;
        userAcc.password = req.body.Password;
        userAcc.save();
        res.render('login');
    }
}

exports.checkUser = function(req,res){
    res.render('login');
}

exports.getUserByUser = function(req,res){
    //var userI = new usr();
    var userAcc = new usr();
    usr.find(req.body.uses,function(err,user){
        if(err)
            res.send(err);
        for(var u in user)
        {
            if(req.body.uses == user[u].userid && req.body.pass == user[u].password){
                res.render('reservation');
            }
            else if(req.body.uses == user[u].userid && req.body.pass != user[u].password)
            {
                res.send("Invalid Password...");
                res.render('login');
            }
        }
    });
}
        
exports.deleteUserbyName = function(req,res){
    usr.remove({
        name : req.params.name
    },function(err,user){
        if(err){
            res.send(err);}
            res.json({message: 'successfully deleted'});
    });
}
   
exports.deleteUser = function(req,res){
    usr.remove({_id : req.params.id},function(err,user){
        if(err){
            res.send(err);}
            res.json({message: 'successfully deleted the user ?'});
    });
}