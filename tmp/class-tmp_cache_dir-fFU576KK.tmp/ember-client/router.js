define('ember-client/router', ['exports', 'ember', 'ember-client/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  exports['default'] = Router.map(function () {
    // this.resource('users');
    this.resource('users', function () {
      this.resource('users');
      this.resource('user', { path: '/:user_id' }, function () {
        this.route('edit');
      });
      this.resource('user', { path: '/:user_id' }, function () {
        this.route('show');
      });
    });
    // this.route('user');
  });

});