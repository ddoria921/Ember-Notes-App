import Ember from 'ember';

var applicationController = Ember.Controller.extend({
	activeNoteId: null,
	classNames: [':app-container'],

	init: function() {
		this._super.apply(this, arguments);
	},

	activeNote: null,
	refreshEditorFlag: false,
	isTyping: false,

	isTypingObserver: function() {
		if (!this.get('isTyping')) {
			this.send('save');
		}
	}.observes('isTyping'),

	// data
	sortedNotes: function() {
		return this.get('model').sortBy('createdAt').reverseObjects();
	}.property('model.[]'),

	actions: {
		newNote: function() {
			this.store.createRecord('note', {
				body: 'New note...',
				createdAt: new Date()
			});
		},
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
		refreshEditor: function() {
			this.set('refreshEditorFlag', true);
		}
	}
});

export default applicationController;