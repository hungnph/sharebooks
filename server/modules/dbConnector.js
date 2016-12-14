//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
//const Server = require('mongodb').Server;
const url = 'mongodb://localhost';
const port = 27017;

/**
 *  Open a connection to the database
 **/
module.exports = {
    openConnection : function () {        
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log('Successfully connected ---->');
        });
    } 
}

