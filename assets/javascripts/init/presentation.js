define(function(require) {
    'use strict';

    var Ember = require('ember'),
        EmberEasyForm = require('ember-easyform');

    require('bootstrap');

    Ember.TextSupport.reopen({
        classNames: ['form-control']
    });

    Ember.FocussedTextField = Ember.TextField.extend({
        becomeFocused: function() {
            this.$().focus();
        }.on('didInsertElement')
    });

    EmberEasyForm.Config.registerInputType('focussed_textfield', Ember.FocussedTextField);

    EmberEasyForm.Config.registerWrapper('default', {
        formClass: '',
        fieldErrorClass: 'has-error',
        inputClass: 'form-group',
        errorClass: 'help-block',
        hintClass: 'help-block',
        labelClass: 'control-label',
        wrapControls: false,
        controlsWrapperClass: ''
    });
});
