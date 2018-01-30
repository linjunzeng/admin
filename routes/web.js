var admin = require('./admin');
var api = require('./api');

module.exports = app => {
	app.use('/admin', admin);
	app.use('/api', api);
}
