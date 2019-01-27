import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/model/menu';
import { ds_menu } from 'src/app/model/mock_menu';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: './_header.component.html',
    styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
    ds_menu: MENU[] = ds_menu;
    menu_top: MENU[] = [];
    menu_bottom: MENU[] = [];
    modeMenu: any = { "MENU_TOP": 0, "MENU_BOTTOM": 1 };
    constructor(private route: ActivatedRoute) {
        this.ds_menu.forEach(menu => {
            if (menu.typeMenu === this.modeMenu.MENU_TOP) {
                this.menu_top.push(menu);
            } else if (menu.typeMenu === this.modeMenu.MENU_BOTTOM) {
                this.menu_bottom.push(menu);
            }
        });
    }

    ngOnInit(): void {
        if (this.route.snapshot.routeConfig.path !== '') {
            this.menu_bottom.forEach(element => {
                if (element.codeMenu.indexOf(this.route.snapshot.routeConfig.path) > -1) {
                    element.statusMenu = true;
                } else {
                    element.statusMenu = false;
                }
            });
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
