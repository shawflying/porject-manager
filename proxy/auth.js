var httpUtil = require('../util/HttpUtil');
var logger = require('../util/log4jsUtil');
var apis = require('../apis');

var AuthProxy = {};

/**
 * 获取用户信息
 * @param state
 * @param callback
 */
AuthProxy.getUserInfo = function (state, callback) {
    httpUtil.post(apis.getUserInfo, {state: state}, function (error, response, content) {
        callback(error, content);
    });
};

module.exports = AuthProxy;