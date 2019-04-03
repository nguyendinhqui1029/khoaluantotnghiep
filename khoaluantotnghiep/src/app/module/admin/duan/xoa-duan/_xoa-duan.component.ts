import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';

@Component({
    selector: 'xoa-duan',
    templateUrl: './_xoa-duan.component.html',
    styleUrls: ['./_xoa-duan.component.scss']
})
export class XoaDuAnComponent implements OnInit {
    constructor() { }

    ds_duan: DUAN[] = ds_duan;

    ngOnInit(): void { }
    deleteduan(maDuAn) {
        console.log(maDuAn);
    }
    updateduan(maDuAn) {
        console.log(maDuAn);
    }

}
