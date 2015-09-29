/**
 * Created by Maksym on 29.09.2015.
 */

    var express = require('express');
    var http = require('http');
    var path = require('path');

    var app = express();
    app.set('port', 3000);
    http.createServer(app).listen(app.get('port'), function(){
        console.log("Express server listening on port " + app.get('port'))
    });
    // Middleware //
    app.use(function(req,res,next){
        if(req.url == "/"){
            res.end('Hello');
        }
        else{
            next();
        }
    });
    app.use(function(req,res,next){
        if(req.url == "/forbidden"){
            next(new Error("wops, denied")); // передача ошыбкы дальше по цепочке
        }
        else{
            next();
        }
    });
    /*app.use(function(req,res,next){
        if(req.url == "/test"){
            res.end("Test");
        }
        else{
            next();
        }
        });*/
    /*app.use(function(req,res,next){
        if(req.url == "/error"){
            //BLABLA();
            setTimeout(function(){throw new Error("..."); }, 10);
        }
        else{
            next();
        }
    });*/
    app.use(function(req,res){
        res.send(404, "Page Not Found, Sorry");
    });
    app.use(function(err,req,res,next){
        // Node_Env = 'production'
        if(app.get('env') == 'development'){
            var errorHandler = express.errorHandler();
            errorHandler(err, req, res, next);
        }
        else{
            res.send(500);
        }
    });









