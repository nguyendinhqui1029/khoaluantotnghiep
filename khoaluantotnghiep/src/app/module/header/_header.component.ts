import { Component, OnInit } from '@angular/core';
import { MENU } from '../../model/menu';
import { ds_menu } from '../../model/mock_menu';
import { ActivatedRoute, Router } from '@angular/router';
import { CONGTY } from '../../model/congty';
import { congTy } from '../../model/mock_congty';
import { MenuService } from 'src/app/service/menu.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'header-component',
    templateUrl: './_header.component.html',
    styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
    //dữ liệu áp cứng
    congty: CONGTY = congTy;

    // ds_menu: MENU[] = ds_menu;
    menu_top: MENU[] = [];
    menu_bottom: MENU[] = [];


    dsmenutop_hero: MENU[] = [];

    getDSMenuTOPTheoType() {
        this.MenuService.getDsMeNUTheoType(ConfigService.LOAI_MENU.MENU_TOP).subscribe(menutop => {
            this.menu_top = menutop.body;
        })
    }

    getDSMenuBOTTOMTheoType() {
        this.MenuService.getDsMeNUTheoType(ConfigService.LOAI_MENU.MENU_BOTTOM).subscribe(menubottom => {
            this.menu_bottom = menubottom.body;
        })
    }

    constructor(private route: ActivatedRoute, private MenuService: MenuService) {
    }

    ngOnInit(): void {
        this.getDSMenuTOPTheoType();
        this.getDSMenuBOTTOMTheoType();//

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
