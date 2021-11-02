const express = require('express');
const router = express.Router();
const getMethods = require('../controllers/BtcOrder');

router.get('/displayBtc', getMethods.displayBtc);

module.exports = router;