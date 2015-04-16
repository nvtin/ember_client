import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/addon/computed/paged-array';

export default Ember.Controller.extend({
  pagedContent: pagedArray('content', { infinite: true }),
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