import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'du-an-list',
    templateUrl: './_duanlist.component.html',
    styleUrls: ['./_duanlist.component.scss']
})
export class DuAnListComponent implements OnInit {
    //Du liệu từ mock
    dsDuAN: DUAN[] = ds_duan;
    constructor(private serviceDuAn: DuAnService) {
        this.dsDuAN = serviceDuAn.layDanhSachDuAn();
    }

    ngOnInit(): void { }
}
