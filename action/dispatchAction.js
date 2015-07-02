var logger = process.logger.accessLog;
var indexAction = function(arg){
    var res = arg.res;
    res.render('dispatch');
};
module.exports = indexAction;
