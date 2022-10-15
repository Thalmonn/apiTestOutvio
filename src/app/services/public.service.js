const MessageConstants = require('../constants/message.constants');

class PublicService {
  async execute() {
    return MessageConstants.DEFAULT_RETURN_PUBLIC;
  }
}

module.exports = new PublicService();
