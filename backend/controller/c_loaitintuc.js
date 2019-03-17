module.exports = function (mongoose, res) {
    this.getAllDSLoaiTinTuc = function () {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        LoaiTinTuc.find({}, function (err, loaitintuc) {
            mongoose.connection.close();
            res.send(loaitintuc);
        })
    }
    this.getLimitDSLoaiTinTuc = function (vtbd, sluong) {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        LoaiTinTuc.find({}, {}, function (err, loaitintuc) {
            let mangLoaiTinTuc = [];
            mongoose.connection.close();
            if (loaitintuc.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangLoaiTinTuc.push(loaitintuc[i]);
                }
            } else {
                for (var i = vtbd; i <= loaitintuc.length - 1; i++) {
                    mangLoaiTinTuc.push(loaitintuc[i]);
                }
            }

            res.send({ 'data': mangLoaiTinTuc, 'code': 200 });
        })
    }
    this.getLoaiTinTucbyID = function (maLoaiTinTuc) {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        LoaiTinTuc.find({ maLoaiTinTuc: maLoaiTinTuc }, {}, function (err, loaitintuc) {
            mongoose.connection.close();

            res.send({ 'data': loaitintuc, 'code': 200 });
        })
    }
    this.addLoaiTinTuc = function (ObLoaiTinTuc) {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        const loaitintuc = new LoaiTinTuc({
            idLoaiTinTuc: ObLoaiTinTuc.idLoaiTinTuc,
            nameLoaiTinTuc: ObLoaiTinTuc.nameLoaiTinTuc,
            codeLoaiTinTuc: ObLoaiTinTuc.codeLoaiTinTuc,
            statusLoaiTinTuc: ObLoaiTinTuc.statusLoaiTinTuc,
            iconLoaiTinTuc: ObLoaiTinTuc.iconLoaiTinTuc,
            classLoaiTinTuc: ObLoaiTinTuc.classLoaiTinTuc,
            typeLoaiTinTuc: ObLoaiTinTuc.typeLoaiTinTuc
        });

        loaitintuc.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': loaitintuc, 'code': 200 });
            }
        });

    }
    this.removeLoaiTinTuc = function (maLoaiTinTuc) {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        LoaiTinTuc.remove({ idLoaiTinTuc: maLoaiTinTuc }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateLoaiTinTuc = function (ObLoaiTinTuc) {
        var LoaiTinTuc = require('../model/m_loaitintuc.js');
        LoaiTinTuc.update({ idLoaiTinTuc: ObLoaiTinTuc.idLoaiTinTuc }, {
            nameLoaiTinTuc: ObLoaiTinTuc.nameLoaiTinTuc,
            codeLoaiTinTuc: ObLoaiTinTuc.codeLoaiTinTuc,
            statusLoaiTinTuc: ObLoaiTinTuc.statusLoaiTinTuc,
            iconLoaiTinTuc: ObLoaiTinTuc.iconLoaiTinTuc,
            classLoaiTinTuc: ObLoaiTinTuc.classLoaiTinTuc,
            typeLoaiTinTuc: ObLoaiTinTuc.typeLoaiTinTuc
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
