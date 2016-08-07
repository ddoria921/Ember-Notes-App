import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('Inside of note route');
    return this.store.findRecord('note', params.id);
  }
});
