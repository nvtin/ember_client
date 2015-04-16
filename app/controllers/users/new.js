import Ember from 'ember';

export default Ember.Controller.extend({
	// needs: ['user'],
 	actions: {
    save: function(){
      var user = this.get('model');
      user.save();
      this.transitionToRoute('users');
    }
  }
});
