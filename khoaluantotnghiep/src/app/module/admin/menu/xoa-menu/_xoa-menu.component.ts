import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/model/menu';
import { ds_menu } from 'src/app/model/mock_menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
    selector: 'xoa-menu',
    templateUrl: './_xoa-menu.component.html',
    styleUrls: ['./_xoa-menu.component.scss']
})
export class XoaMenuComponent implements OnInit {
    constructor(private MenuService: MenuService) { }

    ds_menu: MENU[] = [];
    getDSMenu() {
        this.MenuService.getDsMeNUTheoType(0).subscribe(mn => {
            this.ds_menu = mn.body;
        })
    }
    ngOnInit(): void {
        this.getDSMenu();
    }
    deletemenu(id) {
        this.MenuService.xoaMenuTheoMa(id).subscribe(res => {
            if (res.code === 200) {
                this.getDSMenu();
            }
        })
    }
}
