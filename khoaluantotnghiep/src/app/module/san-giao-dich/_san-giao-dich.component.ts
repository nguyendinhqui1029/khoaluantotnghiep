import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ds_danhmuc } from 'src/app/model/mock_danhmuc';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';
import { DanhMucService } from 'src/app/service/danhmuc.service';
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
    ds_danhmuc: DANHMUC[] = [];
    isActive: boolean = true;

    getDSDanhMuc() {
        this.Danhmucservice.getDSDanhMuc().subscribe(danhmuc => {
            this.ds_danhmuc = danhmuc.body;
        });
    }
    constructor(private route: ActivatedRoute, private serviceSanGiaoDich: SanGiaoDichService, private router: Router,
        private Duanservice: DuAnService, private Danhmucservice: DanhMucService) {
        this.pageCurrent = this.route.snapshot.routeConfig.path;
        this.pagethue = this.router.routerState.snapshot.url;
        if (this.pagethue === "/san-giao-dich") {
            this.status = true;
        } else {
            this.status = false;
        }
    }

    ngOnInit(): void {
        this.getDSDuAnChoThue();
        this.getDSDanhMuc();
        this.getDSDuAnMuaBan();
        this.serviceSanGiaoDich.changeValue(this.ds_DuAnMuaban); //Danh sách dự án loại Mua bán lúc đầu show

    }

    buttonChoThueClick(maDanhMuc) {
        this.serviceSanGiaoDich.setMaGiaoDich(maDanhMuc);
        this.ds_danhmuc.forEach(e => {
            if (e.maDanhMuc === maDanhMuc) {
                this.serviceSanGiaoDich.changeValue(this.ds_DuAnChothue); //Danh sách dự án loại Mua bán lúc nhấn nút

                e.isActive = true;
            } else {
                e.isActive = false;
                this.serviceSanGiaoDich.changeValue(this.ds_DuAnMuaban); //Danh sách dự án loại Cho thuê lúc nhấn nút
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


    //update
    ds_DuAnChothue: DUAN[] = [];
    getDSDuAnChoThue() {
        this.Duanservice.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            duan.body.forEach(duanthue => {
                if (duanthue.danhMuc.tenDanhMuc === 'Cho thuê') {
                    this.ds_DuAnChothue.push(duanthue);
                }
            })
        })
    }
    ds_DuAnMuaban: DUAN[] = [];
    getDSDuAnMuaBan() {
        this.Duanservice.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            duan.body.forEach(duanban => {
                if (duanban.danhMuc.tenDanhMuc === 'Mua bán') {
                    this.ds_DuAnMuaban.push(duanban);
                }
            })
        })
    }


}