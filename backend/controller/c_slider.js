module.exports = function (mongoose, res) {
    this.getAllDSSlider = function () {
        var Slider = require('../model/m_slider.js');
        Slider.find({}, function (err, slider) {
            mongoose.connection.close();
            res.send(slider);
        })
    }
    this.getLimitDSSlider = function (vtbd, sluong) {
        var Slider = require('../model/m_slider.js');
        Slider.find({}, {}, function (err, slider) {
            let mangSlider = [];
            mongoose.connection.close();
            if (taikhoan.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangSlider.push(slider[i]);
                }
            } else {
                for (var i = vtbd; i <= taikhoan.length - 1; i++) {
                    mangSlider.push(slider[i]);
                }
            }
            res.send({ 'data': mangSlider, 'code': 200 });
        })
    }
    this.getSliderbyID = function (maSlider) {
        var Slider = require('../model/m_slider.js');
        Slider.find({ maSlider: maSlider }, {}, function (err, slider) {
            mongoose.connection.close();

            res.send({ 'data': slider, 'code': 200 });
        })
    }
    this.addSlider = function (ObSlider) {
        var Slider = require('../model/m_slider.js');
        const slider = new Slider({
            maSlider: ObSlider.maSlider,
            mangHinh: ObSlider.mangHinh,
            trangThai: ObSlider.trangThai,
            loaiSlider: ObSlider.loaiSlider
        });
        slider.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': slider, 'code': 200 });
            }
        });

    }
    this.removeSlider = function (maSlider) {
        var Slider = require('../model/m_slider.js');
        Slider.remove({ maSlider: maSlider }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateSlider = function (ObSlider) {
        var Slider = require('../model/m_slider.js');
        Slider.update({
            maSlider: ObSlider.maSlider,
            mangHinh: ObSlider.mangHinh,
            trangThai: ObSlider.trangThai,
            loaiSlider: ObSlider.loaiSlider
        }, function (err, data) {
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
