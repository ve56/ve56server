var logger = process.logger.accessLog;
var message = require('../service/' + 'message');
var getcodeAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    message.send(req.body.phone, 0, function(result) {
        res.send(result);
    });
};
module.exports = getcodeAction;
