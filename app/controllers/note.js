import Ember from 'ember';

var noteController = Ember.Controller.extend({
	refreshEditorFlag: false,
	isTyping: false,
	isSaving: false,
  promptDelete: false,

	isTypingObserver: function() {
		if (!this.get('isTyping')) {
			this.send('save');
		}
	}.observes('isTyping'),

  editorOptions: function() {
    var options = {
      buttons: ["bold", "italic"],
      placeholder: 'New note...'
    };

    return JSON.stringify(options);
  }.property(),

	actions: {
		save: function() {
			if (this.get('model.isNew')) {
				this.set('model.createdAt', new Date());
			}
			this.set('isSaving', true);
      this.set('model.updatedAt', new Date());
      this.get('model').save().then(() => {
				this.set('isSaving', false);
			});
		},
		refreshEditor: function() {
			this.set('refreshEditorFlag', true);
		}
	}
});

export default noteController;
