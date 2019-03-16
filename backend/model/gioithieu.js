var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gioiThieuSchema = new Schema({ maGioiThieu: String, tieuDe: String, noiDung: String, icon: String });
module.exports = mongoose.model('gioithieu', gioiThieuSchema);