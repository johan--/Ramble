define([
    "App", "lobby/model", "Lobby/route", "Lobby/controller", "Lobby/view",
    "LobbyIndex/route", "LobbyIndex/controller", "LobbyIndex/view",
    "LobbyEdit/route", "LobbyEdit/controller", "LobbyEdit/view",
    "LobbyRemove/route", "LobbyRemove/controller", "LobbyRemove/view",
    "Lobbies/route", "Lobbies/controller", "Lobbies/view",
    "LobbiesAdd/route", "LobbiesAdd/controller", "LobbiesAdd/view"
], function (App, Lobby, LobbyRoute, LobbyController, LobbyView,
             LobbyIndexRoute, LobbyIndexController, LobbyIndexView,
             LobbyEditRoute, LobbyEditController, LobbyEditView,
             LobbyRemoveRoute, LobbyRemoveController, LobbyRemoveView,
             LobbiesRoute, LobbiesController, LobbiesView,
             LobbiesAddRoute, LobbiesAddController, LobbiesAddView) {
    "use strict";

    return {
        initialize : function () {
            App.Lobby = Lobby;

            App.Lobby.FIXTURES = App.data.lobbies;

            App.LobbyRoute = LobbyRoute;
            App.LobbyController = LobbyController;
            App.LobbyView = LobbyView;

            App.LobbyIndexRoute = LobbyIndexRoute;
            App.LobbyIndexController = LobbyIndexController;
            App.LobbyIndexView = LobbyIndexView;

            App.LobbyEditRoute = LobbyEditRoute;
            App.LobbyEditController = LobbyEditController;
            App.LobbyEditView = LobbyEditView;

            App.LobbyRemoveRoute = LobbyRemoveRoute;
            App.LobbyRemoveController = LobbyRemoveController;
            App.LobbyRemoveView = LobbyRemoveView;

            App.LobbiesRoute = LobbiesRoute;
            App.LobbiesController = LobbiesController;
            App.LobbiesView = LobbiesView;

            App.LobbiesAddRoute = LobbiesAddRoute;
            App.LobbiesAddController = LobbiesAddController;
            App.LobbiesAddView = LobbiesAddView;
        }
    };
});
