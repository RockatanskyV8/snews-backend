'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();

const paths = { 'snews' : require('./snews/snews') }

router.use('/snews', paths['snews'])

module.exports = router;
