import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['contenteditable'],
  editable: true,
  isUserTyping: false,
  plaintext: false,
  classNames: ['editable' , 'note-editor'],
  refresh: false,

  contenteditable: (function() {
    var editable = this.get('editable');
    return editable ? 'true' : undefined;
  }).property('editable'),
  didInsertElement: function() {
    new MediumEditor(this.$(), (this.get('options') ? JSON.parse(this.get('options')) : {}));
    return this.setContent();
  },
  setUserTypingOff: function() {
    return this.set('isUserTyping', false);
  },
  focusOut: function() {
    this.setUserTypingOff();
  },
  keyDown: function(event) {
    if (!event.metaKey) {
      Ember.run.debounce(this, this.setUserTypingOff, 3000);
      return this.set('isUserTyping', true);
    }
  },
  input: function() {
    if (this.get('plaintext')) {
      return this.set('value', this.$().text());
    } else {
      return this.set('value', this.$().html());
    }
  },
  rerender: function(buffer) {
    buffer.push((this.get('value') || null));
  },
  setContent: function() {
    var this_m = this;
    if (this_m.$()) {
      return this_m.$().html(this_m.get('value'));
    }
  },
  refreshObserver: function() {
    if (this.get('refresh')) {
      this.set('refresh', false);
      this.setContent();
    }
  }.observes('refresh')
});