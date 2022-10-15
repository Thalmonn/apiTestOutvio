const MessageConstants = require('../constants/message.constants');

class PrivateService {
  async execute() {
    return MessageConstants.DEFAULT_RETURN_PRIVATE;
  }
}

module.exports = new PrivateService();
