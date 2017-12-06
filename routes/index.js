var login = require('./login');

module.exports = app => {
	app.use('/index', login);
}
