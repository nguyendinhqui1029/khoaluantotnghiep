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
    urlImage: string = ConfigService.URL;

    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.getDuAnLimitTheoTrangThai(0, 3, ConfigService.TRANG_THAI_DU_AN.DUANMOI).subscribe(duan => {
            this.dsDuAN = duan.body;
        });
    }

    ngOnInit(): void { }
}
