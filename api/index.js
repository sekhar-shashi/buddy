const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const { port } = require('./constant');
const routes = require('./routes');

const middleware = require('./middleware');

// Create an express app
const app = express();

const jsonParser = bodyParser.json({
  limit: '1mb',
});
app.use(jsonParser);

// Enable Cors
app.use(cors());

app.use(helmet());

const middlewareList = [middleware.logger, middleware.errorHandler];
app.use(middlewareList);

app.use('/api', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`HTTP server started on port ${port} at ${new Date().toISOString()}.`);
});

app.get('/heartbeat', (req, res) => {
  res.status(200).send({
    successfull: true,
  });
});
