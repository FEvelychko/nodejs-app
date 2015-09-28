/**
 * Created by Maksym on 27.09.2015.
 */

var db = require('./../db/index'); //var phrases = require('./../db/ru');
var log = require('../logger')(module);
function User(name){
    this.name = name;
}
User.prototype.hello = function(who){
    // console.log(db.getPhrase("Hello") + ", " + who.name); // console.log(phrases.Hello + ", " + who.name);
    log(db.getPhrase("Hello") + ", " + who.name); // console.log(phrases.Hello + ", " + who.name);
};
module.exports = User; // global.User = User // this.User = User // module.exports = User // exports.User = User
//console.log(module);