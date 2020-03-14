const express = require('express');
const bodyParser = require('body-parser');
const { create, findOne } = require('../database');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/articles/get', jsonParser, async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('in get');
  if (!req.body) {
    res.status(200).send('no articles provided to look for');
  }
  const ret = await findOne(req.body);
  res.status(200).send(ret);
});

router.post('/articles/add', jsonParser, async (req, res) => {
  const value = req.body || {};
  const ret = await create(value);
  res.status(200).send(ret);
});

module.exports = router;
