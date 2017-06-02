
var AuthProxy = require('../proxy/auth');
var apis = require('../apis');
var config = require('../config');
var _ = require("underscore")._;
var logger = require('../util/log4jsUtil');

/**
 * 中间件
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.authWxUser = function (req, res, next) {
    if (!_.isEmpty(req.headers['user-agent']) && req.headers['user-agent'].indexOf("MicroMessenger") != -1) {
        next();
    } else {
        next();
    }
};
