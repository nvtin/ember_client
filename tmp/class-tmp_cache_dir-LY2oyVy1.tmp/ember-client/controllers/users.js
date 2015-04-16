define('ember-client/controllers/users', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    // needs: ['user'],
    actions: {
      'delete': function _delete(user) {
        user.destroyRecord();
        this.transitionToRoute('users');
      }
    }
  });

});