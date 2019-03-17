module.exports = function (mongoose, res) {
    this.getAllDSMenu = function () {
        var Menu = require('../model/m_menu.js');
        Menu.find({}, function (err, menu) {
            mongoose.connection.close();
            res.send(menu);
        })
    }
    this.getLimitDSMenu = function (vtbd, sluong) {
        var Menu = require('../model/m_menu.js');
        Menu.find({}, {}, function (err, menu) {
            let mangMenu = [];
            mongoose.connection.close();
            if (menu.length > ((Number(vtbd) + Number(sluong)) - 1)) {
                for (var i = vtbd; i <= (Number(vtbd) + Number(sluong)) - 1; i++) {
                    mangMenu.push(menu[i]);
                }
            } else {
                for (var i = vtbd; i <= menu.length - 1; i++) {
                    mangMenu.push(menu[i]);
                }
            }

            res.send({ 'data': mangMenu, 'code': 200 });
        })
    }
    this.getMenubyID = function (maMenu) {
        var Menu = require('../model/m_menu.js');
        Menu.find({ maMenu: maMenu }, {}, function (err, menu) {
            mongoose.connection.close();

            res.send({ 'data': menu, 'code': 200 });
        })
    }
    this.addMenu = function (ObMenu) {
        var Menu = require('../model/m_menu.js');
        const menu = new Menu({
            idMenu: ObMenu.idMenu,
            nameMenu: ObMenu.nameMenu,
            codeMenu: ObMenu.codeMenu,
            statusMenu: ObMenu.statusMenu,
            iconMenu: ObMenu.iconMenu,
            classMenu: ObMenu.classMenu,
            typeMenu: ObMenu.typeMenu
        });

        menu.save(function (err) {
            mongoose.connection.close();

            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': menu, 'code': 200 });
            }
        });

    }
    this.removeMenu = function (maMenu) {
        var Menu = require('../model/m_menu.js');
        Menu.remove({ idMenu: maMenu }, function (err) {
            mongoose.connection.close();
            if (err) {
                res.send({ 'error': err, 'code': 500 })
            }
            else {
                res.send({ 'data': 'Remove successly', 'code': 200 });
            }
        });
    }
    this.updateMenu = function (ObMenu) {
        var Menu = require('../model/m_menu.js');
        Menu.update({ idMenu: ObMenu.idMenu }, {
            nameMenu: ObMenu.nameMenu,
            codeMenu: ObMenu.codeMenu,
            statusMenu: ObMenu.statusMenu,
            iconMenu: ObMenu.iconMenu,
            classMenu: ObMenu.classMenu,
            typeMenu: ObMenu.typeMenu
        }, { multi: true }, function (err, data) {
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
