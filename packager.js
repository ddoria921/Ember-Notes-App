var packager = require('electron-packager');
var options = {
  arch: 'x64',
  dir: '/Users/Darin/Development/Ember-Notes-App',
  platform: 'darwin'
};

packager(options, function done(err, appPath) {
  if (err) {
    console.log('Package error', err);
  } else {
    console.log('App packaged at', appPath);
  }
});
