import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PhanTranService } from 'src/app/service/phantrang.service';
import { ConfigService } from 'src/app/service/config.service';
import { DuAnService } from 'src/app/service/duan.service';
export type EditorType = true | false;
@Component({
    selector: 'du-an',
    templateUrl: './_duan.component.html',
    styleUrls: ['./_duan.component.scss']
})
export class DuAnComponent implements OnInit {

    status: EditorType = true;
    pageCurrent: string = '';
    modeView: any = {};
    dsDuAn: any[] = [];
    ds_HienThi: any[] = [];
    currentPagePhanTrang: number = 1;
    ds_page: any[] = [];
    soItemTrang: number = 5;

    ds_duan_theo_loai_giao_dich: any[] = [];
    tieude: any = "";
    pageList: string = "";
    pageGrid: string = "";
    constructor(private route: Router,
        private phanTrangService: PhanTranService,
        private serviceDuAn: DuAnService) {
        this.pageCurrent = this.route.routerState.snapshot.url;
        if (this.pageCurrent.indexOf("/grid") >= 0) {
            this.modeView = { "grid": this.pageCurrent, "list": this.pageCurrent.substr(0, this.pageCurrent.lastIndexOf("/")) };
            this.pageGrid = this.modeView.grid;
            this.pageList = this.modeView.list;
        } else {
            this.modeView = { "grid": this.pageCurrent + "/grid", "list": this.pageCurrent };
            this.pageGrid = this.modeView.grid;
            this.pageList = this.modeView.list;
        }

        if (this.pageCurrent === this.modeView.grid) {
            this.status = false;
            this.phanTrangService.soItemCuaPage = 12;
        } else if (this.pageCurrent === this.modeView.list) {
            this.status = true;
            this.phanTrangService.soItemCuaPage = 5;
        }
        this.getListDuANtheoTrangThai();

        /////////////////////Lấy dự án khi click vào khung loại sàn giao dịch
        this.serviceDuAn.getThongTin.subscribe(e => {
            this.ds_duan_theo_loai_giao_dich = e.dsDuantheoloaigiaodich;
            this.tieude = e.tieude;
            if (!this.ds_duan_theo_loai_giao_dich) {
                //Phan trang
                this.phanTrangService.setValueDanhSach(this.ds_duan_theo_loai_giao_dich);
                this.ds_page = this.phanTrangService.createPhanTrang(this.currentPagePhanTrang);
                this.ds_HienThi = this.phanTrangService.ds_KetQuaPhanTrang(this.ds_duan_theo_loai_giao_dich);
                this.serviceDuAn.setValueDanhSachPhanTrang(this.ds_HienThi);
                //End phan trang
            }

        });

    }


    getListDuANtheoTrangThai() {
        this.serviceDuAn.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {

            if (duan.body) {
                duan.body.forEach(element => {
                    if (element.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH &&
                        element.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH) {
                        this.dsDuAn.push(element);
                    }
                });
                //Phan trang
                this.dsDuAn.reverse();
                this.phanTrangService.setValueDanhSach(this.dsDuAn);
                this.ds_page = this.phanTrangService.createPhanTrang(this.currentPagePhanTrang);
                this.ds_HienThi = this.phanTrangService.ds_KetQuaPhanTrang(this.dsDuAn);
                this.serviceDuAn.setValueDanhSachPhanTrang(this.ds_HienThi);
                //End phan trang
            }

        })
    }
    ngOnInit(): void { }

    changeStatus(e) {
        if (e === this.modeView.grid) {
            this.status = false;
            this.phanTrangService.soItemCuaPage = 12;
            this.soItemTrang = 12;
            this.currentPagePhanTrang = 1;
            /////////// list - grid
            if (this.pageCurrent.indexOf('/grid') >= 0) {
                this.pageCurrent = this.pageCurrent;
            }
            else {
                this.pageCurrent = this.pageCurrent + '/grid';
            }

            /////////// list - grid
        } else if (e === this.modeView.list) {
            this.status = true;
            this.phanTrangService.soItemCuaPage = 5;
            this.soItemTrang = 5;
            this.currentPagePhanTrang = 1;
            this.pageCurrent = "/trang-chu";
        }
        this.pageCurrent = this.route.routerState.snapshot.url;
        this.createPhanTrang(this.currentPagePhanTrang);
    }
    createPhanTrang(value) {
        this.currentPagePhanTrang = value;
        this.ds_page = this.phanTrangService.createPhanTrang(this.currentPagePhanTrang);
        this.ds_HienThi = this.phanTrangService.ds_KetQuaPhanTrang(this.dsDuAn);
        this.serviceDuAn.setValueDanhSachPhanTrang(this.ds_HienThi);
    }
}
