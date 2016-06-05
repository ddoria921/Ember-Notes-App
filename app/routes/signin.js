import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('/');
    }
  },

  actions: {
    signIn(email, password) {
      console.log('In route');
      console.log('called sign in with', email, password);
      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then((data) => {
        console.log('Signed in as ', data.currentUser);
        this.transitionTo('application');
      });
    }
  }
});
