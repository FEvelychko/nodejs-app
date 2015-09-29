/**
 * Created by Maksym on 29.09.2015.
 */
    // 127.0.0.1/echo&message=Hello -> Hello
    // http://127.0.0.1:1337/echo?message=Hello%20Max,%20How%20is%20you%20deals? -> Hello Max, How is you deals?

    /*var http = require('http');
    var url = require('url');

    var server  = new http.Server(function(req, res){
       var urlParsed = url.parse(req.url, true);
        if(urlParsed.pathname == '/echo' && urlParsed.query.message){
            res.end(urlParsed.query.message);
        }
        else{
            res.statusCode = 404;
            res.end("Page not found");
        }
    });
    server.listen(1337, '127.0.0.1');*/

    // working with headers

    var http = require('http');
    var url = require('url');
    var server = new http.Server(function(req, res){
        //console.log(req.headers);

        var urlParsed = url.parse(req.url, true);
        if(urlParsed.pathname == '/echo' && urlParsed.query.message){
            //res.statusCode = 200; // Ok
            //res.writeHead(200, "OK", {"Cache-control": 'no-cache'});
            res.setHeader('Cache-control', 'no-cache'); // setting caching // removeHeader
            res.end(urlParsed.query.message);
        }
        else{
            res.statusCode = 404; // Not found
            res.end("Page not found");
        }
    });

    server.listen(1337, '127.0.0.1');