import Ember from 'ember';

export default Ember.Controller.extend({
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