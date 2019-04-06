import { Component, OnInit, OnDestroy } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'du-an-list',
    templateUrl: './_duanlist.component.html',
    styleUrls: ['./_duanlist.component.scss']
})
export class DuAnListComponent implements OnInit, OnDestroy {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];//ds_duan;
    sub: any;
    getListDuANtheoTrangThai() {
        let trangthai = 0;
        this.sub = this.serviceDuAn.getListDuAn(trangthai).subscribe(duan => {
            this.dsDuAN = duan.body;
        })
    }
    constructor(private serviceDuAn: DuAnService) {
        //this.dsDuAN = serviceDuAn.layDanhSachDuAn();
    }

    ngOnInit(): void {
        this.getListDuANtheoTrangThai();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
