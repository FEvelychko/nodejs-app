
    var express = require('express');
    var http = require('http');
    var path = require('path');
    var config = require('./config');
    //var log = require('./libs/log')(module);
    var app = express();
    //app.set('port', config.get('port'));


    app.set('templates', __dirname + '/templates');
    app.set('view engine', 'ejs');
    app.use(express.favicon()); // favicon.ico

    if(app.get('env') == 'development'){
        app.use(express.logger('dev')); // in out will be smth like GET / 404 10s
    }
    else{
        app.use(express.logger('default'));
    }

    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(app.router);

    /*app.get('/', function(req,res){
        res.end("Test");
    });*/

    app.use(function(req,res){
        //if(req.url == "/max"){
            //res.end('Hey Max');
            res.render("index", {
                body: '<b>Hello</b>'
            });
        //}
    });

    //app.set('port', config.get('port'));

    http.createServer(app).listen(config.get('port'), function(){
        //console.log('Express server listening on port ' + config.get('port'));
        console.log('Express server listening on port ' + config.get('port'));
    });

    // Middleware

    /*app.use(function(req, res, next) {
        if (req.url == '/') {
            res.end("Hello");
        } else {
            next();
        }
    });

    app.use(function(req, res, next) {
        if (req.url == '/forbidden') {
            next(new Error("wops, denied"));
        } else {
            next();
        }
    });

    app.use(function(req, res, next) {
        if (req.url == '/test') {
            res.end("Test");
        } else {
            next();
        }
    });

    app.use(function(req, res) {
        res.send(404, "Page Not Found Sorry");
    });*/

    /*app.use(function(err, req, res, next) {
        // NODE_ENV = 'production'
        if (app.get('env') == 'development') {
            var errorHandler = express.errorHandler();
            errorHandler(err, req, res, next);
        } else {
            res.send(500);
        }
    });*/
    /*

     var routes = require('./routes');
     var user = require('./routes/user');

     // all environments
     app.set('port', process.env.PORT || 3000);
     app.set('templates', __dirname + '/templates');
     app.set('view engine', 'ejs');
     app.use(express.favicon());
     app.use(express.logger('dev'));
     app.use(express.bodyParser());
     app.use(express.methodOverride());
     app.use(express.cookieParser('your secret here'));
     app.use(express.session());
     app.use(app.router);
     app.use(express.static(path.join(__dirname, 'public')));

     app.get('/', routes.index);
     app.get('/users', user.list);

     */
