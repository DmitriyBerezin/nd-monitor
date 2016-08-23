const express = require('express');
const router = express.Router();

router.get('/fetch', (req, res, next) => {
	const flats = [];
	res.status(200).send({ flats: flats });
});

module.exports = router;
