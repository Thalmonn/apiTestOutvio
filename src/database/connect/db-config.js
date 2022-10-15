const mongoose = require('mongoose');
const { logger } = require('../../app/middlewares');

const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (!mongoose.connection) logger.error('Error connecting Mongo DB');
  else logger.info('Mongo DB connected successfully');
};

module.exports = connectDB;
