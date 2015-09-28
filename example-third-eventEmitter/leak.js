/**
 * Created by Maksym on 29.09.2015.
 */

    /* утечка памяти */
    var EventEmiiter = require('events').EventEmitter;
    var db = new EventEmiiter();
    db.setMaxListeners(0);

    function Request(){

        var self = this;
        this.bigData = new  Array(1e6).join('*');

        this.send = function(data){
            console.log(data);
        };
        function onData(info){
            self.send(info);
        };
        this.end = function(){
            db.removeListener('data', onData);
        };
        db.on('data', onData);
        /*this.onError = function(){
            self.send("Sorry, We have the problem");
        };
        db.on('data', function(info){
            self.info(info);
        }); // db.emit*/

    }

    setInterval(function(){
        var request = new Request();
        request.end();
        console.log(process.memoryUsage().heapUsed);
    }, 200);