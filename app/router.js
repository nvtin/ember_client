import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('users', function() {
    this.route('new');
    this.resource('user', { path:'/:user_id' }, function(){
      this.route('show');
    });
		this.route('edit', { path:'/:user_id/edit' });
  });

});
