var express = require('express');
var app = express();

var mongoose = require('mongoose');
var user = 'KHOALUAN2019';
var pass = 'khoaluan2019';
var databasename = 'KHOALUAN2019';
var loaiKetNoi = 1;// connect localhost
var url = 'mongodb://' + user + ':' + pass + '@mongodb-1051-0.cloudclusters.net/' + databasename + '?authSource=admin';
var urlLocal = 'mongodb://localhost/' + databasename;
var bodyParser = require('body-parser');
app.use(bodyParser.json());


//Require model
var M_CongTy = require('../model/m_congty.js');
var M_DoiTac = require('../model/m_doitac.js');
var M_GioiThieu = require('../model/m_gioithieu.js');
var M_HinhAnh = require('../model/m_hinhanh.js');
var M_LoaiGiaoDich = require('../model/m_loaigiaodich.js');
var M_LoaiTinTuc = require('../model/m_loaitintuc.js');
var M_Menu = require('../model/m_menu.js');
var M_Slider = require('../model/m_slider.js');
var M_TaiKhoan = require('../model/m_taikhoan.js');
var M_TinTuc = require('../model/m_tintuc.js');
var M_DanhMuc = require('../model/m_danhmuc.js');
var M_DuAn = require('../model/m_duan.js');
//End Require model

//require controller 
var C_DanhMuc = require('./c_danhmuc.js');
var C_GioiThieu = require('./c_gioithieu.js');
var C_CongTy = require('./c_congty.js');
var C_GioiThieu = require('./c_gioithieu.js');
var C_DoiTac = require('./c_doitac.js');
var C_LoaiGiaoDich = require('./c_loaigiaodich.js');
var C_LoaiTinTuc = require('./c_loaitintuc.js');
var C_Menu = require('./c_menu.js');
var C_Slider = require('./c_slider.js');
var C_TaiKhoan = require('./c_taikhoan.js');
var C_TinTuc = require('./c_tintuc.js');
var C_DuAn = require('./c_duan.js');
var C_HinhAnh = require('./c_hinhanh.js');
//end require controller

//danh muc
// Lấy tất cả danh mục
app.get('/get-all-danh-muc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.getAllDSDanhMuc();
})

//Lấy danh mục trong khoản nào đó
app.get('/get-limit-danh-muc/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.getLimitDSDanhMuc(vtbd, sl);
})
//Lấy danh mục theo id
app.get('/get-danh-muc/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idDanhMuc = req.params.id;

    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.getDanhMucbyID(idDanhMuc);

})
//Thêm danh mục
app.post('/add-danh-muc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDanhMuc = req.body.maDanhMuc;
    var tenDanhMuc = req.body.tenDanhMuc;
    var trangThai = req.body.trangThai;
    var activeDanhMuc = req.body.isActive;
    var DanhMuc = new M_DanhMuc({ maDanhMuc: maDanhMuc, tenDanhMuc: tenDanhMuc, trangThai: trangThai, isActive: activeDanhMuc });
    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.addDanhMuc(DanhMuc);
});
//Sữa danh mục
app.put('/update-danh-muc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDanhMuc = req.body.maDanhMuc;
    var tenDanhMuc = req.body.tenDanhMuc;
    var trangThai = req.body.trangThai;
    var isActive = req.body.isActive;
    var DanhMuc = new M_DanhMuc({ maDanhMuc: maDanhMuc, tenDanhMuc: tenDanhMuc, trangThai: trangThai, isActive: isActive });
    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.updateDanhMuc(DanhMuc);
});
//Xóa danh mục
app.delete('/delete-danh-muc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDanhMuc = req.body.maDanhMuc;
    var c_danhmuc = new C_DanhMuc(mongoose, res);
    c_danhmuc.removeDanhMuc(maDanhMuc);
});
//end danh muc

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Công ty
// Lấy tất cả Công ty
app.get('/get-all-cong-ty', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_congty = new C_CongTy(mongoose, res);
    c_congty.getAllDSCongTy();
})

