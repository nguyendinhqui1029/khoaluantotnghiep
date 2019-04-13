import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'xoa-duan',
    templateUrl: './_xoa-duan.component.html',
    styleUrls: ['./_xoa-duan.component.scss']
})
export class XoaDuAnComponent implements OnInit {
    constructor(private duAnService: DuAnService, private router: Router) { }

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
    updateduan(value) {
        console.log(value.maDuAn);
        this.router.navigate(['admin/update-duan/' + value.maDuAn]);
        this.duAnService.setValueThongTin(value);
    }
}
