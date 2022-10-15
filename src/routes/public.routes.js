const routes = require('express').Router();
const PublicController = require('../app/controllers/public.controller');

const publicController = new PublicController();

routes.get('/public', publicController.index);

module.exports = routes;
