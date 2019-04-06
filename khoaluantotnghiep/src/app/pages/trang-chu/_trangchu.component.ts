import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'trang-chu',
    templateUrl: './_trangchu.component.html',
    styleUrls: ['./_trangchu.component.scss']
})
export class TrangChuComponent implements OnInit {
    ds_DuAn: any[] = [];
    constructor(private duAnService: DuAnService) {
        this.getDanhSachDuAn();
    }
    getDanhSachDuAn() {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(e => {
            this.ds_DuAn = e.body;
        });
    }

    ngOnInit(): void { }
}
