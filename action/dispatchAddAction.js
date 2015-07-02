var logger = process.logger.accessLog;
var models = process.models;
var filter = require('../service/' + 'filter');
var loginAction = function(arg) {
    var req = arg.req;
    var res = arg.res;
    logger.info(req.query);

    var Entity = models['indenture'];
    var indenture = new Entity(req.query);
    console.log(indenture);
    indenture.save(function(err, doc) {
        if (!err) {
            res.redirect('goodslist');
        }
    });

};
module.exports = loginAction;
