import Em from 'ember';

var noteRoute = Em.Route.extend({
	model: function(params) {
		return this.store.find('note', params.noteId);
	},

	resetController: function(controller) {
		controller.set('refreshEditorFlag', true);
	},

	actions: {
    //-- Handle error hook --//
    error: function(error /*, transition*/) {
      Em.Logger.error('Something went wrong in the noteRoute', error);
      this.transitionTo('application');
    },

    //-- Custom Actions --//
    deleteNote: function(note) {
      note.destroyRecord().then(() => {
        var allNotes = this.controllerFor('application').get('sortedNotes');

        if (Em.isPresent(allNotes)) {
          this.transitionTo('application', allNotes.get('firstObject'));
        } else {
          this.transitionTo('application');
        }
      });
    }
	}
});

export default noteRoute;
