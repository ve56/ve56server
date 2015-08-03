var logger = process.logger.accessLog;
var models = process.models;
var filter = require('../service/' + 'filter');

var goodsdetailsAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    var Entity = models['indenture'];
    var conditions = filter(req.query); //去掉0值
    console.log(conditions);
    Entity.find(conditions, function(err, doc) {
        console.log(doc)
        res.render('goodsdetails', {
            data: doc || [],
            search:true
        });
    });
};
module.exports = goodsdetailsAction;
