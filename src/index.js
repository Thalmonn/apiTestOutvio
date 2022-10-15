require('dotenv').config();

// Constants
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const ip = require('ip');

const app = express();
const publicRoutes = require('./routes/public.routes');
const privateRoutes = require('./routes/private.routes');

const {
  logger,
  responseMiddleware,
  securityMiddleware
 } = require('./app/middlewares');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseMiddleware);
securityMiddleware(app);

// Routes
app.use('/api', [publicRoutes, privateRoutes]);

// catch 404
app.use((req, res) =>
  res.parseReturn({
    status: 404,
    errors: [
      {
        message: `Invalid Route, Access http://${ip.address()}:${PORT}/api/docs`,
      },
    ],
  }),
);

app.use((err, req, res) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  return res.status(status).json(error);
});

app.listen(PORT, () => {
  logger.info(
    `Server is running at port ${PORT}, see more about the application on: http://${ip.address()}:${PORT}/api/docs`,
  );
});

module.exports = app;