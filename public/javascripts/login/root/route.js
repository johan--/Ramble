define([
    "Ember"
], function (Ember) {
    "use strict";

    return Ember.Route.extend({
        model : function () {
            //TODO: Use App.Player.createRecord();?
            return {};
        },
        afterModel : function () {
            if (this.get("controller.isLoggedIn")) {
                this.transitionTo("index");
            }
        }
    });
});