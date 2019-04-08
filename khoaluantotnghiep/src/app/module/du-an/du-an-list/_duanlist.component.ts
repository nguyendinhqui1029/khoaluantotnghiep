import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'du-an-list',
    templateUrl: './_duanlist.component.html',
    styleUrls: ['./_duanlist.component.scss']
})
export class DuAnListComponent implements OnInit {
    //Du liệu từ mock
    dsDuAn: DUAN[] = [];//ds_duan;


    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.currentMessage.subscribe(e => {
            this.dsDuAn = e;
        });
    }

    ngOnInit(): void {

    }

}
