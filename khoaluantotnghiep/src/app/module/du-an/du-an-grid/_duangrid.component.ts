import { Component, OnInit, OnDestroy } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'du-an-grid',
    templateUrl: './_duangrid.component.html',
    styleUrls: ['./_duangrid.component.scss']
})
export class DuAnGridComponent implements OnInit, OnDestroy {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];
    sub: any;
    getListDuANtheoTrangThai() {
        let trangthai = 0;
        this.sub = this.serviceDuAn.getListDuAn(trangthai).subscribe(duan => {
            this.dsDuAN = duan.body;
        });
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
