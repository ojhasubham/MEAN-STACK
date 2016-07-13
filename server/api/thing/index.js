'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.sendEmail);
  

module.exports = router;