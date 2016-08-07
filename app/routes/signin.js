import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('notes');
    }
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.resetController();
    }
  }
});
