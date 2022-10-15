class PrivateController {
  async index(req, res) {
    return res.send('ok');
  }
}

module.exports = PrivateController;
