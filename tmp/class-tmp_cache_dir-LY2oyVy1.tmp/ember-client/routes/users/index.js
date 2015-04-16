define('ember-client/routes/users/index', ['exports', 'ember', 'ember-cli-pagination/remote/route-mixin'], function (exports, Ember, RouteMixin) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		// model: function(){
		// 	return this.store.find('user');
		// 	// return [{"id":1,"first_name":"tin","last_name":"ngo van","email":"tinnv@gmail.com","url":"http://localhost:3000/users/1"},{"id":2,"first_name":"ngo","last_name":"thanhvan","email":"tinnv2@gmail.com","url":"http://localhost:3000/users/2"}];
		// }
		model: function model(params) {
			return this.findPaged('user', params);
		}
	});

});