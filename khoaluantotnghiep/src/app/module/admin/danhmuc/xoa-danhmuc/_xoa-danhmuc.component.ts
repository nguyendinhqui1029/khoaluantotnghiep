import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemDanhMucComponent } from '../them-danhmuc/_them-danhmuc.component';

@Component({
    selector: 'xoa-danhmuc',
    templateUrl: './_xoa-danhmuc.component.html',
    styleUrls: ['./_xoa-danhmuc.component.scss']
})
export class XoaDanhMucComponent implements OnInit {
    constructor(private router: Router) {

    }

    ngOnInit(): void {
    }
    update() {
        this.router.navigate(['/admin/them-danhmuc']);
    }
}
