import Em from 'ember';
import { task, timeout } from 'ember-concurrency';

const { computed } = Em;

var applicationController = Em.Controller.extend({
	activeNote: null,

  hideSidePanel: false,

  init: function() {
    Em.run.scheduleOnce('afterRender', () => {
      Em.$('body div').first().addClass('app-container');
    });
  },

	// data
	sortedNotes: computed('model.[]', 'model.@each.updatedAt', function() {
		return this.get('model').sortBy('updatedAt', 'createdAt').reverseObjects();
	}),

  deleteNote: task(function *(note) {
    yield timeout(150);
    this.get('model').removeObject(note);
    if (Em.isEmpty(this.get('model'))) {
      this.send('createNote');
    } else {
      this.send('showNote', this.get('sortedNotes.firstObject'));
    }
    yield note.destroyRecord();
  }).drop(),

	actions: {
    createNote() {
      this.transitionToRoute('new');
    },

    deleteNote(note) {
      this.get('deleteNote').perform(note);
    },

    signOut() {
      this.get('session').close().then(()=> {
        this.transitionToRoute('signin');
      });
    },

    toggleSidePanelHidden() {
      this.toggleProperty('hideSidePanel');
    }
	}
});

export default applicationController;
