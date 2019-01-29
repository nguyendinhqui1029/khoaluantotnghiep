import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';

@Component({
    selector: 'noi-dung-tin-tuc',
    templateUrl: './_noidungtintuc.component.html',
    styleUrls: ['./_noidungtintuc.component.scss']
})
export class NoiDungTinTucComponent implements OnInit {

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = ds_tintuc;
    constructor() { }

    ngOnInit(): void { }
}
