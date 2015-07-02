$(function() {

    /**
     *  绑定事件
     */
    $('.loginform input').focus(function() {
        $(this).siblings('i').css({
            'color': '#4D85D9'
        })
    }).blur(function() {
        $(this).siblings('i').css({
            'color': '#B1B3BA'
        })
    });

    $('.login-btn').on('click', function(e) {
        $phone = $('.phone').val();
        $password = $('.password').val();
        $.post('login', {
            phone: $phone,
            password: $password
        }, function(resp) {
            resp = JSON.parse(resp);
            if (resp.error_no == 0) {
                if (resp.data.usertype == 'owner') {
                    alert('欢迎使用，亲爱的货主朋友');
                    window.location.pathname = 'dispatch';
                } else {
                    alert('欢迎使用，亲爱的司机朋友');
                    window.location.pathname = 'goodslist';
                }
            }
        })
    })
});
