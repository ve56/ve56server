$(function() {
    utils.initCity('.shipper-province');
    utils.initCity('.destination-province');

    /**
     * 初始化路由
     */
    (function parseUrl() {
        var request = utils.getRequest();
        if(JSON.stringify(request) == '{}'){
            $('.searcbtn').css({
                'display':'block'
            })
            return false;
        }
        var dest = request.destination_province;
        var shipper = request.shipper_province;
        var model = request.truck_model;
        var length = request.truck_length;
        //var weight = request.truck_weight;
        $('.shipper-province').val(shipper);
        $('.destination-province').val(dest);
        $('#truck_model').val(model);
        $('#truck_length').val(length);
        //$('#truck_weight').val(weight);
    })();

    /**
     * 绑定搜索事件
     */
    $('select').on('change',function(){
        $('.searcbtn').trigger('click');
    })
    $('.searcbtn').on('click', function() {
        var shipperProvince = $('.shipper-province').val();
        var destinationProvince = $('.destination-province').val();
        var model = $('#truck_model').val();
        var length = $('#truck_length').val();
        //var weight = $('#truck_weight').val();
        var request = [
            'destination_province=' + destinationProvince,
            'shipper_province=' + shipperProvince,
            'truck_model=' + model,
            'truck_length=' + length,
            //'truck_weight=' + weight
        ]
        window.location.search = encodeURI(request.join('&'));
    })

    /**
     *  交换目的地和出发地
     */
    $('.cutsite').on('click', function() {
        var shipper = $('.shipper-province').val();
        var dest = $('.destination-province').val();
        $('.shipper-province').val(dest);
        $('.destination-province').val(shipper);
        $('.searcbtn').trigger('click');
    })
})
