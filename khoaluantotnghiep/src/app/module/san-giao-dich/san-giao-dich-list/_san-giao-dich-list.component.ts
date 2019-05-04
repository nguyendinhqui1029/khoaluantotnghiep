import { Component, OnInit, Input } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { ConfigService } from 'src/app/service/config.service';


@Component({
    selector: 'san-giao-dich-list',
    templateUrl: './_san-giao-dich-list.component.html',
    styleUrls: ['./_san-giao-dich-list.component.scss']
})
export class SanGiaoDichListComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;
    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService, private serviceSanGiaoDich: SanGiaoDichService) {


    }
    getDSDuAnTheoDanhMuc() {
        this.serviceSanGiaoDich.currentMessage.subscribe(duan => {
            this.dsDuAN = duan;
        })
    }
    ngOnInit(): void {
        this.getDSDuAnTheoDanhMuc();
    }
}