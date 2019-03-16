var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    idMenu: Number,
    nameMenu: String,
    codeMenu: String,
    statusMenu: Boolean,
    iconMenu: String,
    classMenu: String,
    typeMenu: Number
});
module.exports = mongoose.model('menu', menuSchema);