//Lấy Công ty trong khoản nào đó
// app.get('/get-limit-cong-ty/:vtbd/:sl', function (req, res) {
//     if (loaiKetNoi === 1) {
//         mongoose.connect(urlLocal, { useNewUrlParser: true });
//     } else {
//         mongoose.connect(url, { useNewUrlParser: true });
//     }
//     var vtbd = req.params.vtbd;
//     var sl = req.params.sl;
// })
//Lấy Công ty theo id
app.get('/get-cong-ty/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var id = req.params.id;
    var c_congty = new C_CongTy(mongoose, res);
    c_congty.getCongTybyID(id);
})
//Thêm Công ty
app.post('/add-cong-ty', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var id = req.body.id;
    var tenCongTy = req.body.tenCongTy;
    var logoCongTy = req.body.logoCongTy;
    var soDienThoaiCongTy = req.body.soDienThoaiCongTy;
    var emailCongTy = req.body.emailCongTy;
    var diaChiCongTy = req.body.diaChiCongTy;
    var kinhDoCongTy = req.body.kinhDoCongTy;
    var viDoCongTy = req.body.viDoCongTy;
    var faxCongTy = req.body.faxCongTy;
    var hotlineCongTy = req.body.hotlineCongTy;
    var CongTy = new M_CongTy({
        id: id,
        tenCongTy: tenCongTy,
        logoCongTy: logoCongTy,
        soDienThoaiCongTy: soDienThoaiCongTy,
        emailCongTy: emailCongTy,
        diaChiCongTy: diaChiCongTy,
        kinhDoCongTy: kinhDoCongTy,
        viDoCongTy: viDoCongTy,
        faxCongTy: faxCongTy,
        hotlineCongTy: hotlineCongTy
    });
    var c_congty = new C_CongTy(mongoose, res);
    c_congty.addCongTy(CongTy);

});
//Sữa Công ty
app.put('/update-cong-ty', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var id = req.body.id;
    var tenCongTy = req.body.tenCongTy;
    var logoCongTy = req.body.logoCongTy;
    var soDienThoaiCongTy = req.body.soDienThoaiCongTy;
    var emailCongTy = req.body.emailCongTy;
    var diaChiCongTy = req.body.diaChiCongTy;
    var kinhDoCongTy = req.body.kinhDoCongTy;
    var viDoCongTy = req.body.viDoCongTy;
    var faxCongTy = req.body.faxCongTy;
    var hotlineCongTy = req.body.hotlineCongTy;
    var CongTy = new M_CongTy({
        id: id,
        tenCongTy: tenCongTy,
        logoCongTy: logoCongTy,
        soDienThoaiCongTy: soDienThoaiCongTy,
        emailCongTy: emailCongTy,
        diaChiCongTy: diaChiCongTy,
        kinhDoCongTy: kinhDoCongTy,
        viDoCongTy: viDoCongTy,
        faxCongTy: faxCongTy,
        hotlineCongTy: hotlineCongTy
    });
    var c_congty = new C_CongTy(mongoose, res);
    c_congty.updateCongTy(CongTy);
});

//Xóa Công ty
app.delete('/delete-cong-ty', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var id = req.body.id;
    var c_congty = new C_CongTy(mongoose, res);
    c_congty.removeCongTy(id);
});
//End cong ty

//Đối tác
// Lấy tất cả Đối tác
app.get('/get-all-doi-tac', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.getAllDSDoiTac();
})

