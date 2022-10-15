class PublicController {
  async index(req, res) {
    return res.send('ok');
  }
}

module.exports = PublicController;
