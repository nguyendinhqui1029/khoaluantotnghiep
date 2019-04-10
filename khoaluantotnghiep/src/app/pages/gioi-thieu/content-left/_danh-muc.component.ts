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
    ds_gioithieu: GIOITHIEU[] = [];

    constructor(private serviceGioiThieu: GioiThieuService) {
        this.getDSGioiThieu();
    }
    setGioiThieu(value) {
        this.serviceGioiThieu.changeValue(value); //Gửi gioi thiệu 1 qua trang nội dung
    }


    getDSGioiThieu() {
        this.serviceGioiThieu.getDanhSachGioiThieu().subscribe(gioithieu => {
            this.ds_gioithieu = gioithieu.body;
            this.serviceGioiThieu.changeValue(this.ds_gioithieu[0]); //Gửi gioi thiêu khi chưa nhấn nút
        })
    }
    ngOnInit(): void {
    }

}
