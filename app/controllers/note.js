import Ember from 'ember';
import { task } from 'ember-concurrency';

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
    return {
      buttons: ["bold", "italic"],
      allowMultiParagraphSelection: true,
      toolbar: false
    };
  }.property(),

  saveNote: task(function *() {
    if (this.get('model.isNew')) {
      this.set('model.createdAt', new Date());
    }

    this.set('model.updatedAt', new Date());
    yield this.get('model').save();
  }).drop(),

	actions: {
		save: function() {
      this.get('saveNote').perform();
			// if (this.get('model.isNew')) {
			// 	this.set('model.createdAt', new Date());
			// }
			// this.set('isSaving', true);
      // this.set('model.updatedAt', new Date());
      // this.get('model').save().then(() => {
			// 	this.set('isSaving', false);
			// });
		},
		refreshEditor: function() {
			this.set('refreshEditorFlag', true);
		}
	}
});

export default noteController;
