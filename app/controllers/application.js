import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  init() {
    this._super();
    // Em.run.scheduleOnce('afterRender', () => {
    //   Em.$('body div').first().addClass('app-container');
    // });
  },

	// data
	sortedNotes: computed('model.[]', 'model.@each.updatedAt', function() {
		return this.get('model').sortBy('updatedAt', 'createdAt').reverseObjects();
	})
});
