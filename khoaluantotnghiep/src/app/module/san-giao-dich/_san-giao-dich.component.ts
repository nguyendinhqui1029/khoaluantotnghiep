import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ds_danhmuc } from 'src/app/model/mock_danhmuc';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
export type EditorType = true | false;
@Component({
    selector: 'san-giao-dich',
    templateUrl: './_san-giao-dich.component.html',
    styleUrls: ['./_san-giao-dich.component.scss']
})
export class SanGiaoDichModuleComponent implements OnInit {

    status: EditorType;
    pagethue: string = '';
    pageCurrent: string = '';
    modeView: any = { "grid": "grid", "list": "list" };
    //dữ liệu danh mục từ mock
    ds_danhmuc: DANHMUC[] = ds_danhmuc;
    isActive: boolean = true;
    constructor(private route: ActivatedRoute, private serviceSanGiaoDich: SanGiaoDichService, private router: Router) {
        this.pageCurrent = this.route.snapshot.routeConfig.path;
        this.serviceSanGiaoDich.setMaGiaoDich(this.ds_danhmuc[0].maDanhMuc);
        this.pagethue = this.router.routerState.snapshot.url;
        if (this.pagethue === "/san-giao-dich") {
            this.status = true;
        } else {
            this.status = false;
        }
    }

    ngOnInit(): void { }

    buttonChoThueClick(maDanhMuc) {
        this.serviceSanGiaoDich.setMaGiaoDich(maDanhMuc);
        this.ds_danhmuc.forEach(e => {
            if (e.maDanhMuc === maDanhMuc) {
                e.isActive = true;
            } else {
                e.isActive = false;
            }
        });
    }
    changeStatus(e) {
        if (e === this.modeView.grid) {
            this.pagethue = "/san-giao-dich/grid";
            this.status = false;
        } else if (e === this.modeView.list) {
            this.pagethue = "/san-giao-dich";
            this.status = true;
        }
    }
}