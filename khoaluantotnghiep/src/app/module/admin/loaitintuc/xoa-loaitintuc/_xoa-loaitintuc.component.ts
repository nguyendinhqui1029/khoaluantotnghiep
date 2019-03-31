import { Component, OnInit } from '@angular/core';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { ds_loaitintuc } from 'src/app/model/mock_loaitintuc';

@Component({
    selector: 'xoa-loaitintuc',
    templateUrl: './_xoa-loaitintuc.component.html',
    styleUrls: ['./_xoa-loaitintuc.component.scss']
})
export class XoaLoaiTinTucComponent implements OnInit {
    constructor() { }

    ds_loaitintuc: LOAITINTUC[] = ds_loaitintuc;
    ngOnInit(): void { }
}
