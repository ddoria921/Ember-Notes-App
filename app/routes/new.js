import Ember from 'ember';

var newNoteRoute = Ember.Route.extend({
	model() {
		return this.store.createRecord('note');
	},
	renderTemplate() {
		this.render('note');
	},
	resetController(controller) {
		controller.set('refreshEditorFlag', true);
	}
});

export default newNoteRoute;
