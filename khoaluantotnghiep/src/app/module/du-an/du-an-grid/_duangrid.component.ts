import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'du-an-grid',
    templateUrl: './_duangrid.component.html',
    styleUrls: ['./_duangrid.component.scss']
})
export class DuAnGridComponent implements OnInit {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService) {
        this.dsDuAN = serviceDuAn.layDanhSachDuAn();
    }

    ngOnInit(): void { }
}
