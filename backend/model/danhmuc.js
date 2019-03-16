var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var danhMucSchema = new Schema({ maDanhMuc: String, tenDanhMuc: String, trangThai: Number, isActive: Boolean });
<<<<<<< HEAD
module.exports = mongoose.model('danhmuc', danhMucSchema);
=======
module.exports = mongoose.model('danhmuc', danhMucSchema);  
>>>>>>> cdd7a0d2debbb520f7c043233d5bb2fe258dd1d0
