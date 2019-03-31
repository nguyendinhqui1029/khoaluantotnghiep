import { Component, OnInit } from '@angular/core';
import { TAIKHOAN } from 'src/app/model/taikhoan';
import { ds_taikhoan } from 'src/app/model/mock_taikhoan';

@Component({
    selector: 'xoa-taikhoan',
    templateUrl: './_xoa-taikhoan.component.html',
    styleUrls: ['./_xoa-taikhoan.component.scss']
})
export class XoaTaiKhoanComponent implements OnInit {
    constructor() { }


    ds_taikhoan: TAIKHOAN[] = ds_taikhoan;
    ngOnInit(): void { }
}
