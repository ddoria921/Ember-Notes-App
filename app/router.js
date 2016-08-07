import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('note', { path: '/notes/:noteId' });
  // this.route('new', { path: '/new' });
  this.route('signin');
  this.route('notes', function() {
    this.route('note', { path: '/:id' });
    this.route('new');
  });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