//Lấy Đối tác trong khoản nào đó
app.get('/get-limit-doi-tac/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.getLimitDSDoiTac(vtbd, sl);
})
//Lấy Đối tác theo id
app.get('/get-doi-tac/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idDoiTac = req.params.id;
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.getDoiTacbyID(idDoiTac);
})
//Thêm Đối tác
app.post('/add-doi-tac', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDoiTac = req.body.maDoiTac;
    var hoTen = req.body.hoTen;
    var diaChi = req.body.diaChi;
    var sdt = req.body.sdt;
    var tinhThanhPho = req.body.tinhThanhPho;
    var quanHuyen = req.body.quanHuyen;
    var ngaySinh = req.body.ngaySinh;
    var loGo = req.body.loGo;
    var moTa = req.body.moTa;
    var user = req.body.user;
    var pass = req.body.pass;
    var loaiTaiKhoan = req.body.loaiTaiKhoan;
    var email = req.body.email;
    var DoiTac = new M_DoiTac({
        maDoiTac: maDoiTac,
        hoTen: hoTen,
        diaChi: diaChi,
        sdt: sdt,
        tinhThanhPho: tinhThanhPho,
        quanHuyen: quanHuyen,
        ngaySinh: ngaySinh,
        loGo: loGo,
        moTa: moTa,
        user: user,
        pass: pass,
        loaiTaiKhoan: loaiTaiKhoan,
        email: email,
    });
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.addDoiTac(DoiTac);
});
//Sữa Đối tác
app.put('/update-doi-tac', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDoiTac = req.body.maDoiTac;
    var hoTen = req.body.hoTen;
    var diaChi = req.body.diaChi;
    var sdt = req.body.sdt;
    var tinhThanhPho = req.body.tinhThanhPho;
    var quanHuyen = req.body.quanHuyen;
    var ngaySinh = req.body.ngaySinh;
    var loGo = req.body.loGo;
    var user = req.body.user;
    var pass = req.body.pass;
    var loaiTaiKhoan = req.body.loaiTaiKhoan;
    var email = req.body.email;
    var DoiTac = new M_DoiTac({
        maDoiTac: maDoiTac,
        hoTen: hoTen,
        diaChi: diaChi,
        sdt: sdt,
        tinhThanhPho: tinhThanhPho,
        quanHuyen: quanHuyen,
        ngaySinh: ngaySinh,
        loGo: loGo,
        moTa: moTa,
        user: user,
        pass: pass,
        loaiTaiKhoan: loaiTaiKhoan,
        email: email,
    });
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.updateDoiTac(DoiTac);
});

//Xóa Đối tác
app.delete('/delete-doi-tac', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDoiTac = req.body.maDoiTac;
    var c_doitac = new C_DoiTac(mongoose, res);
    c_doitac.removeDoiTac(maDoiTac);
});
//End Đối tác

//Du an
// Lấy tất cả Dự Án
app.get('/get-all-du-an', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.getAllDSDuAn();
})

//Lấy Dự Án trong khoản nào đó
app.get('/get-limit-du-an/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.getLimitDSDuAn(vtbd, sl);
})
//Lấy Dự Án theo id
app.get('/get-du-an/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idDuAn = req.params.id;
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.getDuAnbyID(idDuAn);
})
//Thêm Dự Án
app.post('/add-du-an', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDuAn = req.body.maDuAn;
    var tenDuAn = req.body.tenDuAn;
    var noiDungTomTat = req.body.noiDungTomTat;
    var noiDungChiTiet = req.body.noiDungChiTiet;
    var tinhThanhPho = req.body.tinhThanhPho;
    var quanHuyen = req.body.quanHuyen;
    var ngayDang = req.body.ngayDang;
    var doiTac = req.body.doiTac;
    var giaTien = req.body.giaTien;
    var loaiGiaoDich = req.body.loaiGiaoDich;
    var danhMuc = req.body.danhMuc;
    var quanHuyen = req.body.quanHuyen;
    var tinhThanhPho = req.body.tinhThanhPho;
    var trangThai = req.body.trangThai;
    var loaiDuAn = req.body.loaiDuAn;
    var DuAn = new M_DuAn({
        maDuAn: maDuAn,
        tenDuAn: tenDuAn,
        noiDungTomTat: noiDungTomTat,
        noiDungChiTiet: noiDungChiTiet,
        mangHinh: mangHinh,
        ngayDang: ngayDang,
        doiTac: doiTac,
        giaTien: giaTien,
        loaiGiaoDich: loaiGiaoDich,
        danhMuc: danhMuc,
        quanHuyen: quanHuyen,
        tinhThanhPho: tinhThanhPho,
        trangThai: trangThai,
        loaiDuAn: loaiDuAn
    });
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.addDuAn(DuAn);
});
//Sữa Dự Án
app.put('/update-du-an', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDuAn = req.body.maDuAn;
    var tenDuAn = req.body.tenDuAn;
    var noiDungTomTat = req.body.noiDungTomTat;
    var noiDungChiTiet = req.body.noiDungChiTiet;
    var tinhThanhPho = req.body.tinhThanhPho;
    var quanHuyen = req.body.quanHuyen;
    var ngayDang = req.body.ngayDang;
    var doiTac = req.body.doiTac;
    var giaTien = req.body.giaTien;
    var loaiGiaoDich = req.body.loaiGiaoDich;
    var danhMuc = req.body.danhMuc;
    var quanHuyen = req.body.quanHuyen;
    var tinhThanhPho = req.body.tinhThanhPho;
    var trangThai = req.body.trangThai;
    var loaiDuAn = req.body.loaiDuAn;
    var DuAn = new M_DuAn({
        maDuAn: maDuAn,
        tenDuAn: tenDuAn,
        noiDungTomTat: noiDungTomTat,
        noiDungChiTiet: noiDungChiTiet,
        mangHinh: mangHinh,
        ngayDang: ngayDang,
        doiTac: doiTac,
        giaTien: giaTien,
        loaiGiaoDich: loaiGiaoDich,
        danhMuc: danhMuc,
        quanHuyen: quanHuyen,
        tinhThanhPho: tinhThanhPho,
        trangThai: trangThai,
        loaiDuAn: loaiDuAn
    });
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.updateDuAn(DuAn);
});

