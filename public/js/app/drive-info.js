$(function() {
    $('.submit').on('click', function() {
        var name = $('input[name=name]').val() || '';
        var id = $('input[name=id]').val() || '';
        var car_id = $('input[name=car_id]').val() || '';
        var drive_id = $('input[name=drive_id]').val() || '';
        if (name == '' || id == '' || car_id == '' || drive_id == '') {
            alert('请将信息补充完整');
            return;
        }
        $.post('driverInfo', {
            name: name,
            id: id,
            car_id: car_id,
            drive_id: drive_id
        }, function(resp) {
            resp = JSON.parse(resp);
            if (resp.error_num == 0) {
                alert(resp.info);
                window.location.pathname = '/user';
            } else {
                alert(resp.info);
            }
        })
    })
})
