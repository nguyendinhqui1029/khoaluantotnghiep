var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doiTacSchema = new Schema({
    maDoiTac: String,
    hoTen: String,
    diaChi: String,
    sdt: String,
    tinhThanhPho: String,
    quanHuyen: String,
    ngaySinh: String,
    loGo: String,
    moTa: String,
    user: String,
    pass: String,
    loaiTaiKhoan: String,
    email: String,
});
module.exports = mongoose.model('doitac', doiTacSchema);