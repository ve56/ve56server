var logger = process.logger.accessLog;
var models = process.models;
var indexAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    /**
     *   判断是ajax请求还是直出页面
     */
    var Entity = models['user'];
    if (req['headers']['x-requested-with'] == 'XMLHttpRequest') {
        var Entity = models['user'];
        var options = req.body;
        Entity.update({
            _id: req.session.userInfo.user_id
        }, options, function(err, docs) {
            if (!err) {
                res.send({
                    'error_num': 0,
                    'info': '更新成功，请等待认证'
                })
            }
        });
    } else {
        Entity.find({
            _id: req.session.userInfo.user_id
        }, function(err, doc) {
            if (!err) {
                res.render('driver-info', {
                    data: doc || []
                });
            }
        });
    }
};
module.exports = indexAction;
