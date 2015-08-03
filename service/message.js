var logger = process.logger.accessLog;
var request = require('request');
/**
 * 自动队列，当有手机号发送验证码时自动加入队列，倒计时60秒，期间再次发送反回不能提交
 */
function queuePush(key, value) {
    if (JSON.stringify(queue) == '{}') {
        queueStart();
    }
    queue[key] = value;
}
var queue = {};
var queueThread;

function queueStart() {
    queueThread = setInterval(function() {
        for (var prop in queue) {
            if (queue[prop]['time'] === 0) {
                delete queue[prop];
            } else {
                queue[prop]['time'] -= 2;
            }
        }
        console.log(queue)
        if (JSON.stringify(queue) == '{}') {
            console.log('stop queue');
            clearInterval(queueThread);
        }
    }, 2000);
};
/**
 *  生成4位随机数
 */
function random4code() {
    var code = '';
    var characters = '0123456789';
    for (var i = 0; i < 4; i++) {
        code += parseInt(10 * Math.random());
    }
    return code;
}
/**
 * 短信发送模块，并执行回调函数
 */
function sendMsg(tel, content, callback) {
    var baseUrl = 'http://sms.1xinxi.cn/asmx/smsservice.aspx?';
    var params = {
        'name': '13521448752', //必填参数。用户账号
        'pwd': '4D7EA63EE770D2FCEA93EF6A1EDE', //必填参数。（web平台：基本资料中的接口密码）
        'content': content, //必填参数。发送内容（1-500 个汉字）UTF-8编码
        'mobile': tel, //必填参数。手机号码。多个以英文逗号隔开
        'stime': '', //可选参数。发送时间，填写时已填写的时间发送，不填时为当前时间发送
        'sign': 'costlife', //必填参数。用户签名。
        'type': 'pt', //必填参数。固定值 pt
        'extno': '' //可选参数，扩展码，用户定义扩展码，只能为数字
    }
    request.post({
        url: baseUrl,
        form: params
    }, function(err, resp, body) {
        console.log(body);
        callback(body);
    });
}
/**
 *  对外暴露的send方法
 */
var message = {
    send: function(telephone, type, callback) {
        if (queue[telephone]) {
            callback({
                'error_num': 1,
                'info': '发送太快了，请稍候再试哦~'
            });
        } else {
            var content;
            if (type == 0) {
                //0为注册
                var code = random4code();
                content = '短信验证码为：' + code + '，请勿将验证码提供给他人。';
                queuePush(telephone, {
                    time: 120,
                    code: code
                })
            }
            sendMsg(telephone, content, function(resp) {
                var result = {
                    'error_num': 0,
                    'info': '短信发送成功，请注意查收'
                };
                if (resp.slice(0, 1) != 0) {
                    result = {
                        'error_num': 1,
                        'info': '短信发送失败，请稍候重试'
                    };
                }
                callback(result);
            });
        }
    }
};
process.queue = queue;
module.exports = message;
