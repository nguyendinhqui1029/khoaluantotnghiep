var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taiKhoanSchema = new Schema({
    maTaiKhoan: String,
    hoTen: String,
    soDienThoai: String,
    tinhThanhPho: String,
    diaChi: String,
    quanHuyen: String,
    gioiTinh: String,
    ngaySinh: Date,
    logo: Object,
    moTa: String,
    tenTaiKhoan: String,
    email: String,
    matKhau: String,
    loaiTaiKhoan: String
});
module.exports = mongoose.model('taikhoan', taiKhoanSchema);