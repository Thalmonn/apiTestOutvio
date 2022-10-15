const http_status_codes = require('http-status-codes');
const { publicFacade } = require('../facades/public.facade');

class PublicController {
  async index(req, res) {
    try {
    const data = await publicFacade();

    return res.status(http_status_codes.OK).send(data);
    } catch(err){
      return res.status(http_status_codes.BAD_REQUEST).send(err.message);
    }
  }
}

module.exports = PublicController;
