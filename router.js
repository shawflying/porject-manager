var express = require('express');
var router = express.Router();
var home = require('./controllers/home');
var auth = require('./middlewares/auth');
var config = require('./config');

var service = "/" + config.app;

router.get(service + '/index', auth.authWxUser, home.index);//进入首页
router.get(service + '/home/page/:id', home.page);
router.get(service + '/home/page/:id/p/:name', home.page);

router.get(service + '/project/detail', home.projectDetail);


router.get(service + '/upload/index', home.uploadHome);//上传功能
router.post(service + '/upload', home.upload);//图片上传

router.get(service + '/socket', home.socket);//进入首页


module.exports = router;