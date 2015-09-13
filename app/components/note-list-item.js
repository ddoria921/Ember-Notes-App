import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: [':note-list-item', 'isSelected:selected'],
	content: null,
	selection: null,

	// computed
	isSelected: function() {
		return this.get('content') === this.get('selection');
	}.property('content.id', 'selection'), 
	
	title: function() {
		return Ember.isEmpty(this.get('content.body')) ? 'New...' : this.get('content.body').split('<p><br></p>')[0];
	}.property('content.body'),

	// actions
	click: function() {
		this.sendAction('action', this.get('content'));
	}
});