//Xóa Dự án
app.delete('/delete-du-an', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maDuAn = req.body.maDuAn;
    var c_duan = new C_DuAn(mongoose, res);
    c_duan.removeDuAn(maDuAn);
});
//End du an

//Gioi thieu
// Lấy tất cả Gioi thieu
app.get('/get-all-gioi-thieu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.getAllDSGioiThieu();

})

//Lấy Gioi thieu trong khoản nào đó
app.get('/get-limit-gioi-thieu/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.getLimitDSGioiThieu(vtbd, sl);

})
//Lấy Gioi thieu theo id
app.get('/get-gioi-thieu/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idGioiThieu = req.params.id;
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.getGioiThieubyID(idGioiThieu);
})
//Thêm Gioi thieu
app.post('/add-gioi-thieu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var magioithieu = req.body.magioithieu;
    var tieude = req.body.tieude;
    var noidung = req.body.noidung;
    var icon = req.body.icon;
    var GioiThieu = new M_GioiThieu({ magioithieu: magioithieu, tieude: tieude, noidung: noidung, icon: icon });
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.addGioiThieu(GioiThieu);
});
//Sữa Gioi thieu
app.put('/update-gioi-thieu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var magioithieu = req.body.magioithieu;
    var tieude = req.body.tieude;
    var noidung = req.body.noidung;
    var icon = req.body.icon;


    var GioiThieu = new M_GioiThieu({
        magioithieu: magioithieu,
        tieude: tieude,
        noidung: noidung,
        icon: icon
    });
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.updateGioiThieu(GioiThieu);
});

//Xóa Gioi thieu
app.delete('/delete-gioi-thieu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var magioithieu = req.body.magioithieu;
    var c_gioithieu = new C_GioiThieu(mongoose, res);
    c_gioithieu.removeGioiThieu(magioithieu);
});
//End gioi thieu


//Hinh anh
// Lấy tất cả hinh anh
app.get('/get-all-hinh-anh', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.getAllDSHinhAnh();
})

//Lấy hinh anh trong khoản nào đó
app.get('/get-limit-hinh-anh/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.getLimitDSHinhAnh(vtbd, sl);
})
//Lấy hinh anh theo id
app.get('/get-hinh-anh/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idHinhAnh = req.params.id;
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.getDuAnbyID(idHinhAnh);
})
//Thêm hinh anh
app.post('/add-hinh-anh', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var mahinh = req.body.mahinh;
    var tenhinh = req.body.tenhinh;
    var alt = req.body.alt;
    var HinhAnh = new M_HinhAnh({
        mahinh: mahinh,
        tenhinh: tenhinh,
        alt: alt
    });
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.addHinhAnh(HinhAnh);
});
//Sữa hinh anh
app.put('/update-hinh-anh', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var mahinh = req.body.mahinh;
    var tenhinh = req.body.tenhinh;
    var alt = req.body.alt;
    var HinhAnh = new M_HinhAnh({
        mahinh: mahinh,
        tenhinh: tenhinh,
        alt: alt
    });
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.updateHinhAnh(HinhAnh);
});

