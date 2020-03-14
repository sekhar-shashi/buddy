const logger = (req, next) => {
  const body = JSON.stringify(req.body);

  // eslint-disable-next-line no-console
  console.log(`request received for url ${req.url}`, body);
  next();
};

module.exports = logger;
