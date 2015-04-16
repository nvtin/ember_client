define('ember-client/routes/users/new', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        model: function model() {
            return this.store.createRecord('user');
        }

    });

});