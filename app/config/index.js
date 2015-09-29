/**
 * Created by Maksym on 29.09.2015.
 */

    var nconf = require('nconf');
    var path = require('path');

    nconf.argv()
        .env()
        .file({ file: path.join(__dirname, 'config.json') });

    module.exports = nconf;