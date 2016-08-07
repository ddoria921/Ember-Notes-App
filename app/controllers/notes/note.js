import Ember from 'ember';
import {
  task
} from 'ember-concurrency';

export default Ember.Controller.extend({
  // editorOptions: computed(function() {
  //   return {
  //     toolbar: {
  //       buttons: ['bold', 'italic'],
  //       allowMultiParagraphSelection: true
  //     }
  //   };
  // }),
  editorOptions: {
    toolbar: {
      buttons: ['bold', 'italic'],
      allowMultiParagraphSelection: true
    }
  },

  saveNote: task(function*() {
    const model = this.get('model');
    if (model.get('isNew')) {
      model.set('createdAt', new Date());
    }

    model.set('updatedAt', new Date());
    yield model.save();
  }).drop()
});
