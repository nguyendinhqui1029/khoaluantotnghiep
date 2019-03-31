import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';

@Component({
    selector: 'xoa-tintuc',
    templateUrl: './_xoa-tintuc.component.html',
    styleUrls: ['./_xoa-tintuc.component.scss']
})
export class XoaTinTucComponent implements OnInit {
    constructor() { }

    ds_tintuc: TINTUC[] = ds_tintuc;
    ngOnInit(): void { }
}
