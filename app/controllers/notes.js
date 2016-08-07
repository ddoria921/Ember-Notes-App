import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const { isEmpty } = Ember;

export default Ember.Controller.extend({
  hideSidePanel: false,

  deleteNote: task(function*(note) {
    const model = this.get('model');
    yield timeout(150);
    model.removeObject(note);

    if (isEmpty(model)) {
      this.transitionToRoute('new');
    } else {
      this.transitionToRoute('notes.note', model.get('firstObject'));
    }

    yield note.destroyRecord();
  }).drop(),

  actions: {
    signOut() {
      this.get('session').close().then(() => {
        this.transitionToRoute('signin');
      });
    },

    toggleSidePanelHidden() {
      this.toggleProperty('hideSidePanel');
    }
  }
});
