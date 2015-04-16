import Ember from 'ember';

export default Ember.Route.extend({
    model: function model() {
        console.log('edit mode');
        return this.modelFor('user');
    },
    actions: {
        goBack: function goBack() {
            this.transitionTo('users');
        }
    }
});