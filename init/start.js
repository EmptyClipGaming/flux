'use strict';

import Promise from 'bluebird';
import logger from '../lib/logger';
import http from 'http';

export default (app) => new Promise((resolve, reject) => {

  let server = http.createServer(app);

  let onError = (error) => {
    if (error.syscall !== 'listen') throw error;

    let bind = server.address().port;

    let errors = {
      EACCES: `${bind} requires elevated privileges`,
      EADDRINUSE: `${bind} is already in use`
    };

    reject(errors[error] || error);
  };

  let onListen = () => {
    let bind = server.address().port;
    logger.info(`Listening on ${bind}`);
    resolve(app);
  };

  server.listen(app.get('port'));
  server.on('error', onError);
  server.on('listening', onListen);

});
