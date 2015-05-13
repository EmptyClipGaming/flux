'use strict';

import Promise from 'bluebird';
import glob from 'glob';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from '../application/routes';
import Flux from '../application/Flux/Flux';

export default (app) => new Promise((resolve) => {

  let root = path.resolve('init/routes');

  let files = glob.sync(root + '/**');

  files.map((file) => {
    if (!file.match(/\.js$/)) return;

    let path = file.replace(root, '').replace('.js', '');

    app.use(path, require(file));
  });

  app.get('/*', (req, res, next) => {
    try {
      Router.run(routes, req.url, (Handler, state) => {
        if (state.routes < 1 || state.routes[0].isNotFound) {
          let error = new Error('Not Found');
          error.status = 404;
          return next(error);
        }
        const flux = new Flux();
        let content = React.renderToString(<Handler flux={flux} />);
        res.render('main', {content: content});
      });
    } catch(exception) {
      console.log("error:", exception);
    }
  });

  return resolve(app);
})
