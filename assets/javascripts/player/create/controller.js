define(function(require) {
    'use strict';

    var Ember = require('ember');

    return Ember.ObjectController.extend({
        actions: {
            create: function() {
                var model = this.get('model');

                model.validate().then(function() {
                    model.save().then(function() {
                        this.transitionToRoute('login');
                    }.bind(this));
                }.bind(this));
            }
        }
    });
});
