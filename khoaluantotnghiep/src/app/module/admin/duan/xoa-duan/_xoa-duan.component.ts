import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-duan',
    templateUrl: './_xoa-duan.component.html',
    styleUrls: ['./_xoa-duan.component.scss']
})
export class XoaDuAnComponent implements OnInit {
    constructor(private duAnService: DuAnService) { }

    ds_duan: DUAN[] = [];

    ngOnInit(): void {
        this.getListDuAn();
    }

    getListDuAn(): void {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            this.ds_duan = duan.body
        });
    }


    deleteduan(maDuAn) {
        this.duAnService.xoaDuAnTheomaDuAn(maDuAn).subscribe(res => {
            if (res.code === 200) {
                this.getListDuAn();
            }
        });
    }
    updateduan(maDuAn) {
        console.log(maDuAn);
    }


    //xoa du an theo maDuAn
    // xoaDuAnTheomaDuAn(maDuAn): DUAN[] {
    //     let i = 0;
    //     this.ds_duan.forEach(duan => {
    //         i++;
    //         if (duan.maDuAn.indexOf(maDuAn) > -1) {
    //             this.ds_duan.splice(duan[i], 1);
    //         }
    //     });
    //     return this.ds_duan;
    // }

}
