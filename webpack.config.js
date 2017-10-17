
var appName = 'app';
var outputFile = appName + '.js';
var env = process.env.NODE_ENV;

var config = {};
console.info('Build environment: ' + env);

switch (env) {
  case 'development':{
    config = require('./config/development');
  }
  case 'staging': {
    config = require('./config/base');
  }
  case 'production': {
    config = require('./config/production')
  }
  default: {
    config = require('./config/base');
  }
}


module.exports = config;