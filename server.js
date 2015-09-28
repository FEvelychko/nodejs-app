/* ћодули дл€ ноди: подключенние - require, переменние - var, exports, global, виды модулей - JS, NODE, JSON */

    var User = require('./user/index');
    var db = require('./db');
    db.connect();

    function run(){
        var max = new User('max'); // var max = new user.User('max');
        max.hello(max);
        console.log(db.getPhrase("Run successful"))
    }

    if(module.parent){
        exports.run = run;
    } else{
        run();
    }



























/* виды переменных в модуле:
         var
         exports
         global
*/
/* виды модулей:
         JS
         Node
         JSON
*/
















    /*var http = require('http');
    var static = require('node-static');
    var file = new static.Server('.');

    http.createServer(function(req, res) {
        file.serve(req, res);
    }).listen(8080);

    console.log('Server running on port 8080');*/


    //alert('asa');

    /*var xmlhttp;

    var loadXMLDoc = function(url, callback){

        //var xmlhttp;
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }
        else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = callback;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    };

    function myFunction(){

        loadXMLDoc("ajax_info.txt", function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
            }
        });
        loadXMLDoc("ajax_second.txt", function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                document.getElementById('secondDiv').innerHTML = xmlhttp.responseText;
            }
        })

    };*/