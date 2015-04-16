import Ember from 'ember';

export default Ember.Route.extend({
	model: function model() {
		// return this.store.find('user');
		// console.log(this.store.find('user'));
		return this.store.find('user');
		// return [{"id":1,"first_name":"tin","last_name":"ngo van","email":"tinnv@gmail.com","url":"http://localhost:3000/users/1"},{"id":2,"first_name":"ngo","last_name":"thanhvan","email":"tinnv2@gmail.com","url":"http://localhost:3000/users/2"}];
	}
});