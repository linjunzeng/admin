'use strict';
var goodsModels = require('../../models/admin/goodsModels');

class GoodsControlle {
	constructor(props) {

	}
	addGoods(req, res, next){
		goodsModels.find({'id': 9},function(err, result){
			res.render('goods/add_goods', {
				code: 1,
				data: {
					list: result,
					title: '商品列表'
				},
				msg: '获取成功'
			});
		})
	}
}

module.exports = new GoodsControlle()