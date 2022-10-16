const mongoose = require('mongoose');
const { logger } = require('../../app/middlewares');

const connectDB = async () => {
  const {DATABASE_URL} = process.env;

  await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (!mongoose.connection) logger.error('Error connecting Mongo DB');
  else logger.info(`Mongo DB connected successfully ${DATABASE_URL}`);
};

module.exports = connectDB;