//Xóa hinh anh
app.delete('/delete-hinh-anh', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maHinh = req.body.maHinh;
    var c_hinhanh = new C_HinhAnh(mongoose, res);
    c_hinhanh.removeHinhAnh(maHinh);
});
//End hinh anh

// Loai giao dich
// Lấy tất cả Loai giao dich
app.get('/get-all-loai-giao-dich', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.getAllDSLoaiGiaoDich();
})

//Lấy Loai giao dich trong khoản nào đó
app.get('/get-limit-loai-giao-dich/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.getLimitDSLoaiGiaoDich(vtbd, sl);
})
//Lấy Loai giao dich theo id
app.get('/get-loai-giao-dich/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idLoai = req.params.id;
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.getLoaiGiaoDichbyID(idLoai);
})
//Thêm Loai giao dich
app.post('/add-loai-giao-dich', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maLoai = req.body.maLoai;
    var tenLoai = req.body.tenLoai;
    var trangThai = req.body.trangThai;
    var LoaiGiaoDich = new M_LoaiGiaoDich({
        maLoai: maLoai,
        tenLoai: tenLoai,
        trangThai: trangThai
    });
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.addLoaiGiaoDich(LoaiGiaoDich);
});
//Sữa Loai giao dich
app.put('/update-loai-giao-dich', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maLoai = req.body.maLoai;
    var tenLoai = req.body.tenLoai;
    var trangThai = req.body.trangThai;
    var LoaiGiaoDich = new M_LoaiGiaoDich({
        maLoai: maLoai,
        tenLoai: tenLoai,
        trangThai: trangThai
    });
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.updateLoaiGiaoDich(LoaiGiaoDich);
});

//Xóa Loai giao dich
app.delete('/delete-loai-giao-dich', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maLoai = req.body.maLoai;
    var c_loaigiaodich = new C_LoaiGiaoDich(mongoose, res);
    c_loaigiaodich.removeLoaiGiaoDich(maLoai);
});
//End loai giao dich

// tin tuc
// Lấy tất cả tin tuc
app.get('/get-all-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.getAllDSTinTuc();

})

//Lấy tin tuc trong khoản nào đó
app.get('/get-limit-tin-tuc/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.getLimitDSTinTuc(vtbd, sl);
})
//Lấy tin tuc theo id
app.get('/get-tin-tuc/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var matintuc = req.params.id;
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.getTinTucbyID(matintuc);
})
//Thêm tin tuc
app.post('/add-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var matintuc = req.body.matintuc;
    var tentintuc = req.body.tentintuc;
    var trangthai = req.body.trangthai;
    var noidungchitiet = req.body.noidungchitiet;
    var noidungtomtat = req.body.noidungtomtat;
    var ngaydang = req.body.ngaydang;
    var hinhanh = req.body.hinhanh;
    var loaitintuc = req.body.loaitintuc;
    var TinTuc = new M_TinTuc({
        matintuc: matintuc,
        tentintuc: tentintuc,
        trangthai: trangthai,
        noidungchitiet: noidungchitiet,
        noidungtomtat: noidungtomtat,
        ngaydang: ngaydang,
        hinhanh: hinhanh,
        loaitintuc: loaitintuc
    });
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.addTinTuc(TinTuc);
});
//Sữa Tin tuc
app.put('/update-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var matintuc = req.body.matintuc;
    var tentintuc = req.body.tentintuc;
    var trangthai = req.body.trangthai;
    var noidungchitiet = req.body.noidungchitiet;
    var noidungtomtat = req.body.noidungtomtat;
    var ngaydang = req.body.ngaydang;
    var hinhanh = req.body.hinhanh;
    var loaitintuc = req.body.loaitintuc;
    var TinTuc = new M_TinTuc({
        matintuc: matintuc,
        tentintuc: tentintuc,
        trangthai: trangthai,
        noidungchitiet: noidungchitiet,
        noidungtomtat: noidungtomtat,
        ngaydang: ngaydang,
        hinhanh: hinhanh,
        loaitintuc: loaitintuc
    });
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.updateTinTuc(TinTuc);
});

