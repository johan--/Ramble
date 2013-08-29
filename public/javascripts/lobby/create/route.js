define(function (require) {
    "use strict";

    var Ember = require("Ember"),
        App = require("App");

    return Ember.Route.extend(require("login/helpers/transitionToLoginMixin"), {
        model: function () {
            return App.Lobby.createRecord();
        },
        deactivate: function () {
            var model = this.get("controller.model");

            if (model.get("isDirty") && !model.get("isSaving")) {
                model.get("transaction").rollback();
            }
        },
        afterModel: function (model, transition) {
            if (!this.controllerFor("application").get("isLoggedIn")) {
                this.transitionToLogin(transition);
            }
        }
    });
});
