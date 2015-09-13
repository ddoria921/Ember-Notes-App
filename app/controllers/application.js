import Ember from 'ember';

var applicationController = Ember.Controller.extend({
	activeNoteId: null,
	classNames: [':app-container'],

	init: function() {
		this._super.apply(this, arguments);
	},

	activeNote: null,
	refreshEditor: false,

	actions: {
		save: function() {
			if (this.get('model.isNew')) {
				this.set('model.createdAt', new Date());
			}
			this.get('model').save();
		},
		deleteAll: function() {
			this.get('notes').forEach(function(note) {
				note.destroyRecord();
			});
		},
		refresh: function() {
			this.set('refreshEditor', true);
		}
	}
});

export default applicationController;