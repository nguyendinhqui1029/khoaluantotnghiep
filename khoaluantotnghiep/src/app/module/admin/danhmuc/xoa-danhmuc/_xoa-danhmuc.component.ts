import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemDanhMucComponent } from '../them-danhmuc/_them-danhmuc.component';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ds_danhmuc } from 'src/app/model/mock_danhmuc';

@Component({
    selector: 'xoa-danhmuc',
    templateUrl: './_xoa-danhmuc.component.html',
    styleUrls: ['./_xoa-danhmuc.component.scss']
})
export class XoaDanhMucComponent implements OnInit {
    constructor(private router: Router) {

    }

    ds_danhmuc: DANHMUC[] = ds_danhmuc;

    ngOnInit(): void {
    }
    update() {
        this.router.navigate(['/admin/them-danhmuc']);
    }
}
