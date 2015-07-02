$(function() {
    $('.loginform input').focus(function() {
        $(this).siblings('i').css({
            'color': '#4D85D9'
        })
    }).blur(function() {
        $(this).siblings('i').css({
            'color': '#B1B3BA'
        })
    });

    $('.reguser').on('click', 'a', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.phonecode').on('click', function() {
        $(this).siblings('input').val(8888);
    });

    $('.regbtn').on('click', function() {
        var phone = $('.phone-num').val();
        var password = $('.password').val();
        var phonecode = $('.phonecode').siblings('input').val();
        var usertype = $('.reguser .active').attr('data-type');
        if (phone == '' || password == '' || phonecode == '' || usertype == '') {
            alert('请将信息补充完整');
            return;
        }
        $.post('reg', {
            phone: phone,
            password: password,
            phonecode: phonecode,
            usertype: usertype
        }, function(resp) {
            resp = JSON.parse(resp);
            if (resp.error_num == 0) {
                alert('注册成功，请重新登录')
                window.location.pathname = '/';
            } else {
                alert(resp.info);
            }
        })
    });
})
