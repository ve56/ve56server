var logger = process.logger.accessLog;
var models = process.models;
var queue = process.queue;
var regAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    /**
     *   判断是ajax请求还是直出页面
     */
    if (req['headers']['x-requested-with'] == 'XMLHttpRequest') {
        var Entity = models['user'];
        var user = new Entity(req.body);
        if (req.body.phonecode != queue[req.body.phone]['code']) {
            res.send({
                'error_num': 1,
                'info': '请输入正确的验证码'
            })
            return;
        }
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
