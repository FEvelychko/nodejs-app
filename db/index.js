/**
 * Created by Maksym on 27.09.2015.
 */

var phrases;
exports.connect = function(){
    phrases = require('./ru');
};

exports.getPhrase = function(name){
    if(!phrases[name]){
        throw new Error('This phrase is not exist: ' + name);
    }
    return phrases[name];
};
