import { Component, OnInit } from '@angular/core';
import { DOITAC } from 'src/app/model/doitac';
import { ds_DoiTac } from 'src/app/model/mock_doitac';

@Component({
    selector: 'xoa-doitac',
    templateUrl: './_xoa-doitac.component.html',
    styleUrls: ['./_xoa-doitac.component.scss']
})
export class XoaDoiTacComponent implements OnInit {
    constructor() { }
    ds_doitac: DOITAC[] = ds_DoiTac;

    ngOnInit(): void { }
}
