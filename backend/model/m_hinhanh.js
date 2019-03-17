var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hinhAnhSchema = new Schema({
    mahinh: String,
    tenhinh: String,
    alt: String
});
module.exports = mongoose.model('hinhanh', hinhAnhSchema);