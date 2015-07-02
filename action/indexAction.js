var logger = process.logger.accessLog;
var indexAction = function(arg) {
    var res = arg.res;
    res.render('index', {
        title: 've'
    });
};
module.exports = indexAction;
