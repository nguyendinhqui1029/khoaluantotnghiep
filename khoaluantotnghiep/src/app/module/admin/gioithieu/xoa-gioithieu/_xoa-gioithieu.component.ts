import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';
import { GioiThieuService } from 'src/app/service/gioithieu.service';

@Component({
    selector: 'xoa-gioithieu',
    templateUrl: './_xoa-gioithieu.component.html',
    styleUrls: ['./_xoa-gioithieu.component.scss']
})
export class XoaGioiThieuComponent implements OnInit {
    constructor(private gioiThieuService: GioiThieuService) { }

    ds_gioithieu: GIOITHIEU[] = [];
    getDSGioiThieu() {
        this.gioiThieuService.getDanhSachGioiThieu().subscribe(gt => {
            console.log(gt);
            this.ds_gioithieu = gt.body;
        })
    }
    ngOnInit(): void {
        this.getDSGioiThieu();
    }
    deletegioithieu(magioithieu) {
        this.gioiThieuService.xoaGioiThieuTheomaGioiThieu(magioithieu).subscribe(res => {
            if (res.code === 200) {
                this.getDSGioiThieu();
            }
        });
    }
}
