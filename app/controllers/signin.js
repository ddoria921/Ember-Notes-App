import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  get,
  computed,
  isPresent,
  inject,
  Logger
} = Ember;

export default Ember.Controller.extend({
  flashMessages: inject.service(),

  userEmail: '',
  userPassword: '',

  resetController() {
    this.set('userEmail', '');
    this.set('userPassword', '');
  },

  canSubmit: computed('userEmail', 'userPassword', function() {
    return isPresent(this.get('userEmail')) && isPresent(this.get('userPassword'));
  }),

  signIn: task(function *(email, password) {
    const flashMessages = get(this, 'flashMessages');

    yield this.get('session').open('firebase', {
      provider: 'password',
      email: email,
      password: password
    }).then((data) => {
      Logger.debug('Signed in as ', data.currentUser);
      this.transitionToRoute('notes');
    }).catch(() => {
      flashMessages.danger('Incorrect email and password. Try again.', {
        preventDuplicates: true
      });
    });
  }).drop()
});
