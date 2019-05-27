import { Component, OnInit, OnDestroy } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'du-an-grid',
    templateUrl: './_duangrid.component.html',
    styleUrls: ['./_duangrid.component.scss']
})
export class DuAnGridComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;
    dsDuAn: DUAN[] = [];

    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.currentMessage.subscribe(e => {
            this.dsDuAn = e;
        });
    }

    ngOnInit(): void {

    }

}
