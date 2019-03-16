var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tinTucSchema = new Schema({ matintuc: String, tentintuc: String, trangthai: String, noidungchitiet: String, noidungtomtat: String, ngaydang: String, hinhanh: String, loaitintuc: Object });
module.exports = mongoose.model('tintuc', tinTucSchema);