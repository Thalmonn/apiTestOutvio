const http_status_codes = require('http-status-codes');
const { privateFacade } = require('../facades/private.facade');

class PrivateController {
  async index(req, res) {
    try {
    const data = await privateFacade();

    return res.status(http_status_codes.OK).json(data);
    } catch(err){
      return res.status(http_status_codes.BAD_REQUEST).send(err.message);
    }
  }
}

module.exports = PrivateController;
