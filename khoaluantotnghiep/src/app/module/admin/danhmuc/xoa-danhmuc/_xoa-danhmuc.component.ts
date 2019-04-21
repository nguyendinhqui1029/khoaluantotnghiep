import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemDanhMucComponent } from '../them-danhmuc/_them-danhmuc.component';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ds_danhmuc } from 'src/app/model/mock_danhmuc';
import { DanhMucService } from 'src/app/service/danhmuc.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-danhmuc',
    templateUrl: './_xoa-danhmuc.component.html',
    styleUrls: ['./_xoa-danhmuc.component.scss']
})
export class XoaDanhMucComponent implements OnInit {
    constructor(private danhMucService: DanhMucService) {

    }

    ds_danhmuc: DANHMUC[] = [];
    getDSDanhMuc() {
        this.danhMucService.getDSDanhMuc(ConfigService.TRANG_THAI_DANHMUC.TATCA).subscribe(dm => {
            this.ds_danhmuc = dm.body;
        })
    }
    ngOnInit(): void {
        this.getDSDanhMuc();
    }
    deletedanhmuc(maDanhMuc) {
        this.danhMucService.xoaDanhMucTheomaDanhMuc(maDanhMuc).subscribe(res => {
            if (res.code === 200) {
                this.getDSDanhMuc();
            }
        });
    }
}
