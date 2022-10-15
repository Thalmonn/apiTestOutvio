const privateService = require('../services/private.service');

const privateFacade = (body) => privateService.execute(body);

module.exports = {
  privateFacade
};
