import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'du-an-noi-bat',
    templateUrl: './_duannoibat.component.html',
    styleUrls: ['./_duannoibat.component.scss']
})
export class DuAnNoiBatComponent implements OnInit {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];
    loai = "nổi bật";
    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            duan.body.forEach(e => {
                if (e.loaiDuAn === this.loai) {
                    this.dsDuAN.push(e);
                }
            })
        });
    }

    ngOnInit(): void { }
}
