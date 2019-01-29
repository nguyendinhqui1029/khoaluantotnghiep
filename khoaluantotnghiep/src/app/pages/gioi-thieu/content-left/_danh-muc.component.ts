import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { EditorType } from 'src/app/module/du-an/_duan.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'danh-muc-gioi-thieu',
    templateUrl: './_danh-muc.component.html',
    styleUrls: ['./_danh-muc.component.scss']
})
export class DanhMucGioiThieuComponent implements OnInit {
    status: EditorType = true;
    pageCurrent: string = '';
    modeView: any = { "linhvuc": "linhvuc", "vechungtoi": "vechungtoi" };
    constructor(private route: ActivatedRoute) {
        this.pageCurrent = this.route.snapshot.routeConfig.path;
    }

    ngOnInit(): void { }

}
