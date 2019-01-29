import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';

@Component({
    selector: 'tin-tuc-noi-bat',
    templateUrl: './_tintucnoibat.component.html',
    styleUrls: ['./_tintucnoibat.component.scss']
})
export class TinTucNoiBatComponent implements OnInit {
    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = ds_tintuc;
    constructor() { }

    ngOnInit(): void { }
}
