var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doiTacSchema = new Schema({
    maDuAn: String,
    tenDuAn: String,
    noiDungTomTat: String,
    noiDungChiTiet: String,
    mangHinh: Object,
    ngayDang: {
        type: Date,
        default: Date.now
    },
    doiTac: Object,
    giaTien: Number,
    loaiGiaoDich: Object,
    danhMuc: Object,
    quanHuyen: String,
    tinhThanhPho: String,
    trangThai: Number,
    loaiDuAn: String
});
module.exports = mongoose.model('duan', doiTacSchema);