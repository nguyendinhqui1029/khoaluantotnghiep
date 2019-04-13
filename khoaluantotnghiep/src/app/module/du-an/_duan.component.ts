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
    modeView: any = { "grid": "/trang-chu/grid", "list": "/trang-chu" };
    dsDuAn: any[] = [];
    ds_HienThi: any[] = [];
    currentPagePhanTrang: number = 1;
    ds_page: any[] = [];
    soItemTrang: number = 5;

    ds_duan_theo_loai_giao_dich: any[] = [];
    tieude: any = "";
    constructor(private route: Router,
        private phanTrangService: PhanTranService,
        private serviceDuAn: DuAnService) {
        this.pageCurrent = this.route.routerState.snapshot.url;
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
            if (this.ds_duan_theo_loai_giao_dich !== undefined) {
                console.log('aaa');
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
            this.dsDuAn = duan.body;

            if (this.ds_duan_theo_loai_giao_dich === undefined) {
                //Phan trang
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
        } else if (e === this.modeView.list) {
            this.status = true;
            this.phanTrangService.soItemCuaPage = 5;
            this.soItemTrang = 5;
            this.currentPagePhanTrang = 1;
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
