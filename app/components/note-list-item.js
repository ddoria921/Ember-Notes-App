import Em from 'ember';

export default Em.Component.extend({
	// defaults
	classNameBindings: [':note-list-item', 'isSelected:selected'],
	tagName: 'li',

	// properties
	content: null,
	selection: null,

  // template helpers
  showDeletePrompt: false,

	// computed
	isSelected: function() {
		return this.get('content') === this.get('selection');
	}.property('content.id', 'selection'),

	title: function() {
		return Em.isEmpty(this.get('content.body')) ? 'New...' : this.get('content.body').split('<p><br></p>')[0];
	}.property('content.body'),

	// event handlers
	click: function() {
		this.sendAction('onSelect', this.get('content'));
	},

  actions: {
    promptDelete: function() {
      this.set('showDeletePrompt', true);
      // this.$('.hover-action').one('transitionend webkitTransitionEnd', function() {
        // this.$('.confirm-action').removeClass('hidden');
      // }.bind(this));
    },

    cancelDelete: function() {
      this.set('showDeletePrompt', false);
      // this.$('.hover-action').one('transitionend webkitTransitionEnd', function() {
        // this.$('.confirm-action').addClass('hidden');
      // }.bind(this));
      // Em.run.scheduleOnce('afterRender', this, function() {
      // });
    },

    confirmDelete: function() {
      // send delete action
      this.sendAction('onDelete', this.get('content'));

      // this.set('showDeletePrompt', false);
    }
  }
});
