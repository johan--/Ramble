'use strict';

/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

var setupPassportForSocketIO = function () {
    //TODO: Fix to make passport.js work with websockets!
    //see http://stackoverflow.com/questions/17365444/sails-js-passport-js-authentication-through-websockets/18343226#18343226
    var passport = require('passport'),
        initialize = passport.initialize(),
        session = passport.session(),
        http = require('http'),
        methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

    sails.removeAllListeners('router:request');
    sails.on('router:request', function (request, response) {
        initialize(request, response, function () {
            session(request, response, function (error) {
                var index;

                if (error) {
                    sails.config[500](500, request, response);
                } else {
                    for (index = 0; index < methods.length; index += 1) {
                        request[methods[index]] = http.IncomingMessage.prototype[methods[index]].bind(request);
                    }

                    sails.router.route(request, response);
                }
            });
        });
    });
};

module.exports.bootstrap = function (cb) {

    var mongoose,
        db;

    mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/ramble');

    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        var kittySchema,
            Kitten,
            silence;

        kittySchema = mongoose.Schema({
            name: String
        });

        Kitten = mongoose.model('Kitten', kittySchema);

        silence = new Kitten({ name: 'Silence' });

        silence.save(function (err, fluffy) {

        });
    });

    setupPassportForSocketIO();

    cb();
};
