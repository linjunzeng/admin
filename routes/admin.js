var router = require('express').Router();
var ControlleAdmin =  require('../controller/admin/controlleAdmin'); 

//登录,注册
//router.get('/login', ControlleAdmin.login);
//router.get('/register', ControlleAdmin.register);

//首页
//router.use(isLogin(req, res, next));

router.get('/', (req, res, next) => {
	res.redirect('/admin/index')
});

router.get('/index', ControlleAdmin.index);



router.get('/list', ControlleAdmin.list);
router.post('/add', ControlleAdmin.add);
router.post('/del', ControlleAdmin.del);
router.post('/updata', ControlleAdmin.updata);
router.post('/find', ControlleAdmin.find);



module.exports = router