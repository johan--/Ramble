/* jshint maxstatements: false */
define(function (require) {
    "use strict";

    var App = require("App");

    return {
        initialize: function () {
            App.LobbyRoute = require("lobby/root/route");
            App.LobbyController = require("lobby/root/controller");

            App.LobbyIndexRoute = require("lobby/index/route");
            App.LobbyIndexController = require("lobby/index/controller");

            App.LobbyEditRoute = require("lobby/edit/route");
            App.LobbyEditController = require("lobby/edit/controller");

            App.LobbyDeleteRoute = require("lobby/delete/route");
            App.LobbyDeleteController = require("lobby/delete/controller");

            App.LobbyListRoute = require("lobby/list/route");
            App.LobbyListController = require("lobby/list/controller");

            App.LobbyCreateRoute = require("lobby/create/route");
            App.LobbyCreateController = require("lobby/create/controller");
        }
    };
});
