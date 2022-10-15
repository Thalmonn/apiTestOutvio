const { store, find } = require('../repositories/manager.repositories');
const TokenConstants = require('../constants/token.constants');

const isTokened = async request => {
  const tokenHeader = request.headers.authorization;
  const xForwardedFor = request.headers['x-forwarded-for'];

  if (tokenHeader || xForwardedFor) await store({ ip: xForwardedFor, token: tokenHeader });

  return checkTime(tokenHeader, xForwardedFor);
};

const checkTime = async (token, ip) => {
  const time = new Date(new Date().getTime() - 60 * 60);
  const data = await find({ token, ip });

  if (data.token && time > data.createdAt) {
    return {
      limit: process.env.RATE_LIMIT_TOKEN,
      message: TokenConstants.MESSAGE_ERROR_RATE_LIMIT_TOKEN,
    };
  }

  if (data.ip && time > data.createdAt) {
    return {
      limit: process.env.RATE_LIMIT_IP,
      message: TokenConstants.MESSAGE_ERROR_RATE_LIMIT_IP,
    };
  }

  return {
    limit: process.env.RATE_LIMIT_DEFAULT,
    message: TokenConstants.MESSAGE_ERROR_RATE_LIMIT_DEFAULT,
  };
};

module.exports = {
  isTokened,
};
