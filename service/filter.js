var logger = process.logger.accessLog;
var filter = function(query) {
    var result = {};
    for (var prop in query) {
        var sourse = query[prop];
        var target = sourse;
        if (sourse != '0') {
            var range = sourse.split('-');
            if (range.length > 1) {
                target = {
                    '$gte': parseInt(range[0]) || 0,
                    '$lte': parseInt(range[1])
                }
            }

            result[prop] = target;
        }
    }
    return result;
};

module.exports = filter;
