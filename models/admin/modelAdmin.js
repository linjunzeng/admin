'use strict';
var mongoose = require('mongoose');
var db = require('../../database/db');

var adminSchema = new mongoose.Schema({
	name : {type : String},
	password : {type : String},
	age  : {type: Number}
}, {
	versionKey: false
});

var modelAdmin = mongoose.model('tables', adminSchema);

module.exports = modelAdmin || null