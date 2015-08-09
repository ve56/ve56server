var logger = process.logger.accessLog;
var models = process.models;
var filter = require('../service/' + 'filter');
var loginAction = function(arg) {
    var Entity = models['user'];
    var req = arg.req;
    var res = arg.res;
    var conditions = {
        phone: req.body.phone,
        password: req.body.password
    }

    Entity.find(conditions, function(err, doc) {
        if (doc.length > 0) {
            req.session.userInfo = {
                is_login: true,
                user_id: doc[0]._id,
                user_type: doc[0].usertype
            }
            res.send({
                error_no: 0,
                data: doc[0],
                error_msg: 'okay'
            });
        } else {
            res.send({
                error_no: 1,
                data: doc,
                error_msg: '用户名或密码错误'
            });
        }
    });

};
module.exports = loginAction;
