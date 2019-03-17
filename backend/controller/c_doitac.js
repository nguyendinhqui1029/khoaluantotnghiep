module.exports = function (mongoose, res) {
    this.getAllDSDoiTac = function () {
        var DoiTac = require('../model/m_doitac');
        DoiTac.find({}, function (err, doitac) {
            mongoose.connection.close();
            res.send(doitac);
        })
    }
    this.getLimitDSDoiTac = function (vtbd, sluong) {
        var DoiTac = require('../model/m_doitac.js');
        DoiTac.find({}, {}, function (err, doitac) {
            let mangDoiTac = [];
            mongoose.connection.close();
            if (doitac.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangDoiTac.push(doitac[i]);
                }
            } else {
                for (var i = vtbd; i <= doitac.length - 1; i++) {
                    mangDoiTac.push(doitac[i]);
                }
            }
            res.send({ 'data': mangDoiTac, 'code': 200 });
        })
    }
    this.getDoiTacbyID = function (maDoiTac) {
        var DoiTac = require('../model/m_doitac');
        DoiTac.find({ maDoiTac: maDoiTac }, {}, function (err, doitac) {
            mongoose.connection.close();

            res.send({ 'data': doitac, 'code': 200 });
        })
    }
    this.addDoiTac = function (ObDoiTac) {
        var DoiTac = require('../model/m_doitac.js');
        const doitac = new DoiTac({
            maDoiTac: ObDoiTac.maDoiTac,
            hoTen: ObDoiTac.tenDoiTac,
            diaChi: ObDoiTac.diaChi,
            sdt: ObDoiTac.sdt,
            tinhThanhPho: ObDoiTac.tinhThanhPho,
            quanHuyen: ObDoiTac.quanHuyen,
            ngaySinh: ObDoiTac.ngaySinh,
            loGo: ObDoiTac.loGo,
            moTa: ObDoiTac.moTa,
            user: ObDoiTac.user,
            pass: ObDoiTac.pass,
            loaiTaiKhoan: ObDoiTac.loaiTaiKhoan,
            email: ObDoiTac.email,
        });
        doitac.save(function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': doitac, 'code': 200 });
            }
        });
    }
    this.removeDoiTac = function (maDoiTac) {
        var DoiTac = require('../model/m_doitac');
        DoiTac.remove({ maDoiTac: maDoiTac }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateDoiTac = function (ObDoiTac) {
        var DoiTac = require('../model/m_doitac.js');
        DoiTac.update({ maDoiTac: ObDoiTac.maDoiTac },
            {
                hoTen: ObDoiTac.tenDoiTac,
                diaChi: ObDoiTac.diaChi,
                sdt: ObDoiTac.sdt,
                tinhThanhPho: ObDoiTac.tinhThanhPho,
                quanHuyen: ObDoiTac.quanHuyen,
                ngaySinh: ObDoiTac.ngaySinh,
                loGo: ObDoiTac.loGo,
                moTa: ObDoiTac.moTa,
                user: ObDoiTac.user,
                pass: ObDoiTac.pass,
                loaiTaiKhoan: ObDoiTac.loaiTaiKhoan,
                email: ObDoiTac.email,
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
