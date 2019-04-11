import { Component, OnInit } from '@angular/core';
import { MENU } from '../../model/menu';

import { Router } from '@angular/router';
import { CONGTY } from '../../model/congty';
import { MenuService } from 'src/app/service/menu.service';
import { ConfigService } from 'src/app/service/config.service';
import { CongTyService } from 'src/app/service/congty.service';


@Component({
    selector: 'header-component',
    templateUrl: './_header.component.html',
    styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
    //dữ liệu áp cứng
    congty: CONGTY = new CONGTY("", "", "", "", "", "", "", "", "", "");

    // ds_menu: MENU[] = ds_menu;
    menu_top: MENU[] = [];
    menu_top_tam: MENU[] = [];
    menu_bottom: MENU[] = [];
    menuLogin: MENU[] = [];
    menuNotLogin: MENU[] = [];
    constructor(private route: Router,
        private MenuService: MenuService,
        private congtyservice: CongTyService) {
        this.getDSMenuTOPTheoType();
        this.getDSMenuBOTTOMTheoType();//
        this.congtyservice.getCongTy().subscribe(ct => {
            this.congty = ct.body[0];
        })
    }
    dangXuat() {
        this.getDSMenuTOPTheoType();
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("role");
        this.route.navigate([""]);
    }
    getDSMenuTOPTheoType() {
        this.MenuService.getDsMeNUTheoType(ConfigService.LOAI_MENU.MENU_TOP).subscribe(menutop => {
            this.menu_top = [];
            let role = sessionStorage.getItem("role");
            if (role !== null || role) {
                menutop.body.forEach(menu => {
                    if (menu.idMenu !== 11 && menu.idMenu !== 12) {
                        if (menu.idMenu === 28) {
                            if (Number(role) === ConfigService.LOAI_TAI_KHOAN.CUSTOMER) {
                                menu.codeMenu = '/customer';
                            } else if (Number(role) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {
                                menu.codeMenu = '/employee';
                            } else if (Number(role) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
                                menu.codeMenu = '/admin';
                            }
                        }
                        this.menuLogin.push(menu);
                    }
                });
                this.menu_top = this.menuLogin;
            } else {
                menutop.body.forEach(menu => {
                    if (menu.idMenu === 11 || menu.idMenu === 12) {
                        this.menuNotLogin.push(menu);
                    }
                });
                this.menu_top = this.menuNotLogin;
            }

        })
    }

    getDSMenuBOTTOMTheoType() {
        this.MenuService.getDsMeNUTheoType(ConfigService.LOAI_MENU.MENU_BOTTOM).subscribe(menubottom => {
            this.menu_bottom = menubottom.body;
        })
    }



    ngOnInit(): void {

        window.onscroll = function () { myFunction() };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.innerWidth >= 769) {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky-menu");
                } else {
                    header.classList.remove("sticky-menu");
                }
            }

        }
    }

    // xử lí cho menu chế độ di động
    toggleMenu() {
        var $ = window["$"];
        var mobileMenu = $("#mobile-menu");
        if (mobileMenu.hasClass("collapse")) {
            mobileMenu[0].attributes[1].value = true;
            mobileMenu.addClass("collapsed");
            mobileMenu.addClass("in");
            mobileMenu.removeClass("collapse");
        } else {
            mobileMenu[0].attributes[1].value = false;
            mobileMenu.addClass("collapse");
            mobileMenu.removeClass("in");
            mobileMenu.removeClass("collapsed");
        }
    }

}
