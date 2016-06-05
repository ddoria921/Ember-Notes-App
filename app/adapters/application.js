// import Ember from 'ember';
import config from '../config/environment';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import Firebase from 'firebase';

// const { inject } = Ember;

export default FirebaseAdapter.extend({
  // firebase: inject.service(),
   // firebase: new Firebase('https://web-notes.firebaseio.com/')
   firebase: new Firebase(config.firebase)
});
