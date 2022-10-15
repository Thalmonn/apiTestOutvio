const publicService = require('../services/public.service');

const publicFacade = (body) => publicService.execute(body);

module.exports = {
  publicFacade
};
