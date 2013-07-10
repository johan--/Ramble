define([
    "player/helpers/controller", "Ember"
], function (Controller, Ember) {
    "use strict";

    return Controller.extend({
        documentTitle : Ember.computed(function () {
            return this._super() + this.get("username");
        }).property("username", "controllers.player.documentTitle"),
        needs : ["application"],
        isOwnerOfAccount : Ember.computed(function () {
            return this.get("controllers.application.account") === this.get("model");
        }).property("controllers.application.account", "model")
    });
});
