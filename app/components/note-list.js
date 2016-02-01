import Ember from 'ember';

export default Ember.Component.extend({
	// defaults
	classNames: ['note-list'],
	tagName: 'ul',

	// properties
	defaultSelection: null,
	notes: null,
	selection: null,

	actions: {
		selectNote: function(note) {
			this.set('selection', note);
			this.sendAction('onSelect', note);
		},

    deleteNote: function(note) {
      this.sendAction('onDelete', note);
    }
	}
});
