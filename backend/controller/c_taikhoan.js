module.exports = function (mongoose, res) {
    this.getAllDSTaiKhoan = function () {
        var TaiKhoan = require('../model/m_taikhoan.js');
        TaiKhoan.find({}, function (err, taikhoan) {
            mongoose.connection.close();
            res.send(taikhoan);
        })
    }
    this.getLimitDSTaiKhoan = function (vtbd, sluong) {
        var TaiKhoan = require('../model/m_taikhoan.js');
        TaiKhoan.find({}, {}, function (err, taikhoan) {
            let mangTaiKhoan = [];
            mongoose.connection.close();
            if (taikhoan.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangTaiKhoan.push(taikhoan[i]);
                }
            } else {
                for (var i = vtbd; i <= taikhoan.length - 1; i++) {
                    mangTaiKhoan.push(taikhoan[i]);
                }
            }
            res.send({ 'data': mangTaiKhoan, 'code': 200 });
        })
    }
    this.getTaiKhoanbyID = function (maTaiKhoan) {
        var TaiKhoan = require('../model/m_taikhoan.js');
        TaiKhoan.find({ maTaiKhoan: maTaiKhoan }, {}, function (err, taikhoan) {
            mongoose.connection.close();

            res.send({ 'data': taikhoan, 'code': 200 });
        })
    }
    this.addTaiKhoan = function (ObTaiKhoan) {
        var TaiKhoan = require('../model/m_taikhoan.js');
        const taikhoan = new TaiKhoan({
            maTaiKhoan: ObTaiKhoan.maTaiKhoan,
            hoTen: ObTaiKhoan.hoTen,
            soDienThoai: ObTaiKhoan.soDienThoai,
            tinhThanhPho: ObTaiKhoan.tinhThanhPho,
            diaChi: ObTaiKhoan.diaChi,
            quanHuyen: ObTaiKhoan.quanHuyen,
            gioiTinh: ObTaiKhoan.gioiTinh,
            ngaySinh: ObTaiKhoan.ngaySinh,
            logo: ObTaiKhoan.logo,
            moTa: ObTaiKhoan.moTa,
            tenTaiKhoan: ObTaiKhoan.tenTaiKhoan,
            email: ObTaiKhoan.email,
            matKhau: ObTaiKhoan.matKhau,
            loaiTaiKhoan: ObTaiKhoan.loaiTaiKhoan
        });
        taikhoan.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': taikhoan, 'code': 200 });
            }
        });

    }
    this.removeTaiKhoan = function (maTaiKhoan) {
        var TaiKhoan = require('../model/m_taikhoan.js');
        TaiKhoan.remove({ maTaiKhoan: maTaiKhoan }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': TaiKhoan, 'code': 200 });
            }
        });
    }
    this.updateTaiKhoan = function (ObTaiKhoan) {
        var TaiKhoan = require('../model/m_taikhoan.js');
        TaiKhoan.update({
            maTaiKhoan: ObTaiKhoan.maTaiKhoan,
            hoTen: ObTaiKhoan.hoTen,
            soDienThoai: ObTaiKhoan.soDienThoai,
            tinhThanhPho: ObTaiKhoan.tinhThanhPho,
            diaChi: ObTaiKhoan.diaChi,
            quanHuyen: ObTaiKhoan.quanHuyen,
            gioiTinh: ObTaiKhoan.gioiTinh,
            ngaySinh: ObTaiKhoan.ngaySinh,
            logo: ObTaiKhoan.logo,
            moTa: ObTaiKhoan.moTa,
            tenTaiKhoan: ObTaiKhoan.tenTaiKhoan,
            email: ObTaiKhoan.email,
            matKhau: ObTaiKhoan.matKhau,
            loaiTaiKhoan: ObTaiKhoan.loaiTaiKhoan
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