//Xóa Tin tuc
app.delete('/delete-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var matintuc = req.body.matintuc;
    var c_tintuc = new C_TinTuc(mongoose, res);
    c_tintuc.removeTinTuc(matintuc);
});
//End tin tuc



// Menu
// Lấy tất cả Menu
app.get('/get-all-menu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_menu = new C_Menu(mongoose, res);
    c_menu.getAllDSMenu();
})

//Lấy Menu trong khoản nào đó
app.get('/get-limit-menu/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
    var c_menu = new C_Menu(mongoose, res);
    c_menu.getLimitDSMenu(vtbd, sl);
})
//Lấy Menu theo id
app.get('/get-menu/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maMenu = req.params.idMenu;
    var c_menu = new C_Menu(mongoose, res);
    c_menu.getMenubyID(maMenu);
})
//Thêm Menu
app.post('/add-menu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idMenu = req.body.idMenu;
    var nameMenu = req.body.nameMenu;
    var codeMenu = req.body.codeMenu;
    var statusMenu = req.body.statusMenu;
    var iconMenu = req.body.iconMenu;
    var classMenu = req.body.classMenu;
    var typeMenu = req.body.typeMenu;
    var Menu = new M_Menu({
        idMenu: idMenu,
        nameMenu: nameMenu,
        codeMenu: codeMenu,
        statusMenu: statusMenu,
        iconMenu: iconMenu,
        classMenu: classMenu,
        typeMenu: typeMenu
    });
    var c_menu = new C_Menu(mongoose, res);
    c_menu.addMenu(Menu);
});
//Sữa Menu
app.put('/update-menu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var idMenu = req.body.idMenu;
    var nameMenu = req.body.nameMenu;
    var codeMenu = req.body.codeMenu;
    var statusMenu = req.body.statusMenu;
    var iconMenu = req.body.iconMenu;
    var classMenu = req.body.classMenu;
    var typeMenu = req.body.typeMenu;
    var Menu = new M_Menu({
        idMenu: idMenu,
        nameMenu: nameMenu,
        codeMenu: codeMenu,
        statusMenu: statusMenu,
        iconMenu: iconMenu,
        classMenu: classMenu,
        typeMenu: typeMenu
    });
    var c_menu = new C_Menu(mongoose, res);
    c_menu.updateMenu(Menu);
});

//Xóa Menu
app.delete('/delete-menu', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maMenu = Number(req.body.idMenu);
    var c_menu = new C_Menu(mongoose, res);
    c_menu.removeMenu(maMenu);
});
//End menu

//Slider
// Lấy tất cả Slider
app.get('/get-all-slider', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_slider = new C_Slider(mongoose, res);
    c_slider.getAllDSSlider();
})

//Lấy Slider trong khoản nào đó
app.get('/get-limit-slider/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
    var c_slider = new C_Slider(mongoose, res);
    c_slider.getLimitDSSlider(vtbd, sl);
})
//Lấy Slider theo id
app.get('/get-slider/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maSlider = req.params.maSlider;
    var c_slider = new C_Slider(mongoose, res);
    c_slider.getSliderbyID(maSlider);
})
//Thêm Slider
app.post('/add-slider', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maSlider = req.body.maSlider;
    var mangHinh = req.body.mangHinh;
    var trangThai = req.body.trangThai;
    var loaiSlider = req.body.loaiSlider;

    var Slider = new M_Slider({
        maSlider: maSlider,
        mangHinh: mangHinh,
        trangThai: trangThai,
        loaiSlider: loaiSlider
    });
    var c_slider = new C_Slider(mongoose, res);
    c_slider.addSlider(Slider);
});
//Sữa Slider
app.put('/update-slider', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maSlider = req.body.maSlider;
    var mangHinh = req.body.mangHinh;
    var trangThai = req.body.trangThai;
    var loaiSlider = req.body.loaiSlider;

    var Slider = new M_Slider({
        maSlider: maSlider,
        mangHinh: mangHinh,
        trangThai: trangThai,
        loaiSlider: loaiSlider
    });
    var c_slider = new C_Slider(mongoose, res);
    c_slider.updateSlider(Slider);
});

