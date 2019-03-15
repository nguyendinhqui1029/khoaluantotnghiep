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
// if (navigator.onLine) {
//     mongoose.connect(url, { useNewUrlParser: true });
// } else {
//     mongoose.connect(urlLocal, { useNewUrlParser: true });
// }
//mongoose.connect('mongodb://localhost/KHOALUAN2019', { useNewUrlParser: true });


app.get('/get-danh-muc', function (req, res) {
    var DanhMuc = require('../model/danhmuc.js');

    mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });
    DanhMuc.find({}, {}, function (err, users) {
        mongoose.connection.close();
        if (err) {
            res.send({ "error": err });
        } else {
            var dsDanhMuc = [];
            users.forEach(function (user) {
                dsDanhMuc.push(user);
            })
            res.send(dsDanhMuc);
        }

        //doSomethingHere 
    })
})

app.post('/add-danh-muc', function (req, res) {
    var madanhMuc = req.body.maDanhMuc;
    var tendanhMuc = req.body.tenDanhMuc;
    var trangthai = req.body.trangThai;
    var activedanhMuc = req.body.active;

    mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });
    const DanhMuc = require("../model/danhmuc.js");
    const danhmuc = new DanhMuc({ maDanhMuc: madanhMuc, tenDanhMuc: tendanhMuc, trangThai: trangthai, isActive: activedanhMuc });
    danhmuc.save(function (err) {
        if (err) {
            res.send({ "error": err });
        }
        else {
            res.send(JSON.stringify(danhmuc));
        }
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
