const ExpressRedisCache = require('express-redis-cache');
const { logger } = require('./logger.middleware');

/**
 * create a middleware to cache the response
 */

 const cachingMiddleware = ExpressRedisCache({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || 'localhost'
});

cachingMiddleware.on('message', (message) => {
  logger.info(`ExpressRedis connected successfully ${message}`);
});

cachingMiddleware.on('connected', () => {
  logger.info('Client connected to Redis');
});

cachingMiddleware.on('error', (error) => {
  logger.error(`ExpressRedis: ${error}`);
});

cachingMiddleware.on('disconnected', () => {
  logger.warn('Client disconnected from Redis');
});

module.exports = { cachingMiddleware };
