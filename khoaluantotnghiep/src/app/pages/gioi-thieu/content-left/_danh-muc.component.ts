import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';
import { GioiThieuService } from 'src/app/service/gioithieu.service';


@Component({
    selector: 'danh-muc-gioi-thieu',
    templateUrl: './_danh-muc.component.html',
    styleUrls: ['./_danh-muc.component.scss']
})
export class DanhMucGioiThieuComponent implements OnInit {
    //dữ liệu từ mock
    ds_gioithieu: GIOITHIEU[] = ds_gioithieu;
    constructor(private serviceGioiThieu: GioiThieuService) {

    }
    setGioiThieu(value) {
        this.serviceGioiThieu.setGioiThieu(value);
    }
    ngOnInit(): void { }

}
