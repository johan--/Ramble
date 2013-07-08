define([
    "Ember", "text!players/root/template.handlebars", "player/helpers/item"
], function (Ember, template, playerItem) {
    "use strict";

    return Ember.View.extend({
        defaultTemplate : Ember.Handlebars.compile(template),
        playerItem : playerItem
    });
});