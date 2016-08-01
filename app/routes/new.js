import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('note', {
      body: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }).save();
  },
  afterModel(resolvedModel) {
    this.controllerFor('application').set('activeNote', null);

    resolvedModel.save().then((savedNote) => {
      this.transitionTo('note', savedNote.get('id'));
      this.controllerFor('application').set('activeNote', resolvedModel);
    });
  },
  renderTemplate() {
    this.render('note');
  },
  resetController(controller) {
    controller.set('refreshEditorFlag', true);
  }
});
