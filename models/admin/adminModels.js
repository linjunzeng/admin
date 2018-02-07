'use strict';
var mongoose = require('mongoose');
var db = require('../../database/db');
var adminSchema = new mongoose.Schema({
	name : {type: String},
	age  : {type: Number},
	password: {type: String}
}, {
	versionKey: false
});
var adminModel = mongoose.model('tables', adminSchema);

module.exports = adminModel || null