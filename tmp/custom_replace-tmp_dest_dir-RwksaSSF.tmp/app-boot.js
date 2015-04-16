/* jshint ignore:start */

define('ember-client/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-client/tests/test-helper");
} else {
  require("ember-client/app")["default"].create({"name":"ember-client","version":"0.0.0.65f84609"});
}

/* jshint ignore:end */
