import Ember from 'ember';
import {
  task
} from 'ember-concurrency';

export default Ember.Controller.extend({
  editorOptions: function () {
    return {
      toolbar: {
        buttons: ["bold", "italic"],
        allowMultiParagraphSelection: true
      }
    };
  }.property(),

  saveNote: task(function* () {
    if (this.get('model.isNew')) {
      this.set('model.createdAt', new Date());
    }

    this.set('model.updatedAt', new Date());
    yield this.get('model').save();
  }).drop(),

  actions: {

  }
});
