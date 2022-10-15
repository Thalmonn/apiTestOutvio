const ms = require('ms');
const rateLimit = require('express-rate-limit');
const { isTokened } = require('../helpers/checking.helper');

const limitMiddleware = () => {
  const rateLimiterUsingThirdParty = rateLimit({
    windowMs: ms(process.env.RATE_LIMIT_TIME),
    headers: true,
    max: async request => {
        const { limit } = await isTokened(request);
        return limit;
    },
    message: async request => {
      const { message } = await isTokened(request);
      return message;
    },
    keyGenerator: request => request.ip,
  });
  return rateLimiterUsingThirdParty;
};

module.exports = { limitMiddleware };
