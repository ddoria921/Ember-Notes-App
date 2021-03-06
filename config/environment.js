/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-notes',
    environment: environment,
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self' data: fonts.gstatic.com",
      'connect-src': "'self' https://api.github.com/ https://auth.firebase.com wss://*.firebaseio.com",
      'img-src': "'self' https://avatars.githubusercontent.com",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'frame-src': "'none'"
    },
    // firebase: 'https://web-notes.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    flashMessageDefaults: {
      preventDuplicates: true
    },
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.firebase = 'https://dev-web-notes.firebaseio.com/';
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = 'https://web-notes.firebaseio.com/';
  }

  return ENV;
};
