var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	// res.render('login', { title: 'login' });
	res.send({
		"aa": "123",
		"bb": "45678"
	})
});
router.get('/index', (req, res, next) => {
	// res.render('login', { title: 'login' });
	res.send({
		"aa": "aaaa",
		"bb": "vvvv"
	})
});
module.exports = router