const ms = require('ms');
const rateLimit = require('express-rate-limit');

const isPremium = async (request) => {
    const { path } = request.route;

    if (path.match(/public/)) {
        return {
            max: process.env.RATE_LIMIT_IP,
            message: 'Many requests from this IP, try again after one hour!',
        };
    }

    return {
        max: process.env.RATE_LIMIT_TOKEN,
        message: 'Many requests from this IP, try again after one hour!',
    };
};

const limitMiddleware = () => {
    const rateLimiterUsingThirdParty = rateLimit({
        windowMs: ms(process.env.RATE_LIMIT_IP),
        max: (request) => isPremium(request).max,
        headers: true,
        message: (request) => isPremium(request).message,
        keyGenerator: (request) => request.ip,
    });

    return rateLimiterUsingThirdParty;
};

module.exports = {limitMiddleware};
