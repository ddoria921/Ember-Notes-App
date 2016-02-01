import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('note', { path: '/:noteId' });
	this.route('new', { path: '/new' });
});

export default Router;