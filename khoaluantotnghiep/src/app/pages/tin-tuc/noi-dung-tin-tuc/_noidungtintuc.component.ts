import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { PhanTranService } from 'src/app/service/phantrang.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'noi-dung-tin-tuc',
    templateUrl: './_noidungtintuc.component.html',
    styleUrls: ['./_noidungtintuc.component.scss']
})
export class NoiDungTinTucComponent implements OnInit {
    urlImage: string = ConfigService.URL;

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = [];
    constructor(private tintucService: TinTucService, private loaitintucservice: LoaiTinTucService,
        private phanTrangService: PhanTranService) {
        this.getDSTinTuc();
    }

    ds_ketQua: any[] = [];
    ds_ForHTML: any[] = [];
    currentPage: number = 1;
    ds_page: any[] = [];
    soItemCuaPage: number = 5;
    getDSTinTuc() {
        this.tintucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tintuc => {
            this.noidungtintuc = tintuc.body;

            this.ds_ketQua = tintuc.body;
            //B1 tao phan trang
            this.phanTrangService.setValueDanhSach(tintuc.body);
            //B2 tao phan trang
            this.ds_page = this.phanTrangService.createPhanTrang(this.currentPage);
            //Lay ket qua phan trang
            this.ds_ForHTML = this.phanTrangService.ds_KetQuaPhanTrang(tintuc.body);
        });
        this.loaitintucservice.currentMessage.subscribe(tintuc => {
            this.noidungtintuc = tintuc;
            this.ds_ketQua = tintuc;
            //B1 tao phan trang
            this.phanTrangService.setValueDanhSach(tintuc);
            //B2 tao phan trang
            this.ds_page = this.phanTrangService.createPhanTrang(this.currentPage);
            //Lay ket qua phan trang
            this.ds_ForHTML = this.phanTrangService.ds_KetQuaPhanTrang(tintuc);
        })
    }
    createPhanTrang(currentPage) {
        this.currentPage = currentPage;
        //B4 tao lai danh sach phan trang
        this.ds_page = this.phanTrangService.createPhanTrang(this.currentPage);
        this.ds_ForHTML = this.phanTrangService.ds_KetQuaPhanTrang(this.ds_ketQua);
    }
    ngOnInit(): void {
    }



}
