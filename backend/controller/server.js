var express = require('express');
var app = express();
var navigator = require('web-midi-api');

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
});
//end danh muc

//Cong ty

//End cong ty

//Doi tac
//Doi tac

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