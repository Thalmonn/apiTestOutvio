const http_status_codes = require('http-status-codes');
const { verify } = require('jsonwebtoken');
const TokenConstants = require('../constants/token.constants');

const authenticatedMiddleware = (
    request,
    response,
    next,
) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: TokenConstants.TOKEN_MISSING });
    }

    const [, token] = authHeaders.split(' ');

    try {
        verify(token, process.env.SECRET_JWT);

        return next();
    } catch (err) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: TokenConstants.INVALID_TOKEN });
    }
};

module.exports = {
  authenticatedMiddleware
};
