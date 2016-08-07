import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('note', { path: '/notes/:noteId' });
  this.route('new', { path: '/new' });
  this.route('signin');
});

export default Router;
