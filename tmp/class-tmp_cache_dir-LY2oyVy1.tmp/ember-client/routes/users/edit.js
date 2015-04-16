define('ember-client/routes/users/edit', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      console.log('edit mode');
      return this.store.find('user', params.user_id);
    }
    // actions: {
    //     goBack: function(){
    //         this.transitionTo('users');
    //     },
    //     save: function(){
    //       var user = this.store.get('model');
    //       console.log(user);
    //       user.save();
    //       this.transitionToRoute('users');
    //     }
    // }
  });

});