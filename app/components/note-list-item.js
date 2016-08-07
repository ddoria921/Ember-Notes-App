import Ember from 'ember';

const {
  isEmpty,
  computed,
  run
} = Ember;

export default Ember.Component.extend({
  classNames: ['note-list-item'],

  // properties
  content: null,

  // template helpers
  showDeletePrompt: false,

  // computed
  title: computed('content.body', function() {
    return isEmpty(this.get('content.body')) ? 'New...' : this.get('content.body').split('<p><br></p>')[0];
  }),

  actions: {
    promptDelete() {
      this.set('showDeletePrompt', true);
    },

    cancelDelete() {
      // run later so animation can finish
      run.later(this, function() {
        this.set('showDeletePrompt', false);
      }, 150);
    }
  }
});
