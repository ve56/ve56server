var logger = process.logger.accessLog;
var indexAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    res.render('index', {
        title: 've'
    });
};
module.exports = indexAction;
