require('dotenv').config();

const cluster = require('cluster');
const os = require('os');
const app = require('./server');
const { logger } = require('./app/middlewares');

// Constants
const PORT = process.env.PORT || 5000;
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`🚀 Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {
  app.listen(PORT, () => {
    logger.info(
      `Server is running at port ${PORT}`,
    );
  });
}
