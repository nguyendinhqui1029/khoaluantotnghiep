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
// var M_DanhMuc = require('../model/m_danhmuc.js/index.js');
// var M_CongTay = require('../model/m_danhmuc.js/index.js');
// var M_DoiTac = require('../model/m_danhmuc.js/index.js');
// var M_GioiThieu = require('../model/m_danhmuc.js/index.js');
// var M_HinhAnh = require('../model/m_danhmuc.js/index.js');
// var M_LoaiGiaoDich = require('../model/m_danhmuc.js/index.js');
// var M_LoaiTinTuc = require('../model/m_danhmuc.js/index.js');
// var M_Menu = require('../model/m_danhmuc.js/index.js');
// var M_Slider = require('../model/m_danhmuc.js/index.js');
// var M_TaiKhoan = require('../model/m_danhmuc.js/index.js');
// var M_TinTuc = require('../model/m_danhmuc.js/index.js');
//End Require model

//Mongodb online
mongoose.connect(urlLocal, { useNewUrlParser: true });
//Mongodb offline
//mongoose.connect(urlLocal, { useNewUrlParser: true });

//danh muc
// Lấy tất cả danh mục
app.get('/get-all-danh-muc', function (req, res) {
    console.log(req.ip);
})

//Lấy danh mục trong khoản nào đó
app.get('/get-limit-danh-muc/:vtbd/:sl', function (req, res) {

})
//Thêm danh mục
app.post('/add-danh-muc', function (req, res) {
    var madanhMuc = req.body.maDanhMuc;
    var tendanhMuc = req.body.tenDanhMuc;
    var trangthai = req.body.trangThai;
    var activedanhMuc = req.body.active;

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