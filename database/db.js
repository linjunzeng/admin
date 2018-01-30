var mongoose = require('mongoose');
var config   = require('../config');

mongoose.Promise = global.Promise;
var db           = mongoose.connect(config.dbhost, {useMongoClient:true});

db.once('open' ,() => {
	console.log('连接数据库成功');
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
	mongoose.connect(config.dbhost, {useMongoClient:true});
});

module.exports = db