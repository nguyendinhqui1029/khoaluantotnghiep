import { Component, OnInit } from '@angular/core';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { ds_loaigiaodich } from 'src/app/model/mock_loaigiaodich';

@Component({
    selector: 'xoa-loaigiaodich',
    templateUrl: './_xoa-loaigiaodich.component.html',
    styleUrls: ['./_xoa-loaigiaodich.component.scss']
})
export class XoaLoaiGiaoDichComponent implements OnInit {
    constructor() { }

    ds_loaigiaodich: LOAIGIAODICH[] = ds_loaigiaodich;
    ngOnInit(): void { }
}
