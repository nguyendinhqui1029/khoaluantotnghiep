import { Component, OnInit } from '@angular/core';
import { HUONGDAN } from 'src/app/model/huongdan';
import { ds_huongdan } from 'src/app/model/mock_huongdan';
import { GioiThieuService } from 'src/app/service/gioithieu.service';

@Component({
    selector: 'danh-muc-huong-dan',
    templateUrl: './_danh-muc-huong-dan.component.html',
    styleUrls: ['./_danh-muc-huong-dan.component.scss']
})
export class DanhMucHuongDanComponent implements OnInit {
    ds_huongdan: HUONGDAN[] = ds_huongdan;
    constructor(private gioithieuService: GioiThieuService) {
        this.gioithieuService.changeValue(this.ds_huongdan[0]);
    }

    setHuongDan(value) {
        this.gioithieuService.changeValue(value); //Gửi hướng dẫn 1 qua trang nội dung
    }

    ngOnInit(): void { }
}
