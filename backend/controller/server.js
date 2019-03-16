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
