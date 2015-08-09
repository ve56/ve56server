var logger = process.logger.accessLog;
var models = process.models;
var indexAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    res.render('driver-record');
};
module.exports = indexAction;
