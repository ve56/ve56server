var logger = process.logger.accessLog;
var models = process.models;
var queue = process.queue;
var forgetpasAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    /**
     *   判断是ajax请求还是直出页面
     */
    if (req['headers']['x-requested-with'] == 'XMLHttpRequest') {
        var Entity = models['user'];
        var queue = process.queue;
        try{
            if (req.body.phonecode != queue[req.body.phone]['code']) {
                throw '请输入正确的验证码';
            }
        } catch(e){
            res.send({
                'error_num': 1,
                'info': '请输入正确的验证码'
            })
            return;
        }
        var password = req.body.password;
        console.log(password);
        Entity.update({
            phone: req.body.phone
        }, {
            password: password
        }, function(err, docs) {
            if (!err) {
                res.send({
                    'error_num': 0,
                    'info': '修改成功，请重新登录'
                })
            }
        });
    } else {
        res.render('forgetpas');
    }
};
module.exports = forgetpasAction;
