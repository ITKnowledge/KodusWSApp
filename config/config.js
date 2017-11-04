const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'koduswsapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/koduswsapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'koduswsapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/koduswsapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'koduswsapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/koduswsapp-production'
  }
};

module.exports = config[env];