//Xóa Slider
app.delete('/delete-slider', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maSlider = req.body.maSlider;
    var c_slider = new C_Slider(mongoose, res);
    c_slider.removeSlider(maSlider);
});
//End slider


//Tai khoan 
// Lấy tất cả Tai khoan 
app.get('/get-all-tai-khoan', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.getAllDSTaiKhoan();
})

//Lấy Tai khoan  trong khoản nào đó
app.get('/get-limit-tai-khoan/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.getLimitDSTaiKhoan(vtbd, sl);
})
//Lấy Tai khoan  theo id
app.get('/get-tai-khoan/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maTaiKhoan = req.params.maSlider;
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.getTaiKhoanbyID(maTaiKhoan);
})
//Thêm Tai khoan 
app.post('/add-tai-khoan', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maTaiKhoan = req.body.maTaiKhoan;
    var hoTen = req.body.hoTen;
    var soDienThoai = req.body.soDienThoai;
    var tinhThanhPho = req.body.tinhThanhPho;
    var diaChi = req.body.diaChi;
    var quanHuyen = req.body.quanHuyen;
    var gioiTinh = req.body.gioiTinh;
    var ngaySinh = req.body.ngaySinh;
    var logo = req.body.logo;
    var moTa = req.body.moTa;
    var tenTaiKhoan = req.body.tenTaiKhoan;
    var email = req.body.email;
    var matKhau = req.body.matKhau;
    var loaiTaiKhoan = req.body.loaiTaiKhoan;

    var TaiKhoan = new M_TaiKhoan({
        maTaiKhoan: maTaiKhoan,
        hoTen: hoTen,
        soDienThoai: soDienThoai,
        tinhThanhPho: tinhThanhPho,
        diaChi: diaChi,
        quanHuyen: quanHuyen,
        gioiTinh: gioiTinh,
        ngaySinh: ngaySinh,
        logo: logo,
        moTa: moTa,
        tenTaiKhoan: tenTaiKhoan,
        email: email,
        matKhau: matKhau,
        loaiTaiKhoan: loaiTaiKhoan
    });
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.addTaiKhoan(TaiKhoan);
});
//Sữa Tai khoan 
app.put('/update-tai-khoan', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maTaiKhoan = req.body.maTaiKhoan;
    var hoTen = req.body.hoTen;
    var soDienThoai = req.body.soDienThoai;
    var tinhThanhPho = req.body.tinhThanhPho;
    var diaChi = req.body.diaChi;
    var quanHuyen = req.body.quanHuyen;
    var gioiTinh = req.body.gioiTinh;
    var ngaySinh = req.body.ngaySinh;
    var logo = req.body.logo;
    var moTa = req.body.moTa;
    var tenTaiKhoan = req.body.tenTaiKhoan;
    var email = req.body.email;
    var matKhau = req.body.matKhau;
    var loaiTaiKhoan = req.body.loaiTaiKhoan;

    var TaiKhoan = new M_TaiKhoan({
        maTaiKhoan: maTaiKhoan,
        hoTen: hoTen,
        soDienThoai: soDienThoai,
        tinhThanhPho: tinhThanhPho,
        diaChi: diaChi,
        quanHuyen: quanHuyen,
        gioiTinh: gioiTinh,
        ngaySinh: ngaySinh,
        logo: logo,
        moTa: moTa,
        tenTaiKhoan: tenTaiKhoan,
        email: email,
        matKhau: matKhau,
        loaiTaiKhoan: loaiTaiKhoan
    });
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.updateTaiKhoan(TaiKhoan);
});

//Xóa Tai khoan 
app.delete('/delete-tai-khoan', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maTaiKhoan = req.body.maTaiKhoan;
    var c_taikhoan = new C_TaiKhoan(mongoose, res);
    c_taikhoan.removeTaiKhoan(maTaiKhoan);
});
//End tai khoan



//Loai Tin tuc
// Lấy tất cả Loai Tin tuc 
app.get('/get-all-loai-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.getAllDSLoaiTinTuc();
})

