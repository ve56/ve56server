var logger = process.logger.accessLog;
var models = process.models;
var logger = process.logger.accessLog;
var indexAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    var Entity = models['user'];
    Entity.find({
        _id: req.session.userInfo.user_id
    }, function(err, doc) {
        console.log(doc);
        if (doc.length > 0) {
            res.render('user', {
                data: doc
            });
        } else {
            res.send({
                error_no: 1,
                data: doc,
                error_msg: 'system is error'
            });
        }
    });
};
module.exports = indexAction;
