var admin = require('./admin');
var api = require('./api');

module.exports = app => {
	app.use('/', admin);
	app.use('/api', api);
}
