const { logger } = require('./logger.middleware');
const { responseMiddleware } = require('./response.middleware');
const { securityMiddleware } = require('./security.middleware');
const { validationMiddleware } = require('./validations.middleware');
const { authenticatedMiddleware } = require('./authenticated.middleware');
const {limitMiddleware} = require('./limit.middleware');

module.exports = {
  logger,
  responseMiddleware,
  securityMiddleware,
  validationMiddleware,
  authenticatedMiddleware,
  limitMiddleware
};
