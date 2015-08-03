var logger = process.logger.accessLog;
var models = process.models;
var filter = require('../service/' + 'filter');

var indexAction = function(arg) {
    var res = arg.res;
    var req = arg.req;
    var Entity = models['indenture'];
    if (JSON.stringify(req.query) != '{}') {
        var conditions = filter(req.query); //去掉0值
        console.log(conditions);
        Entity.find(conditions, function(err, doc) {
            res.render('goodslist', {
                data: doc || [],
                search:true
            });
        });
    } else {
        res.render('goodslist', {
            data: [],
            search: false
        });
    }

};
module.exports = indexAction;
