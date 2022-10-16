const privateService = require('../services/private.service');

const privateFacade = () => privateService.execute();

module.exports = {
  privateFacade
};
