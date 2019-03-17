module.exports = function (mongoose, res) {
    this.getAllDSDanhMuc = function () {
        var DanhMuc = require('../model/danhmuc.js');
        DanhMuc.find({}, {}, function (err, danhmuc) {
            mongoose.connection.close();
            res.send(danhmuc);
        })
    }
    this.getLimitDSDanhMuc = function (vtbd, sluong) {
        var DanhMuc = require('../model/danhmuc.js');
        DanhMuc.find({}, {}, function (err, danhmuc) {
            let mangDanhMuc = [];
            mongoose.connection.close();
            for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                mangDanhMuc.push(danhmuc[i]);
            }
            res.send({ 'data': mangDanhMuc, 'code': 200 });
        })
    }
    this.addDanhMuc = function (ObDanhMuc) {
        var DanhMuc = require('../model/danhmuc.js');
        const danhmuc = new DanhMuc({
            maDanhMuc: ObDanhMuc.maDanhMuc,
            tenDanhMuc: ObDanhMuc.tenDanhMuc,
            trangThai: ObDanhMuc.trangThai,
            isActive: ObDanhMuc.isActive
        });
        danhmuc.save(function (err) {
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': danhmuc, 'code': 200 });
            }
        });
    }
}
