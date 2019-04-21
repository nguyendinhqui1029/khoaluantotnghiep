import { Component, OnInit } from '@angular/core';
import { CONGTY } from 'src/app/model/congty';
import { CongTyService } from 'src/app/service/congty.service';
import { congTy } from 'src/app/model/mock_congty';

@Component({
    selector: 'thong-tin-cong-ty',
    templateUrl: './_thongtincongty.component.html',
    styleUrls: ['./_thongtincongty.component.scss']
})
export class ThongTinCongTyComponent implements OnInit {
    thongtinCT: CONGTY = new CONGTY("", "", "", "", "", "", "", "", "", "", "");
    constructor(private congTyService: CongTyService) {
        this.congTyService.getCongTy().subscribe(congty => {
            this.thongtinCT = congty.body[0];
        })
    }


    ngOnInit(): void {
    }
}
