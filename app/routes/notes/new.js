import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('note', {
      body: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }).save();
  },
  afterModel(newNote) {
    this.transitionTo('notes.note', newNote);
  }
});
