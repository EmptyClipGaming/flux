'use strict';

import express from 'express';
import preload from './init/preload';
import errorHandler from './init/errorHandler';
import logger from './lib/logger';
import start from './init/start';
import stormPath from './init/stormpath';
import routes from './init/routes';

let app = express();

preload(app)
  .then(stormPath)
  .then(routes)
  .then(errorHandler)
  .then(start)
  .catch((error) => {
    logger.error(`Unable to load application: ${error}`);
  });

export default app;
