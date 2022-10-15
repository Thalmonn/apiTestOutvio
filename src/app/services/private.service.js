class PrivateService {
  async execute(body) {
    return 'ok';
  }
}

module.exports = new PrivateService();
