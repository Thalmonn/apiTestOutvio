class PublicService {
  async execute(body) {
    return 'ok';
  }
}

module.exports = new PublicService();
