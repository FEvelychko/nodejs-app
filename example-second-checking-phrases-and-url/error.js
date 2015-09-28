/**
 * Created by Maksym on 28.09.2015.
 */

    var util = require('util');
    var phrases = {
        "Hello":"Hey",
        "world":"planet"
    };

    function PhraseError(message){
        this.message = message; // Error.apply(this, arguments) - calling a constructor of super class
        Error.captureStackTrace(this, PhraseError);
    }
    util.inherits(PhraseError, Error);
    PhraseError.prototype.name = 'PhraseError';

    function HttpError(status, message){
        this.status = status;
        this.message = message;
        Error.captureStackTrace(this, HttpError);
    }
    util.inherits(HttpError, Error);
    HttpError.prototype.name = 'HttpError';

    function getPhrase(name){
        if(!phrases[name]){
            //throw new Error('Phrase is not exist ' + name); // HTTP 500, message
            throw new PhraseError('Phrase ' + name + ' is not exist');
        }
        else{
            return phrases[name];
        }
    }
    function makePage(url){
        if(url != 'index.html'){
            //throw new Error('The URL is not exist'); // HTTP 404
            throw new HttpError(404, 'The URL is not exist');
        }
        else{
            return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
        }
    }

    try {
        var page = makePage('index.html');
        console.log(page);
    }
    catch(e){
        if(e instanceof HttpError){
            console.log(e.status, e.message);
        }
        else{
            console.error("Mistake %s\n message: %s\n stack: %s", e.name, e.message, e.stack);
        }
    }




