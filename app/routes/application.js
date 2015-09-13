import Ember from 'ember';

var applicationRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('note');
	}
});

export default applicationRoute;