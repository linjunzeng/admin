'use strict';
var mongoose = require('mongoose');
var db = require('../../database/db');
var goodsSchema = new mongoose.Schema({
	id : {type: String},
    name : {type: String},
    price : {type: String},
}, {
	versionKey: false
});

var goodsModel = mongoose.model('goods', goodsSchema);

module.exports = goodsModel || null