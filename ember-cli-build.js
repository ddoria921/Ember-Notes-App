/* global require, module */
var vulcanize   = require('broccoli-vulcanize');
var pickFiles   = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    outputPaths: {
      app: {
        css: {
          'app': '/assets/app.css'
        }
      }
    },
    babel: {
      includePolyfill: true,
    }
  });

  var polymerVulcanize = vulcanize('app', {
    input: 'elements.html',
    output: 'assets/vulcanized.html',
    csp: true,
    inline: true,
    strip: false,
    excludes: [/^data:/, /^http[s]?:/, /^\//]
    // excludes: {
    //   imports: ["(^data:)|(^http[s]?:)|(^\/)"],
    //   scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
    //   styles: ["(^data:)|(^http[s]?:)|(^\/)"]
    // }
  });

  var polymer = pickFiles('bower_components/', {
    srcDir: '',
    files: [
      'webcomponentsjs/webcomponents-lite.js',
      'polymer/polymer.html'
  //  'polymer/polymer.js'
    ],
    destDir: '/assets'
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return mergeTrees([polymerVulcanize, polymer, app.toTree()]);
};
