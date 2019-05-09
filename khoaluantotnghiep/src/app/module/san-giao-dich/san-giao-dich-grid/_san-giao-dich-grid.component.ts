import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'san-giao-dich-grid',
    templateUrl: './_san-giao-dich-grid.component.html',
    styleUrls: ['./_san-giao-dich-grid.component.scss']
})
export class SanGiaoDichGridComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;

    dsDuAN: DUAN[] = [];
    constructor(private serviceSanGiaoDich: SanGiaoDichService) {
        this.getDSDuAnTheoDanhMuc();
    }
    getDSDuAnTheoDanhMuc() {
        this.serviceSanGiaoDich.currentMessage.subscribe(duan => {
            this.dsDuAN = duan;
        })
    }
    ngOnInit(): void {

    }
}
