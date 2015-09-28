/**
 * Created by Maksym on 28.09.2015.
 */

//var log = require('logger')(module);
module.exports = function(module){
    return function(/*....*/){
        var args = [module.filename].concat(arguments);
        console.log.apply(console, args);
        //console.log.apply(console, arguments);

    }
};
