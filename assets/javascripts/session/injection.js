define(function(require) {
    'use strict';

    var session = require('session/object');

    return {
        name: 'session',
        initialize: function(container, application) {
            application.register('session:main', session, {
                singleton: true
            });

            application.inject('route', 'session', 'session:main');
            application.inject('controller', 'session', 'session:main');
        }
    };
});
