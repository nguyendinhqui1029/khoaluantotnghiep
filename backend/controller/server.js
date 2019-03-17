var express = require('express');
var app = express();

var mongoose = require('mongoose');
var user = 'KHOALUAN2019';
var pass = 'khoaluan2019';
var databasename = 'KHOALUAN2019';
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
var M_DuAn = require('../model/m_duan');
//End Require model

//require controller 
var C_DanhMuc = require('./c_danhmuc.js');
var C_GioiThieu = require('./c_gioithieu.js');
//end require controller



//Mongodb online
mongoose.connect(url, { useNewUrlParser: true });
//Mongodb offline
//mongoose.connect(urlLocal, { useNewUrlParser: true });

//danh muc
// Lấy tất cả danh mục
app.get('/get-all-danh-muc', function (req, res) {

})

//Lấy danh mục trong khoản nào đó
app.get('/get-limit-danh-muc/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy danh mục theo id
app.get('/get-danh-muc/:id', function (req, res) {
    var idDanhMuc = req.params.id;
})
//Thêm danh mục
app.post('/add-danh-muc', function (req, res) {
    var maDanhMuc = req.body.maDanhMuc;
    var tenDanhMuc = req.body.tenDanhMuc;
    var trangThai = req.body.trangThai;
    var activeDanhMuc = req.body.active;
    var DanhMuc = new M_DanhMuc({ maDanhMuc: maDanhMuc, tenDanhMuc: tenDanhMuc, trangThai: trangThai, isActive: activeDanhMuc });

});
//Sữa danh mục
app.put('/update-danh-muc', function (req, res) {
    var maDanhMuc = req.body.maDanhMuc;
    var tenDanhMuc = req.body.tenDanhMuc;
    var trangThai = req.body.trangThai;
    var activeDanhMuc = req.body.active;
    var DanhMuc = new M_DanhMuc({ maDanhMuc: maDanhMuc, tenDanhMuc: tenDanhMuc, trangThai: trangThai, isActive: activeDanhMuc });
    res.send(DanhMuc);
});
//Xóa danh mục
app.delete('/delete-danh-muc', function (req, res) {
    var maDanhMuc = req.body.maDanhMuc;

});
//end danh muc

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Công ty
// Lấy tất cả Công ty
app.get('/get-all-cong-ty', function (req, res) {

})

//Lấy Công ty trong khoản nào đó
app.get('/get-limit-cong-ty/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy Công ty theo id
app.get('/get-cong-ty/:id', function (req, res) {
    var idCongTy = req.params.id;
})
//Thêm Công ty
app.post('/add-cong-ty', function (req, res) {
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
});
//Sữa Công ty
app.put('/update-cong-ty', function (req, res) {
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
});

//Xóa Công ty
app.delete('/delete-cong-ty', function (req, res) {
    var tenCongTy = req.body.tenCongTy;
});
//End cong ty

//Đối tác
// Lấy tất cả Đối tác
app.get('/get-all-doi-tac', function (req, res) {

})

//Lấy Đối tác trong khoản nào đó
app.get('/get-limit-doi-tac/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy Đối tác theo id
app.get('/get-doi-tac/:id', function (req, res) {
    var idDoiTac = req.params.id;
})
//Thêm Đối tác
app.post('/add-doi-tac', function (req, res) {
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
});
//Sữa Đối tác
app.put('/update-doi-tac', function (req, res) {
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
});

//Xóa Đối tác
app.delete('/delete-doi-tac', function (req, res) {
    var maDoiTac = req.body.maDoiTac;
});
//End Đối tác

//Du an
// Lấy tất cả Dự Án
app.get('/get-all-du-an', function (req, res) {

})

//Lấy Dự Án trong khoản nào đó
app.get('/get-limit-du-an/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy Dự Án theo id
app.get('/get-du-an/:id', function (req, res) {
    var idDuAn = req.params.id;
})
//Thêm Dự Án
app.post('/add-du-an', function (req, res) {
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
});
//Sữa Dự Án
app.put('/update-du-an', function (req, res) {
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
});

//Xóa Dự án
app.delete('/delete-du-an', function (req, res) {
    var maDuAn = req.body.maDuAn;
});
//End du an

//Gioi thieu
// Lấy tất cả Gioi thieu
app.get('/get-all-gioi-thieu', function (req, res) {

})

//Lấy Gioi thieu trong khoản nào đó
app.get('/get-limit-gioi-thieu/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy Gioi thieu theo id
app.get('/get-gioi-thieu/:id', function (req, res) {
    var idGioiThieu = req.params.id;
})
//Thêm Gioi thieu
app.post('/add-gioi-thieu', function (req, res) {
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
});
//Sữa Gioi thieu
app.put('/update-gioi-thieu', function (req, res) {
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
});

//Xóa Gioi thieu
app.delete('/delete-gioi-thieu', function (req, res) {
    var maGioiThieu = req.body.maGioiThieu;
});
//End gioi thieu


//Hinh anh
// Lấy tất cả hinh anh
app.get('/get-all-hinh-anh', function (req, res) {

})

//Lấy hinh anh trong khoản nào đó
app.get('/get-limit-hinh-anh/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy hinh anh theo id
app.get('/get-hinh-anh/:id', function (req, res) {
    var idHinhAnh = req.params.id;
})
//Thêm hinh anh
app.post('/add-hinh-anh', function (req, res) {
    var mahinh = req.body.mahinh;
    var tenhinh = req.body.tenhinh;
    var alt = req.body.alt;
    var HinhAnh = new M_HinhAnh({
        mahinh: mahinh,
        tenhinh: tenhinh,
        alt: alt
    });
});
//Sữa hinh anh
app.put('/update-hinh-anh', function (req, res) {
    var mahinh = req.body.mahinh;
    var tenhinh = req.body.tenhinh;
    var alt = req.body.alt;
    var HinhAnh = new M_HinhAnh({
        mahinh: mahinh,
        tenhinh: tenhinh,
        alt: alt
    });
});

//Xóa hinh anh
app.delete('/delete-hinh-anh', function (req, res) {
    var maHinh = req.body.maHinh;
});
//End hinh anh

// Loai giao dich
// Lấy tất cả Loai giao dich
app.get('/get-all-loai-giao-dich', function (req, res) {

})

//Lấy Loai giao dich trong khoản nào đó
app.get('/get-limit-loai-giao-dich/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy Loai giao dich theo id
app.get('/get-loai-giao-dich/:id', function (req, res) {
    var idLoai = req.params.id;
})
//Thêm Loai giao dich
app.post('/add-loai-giao-dich', function (req, res) {
    var maLoai = req.body.maLoai;
    var tenLoai = req.body.tenLoai;
    var trangThai = req.body.trangThai;
    var LoaiGiaoDich = new M_LoaiGiaoDich({
        maLoai: maLoai,
        tenLoai: tenLoai,
        trangThai: trangThai
    });
});
//Sữa Loai giao dich
app.put('/update-loai-giao-dich', function (req, res) {
    var maLoai = req.body.maLoai;
    var tenLoai = req.body.tenLoai;
    var trangThai = req.body.trangThai;
    var LoaiGiaoDich = new M_LoaiGiaoDich({
        maLoai: maLoai,
        tenLoai: tenLoai,
        trangThai: trangThai
    });
});

//Xóa Loai giao dich
app.delete('/delete-loai-giao-dich', function (req, res) {
    var maLoai = req.body.maLoai;
});
//End loai giao dich

// tin tuc
// Lấy tất cả tin tuc
app.get('/get-all-tin-tuc', function (req, res) {

})

//Lấy tin tuc trong khoản nào đó
app.get('/get-limit-tin-tuc/:vtbd/:sl', function (req, res) {
    var vtbd = req.params.vtbd;
    var sl = req.params.sl;
})
//Lấy tin tuc theo id
app.get('/get-tin-tuc/:id', function (req, res) {
    var matintuc = req.params.id;
})
//Thêm tin tuc
app.post('/add-tin-tuc', function (req, res) {
    var matintuc = req.body.matintuc;
    var tentintuc = req.body.tentintuc;
    var trangthai = req.body.trangThai;
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
});
//Sữa Tin tuc
app.put('/update-tin-tuc', function (req, res) {
    var matintuc = req.body.matintuc;
    var tentintuc = req.body.tentintuc;
    var trangthai = req.body.trangThai;
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
});

//Xóa Tin tuc
app.delete('/delete-tin-tuc', function (req, res) {
    var matintuc = req.body.matintuc;
});
//End tin tuc



// Menu
// Lấy tất cả Menu
app.get('/get-all-menu', function (req, res) {

})

//Lấy Menu trong khoản nào đó
app.get('/get-limit-menu/:vtbd/:sl', function (req, res) {
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
})
//Lấy Menu theo id
app.get('/get-menu/:id', function (req, res) {
    var maIDMenu = req.params.idMenu;
})
//Thêm Menu
app.post('/add-menu', function (req, res) {
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
});
//Sữa Menu
app.put('/update-menu', function (req, res) {
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
});

//Xóa Menu
app.delete('/delete-menu', function (req, res) {
    var maMenu = Number(req.body.idMenu);
});
//End menu

//Slider
// Lấy tất cả Slider
app.get('/get-all-slider', function (req, res) {

})

//Lấy Slider trong khoản nào đó
app.get('/get-limit-slider/:vtbd/:sl', function (req, res) {
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
})
//Lấy Slider theo id
app.get('/get-slider/:id', function (req, res) {
    var maSlider = req.params.maSlider;
})
//Thêm Slider
app.post('/add-slider', function (req, res) {
    var maSlider = req.body.maSlider;
    var mangHinh = req.body.mangHinh;
    var trangThai = req.body.trangThai;
    var loaiSlider = req.body.loaiSlider;

    var Menu = new M_Menu({
        maSlider: maSlider,
        mangHinh: mangHinh,
        trangThai: trangThai,
        loaiSlider: loaiSlider
    });
});
//Sữa Slider
app.put('/update-slider', function (req, res) {
    var maSlider = req.body.maSlider;
    var mangHinh = req.body.mangHinh;
    var trangThai = req.body.trangThai;
    var loaiSlider = req.body.loaiSlider;

    var Menu = new M_Menu({
        maSlider: maSlider,
        mangHinh: mangHinh,
        trangThai: trangThai,
        loaiSlider: loaiSlider
    });
});

//Xóa Slider
app.delete('/delete-slider', function (req, res) {
    var maSlider = req.body.maSlider;
});
//End slider


//Tai khoan 
// Lấy tất cả Tai khoan 
app.get('/get-all-tai-khoan', function (req, res) {

})

//Lấy Tai khoan  trong khoản nào đó
app.get('/get-limit-tai-khoan/:vtbd/:sl', function (req, res) {
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
})
//Lấy Tai khoan  theo id
app.get('/get-tai-khoan/:id', function (req, res) {
    var maSlider = req.params.maSlider;
})
//Thêm Tai khoan 
app.post('/add-tai-khoan', function (req, res) {
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
});
//Sữa Tai khoan 
app.put('/update-tai-khoan', function (req, res) {
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
});

//Xóa Tai khoan 
app.delete('/delete-tai-khoan', function (req, res) {
    var maTaiKhoan = req.body.maTaiKhoan;
});
//End tai khoan



//Loai Tin tuc
// Lấy tất cả Loai Tin tuc 
app.get('/get-all-loai-tin-tuc', function (req, res) {

})

//Lấy Loai Tin tuc  trong khoản nào đó
app.get('/get-limit-loai-tin-tuc/:vtbd/:sl', function (req, res) {
    var vtbd = Number(req.params.vtbd);
    var sl = Number(req.params.sl);
})
//Lấy Loai Tin tuc  theo id
app.get('/get-loai-tin-tuc/:id', function (req, res) {
    var maloai = req.params.maloai;
})
//Thêm Loai Tin tuc
app.post('/add-loai-tin-tuc', function (req, res) {
    var maloai = req.body.maloai;
    var tenloai = req.body.tenloai;
    var trangThai = req.body.trangThai;

    var LoaiTinTuc = new M_LoaiTinTuc({
        maloai: maloai,
        tenloai: tenloai,
        trangThai: trangThai
    });
});
//Sữa Loai Tin tuc
app.put('/update-loai-tin-tuc', function (req, res) {
    var maloai = req.body.maloai;
    var tenloai = req.body.tenloai;
    var trangThai = req.body.trangThai;

    var LoaiTinTuc = new M_LoaiTinTuc({
        maloai: maloai,
        tenloai: tenloai,
        trangThai: trangThai
    });
});

//Xóa Loại tin tức
app.delete('/delete-loai-tin-tuc', function (req, res) {
    var maloai = req.body.maloai;
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