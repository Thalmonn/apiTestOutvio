const Manager = require('../entities/manager.entities');

const store = async ({ ip, token }) =>
  Manager.create({
    ip,
    token,
  });

const find = async ({ token, ip }) =>
  Manager.findOne({
    token,
    ip,
  }).select('createdAt, token, ip');

module.exports = {
  store,
  find,
};
