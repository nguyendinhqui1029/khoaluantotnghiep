var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var congTySchema = new Schema({
    tenCongTy: String,
    logoCongTy: String,
    soDienThoaiCongTy: String,
    emailCongTy: String,
    diaChiCongTy: String,
    kinhDoCongTy: Number,
    viDoCongTy: Number,
    faxCongTy: String,
    hotlineCongTy: String
});
module.exports = mongoose.model('congty', congTySchema);