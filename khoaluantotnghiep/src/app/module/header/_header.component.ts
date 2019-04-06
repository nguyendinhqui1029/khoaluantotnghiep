import { Component, OnInit } from '@angular/core';
import { MENU } from '../../model/menu';
import { ds_menu } from '../../model/mock_menu';
import { ActivatedRoute, Router } from '@angular/router';
import { CONGTY } from '../../model/congty';
import { congTy } from '../../model/mock_congty';
import { MenuService } from 'src/app/service/menu.service';

@Component({
    selector: 'header-component',
    templateUrl: './_header.component.html',
    styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
    //dữ liệu áp cứng
    congty: CONGTY = congTy;

    ds_menu: MENU[] = ds_menu;
    menu_top: MENU[] = [];
    menu_bottom: MENU[] = [];
    modeMenu: any = { "MENU_TOP": 2, "MENU_BOTTOM": 1 };


    dsmenutop_hero: MENU[] = [];

    getDSMenuTheoType() {
        let type = 2;
        this.MenuService.getDsMeNUTheoType(type).subscribe(menutop => {
            this.dsmenutop_hero = menutop.body;

        })
    }

    constructor(private route: ActivatedRoute, private MenuService: MenuService) {
        this.ds_menu.forEach(menu => {
            if (menu.typeMenu === this.modeMenu.MENU_TOP) {
                this.menu_top.push(menu);
            } else if (menu.typeMenu === this.modeMenu.MENU_BOTTOM) {
                this.menu_bottom.push(menu);
            }
        });
    }

    ngOnInit(): void {
        // if (this.route.snapshot.routeConfig.path !== '') {
        //     this.menu_bottom.forEach(element => {
        //         if (element.codeMenu.indexOf(this.route.snapshot.routeConfig.path) > -1) {
        //             element.statusMenu = true;
        //         } else {
        //             element.statusMenu = false;
        //         }
        //     });
        // }
        this.getDSMenuTheoType();
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

    ngAfterViewInit(): void {
        window.onscroll = function () { myFunction() };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.innerWidth >= 992) {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky-menu");
                } else {
                    header.classList.remove("sticky-menu");
                }
            }

        }

    }
}
