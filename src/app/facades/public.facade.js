const publicService = require('../services/public.service');

const publicFacade = () => publicService.execute();

module.exports = {
  publicFacade
};
