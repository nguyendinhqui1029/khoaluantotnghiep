var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tinTucSchema = new Schema({
    matintuc: String,
    tentintuc: String,
    trangthai: String,
    noidungchitiet: String,
    noidungtomtat: String,
    ngaydang: Date,
    hinhanh: Array,
    loaitintuc: Object
});
module.exports = mongoose.model('tintuc', tinTucSchema);  