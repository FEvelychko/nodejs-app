/**
 * Created by Maksym on 29.09.2015.
 */

    var EventEmitter = require('events').EventEmitter;
    var server = new EventEmitter;

    server.on('request', function(request){
        request.approved = true;
    });
    server.on('request', function(request){
        console.log(request);
    });
    server.emit('request', {from: "Client"});
    server.emit('request', {from: "Else Client"});

    /*var EventEmitter = require('events').EventEmitter;
    var server = new EventEmitter;
    server.on('error', function(){});
    server.emit('error', new Error("server mistake"));*/
