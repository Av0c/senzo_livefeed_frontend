
var appName = 'app';
var outputFile = appName + '.js';
var env = process.env.NODE_ENV || 'development';

var config = {};
console.info('Build environment: ' + env);

switch (env) {
  case 'development': {
    config = require('./config/development');
    break;
  }
  case 'staging': {
    config = require('./config/base');
    break;
  }
  case 'production': {
    config = require('./config/production');
    break;
  }
  default: {
    config = require('./config/base');
    break;
  }
}


module.exports = config;