module.exports = function (mongoose, res) {
    this.getAllDSCongTy = function () {
        var CongTy = require('../model/m_congty.js');
        CongTy.find({}, {}, function (err, congty) {
            mongoose.connection.close();
            res.send(congty);
        })
    }
    this.addCongTy = function (ObCongTy) {
        var CongTy = require('../model/m_congty.js');
        const congty = new CongTy({
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
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': danhmuc, 'code': 200 });
            }
        });
    }
}
