'use strict';

module.exports = {
  database: 'mysql://root:roooot@localhost:3306/wsf',
  http: {
    host: 'localhost',
    port: 8000,
    routes: {
      cors: {
        //methods: ['GET'],
        //origin: ['dashboard.wsf.com', '*.wsf.com', 'wsf.com', '*']
        origin: ['*']
      }
    }
  }
}
