module.exports = function (mongoose, res) {
    this.getAllDSLoaiGiaoDich = function () {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        LoaiGiaoDich.find({}, function (err, loaigiaodich) {
            mongoose.connection.close();
            res.send(loaigiaodich);
        })
    }
    this.getLimitDSLoaiGiaoDich = function (vtbd, sluong) {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        LoaiGiaoDich.find({}, {}, function (err, loaigiaodich) {
            let mangLoaiGiaoDich = [];
            mongoose.connection.close();
            if (loaigiaodich.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangLoaiGiaoDich.push(loaigiaodich[i]);
                }
            } else {
                for (var i = vtbd; i <= loaigiaodich.length - 1; i++) {
                    mangLoaiGiaoDich.push(loaigiaodich[i]);
                }
            }

            res.send({ 'data': mangLoaiGiaoDich, 'code': 200 });
        })
    }
    this.getLoaiGiaoDichbyID = function (maLoaiGiaoDich) {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        LoaiGiaoDich.find({ maLoai: maLoaiGiaoDich }, {}, function (err, loaigiaodich) {
            mongoose.connection.close();

            res.send({ 'data': loaigiaodich, 'code': 200 });
        })
    }
    this.addLoaiGiaoDich = function (ObLoaiGiaoDich) {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        const loaigiaodich = new LoaiGiaoDich({
            maLoai: ObLoaiGiaoDich.maLoai,
            tenLoai: ObLoaiGiaoDich.tenLoai,
            trangThai: ObLoaiGiaoDich.trangThai
        });

        loaigiaodich.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': loaigiaodich, 'code': 200 });
            }
        });

    }
    this.removeLoaiGiaoDich = function (maLoaiGiaoDich) {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        LoaiGiaoDich.remove({ maLoai: maLoaiGiaoDich }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateLoaiGiaoDich = function (ObLoaiGiaoDich) {
        var LoaiGiaoDich = require('../model/m_loaigiaodich.js');
        LoaiGiaoDich.update({ maLoai: ObLoaiGiaoDich.maLoai }, {
            tenLoai: ObLoaiGiaoDich.tenLoai,
            trangThai: ObLoaiGiaoDich.trangThai
        }, { multi: true }, function (err, data) {
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