//Lấy Loai Tin tuc  trong khoản nào đó
app.get('/get-limit-loai-tin-tuc/:vtbd/:sl', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.getLimitDSLoaiTinTuc(vtbd, sl);
})
//Lấy Loai Tin tuc  theo id
app.get('/get-loai-tin-tuc/:id', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maloai = req.params.maloai;
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.getLoaiTinTucbyID(maloai);
})
//Thêm Loai Tin tuc
app.post('/add-loai-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maloai = req.body.maloai;
    var tenloai = req.body.tenloai;
    var trangThai = req.body.trangThai;

    var LoaiTinTuc = new M_LoaiTinTuc({
        maloai: maloai,
        tenloai: tenloai,
        trangThai: trangThai
    });
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.addLoaiTinTuc(LoaiTinTuc);
});
//Sữa Loai Tin tuc
app.put('/update-loai-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maloai = req.body.maloai;
    var tenloai = req.body.tenloai;
    var trangThai = req.body.trangThai;

    var LoaiTinTuc = new M_LoaiTinTuc({
        maloai: maloai,
        tenloai: tenloai,
        trangThai: trangThai
    });
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.updateLoaiTinTuc(LoaiTinTuc);
});

//Xóa Loại tin tức
app.delete('/delete-loai-tin-tuc', function (req, res) {
    if (loaiKetNoi === 1) {
        mongoose.connect(urlLocal, { useNewUrlParser: true });
    } else {
        mongoose.connect(url, { useNewUrlParser: true });
    }
    var maloai = req.body.maloai;
    var c_loaitintuc = new C_LoaiTinTuc(mongoose, res);
    c_loaitintuc.removeLoaiTinTuc(maloai);
});
//End Loai tin tuc



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
/////////////////////////////////
/*
var urlLocal = 'mongodb://localhost:27017/' + databasename;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });


//Post
app.post('/add-danh-muc', function (req, res) {
    var madanhMuc = req.body.maDanhMuc;
    var tendanhMuc = req.body.tenDanhMuc;
    var trangthai = req.body.trangThai;
    var activedanhMuc = req.body.active;

    const DanhMuc = require("../model/danhmuc.js");
    const danhmuc = new DanhMuc({ maDanhMuc: madanhMuc, tenDanhMuc: tendanhMuc, trangThai: trangthai, isActive: activedanhMuc });
    danhmuc.save(function (err) {
        if (err) console.log(err);
    });
});

//Get
app.get('/get-danh-muc', function (req, res) {

    var DanhMuc = require('./c_danhmuc.js');
    var dmuc = new DanhMuc(mongoose, res);
    dmuc.getAllDSDanhMuc();
})

app.get('/get-danh-muc/:vtbd/:sluong', function (req, res) {

    var DanhMuc = require('./c_danhmuc.js');
    var dmuc = new DanhMuc(mongoose, res);
    //dmuc.getAllDSDanhMuc();
    dmuc.getLimitDSDanhMuc(req.params.vtbd, req.params.sluong);
})

app.get('/get-gioi-thieu', function (req, res) {

    var GioiThieu = require('./c_gioithieu.js');
    var dmuc = new GioiThieu(mongoose, res, req);
    dmuc.getDSGioiThieu();
})

//POST
app.post('/add-danh-muc', function (req, res) {
    var C_DanhMuc = require('./c_danhmuc.js');
    var dmuc = new C_DanhMuc(mongoose, res);
    var M_DanhMuc = require('../model/danhmuc');
    danhmuc = new M_DanhMuc(req.body.maDanhMuc, req.body.tenDanhMuc, req.body.trangThai, req.body.isActive);
    dmuc.addDanhMuc(danhmuc);
})

app.post('/add-gioi-thieu', function (req, res) {
    var C_GioiThieu = require('./c_gioithieu.js');
    var gthieu = new C_GioiThieu(mongoose, res);
    var M_GioiThieu = require('../model/gioithieu');
    gthieu = new M_GioiThieu(req.body.maGioiThieu, req.body.tieuDe, req.body.noiDung, req.body.icon);
    gthieu.addGioiThieu(gthieu);
})*/