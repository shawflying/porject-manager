var debug = true;//是否调试
var port = 8100;//端口
var config = {
    app: 'project-manager',
    debug: debug,
    name: 'project-manager',//项目名称
    description: '简单功能',
    host: 'http://127.0.0.1:' + port ,
    db: 'mongodb://127.0.0.1/express',
    db_name: 'project-manager_dev',
    session_secret: 'node_wap_secret',//session cookie key
    secretkey: 'project-manager',//node_wap_secret invoice
    auth_cookie_name: 'node_wap',//node_wap invoice_wx
    //程序运行端口
    port: port
};

module.exports = config;