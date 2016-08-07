import Em from 'ember';

export default Em.Route.extend({
  beforeModel() {
    return this.get("session").fetch().catch((error) => {
      Em.Logger.error('User not authenticated. Redirecting to sign in. Error:', error);
      this.transitionTo('signin');
    });
  },

  actions: {
    signOut() {
      this.get("session").close();
    }
  }
});
