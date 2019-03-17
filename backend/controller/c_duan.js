module.exports = function (mongoose, res) {
    this.getAllDSDuAn = function () {
        var DuAn = require('../model/m_duan');
        DuAn.find({}, function (err, duan) {
            mongoose.connection.close();
            res.send(duan);
        })
    }
    this.getLimitDSDuAn = function (vtbd, sluong) {
        var DuAn = require('../model/m_duan.js');
        DuAn.find({}, {}, function (err, duan) {
            let mangDuAn = [];
            mongoose.connection.close();
            if (duan.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangDuAn.push(duan[i]);
                }
            } else {
                for (var i = vtbd; i <= duan.length - 1; i++) {
                    mangDuAn.push(duan[i]);
                }
            }
            res.send({ 'data': mangDuAn, 'code': 200 });
        })
    }
    this.getDuAnbyID = function (maDuAn) {
        var DuAn = require('../model/m_duan');
        DuAn.find({ maDuAn: maDuAn }, {}, function (err, duan) {
            mongoose.connection.close();

            res.send({ 'data': duan, 'code': 200 });
        })
    }
    this.addDuAn = function (ObDuAn) {
        var DuAn = require('../model/m_duan.js');
        const duan = new DuAn({
            maDuAn: ObDuAn.maDuAn,
            tenDuAn: ObDuAn.tenDuAn,
            noiDungTomTat: ObDuAn.noiDungTomTat,
            noiDungChiTiet: ObDuAn.noiDungChiTiet,
            mangHinh: ObDuAn.mangHinh,
            ngayDang: ObDuAn.ngayDang,
            doiTac: ObDuAn.doiTac,
            giaTien: ObDuAn.giaTien,
            loaiGiaoDich: ObDuAn.loaiGiaoDich,
            danhMuc: ObDuAn.danhMuc,
            quanHuyen: ObDuAn.quanHuyen,
            tinhThanhPho: ObDuAn.tinhThanhPho,
            trangThai: ObDuAn.trangThai,
            loaiDuAn: ObDuAn.loaiDuAn
        });
        duan.save(function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': duan, 'code': 200 });
            }
        });
    }
    this.removeDuAn = function (maDuAn) {
        var DuAn = require('../model/m_duan');
        DuAn.remove({ maDuAn: maDuAn }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateDuAn = function (ObDuAn) {
        var DuAn = require('../model/m_duan.js');
        DuAn.update({ maDuAn: ObDuAn.maDuAn },
            {
                tenDuAn: ObDuAn.tenDuAn,
                noiDungTomTat: ObDuAn.noiDungTomTat,
                noiDungChiTiet: ObDuAn.noiDungChiTiet,
                mangHinh: ObDuAn.mangHinh,
                ngayDang: ObDuAn.ngayDang,
                doiTac: ObDuAn.doiTac,
                giaTien: ObDuAn.giaTien,
                loaiGiaoDich: ObDuAn.loaiGiaoDich,
                danhMuc: ObDuAn.danhMuc,
                quanHuyen: ObDuAn.quanHuyen,
                tinhThanhPho: ObDuAn.tinhThanhPho,
                trangThai: ObDuAn.trangThai,
                loaiDuAn: ObDuAn.loaiDuAn
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
