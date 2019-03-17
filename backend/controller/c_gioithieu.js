module.exports = function (mongoose, res, req) {
    this.getDSGioiThieu = function () {
        var GioiThieu = require('../model/gioithieu.js');
        mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });
        GioiThieu.find({}, {}, function (err, gioithieu) {
            mongoose.connection.close();
            res.send(gioithieu);
        })
    }
    this.addGioiThieu = function (ObGioiThieu) {
        var GioiThieu = require('../model/gioithieu.js');
        const gioithieu = new GioiThieu({
            maGioiThieu: ObGioiThieu.maGioiThieu,
            tieuDe: ObGioiThieu.tieuDe,
            noiDung: ObGioiThieu.noiDung,
            icon: ObGioiThieu.icon
        });
        gioithieu.save(function (err) {
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': gioithieu, 'code': 200 });
            }
        });
    }
}





/*

app.post('/add-gioi-thieu', function (req, res) {
    var maGioiThieu = req.body.maGioiThieu;
    var tieuDe = req.body.tieuDe;
    var noiDung = req.body.noiDung;
    var icon = req.body.icon;

    mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });
    const GioiThieu = require("../model/gioithieu.js");
    const gioithieu = new GioiThieu({ maGioiThieu: maGioiThieu, tieuDe: tieuDe, noiDung: noiDung, icon: icon });
    gioithieu.save(function (err) {
        if (err) console.log(err);
    });
});

app.get('/get-gioi-thieu', function (req, res) {
    var GioiThieu = require('../model/gioithieu.js');

    mongoose.connect('mongodb://localhost:27017/KHOALUAN2019', { useNewUrlParser: true });
    GioiThieu.find({}, {}, function (err, users) {
        mongoose.connection.close();
        console.log("Username supplied");
        res.send(users);
        //doSomethingHere
    })
})



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
*/