define('ember-client/controllers/users/new', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    needs: ['user'],
    actions: {
      save: function save() {
        var user = this.get('model');
        console.log(user);
        user.save();
        this.transitionToRoute('users');
      }
    }
  });

});