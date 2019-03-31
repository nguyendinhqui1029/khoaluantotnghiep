import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/model/menu';
import { ds_menu } from 'src/app/model/mock_menu';

@Component({
    selector: 'xoa-menu',
    templateUrl: './_xoa-menu.component.html',
    styleUrls: ['./_xoa-menu.component.scss']
})
export class XoaMenuComponent implements OnInit {
    constructor() { }

    ds_menu: MENU[] = ds_menu;
    ngOnInit(): void { }
}
