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
    congty: CONGTY;
    constructor() {
    }


    ngOnInit(): void {
    }
}
