var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var danhMucSchema = new Schema({ maDanhMuc: String, tenDanhMuc: String, trangThai: Number, isActive: Boolean });
module.exports = mongoose.model('danhmuc', danhMucSchema);