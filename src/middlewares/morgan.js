const logger = require('../config/logger');
const morgan = require('morgan');

const morganMiddleware = morgan(
    "tiny",
    { stream: logger.stream.write }
);

module.exports = morganMiddleware;