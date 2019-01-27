import { Component, OnInit } from '@angular/core';
import { CONGTY } from 'src/app/model/congty';
import { congTy } from 'src/app/model/mock_congty';

@Component({
    selector: 'footer-component',
    templateUrl: './_footer.component.html',
    styleUrls: ['./_footer.component.scss']
})
export class FooterComponent implements OnInit {
    //dữ liệu từ mock
    congty: CONGTY = congTy;
    constructor() { }

    ngOnInit(): void { }
}
