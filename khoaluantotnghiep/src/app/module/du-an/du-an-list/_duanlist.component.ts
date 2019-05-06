import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'du-an-list',
    templateUrl: './_duanlist.component.html',
    styleUrls: ['./_duanlist.component.scss']
})
export class DuAnListComponent implements OnInit {
    //Du liệu từ mock
    dsDuAn: DUAN[] = [];//ds_duan;
    length_dsDUAN: Number = 0;
    urlImage: string = ConfigService.URL;
    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.currentMessage.subscribe(e => {
            this.dsDuAn = e;
            this.length_dsDUAN = this.dsDuAn.length;
        });
    }

    ngOnInit(): void {

    }

}
