import { Component, OnInit } from '@angular/core';
import { GioiThieuService } from 'src/app/service/gioithieu.service';
import { HUONGDAN } from 'src/app/model/huongdan';

@Component({
    selector: 'noi-dung-huong-dan',
    templateUrl: './_noi-dung-huong-dan.component.html',
    styleUrls: ['./_noi-dung-huong-dan.component.scss']
})
export class NoiDungHuongDanComponent implements OnInit {
    noidunghuongdan: HUONGDAN = new HUONGDAN("", "", "", "");
    constructor(private serviceGioiThieu: GioiThieuService) { }
    getDSGioiThieu() {
        this.serviceGioiThieu.currentMessage.subscribe(huongdan => {
            this.noidunghuongdan = huongdan;
        })
    }
    ngOnInit(): void {
        this.getDSGioiThieu();
    }
}
