'use strict';

import express from 'express';
import preload from './init/preload';
import errorHandler from './init/errorHandler';
import logger from './lib/logger';
import start from './init/start';

let app = express();

preload(app)
  .then(errorHandler)
  .then(start)
  .catch((error) => {
    logger.error(`Unable to load application: ${error}`);
  });

export default app;
