import { Component, OnInit, OnDestroy } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'du-an-list',
    templateUrl: './_duanlist.component.html',
    styleUrls: ['./_duanlist.component.scss']
})
export class DuAnListComponent implements OnInit, OnDestroy {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];//ds_duan;
    sub: any;
    tongsotrang: any = 0;

    getListDuANtheoTrangThai() {
        this.sub = this.serviceDuAn.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            this.dsDuAN = duan.body;
        })
    }
    constructor(private serviceDuAn: DuAnService) {
        //this.dsDuAN = serviceDuAn.layDanhSachDuAn();
    }

    // getDuAnTrongMotTrang() {
    //     let soduanhienthi: any = 5;



    //     if (this.dsDuAN.length <= soduanhienthi) {
    //         return this.tongsotrang = 1;
    //     } else {
    //         this.tongsotrang = (this.dsDuAN.length) / soduanhienthi;
    //     }
    // }



    ngOnInit(): void {
        this.getListDuANtheoTrangThai();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
