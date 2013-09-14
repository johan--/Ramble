define(function (require) {
    "use strict";

    var Ember = require("ember");

    return Ember.Mixin.create(require("login/helpers/transition-to-login-mixin"), {
        checkOwnership: function (owner, transition) {
            if (!this.controllerFor("application").get("isLoggedIn")) {
                this.transitionToLogin(transition);
            } else if (this.controllerFor("application").get("account") !== owner) {
                this.transitionTo("index");
            }
        }
    });
});