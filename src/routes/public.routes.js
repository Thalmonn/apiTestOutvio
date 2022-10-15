const routes = require('express').Router();
const PublicController = require('../app/controllers/public.controller');
const { limitMiddleware, cachingMiddleware } = require('../app/middlewares');

const publicController = new PublicController();

routes.get(
  '/public',
  cachingMiddleware.route('@key', 5),
  limitMiddleware(),
  publicController.index,
);

module.exports = routes;
