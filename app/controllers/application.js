import Em from 'ember';
import { task, timeout } from 'ember-concurrency';

var applicationController = Em.Controller.extend({
	activeNote: null,

  hideSidePanel: false,

	// data
	sortedNotes: function() {
		return this.get('model').sortBy('updatedAt', 'createdAt').reverseObjects();
	}.property('model.[]', 'model.@each.updatedAt'),

  deleteNoteTask: task(function *(note) {
    yield timeout(150);
    this.get('model').removeObject(note);
    if (Em.isEmpty(this.get('model'))) {
      this.send('createNote');
    } else {
      this.send('showNote', this.get('model.firstObject'));
    }
    yield note.destroyRecord();
  }).drop(),

	actions: {
    createNote: function() {
      this.transitionToRoute('new');
    },

    deleteNote: function(note) {
      this.get('deleteNoteTask').perform(note);
      // this.get('model').removeObject(note);
      // if (Em.isEmpty(this.get('model'))) {
      //   this.send('createNote');
      // } else {
      //   this.send('showNote', this.get('model.lastObject'));
      // }
      // note.destroyRecord();
    },

		// deleteAll: function() {
		// 	this.get('notes').forEach(function(note) {
		// 		note.destroyRecord();
		// 	});
		// },

    toggleSidePanelHidden: function() {
      this.toggleProperty('hideSidePanel');
    }
	}
});

export default applicationController;
