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
//var M_DoiTac = require('../model/m_doitac.js');
var M_GioiThieu = require('../model/m_gioithieu.js');
var M_HinhAnh = require('../model/m_hinhanh.js');
var M_LoaiGiaoDich = require('../model/m_loaigiaodich.js');
//var M_LoaiTinTuc = require('../model/m_loaitintuc.js');
var M_Menu = require('../model/m_menu.js');
var M_Slider = require('../model/m_slider.js');
var M_TaiKhoan = require('../model/m_taikhoan.js');
var M_TinTuc = require('../model/m_tintuc.js');
var M_DanhMuc = require('../model/m_danhmuc.js');
//End Require model

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
app.get('/get-limit-danh-muc/:id', function (req, res) {
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
    var tenDanhMuc = req.body.tenDanhMuc;
    var trangThai = req.body.trangThai;
    var activeDanhMuc = req.body.active;
    var DanhMuc = new M_DanhMuc({ maDanhMuc: maDanhMuc, tenDanhMuc: tenDanhMuc, trangThai: trangThai, isActive: activeDanhMuc });
    res.send(DanhMuc);
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
app.get('/get-limit-cong-ty/:id', function (req, res) {
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
app.delete('/delete-danh-muc', function (req, res) {
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
app.get('/get-limit-doi-tac/:id', function (req, res) {
    var idDoiTac = req.params.id;
})
//Thêm Đối tác
app.post('/add-doi-tac', function (req, res) {
    var tenCongTy = req.body.tenCongTy;
    var logoCongTy = req.body.logoCongTy;
    var soDienThoaiCongTy = req.body.soDienThoaiCongTy;
    var emailCongTy = req.body.emailCongTy;
    var diaChiCongTy = req.body.diaChiCongTy;
    var kinhDoCongTy = req.body.kinhDoCongTy;
    var viDoCongTy = req.body.viDoCongTy;
    var faxCongTy = req.body.faxCongTy;
    var hotlineCongTy = req.body.hotlineCongTy;
    var DoiTac = new M_DanhMuc({
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
//Sữa Đối tác
app.put('/update-doi-tac', function (req, res) {
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

//Xóa Đối tác
app.delete('/delete-doi-tac', function (req, res) {
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
//End Đối tác

//Du an
//End du an

//Gioi thieu
//End gioi thieu


//Hinh anh
//End hinh anh

// Loai giao dich
//End loai giao dich

// Loai tin tuc
//End tin tuc

// Menu
//End menu

//Slider
//End slider

//Tai khoan 
//End tai khoan

//Tin tuc

//End tin tuc



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
