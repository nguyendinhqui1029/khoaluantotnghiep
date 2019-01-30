import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'san-giao-dich-grid',
    templateUrl: './_san-giao-dich-grid.component.html',
    styleUrls: ['./_san-giao-dich-grid.component.scss']
})
export class SanGiaoDichGridComponent implements OnInit {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService) {
        this.dsDuAN = serviceDuAn.layDanhSachDuAn();
    }

    ngOnInit(): void { }
}
