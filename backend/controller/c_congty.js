module.exports = function (mongoose, res) {
    this.getAllDSCongTy = function () {
        var CongTy = require('../model/m_congty.js');
        CongTy.find({}, function (err, congty) {
            mongoose.connection.close();
            res.send(congty);
        })
    }
    this.getCongTybyID = function (id) {
        var CongTy = require('../model/m_congty.js');
        CongTy.find({ id: id }, {}, function (err, congty) {
            mongoose.connection.close();
            res.send({ 'data': congty, 'code': 200 });
        })
    }
    this.addCongTy = function (ObCongTy) {
        var CongTy = require('../model/m_congty.js');
        const congty = new CongTy({
            id: ObCongTy.id,
            tenCongTy: ObCongTy.tenCongTy,
            logoCongTy: ObCongTy.logoCongTy,
            soDienThoaiCongTy: ObCongTy.soDienThoaiCongTy,
            emailCongTy: ObCongTy.emailCongTy,
            diaChiCongTy: ObCongTy.diaChiCongTy,
            kinhDoCongTy: ObCongTy.kinhDoCongTy,
            viDoCongTy: ObCongTy.viDoCongTy,
            faxCongTy: ObCongTy.faxCongTy,
            hotlineCongTy: ObCongTy.hotlineCongTy
        });
        congty.save(function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': congty, 'code': 200 });
            }
        });
    }
    this.removeCongTy = function (id) {
        var CongTy = require('../model/m_congty.js');
        CongTy.remove({ id: id }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateCongTy = function (ObCongTy) {
        var CongTy = require('../model/m_congty.js');
        CongTy.update({ id: ObCongTy.id }, { tenCongTy: ObCongTy.tenCongTy, logoCongTy: ObCongTy.logoCongTy, soDienThoaiCongTy: ObCongTy.soDienThoaiCongTy, emailCongTy: ObCongTy.emailCongTy, diaChiCongTy: ObCongTy.diaChiCongTy, kinhDoCongTy: ObCongTy.kinhDoCongTy, viDoCongTy: ObCongTy.viDoCongTy, faxCongTy: ObCongTy.faxCongTy, hotlineCongTy: ObCongTy.hotlineCongTy }, { multi: true }, function (err, data) {
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
