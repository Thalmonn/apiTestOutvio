const ms = require('ms');
const rateLimit = require('express-rate-limit');

const limitMiddleware = () => {
    const rateLimiterUsingThirdParty = rateLimit({
        windowMs: ms('1h'),
        max: 100,
        headers: true,
        message: 'Many requests from this IP, try again after one hour!',
        keyGenerator: (request) => request.ip,
    });

    return rateLimiterUsingThirdParty;
};

module.exports = {limitMiddleware};
