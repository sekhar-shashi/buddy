const { prodEnv } = require('../constant');

const errorHandler = (err, req, res, next) => {
  // if (process.env.NODE_ENV === prodEnv) {
  //   // eslint-disable-next-line no-param-reassign
  //   err.stack = undefined;
  // }
  // res.send(err.statusCode || 500).json(err);
  next();
};

module.exports = errorHandler;
