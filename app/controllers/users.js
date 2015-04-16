import Ember from 'ember';

export default Ember.Controller.extend({
	// needs: ['user'],
 	actions: {
    delete: function(user) {
      user.destroyRecord();
      this.transitionToRoute('users');
    }
  }
});