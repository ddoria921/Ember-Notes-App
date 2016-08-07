import Ember from 'ember';

const {
  Logger,
  run
} = Ember;

export default Ember.Route.extend({
  beforeModel() {
    return this.get("session").fetch().catch((error) => {
      Logger.error('User not authenticated. Redirecting to sign in. Error:', error);
      this.transitionTo('signin');
    });
  },

  redirect() {
    run.next(this, () => {
      const appController = this.controllerFor('application');
      if (appController.get('currentPath') === 'index') {
        this.transitionTo('notes');
      }
    });
  },

  actions: {
    signOut() {
      this.get("session").close();
    }
  }
});
