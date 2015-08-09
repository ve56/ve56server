module.exports = {
    shipper_name: {
        type: String,
        default: ''
    },
    shipper_tel: {
        type: Number,
        default: ''
    },
    shipper_country: {
        type: String,
        default: ''
    },
    shipper_province: {
        type: String,
        default: ''
    },
    shipper_city: {
        type: String,
        default: ''
    },
    shipper_addr: {
        type: String,
        default: ''
    },
    destination_country: {
        type: String,
        default: ''
    },
    destination_province: {
        type: String,
        default: ''
    },
    destination_city: {
        type: String,
        default: ''
    },
    destination_addr: {
        type: String,
        default: ''
    },
    truck_model: {
        type: String,
        default: ''
    },
    truck_length: {
        type: Number,
        default: ''
    },
    truck_weight: {
        type: Number,
        default: ''
    },
    goods_detail: {
        type: String,
        default: ''
    },
    start_time: {
        type: Number,
        default: Date.now()
    },
    order_time: {
        type: Number,
        default: ''
    },
    order_user:{
        type: Number,
        default: ''
    },
    is_done: {
        type: Boolean,
        default: false
    }
};
