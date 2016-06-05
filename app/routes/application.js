import Em from 'ember';

var applicationRoute = Em.Route.extend({
  beforeModel() {
    console.log('Before model app route');
    return this.get("session").fetch().catch((error) => {
      console.log(error);
      this.transitionTo('signin');
    });
  },

  model() {
		return this.store.findAll('note');
	},

	actions: {
		feedMe() {
			this.refresh();
		},

		showNote(note) {
			this.transitionTo('note', note.get('id'));
      this.controller.set('activeNote', note);
		},

    signOut() {
      this.get("session").close();
    }
	}
});

export default applicationRoute;
