import Ember from 'ember';

export default Ember.Component.extend({
  // defaults
  classNames: ['note-list'],
  tagName: 'ul',

  // properties
  notes: null
});
