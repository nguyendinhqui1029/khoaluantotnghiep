var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var duAnSchema = new Schema({
    maDuAn: String,
    tenDuAn: String,
    noiDungTomTat: String,
    noiDungChiTiet: String,
    mangHinh: Array,
    ngayDang: Date,
    doiTac: Object,
    giaTien: Number,
    loaiGiaoDich: Object,
    danhMuc: Object,
    quanHuyen: String,
    tinhThanhPho: String,
    trangThai: Number,
    loaiDuAn: String
});
module.exports = mongoose.model('duan', duAnSchema);