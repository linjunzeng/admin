'use strict';
var goodsModels = require('../../models/admin/goodsModels');

class GoodsControlle {
	constructor(props) {

	}
	addGoods(req, res, next){
		goodsModels.find(function(err, result){
			res.render('goods/add_goods', {
				code: 1,
				data: {
					list: JSON.stringify(result)
				},
				msg: '获取成功'
			});
		})
	}
}

module.exports = new GoodsControlle()