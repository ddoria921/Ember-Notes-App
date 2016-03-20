import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('note', {
      note: 'New note mother....',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  },
  renderTemplate() {
    this.render('note');
  },
  resetController(controller) {
    controller.set('refreshEditorFlag', true);
  }
});
