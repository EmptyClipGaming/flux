'use strict';

import Promise from 'bluebird';
import logger from '../lib/logger';
import stormpath from 'express-stormpath';

export default (app) => new Promise((resolve) => {
  app.use(stormpath.init(app, {
    application: 'https://api.stormpath.com/v1/applications/2k0ChNJcg5ipSuWevFScd1',
    secretKey: 'dastjrq3j5blkwejtlkjb65tb54w%#BWA%^Aetbgawn4%^AEZDBgba'
  }));

  return resolve(app);
});
