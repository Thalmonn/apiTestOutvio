const routes = require('express').Router();
const PublicController = require('../app/controllers/public.controller');
const { limitMiddleware }= require('../app/middlewares');

const publicController = new PublicController();

routes.get('/public', limitMiddleware(), publicController.index);

module.exports = routes;
