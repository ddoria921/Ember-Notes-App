import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signin');
  this.route('notes', function() {
    this.route('note', { path: '/:id' });
    this.route('new');
  });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
