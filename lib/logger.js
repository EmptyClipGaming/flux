'use strict';

const winston = require('winston');

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false,
});

logger.stream = {
  write(message) {
    logger.info(message);
  }
};

export default logger;
