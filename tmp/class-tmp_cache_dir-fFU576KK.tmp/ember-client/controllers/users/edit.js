define('ember-client/controllers/users/edit', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        needs: ['user'],
        actions: {
            save: function save() {
                var user = this.get('model');
                user.save();
                this.transitionToRoute('users');
            }
        }
    });

});