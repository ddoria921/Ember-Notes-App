import Em from 'ember';

var applicationRoute = Em.Route.extend({
	model: function() {
		return this.store.findAll('note');
	},
	actions: {
		feedMe: function() {
			this.refresh();
		},
		showNote: function(note) {
			this.transitionTo('note', note.get('id'));
      this.controller.set('activeNote', note);
		}
	}
});

export default applicationRoute;
