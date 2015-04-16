import Ember from 'ember';

export default Ember.Route.extend({
	model: function model(params) {
		return this.store.find('user', params.user_id);
	}
});