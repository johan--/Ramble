define([
    "App", "text!config.json", "text!data.json", "RouterInit", "application/init", "index/init", "lobby/init"
], function (App, config, data, RouterInit, ApplicationInit, IndexInit, LobbyInit) {
    "use strict";

    return {
        initialize : function () {
            App.config = JSON.parse(config);
            App.data = JSON.parse(data);

            RouterInit.initialize();
            ApplicationInit.initialize();
            IndexInit.initialize();
            LobbyInit.initialize();

            App.advanceReadiness();
        }
    };
});
