define('ember-client/routes/users/edit', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            console.log('edit mode');
            return this.modelFor('user');
        },
        actions: {
            goBack: function goBack() {
                this.transitionTo('users');
            }
        }
    });

});