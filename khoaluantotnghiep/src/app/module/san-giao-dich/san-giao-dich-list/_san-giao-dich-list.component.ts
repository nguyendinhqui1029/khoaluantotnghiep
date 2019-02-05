import { Component, OnInit, Input } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';


@Component({
    selector: 'san-giao-dich-list',
    templateUrl: './_san-giao-dich-list.component.html',
    styleUrls: ['./_san-giao-dich-list.component.scss']
})
export class SanGiaoDichListComponent implements OnInit {
    //Du liệu từ mock
    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService, private serviceSanGiaoDich: SanGiaoDichService) {


    }
    ngDoCheck(): void {
        this.dsDuAN = this.serviceDuAn.layDanhSachDuAnTheoDanhMuc(this.serviceSanGiaoDich.getMaGiaoDich());
    }
    ngOnInit(): void { }
}