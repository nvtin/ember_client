define('ember-client/controllers/users/index', ['exports', 'ember', 'ember-cli-pagination/addon/computed/paged-array'], function (exports, Ember, pagedArray) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    pagedContent: pagedArray['default']('content', { infinite: true }),
    // needs: ['user'],
    actions: {
      'delete': function _delete(user) {
        if (window.confirm('Are you sure you want to delete this user?')) {
          user.destroyRecord();
          this.transitionToRoute('users');
        }
      },
      loadNext: function loadNext() {
        this.get('pagedContent').loadNextPage();
      }
    }
  });

});