const routes = require('express').Router();
const PrivateController = require('../app/controllers/private.controller');

const privateController = new PrivateController();

routes.get('/private', privateController.index);

module.exports = routes;
