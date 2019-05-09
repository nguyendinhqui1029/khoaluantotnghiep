import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ds_danhmuc } from 'src/app/model/mock_danhmuc';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';
import { DanhMucService } from 'src/app/service/danhmuc.service';
import { PhanTranService } from 'src/app/service/phantrang.service';
export type EditorType = true | false;
@Component({
    selector: 'san-giao-dich',
    templateUrl: './_san-giao-dich.component.html',
    styleUrls: ['./_san-giao-dich.component.scss']
})
export class SanGiaoDichModuleComponent implements OnInit {

    status: EditorType = true;
    pagethue: string = '';
    pageCurrent: string = '';
    modeView: any = { "grid": "/san-giao-dich/grid", "list": "/san-giao-dich" };
    //dữ liệu danh mục từ mock
    ds_danhmuc: DANHMUC[] = [];
    isActive: boolean = true;

    ds_DuAn: DUAN[] = [];
    ds_Gui: any[] = [];
    currentPagePhanTrang: number = 1;
    ds_page: any[] = [];
    soItemTrang: number = 5;
    ds_DuAnMuaban: DUAN[] = [];
    danhmuc: string = "DM001";
    getDSDanhMuc() {
        this.Danhmucservice.getDSDanhMuc(ConfigService.TRANG_THAI_DANHMUC.TATCA).subscribe(danhmuc => {
            this.ds_danhmuc = danhmuc.body;
        });
    }
    constructor(private route: Router, private serviceSanGiaoDich: SanGiaoDichService, private router: Router,
        private Duanservice: DuAnService, private Danhmucservice: DanhMucService,
        private phanTrangService: PhanTranService) {
        this.pageCurrent = this.route.routerState.snapshot.url;
        if (this.pageCurrent === this.modeView.grid) {
            this.status = false;
            this.phanTrangService.soItemCuaPage = 12;
        } else if (this.pageCurrent === this.modeView.list) {
            this.status = true;
            this.phanTrangService.soItemCuaPage = 5;
        }
        this.pagethue = this.router.routerState.snapshot.url;
        if (this.pagethue === "/san-giao-dich" || this.pagethue === "/") {
            this.status = true;
        } else {
            this.status = false;
        }
        this.getDSDanhMuc();
        this.getDSDuAnMuaBan();
    }

    ngOnInit(): void {

    }

    buttonChoThueClick(danhmuc) {
        this.danhmuc = danhmuc;
        this.serviceSanGiaoDich.setMaGiaoDich(danhmuc.maDanhMuc);
        this.ds_danhmuc.forEach(e => {
            if (e.maDanhMuc === danhmuc.maDanhMuc) {
                e.isActive = true;
                this.currentPagePhanTrang = 1;
            } else {
                e.isActive = false;
                this.currentPagePhanTrang = 1;
            }
        });
        this.ds_DuAn = [];
        this.Duanservice.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duanthuehoacban => {
                    if (duanthuehoacban.danhMuc.maDanhMuc === danhmuc.maDanhMuc) {
                        this.ds_DuAn.push(duanthuehoacban);
                    }
                })
                //Phan trang
                this.phanTrangService.setValueDanhSach(this.ds_DuAn);
                this.ds_page = this.phanTrangService.createPhanTrang(this.currentPagePhanTrang);
                this.ds_Gui = this.phanTrangService.ds_KetQuaPhanTrang(this.ds_DuAn);
                this.serviceSanGiaoDich.changeValue(this.ds_Gui); //Danh sách dự án loại Cho thuê lúc nhấn nút         
                //End phan trang
            }


        })

    }
    changeStatus(e) {
        if (e === this.modeView.grid) {
            this.pagethue = "/san-giao-dich/grid";
            this.status = false;
        } else if (e === this.modeView.list) {
            this.pagethue = "/san-giao-dich";
            this.status = true;
        }

        if (e === this.modeView.grid) {
            this.status = false;
            this.phanTrangService.soItemCuaPage = 12;
            this.soItemTrang = 12;
            this.currentPagePhanTrang = 1;
        } else if (e === this.modeView.list) {
            this.status = true;
            this.phanTrangService.soItemCuaPage = 5;
            this.soItemTrang = 5;
            this.currentPagePhanTrang = 1;
        }
        this.buttonChoThueClick(this.danhmuc);
        this.pageCurrent = this.route.routerState.snapshot.url;
        this.createPhanTrang(this.currentPagePhanTrang);
    }

    getDSDuAnMuaBan() {
        this.Duanservice.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duanban => {
                    if (duanban.danhMuc.tenDanhMuc === 'Mua bán') {
                        this.ds_DuAnMuaban.push(duanban);
                    }
                })
            }
            this.serviceSanGiaoDich.changeValue(this.ds_DuAnMuaban);
        })
    }
    createPhanTrang(value) {
        this.currentPagePhanTrang = value;
        this.ds_page = this.phanTrangService.createPhanTrang(this.currentPagePhanTrang);
        this.ds_Gui = this.phanTrangService.ds_KetQuaPhanTrang(this.ds_DuAn);
        this.serviceSanGiaoDich.changeValue(this.ds_Gui);
    }

}