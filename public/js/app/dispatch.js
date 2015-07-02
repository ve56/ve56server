$(function() {

    /**
     * 表单提交验证，待完善
     */

    $('.formgroup').on('submit', function() {
        if ($('.shipper-province').val() == '请选择' || $('.shipper-city').val() == '请选择' || $('.shipper-addr').val() == '') {
            alert('请补全发货地');
            return false;
        }
        if ($('.destination-province').val() == '请选择' || $('.destination-city').val() == '请选择' || $('.destination-addr').val() == '') {
            alert('请补全目的地');
            return false;
        }
    });
    /**
     * 初始化省市二级联动
     */
    utils.initCity('.shipper-province', '.shipper-city');
    utils.initCity('.destination-province', '.destination-city');
});
