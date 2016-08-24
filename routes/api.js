'use strict';

const express = require('express');

const CianService = require('../services/service');


const router = express.Router();
const service = new CianService();

router.get('/start', (req, res, next) => {
	service.start();
	res.status(200).send();
});

router.get('/stop', (req, res, next) => {
	service.stop();
	res.status(200).send();
});


module.exports = router;
