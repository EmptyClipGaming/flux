'use strict';

import express from 'express';
import Promise from 'bluebird';
// import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from '../lib/logger';
import path from 'path';


export default (app) => new Promise((resolve) => {
  logger.debug('Overriding \'Express\' logger');

  app.use(require('morgan')('dev', {'stream': logger.stream}));

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
  app.set('port', process.env.PORT || 3000);

  //app.use(favicon(__dirname  '..',+ '/public/favicon.ico'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  logger.info(`Assets mounted on ${path.join(__dirname, '..', 'public')}`);
  app.use(express.static(path.join(__dirname, '..', 'public')));

  return resolve(app);
});
