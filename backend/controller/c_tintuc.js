module.exports = function (mongoose, res) {
    this.getAllDSTinTuc = function () {
        var TinTuc = require('../model/m_tintuc.js');
        TinTuc.find({}, function (err, tintuc) {
            mongoose.connection.close();
            res.send(tintuc);
        })
    }
    this.getLimitDSTinTuc = function (vtbd, sluong) {
        var TinTuc = require('../model/m_tintuc.js');
        TinTuc.find({}, {}, function (err, tintuc) {
            let mangTinTuc = [];
            mongoose.connection.close();
            if (taikhoan.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangTinTuc.push(tintuc[i]);
                }
            } else {
                for (var i = vtbd; i <= taikhoan.length - 1; i++) {
                    mangTinTuc.push(tintuc[i]);
                }
            }
            res.send({ 'data': mangTinTuc, 'code': 200 });
        })
    }
    this.getTinTucbyID = function (maTinTuc) {
        var TinTuc = require('../model/m_tintuc.js');
        TinTuc.find({ matintuc: maTinTuc }, {}, function (err, tintuc) {
            mongoose.connection.close();

            res.send({ 'data': tintuc, 'code': 200 });
        })
    }
    this.addTinTuc = function (ObTinTuc) {
        var TinTuc = require('../model/m_tintuc.js');
        const tintuc = new TinTuc({
            matintuc: ObTinTuc.matintuc,
            tentintuc: ObTinTuc.tentintuc,
            trangthai: ObTinTuc.trangthai,
            noidungchitiet: ObTinTuc.noidungchitiet,
            noidungtomtat: ObTinTuc.noidungtomtat,
            ngaydang: ObTinTuc.ngaydang,
            hinhanh: ObTinTuc.hinhanh,
            loaitintuc: ObTinTuc.loaitintuc
        });
        tintuc.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': tintuc, 'code': 200 });
            }
        });

    }
    this.removeTinTuc = function (maTinTuc) {
        var TinTuc = require('../model/m_tintuc.js');
        TinTuc.remove({ matintuc: maTinTuc }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateTinTuc = function (ObTinTuc) {
        var TinTuc = require('../model/m_tintuc.js');
        TinTuc.update({
            matintuc: ObTinTuc.matintuc,
            tentintuc: ObTinTuc.tentintuc,
            trangthai: ObTinTuc.trangthai,
            noidungchitiet: ObTinTuc.noidungchitiet,
            noidungtomtat: ObTinTuc.noidungtomtat,
            ngaydang: ObTinTuc.ngaydang,
            hinhanh: ObTinTuc.hinhanh,
            loaitintuc: ObTinTuc.loaitintuc
        }, function (err, data) {
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
