define([
    "Ember", "player/helpers/controllerMixin"
], function (Ember, ControllerMixin) {
    "use strict";

    return Ember.ObjectController.extend(ControllerMixin, {
        documentTitle : "Sign up",
        create : function () {
            var model = this.get("model");

            //TODO: Uncomment validation if it gets fixed by ember-data
            //TODO: See: https://github.com/dockyard/ember-validations/issues/26
            //model.validate().then(function () {
            //    if (model.get("isValid")) {
            model.one("didCreate", this, function () {
                //TODO: this should transition to player profile and automatically log player in
                this.transitionToRoute("login");
            });

            model.save();
            //    }
            //});
        }
    });
});