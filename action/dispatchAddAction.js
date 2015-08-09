var logger = process.logger.accessLog;
var models = process.models;
var util = require("util");
var filter = require('../service/' + 'filter');
var loginAction = function(arg) {
    var req = arg.req;
    var res = arg.res;
    logger.info(req.query);

    var IndentureEntity = models['indenture'];
    // 查找当前用户的信息
    var UserEntity = models['user'];
    UserEntity.find({
        _id: req.session.userInfo.user_id
    }, function(err, doc) {
        var info = req.query;
        info.shipper_name = doc[0].name;
        info.shipper_tel = doc[0].phone;
        var indenture = new IndentureEntity(info);
        indenture.save(function(err, doc) {
            if (!err) {
                res.redirect('goodslist');
            }
        });
    });
};
module.exports = loginAction;
