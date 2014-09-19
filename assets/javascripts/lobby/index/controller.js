define(function(require) {
    'use strict';

    var Ember = require('ember');

    return Ember.ObjectController.extend({
        membershipOfUser: function() {
            var user = this.get('session.user'),
                lobbyId = this.get('model.id'),
                membershipOfUser;

            if (user) {
                membershipOfUser = user.get('data.memberships').findBy('data.lobby.id', lobbyId);
            }

            return membershipOfUser;
        }.property('model.id', 'session.user'),
        isHost: function() {
            var type = this.get('membershipOfUser.data.type');

            return type === 'host';
        }.property('membershipOfUser.type'),
        isParticipant: function() {
            var type = this.get('membershipOfUser.data.type');

            return type === 'participant';
        }.property('membershipOfUser.type'),
        actions: {
            join: function() {
                var json = {
                    url: '/api/membership/create',
                    data: {
                        lobbyId: this.get('model.id')
                    }
                };

                if (this.get('session.isLoggedIn')) {
                    this.get('socket').emit('get', json, function(data) {
                        if (data.status === 200) {
                            // TODO: show notification?
                            // TODO: Update data in ember-data store? or via websockets?
                            return undefined;
                        }
                    }.bind(this));
                } else {
                    this.transitionToRoute('login');
                }
            },
            leave: function() {
                var json = {
                    url: '/api/membership/destroy/' + this.get('membershipOfUser.id')
                };

                this.get('socket').emit('get', json, function(data) {
                    if (data.status === 200) {
                        // TODO: show notification?
                        return undefined;
                    }
                }.bind(this));
            },
            kick: function(player) {
                var json = {
                    url: '/api/membership/destroy/' + this.get('membershipOfUser.id'),
                    data: {
                        player: player
                    }
                };

                this.get('socket').emit('get', json, function(data) {
                    if (data.status === 200) {
                        // TODO: show notification?
                        return undefined;
                    }
                }.bind(this));
            }
        }
    });
});
