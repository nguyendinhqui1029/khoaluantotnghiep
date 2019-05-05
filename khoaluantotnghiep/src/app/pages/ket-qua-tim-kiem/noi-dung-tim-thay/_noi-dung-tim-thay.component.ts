import { Component, OnInit } from '@angular/core';
import { KetQuaTimService } from 'src/app/service/ketquatim.service';
import { PhanTranService } from 'src/app/service/phantrang.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'noi-dung-tim-thay',
    templateUrl: './_noi-dung-tim-thay.component.html',
    styleUrls: ['./_noi-dung-tim-thay.component.scss']
})
export class NoiDungTimThayComponent implements OnInit {
    urlImage: string = ConfigService.URL;

    ds_ketQua: any[] = [];
    ds_ForHTML: any[] = [];
    currentPage: number = 1;
    ds_page: any[] = [];
    soItemCuaPage: number = 5;
    constructor(private ketQuaTimService: KetQuaTimService, private phanTrangService: PhanTranService) {
        this.ketQuaTimService.currentMessage.subscribe(ds => {
            this.ds_ketQua = ds;
            //B1 tao phan trang
            this.phanTrangService.setValueDanhSach(ds);
            //B2 tao phan trang
            this.ds_page = this.phanTrangService.createPhanTrang(this.currentPage);
            //Lay ket qua phan trang
            this.ds_ForHTML = this.phanTrangService.ds_KetQuaPhanTrang(ds);
            console.log(this.ds_ForHTML)
        });
    }


    createPhanTrang(currentPage) {
        this.currentPage = currentPage;
        //B4 tao lai danh sach phan trang
        this.ds_page = this.phanTrangService.createPhanTrang(this.currentPage);
        this.ds_ForHTML = this.phanTrangService.ds_KetQuaPhanTrang(this.ds_ketQua);
    }

    ngOnInit(): void { }
}
