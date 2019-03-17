module.exports = function (mongoose, res) {
    this.getAllDSDanhMuc = function () {
        var DanhMuc = require('../model/m_danhmuc.js');
        DanhMuc.find({}, function (err, danhmuc) {
            mongoose.connection.close();
            res.send(danhmuc);
        })
    }
    this.getLimitDSDanhMuc = function (vtbd, sluong) {
        var DanhMuc = require('../model/m_danhmuc.js');
        DanhMuc.find({}, {}, function (err, danhmuc) {
            let mangDanhMuc = [];
            mongoose.connection.close();
            if (danhmuc.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangDanhMuc.push(danhmuc[i]);
                }
            } else {
                for (var i = vtbd; i <= danhmuc.length - 1; i++) {
                    mangDanhMuc.push(danhmuc[i]);
                }
            }
            res.send({ 'data': mangDanhMuc, 'code': 200 });
        })
    }
    this.getDanhMucbyID = function (maDanhMuc) {
        var DanhMuc = require('../model/m_danhmuc.js');
        DanhMuc.find({ maDanhMuc: maDanhMuc }, {}, function (err, danhmuc) {
            mongoose.connection.close();

            res.send({ 'data': danhmuc, 'code': 200 });
        })
    }
    this.addDanhMuc = function (ObDanhMuc) {
        var DanhMuc = require('../model/m_danhmuc.js');
        const danhmuc = new DanhMuc({
            maDanhMuc: ObDanhMuc.maDanhMuc,
            tenDanhMuc: ObDanhMuc.tenDanhMuc,
            trangThai: ObDanhMuc.trangThai,
            isActive: ObDanhMuc.isActive
        });

        danhmuc.save(function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': danhmuc, 'code': 200 });
            }
        });

    }
    this.removeDanhMuc = function (maDanhMuc) {
        var DanhMuc = require('../model/m_danhmuc.js');
        DanhMuc.remove({ maDanhMuc: maDanhMuc }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateDanhMuc = function (ObDanhMuc) {
        var DanhMuc = require('../model/m_danhmuc.js');
        DanhMuc.update({ maDanhMuc: ObDanhMuc.maDanhMuc, tenDanhMuc: ObDanhMuc.tenDanhMuc, trangThai: ObDanhMuc.trangThai, isActive: ObDanhMuc.isActive }, function (err, data) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': data, 'code': 200 });
            }
        })
    }

}
