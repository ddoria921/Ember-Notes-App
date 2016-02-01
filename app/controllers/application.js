import Em from 'ember';

var applicationController = Em.Controller.extend({
	activeNote: null,

  hideSidePanel: false,

	// data
	sortedNotes: function() {
		return this.get('model').sortBy('updatedAt', 'createdAt').reverseObjects();
	}.property('model.[]', 'model.@each.updatedAt'),

	actions: {
    createNote: function() {
      this.transitionToRoute('new');
      // Em.run.next(this, ()=> {
      //   this.set('activeNote', this.get('sortedNotes.firstObject'));
      // });
    },

    deleteNote: function(note) {
      this.get('model').removeObject(note);
      if (Em.isEmpty(this.get('model'))) {
        this.send('createNote');
      } else {
        this.send('showNote', this.get('model.lastObject'));
      }
      note.destroyRecord();
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
