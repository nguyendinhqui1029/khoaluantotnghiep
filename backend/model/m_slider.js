var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sliderSchema = new Schema({
    maSlider: String,
    mangHinh: Array,
    trangThai: Boolean,
    loaiSlider: String
});
module.exports = mongoose.model('slider', sliderSchema);