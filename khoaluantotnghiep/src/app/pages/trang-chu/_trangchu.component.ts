import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
import { TinTucService } from 'src/app/service/tintuc.service';

@Component({
    selector: 'trang-chu',
    templateUrl: './_trangchu.component.html',
    styleUrls: ['./_trangchu.component.scss']
})
export class TrangChuComponent implements OnInit {
    ds_DuAn: any[] = [];
    ds_tinTuc: any[] = [];

    constructor(private duAnService: DuAnService, private tinTucService: TinTucService) {
        this.duAnService.getDuAnTheoTrangThai(ConfigService.TRANG_THAI_DU_AN.DUANMOI).subscribe(e => {
            this.ds_DuAn = e.body;
        });

        this.tinTucService.getDSTinTuc().subscribe(tintuc => {
            tintuc.body.forEach(tin => {
                if (tin.trangthai === ConfigService.TRANG_THAI_TIN_TUC.NEW) {
                    this.ds_tinTuc.push(tin);
                }
            })
        })
    }
    getDanhSachDuAn() {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(e => {
            this.ds_DuAn = e.body;
        });
    }
    ngOnInit(): void { }
}
