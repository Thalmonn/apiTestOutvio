const mongoose = require('mongoose');

const Manager = new mongoose.Schema({
  token: {
    type: String,
  },
  ip: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('manager', Manager);
