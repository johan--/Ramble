(function () {
    "use strict";

    require.config({
        enforceDefine: true,
        baseUrl: "javascripts",
        paths: {
            io: "../vendor/socket.io/socket.io",
            "sails-io": "../vendor/socket.io/sails.io",
            ember: "../bower_components/ember/ember",
            "ember-data": "../bower_components/ember-data-shim/ember-data",
            //TODO: Use Dockyards' easyform/validations via their bower-registry.
            "ember-easyform": "../bower_components/ember-dockyard-validations/easyForm/ember-easyForm-1.0.0.beta.1",
            "ember-validations": "../bower_components/ember-dockyard-validations/validations/ember-validations-1.0.0.beta.1",
            handlebars: "../bower_components/handlebars.js/dist/handlebars.runtime",
            jquery: "../bower_components/jquery/jquery",
            bootstrap: "../bower_components/sass-bootstrap/dist/js/bootstrap",
            "google-analytics": "../bower_components/google-analytics/index"
        },
        shim: {
            io: {
                exports: "io"
            },
            "sails-io": {
                deps: ["io"],
                exports: "io"
            },
            ember: {
                deps: ["jquery", "handlebars"],
                exports: "Ember"
            },
            "ember-data": {
                deps: ["ember"],
                exports: "DS"
            },
            "ember-easyform": {
                deps: ["ember"],
                exports: "Ember.EasyForm"
            },
            "ember-validations": {
                deps: ["ember"],
                exports: "Ember.Validations"
            },
            handlebars: {
                deps: ["jquery"],
                exports: "Handlebars"
            },
            jquery: {
                exports: "jQuery"
            },
            bootstrap: {
                deps: ["jquery"],
                exports: "jQuery"
            },
            "google-analytics": {
                exports: "ga"
            }
        },
        deps: ["init/init"]
    });
}());
