var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loaiTinTucSchema = new Schema({ maloai: String, tenloai: String, trangThai: String });
module.exports = mongoose.model('loaitintuc', loaiTinTucSchema);