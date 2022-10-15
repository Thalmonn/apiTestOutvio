const http_status_codes = require('http-status-codes');
const { verify } = require('jsonwebtoken');

const authenticatedMiddleware = (
    request,
    response,
    next,
) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: 'Token precisa ser passado' });
    }

    const [, token] = authHeaders.split(' ');

    try {
        verify(token, process.env.SECRET_JWT);

        return next();
    } catch (err) {
        return response
            .status(http_status_codes.UNAUTHORIZED)
            .json({ error: 'Token mal informado' });
    }
};

module.exports = {
  authenticatedMiddleware
};
