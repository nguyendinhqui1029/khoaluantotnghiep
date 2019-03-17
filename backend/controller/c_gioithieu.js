module.exports = function (mongoose, res) {
    this.getAllDSGioiThieu = function () {
        var GioiThieu = require('../model/m_gioithieu.js');
        GioiThieu.find({}, function (err, gioithieu) {
            mongoose.connection.close();
            res.send(gioithieu);
        })
    }
    this.getGioiThieubyID = function (magioithieu) {
        var GioiThieu = require('../model/m_gioithieu.js');
        GioiThieu.find({ magioithieu: magioithieu }, {}, function (err, gioithieu) {
            mongoose.connection.close();
            res.send({ 'data': gioithieu, 'code': 200 });
        })
    }
    this.addGioiThieu = function (ObGioiThieu) {
        var GioiThieu = require('../model/m_gioithieu.js');
        const gioithieu = new GioiThieu({
            magioithieu: ObGioiThieu.magioithieu,
            tieude: ObGioiThieu.tieude,
            noidung: ObGioiThieu.noidung,
            icon: ObGioiThieu.icon
        });
        gioithieu.save(function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': gioithieu, 'code': 200 });
            }
        });
    }
    this.removeGioiThieu = function (magioithieu) {
        var GioiThieu = require('../model/m_gioithieu.js');
        GioiThieu.remove({ magioithieu: magioithieu }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateGioiThieu = function (ObGioiThieu) {
        var GioiThieu = require('../model/m_gioithieu.js');
        GioiThieu.update(
            { magioithieu: ObGioiThieu.magioithieu },
            {
                tieude: ObGioiThieu.tieude,
                noidung: ObGioiThieu.noidung,
                icon: ObGioiThieu.icon
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
    this.getLimitDSGioiThieu = function (vtbd, sluong) {
        var GioiThieu = require('../model/m_gioithieu.js');
        GioiThieu.find({}, {}, function (err, gioithieu) {
            let mangGioiThieu = [];
            mongoose.connection.close();
            if (gioithieu.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangGioiThieu.push(gioithieu[i]);
                }
            } else {
                for (var i = vtbd; i <= gioithieu.length - 1; i++) {
                    mangGioiThieu.push(gioithieu[i]);
                }
            }
            res.send({ 'data': mangGioiThieu, 'code': 200 });
        })
    }
}