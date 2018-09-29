const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', (req, res) => {
  let response = {status: 200, user: req.userId};
  res.send(response);
});

module.exports = app => app.use('/projects', router);