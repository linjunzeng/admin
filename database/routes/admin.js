var router = require('express').Router();
var AdminControlle =  require('../controller/admin/AdminControlle'); 
var GoodsControlle =  require('../controller/admin/GoodsControlle'); 

//登录,注册
//router.get('/login', AdminControlle.login);
//router.get('/register', AdminControlle.register);


//router.use(isLogin(req, res, next));

//首页
router.get('/', (req, res, next) => {
	res.redirect('/index')
});

router.get('/index', AdminControlle.index);

router.get('/list', AdminControlle.list);
router.post('/add', AdminControlle.add);
router.post('/del', AdminControlle.del);
router.post('/updata', AdminControlle.updata);
router.post('/find', AdminControlle.find);

//商品
router.get('/goods/add', GoodsControlle.addGoods);

module.exports = router