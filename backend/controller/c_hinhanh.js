module.exports = function (mongoose, res) {
    this.getAllDSHinhAnh = function () {
        var HinhAnh = require('../model/m_hinhanh.js');
        HinhAnh.find({}, function (err, hinhanh) {
            mongoose.connection.close();
            res.send(hinhanh);
        })
    }
    this.getLimitDSHinhAnh = function (vtbd, sluong) {
        var HinhAnh = require('../model/m_hinhanh.js');
        HinhAnh.find({}, {}, function (err, hinhanh) {
            let mangHinhAnh = [];
            mongoose.connection.close();
            if (hinhanh.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangHinhAnh.push(hinhanh[i]);
                }
            } else {
                for (var i = vtbd; i <= hinhanh.length - 1; i++) {
                    mangHinhAnh.push(hinhanh[i]);
                }
            }

            res.send({ 'data': mangHinhAnh, 'code': 200 });
        })
    }
    this.getHinhAnhbyID = function (mahinh) {
        var HinhAnh = require('../model/m_hinhanh.js');
        HinhAnh.find({ mahinh: mahinh }, {}, function (err, hinhanh) {
            mongoose.connection.close();

            res.send({ 'data': hinhanh, 'code': 200 });
        })
    }
    this.addHinhAnh = function (ObHinhAnh) {
        var HinhAnh = require('../model/m_hinhanh.js');
        const hinhanh = new HinhAnh({
            mahinh: ObHinhAnh.mahinh,
            tenhinh: ObHinhAnh.tenhinh,
            alt: ObHinhAnh.alt
        });

        hinhanh.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': hinhanh, 'code': 200 });
            }
        });

    }
    this.removeHinhAnh = function (maHinhAnh) {
        var HinhAnh = require('../model/m_hinhanh.js');
        HinhAnh.remove({ mahinh: maHinhAnh }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateHinhAnh = function (ObHinhAnh) {
        var HinhAnh = require('../model/m_hinhanh.js');
        HinhAnh.update({ mahinh: ObHinhAnh.mahinh }, {
            tenhinh: ObHinhAnh.tenhinh,
            alt: ObHinhAnh.alt
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
