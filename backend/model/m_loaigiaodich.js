var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loaiGiaoDichSchema = new Schema({
    maLoai: String,
    tenLoai: String,
    trangThai: Number
});
module.exports = mongoose.model('loaigiaodich', loaiGiaoDichSchema);