import { Component, OnInit } from '@angular/core';
import { GioiThieuService } from 'src/app/service/gioithieu.service';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';

@Component({
    selector: 'noi-dung-gioi-thieu',
    templateUrl: './_noi-dung.component.html',
    styleUrls: ['./_noi-dung.component.scss']
})
export class NoiDungGioiThieuComponent implements OnInit {
    gioiThieu: GIOITHIEU;

    constructor(private serviceGioiThieu: GioiThieuService) {
        this.gioiThieu = ds_gioithieu[0];
    }
    ngDoCheck(): void {
        if (this.serviceGioiThieu.getGioiThieu()) {
            this.gioiThieu = this.serviceGioiThieu.getGioiThieu();
        }


    }

    ngOnInit(): void {

    }
}
