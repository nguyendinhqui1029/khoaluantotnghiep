var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gioiThieuSchema = new Schema({
    magioithieu: String,
    tieude: String,
    noidung: String,
    icon: String
});
module.exports = mongoose.model('gioithieu', gioiThieuSchema);