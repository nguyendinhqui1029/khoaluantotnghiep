import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';

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
        this.dsDuAN = serviceDuAn.layDanhSachDuAnTheoLoaiDuAn(this.loai);
    }

    ngOnInit(): void { }
}
