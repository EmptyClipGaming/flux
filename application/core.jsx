'use strict';

import React from 'react';
import Router from 'react-router';
import Application from './Application/Application.jsx';
import routes from './routes.jsx';
import Flux from './Flux/Flux.jsx';

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  const flux = new Flux();
  React.render(<Handler flux={flux} />, document.getElementById('application'));
});
