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

    $('.phonecode').on('click', function() {
        $.post('getcode', {
            phone: $('.phone-num').val()
        }, function(resp) {
            resp = JSON.parse(resp);
            alert(resp.info);
        })
    });

    $('.submit').on('click', function() {
        var phone = $('.phone-num').val();
        var password = $('.pass1').val();
        var passwordConfirm = $('.pass2').val();
        var phonecode = $('.phonecode').siblings('input').val();
        if (phone == '' || password == '' || passwordConfirm == '' || phonecode == '') {
            alert('请将信息补充完整');
            return;
        }
        if(password != passwordConfirm){
            alert('两次密码不一致，请重新输入');
            $('.pass1').focus();
            return;
        }
        $.post('forgetpas', {
            phone: phone,
            password: password,
            phonecode: phonecode,
        }, function(resp) {
            resp = JSON.parse(resp);
            if (resp.error_num == 0) {
                alert(resp.info)
                window.location.pathname = '/';
            } else {
                alert(resp.info);
            }
        })
    });
})
