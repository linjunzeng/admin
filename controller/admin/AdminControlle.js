'use strict';
var adminModels = require('../../models/admin/adminModels');

class AdminControlle {
	constructor(props) {

	}
	index(req, res, next){
		adminModels.find(function(err, result){
			res.render('index', {
				code: 1,
				data: {
					list: JSON.stringify(result)
				},
				msg: '获取成功'
			});
		})
	}
	list(req, res, next){
		adminModels.find(function(err, result){
			res.render('list', {
				code: 1,
				data: {
					list: result
				},
				msg: '获取成功'
			});
		})
	}
	add(req, res, next){
		let form = req.body;
		if(form){
			var monInsert = new adminModels(form);
			monInsert.save(function(err,result){
				console.log(err);
				console.log(result)
				res.redirect('./list');
			});
		}else{
			res.redirect('./list');
		}
	}
	del(req, res, next){
		let form = req.body;
		if(form){
			adminModels.remove(form, function(err, result){
				console.log(result)
				res.redirect('./list');
			});
		}else{
			res.redirect('./list');
		}
	}
	updata(req, res, next){
		let form = req.body;
		if(form){
			for(var i in form){
				if(!form[i]){
					delete form[i]
				}
			}
			adminModels.update({name: form.name_old}, {$set: form}, function(err, result){
				console.log(result)
				res.redirect('./list');
			});
		}else{
			res.redirect('./list');
		}
	}
	find(req, res, next){
		let form = req.body;
		for(var i in form){
			if(!form[i]){
				delete form[i]
			}
		}
		adminModels.find(form, {}, function(err, result){
			console.log(result)
			res.render('list', {
				code: 1,
				data: {
					list: result
				},
				msg: '查找成功'
			});
		});
	}
}

module.exports = new AdminControlle()