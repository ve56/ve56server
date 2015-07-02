var logger = process.logger.accessLog;
var models = process.models;
var regAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    /**
     *   判断是ajax请求还是直出页面
     */
    if (req['headers']['x-requested-with'] == 'XMLHttpRequest') {
        var Entity = models['user'];
        var user = new Entity(req.body);
        Entity.find({
            phone: user.phone
        }, function(err, doc) {
            if (doc.length > 0) {
                res.send({
                    'error_num': 1,
                    'info': '该手机号已注册'
                });
            } else {
                user.save(function(err, doc) {
                    if (!err) {
                        res.send({
                            'error_num': 0,
                            'info': '注册成功'
                        });
                    }
                });
            }
        });

    } else {
        res.render('reg');
    }

};
module.exports = regAction;
