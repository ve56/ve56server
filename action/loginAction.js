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
    console.log(conditions);
    Entity.find(conditions, function(err, doc) {
        if (doc.length > 0) {
            res.send({
                error_no: 0,
                data: doc[0],
                error_msg: 'okay'
            });
        } else {
            res.send({
                error_no: 1,
                data: doc,
                error_msg: 'password and username error'
            });
        }
    });

};
module.exports = loginAction;
