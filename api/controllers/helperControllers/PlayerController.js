'use strict';

var Bookshelf = require('../../bs-models/bookshelf'),
    crudHelper = require('./helpers/findHelper'),
    optionsCreator = require('./helpers/findOptionsCreator'),
    Player = require('../../bs-models/player');

module.exports = {
    find: function (request, response) {
        var Players = Bookshelf.Collection.extend({model: Player}),
            relations = ['ownedLobbies', 'joinedLobbies'],
            id = request.param('id'),
            options;

        if (id) {
            Player.forge({id: id}).fetch({withRelated: relations}).then(function (player) {
                response.send({
                    player: player
                });

                //Player.subscribe(request.socket, player);
            });
        } else if (request.param('ids')) {
            var playerCollection = Players.forge();

            playerCollection.query().whereIn(ids).then(function (players) {
                playerCollection.add(players);

                return playerCollection.load(relations);
            }).then(function (players) {
                    response.send({
                        players: players
                    });

                    //Player.subscribe(request.socket);
                    //Player.subscribe(request.socket, players);
                });
        } else {
            options = optionsCreator.getFindOptions(Players, relations, request);

            crudHelper.find(options).then(function (players) {
                response.send({
                    players: players
                });

                //Player.subscribe(request.socket);
                //Player.subscribe(request.socket, players);
            });
        }
    },
    create: function (request, response) {
        //TODO; Refactor syntax without using extra variable
        var values = {
                username: request.param('username'),
                password: request.param('password'),
                email: request.param('email')
            },
            player = Player.forge(values);

        player.hashPassword().then(function () {
            return player.save();
        }).then(function (player) {
                response.send({
                    player: player
                });
            });
    },
    update: function (request, response) {
        var values = {
                id: request.param('id'),
                username: request.param('username'),
                password: request.param('password'),
                email: request.param('email')
            },
            player = Player.forge(values);

        player.hashPassword().then(function () {
            return player.save();
        }).then(function (player) {
                response.send({
                    player: player
                });

                //Player.publishUpdate(player.id, player.toJSON());
            });
    },
    destroy: function (request, response) {
        var id = request.param('id');

        Player.forge({id: id}).destroy().then(function () {
            request.logOut();

            response.send({
                player: {
                    id: id
                }
            });

            //Player.publishDestroy(player.id);
        });
    }
};