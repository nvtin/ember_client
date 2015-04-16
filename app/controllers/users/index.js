import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage"],
  // binding the property on the paged array
  // to the query params on the controller
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages",
  // set default value for paginate
  page: 1,
  perPage: 10,

  actions: {
    delete: function(user) {
    	if (window.confirm("Are you sure you want to delete this user?")) {
      	user.destroyRecord();
      	this.transitionToRoute('users');
      }
    }

  }
});