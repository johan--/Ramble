define([
    "Ember"
], function (Ember) {
    "use strict";

    return Ember.ObjectController.extend({
        documentTitle : Ember.computed(function () {
            return "Remove - " + this.get("controllers.lobby.documentTitle");
        }).property("controllers.lobby.documentTitle"),
        isLeaf : true,
        needs : ["lobby"]
    });
});
