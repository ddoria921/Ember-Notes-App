import Ember from 'ember';

var applicationRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('note');
	},
	setupController: function(controller, notes) {
		this._super(controller, notes);
	},
	actions: {
		feedMe: function() {
			this.refresh();
		}
	}
});

export default applicationRoute;