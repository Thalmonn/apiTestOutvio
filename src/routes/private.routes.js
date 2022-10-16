const routes = require('express').Router();
const PrivateController = require('../app/controllers/private.controller');
const { authenticatedMiddleware } = require('../app/middlewares');

const privateController = new PrivateController();

routes.get('/private', authenticatedMiddleware, privateController.index);

module.exports = routes;
