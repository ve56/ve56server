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
        $.post('getcode', {
            phone: $('.phone-num').val()
        }, function(resp) {
            resp = JSON.parse(resp);
            alert(resp.info);
            if (resp.error_num == 0) {

            } else {

            }
        })
    });

    $('.regbtn').on('click', function() {
        var name = $('.name').val();
        var phone = $('.phone-num').val();
        var password = $('.password').val();
        var phonecode = $('.phonecode').siblings('input').val();
        var usertype = $('.reguser .active').attr('data-type');
        if (phone == '' || password == '' || phonecode == '' || usertype == '') {
            alert('请将信息补充完整');
            return;
        }
        $.post('reg', {
            name: name,
            phone: phone,
            password: password,
            phonecode: phonecode,
            usertype: usertype
        }, function(resp) {
            resp = JSON.parse(resp);
            alert('注册成功，正在跳转中');
            window.location.pathname = usertype === 'driver'? 'goodslist' : 'dispatch';
        })
    });
})
