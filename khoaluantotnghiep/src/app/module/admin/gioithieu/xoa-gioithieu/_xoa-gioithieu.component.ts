import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';

@Component({
    selector: 'xoa-gioithieu',
    templateUrl: './_xoa-gioithieu.component.html',
    styleUrls: ['./_xoa-gioithieu.component.scss']
})
export class XoaGioiThieuComponent implements OnInit {
    constructor() { }

    ds_gioithieu: GIOITHIEU[] = ds_gioithieu;
    ngOnInit(): void { }
}
