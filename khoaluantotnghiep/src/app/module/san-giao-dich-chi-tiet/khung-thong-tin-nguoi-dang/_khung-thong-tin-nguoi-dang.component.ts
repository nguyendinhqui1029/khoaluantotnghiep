import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
//import { ds_duan } from 'src/app/model/mock_duan';
import { ActivatedRoute } from '@angular/router';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';

@Component({
    selector: 'khung-thong-tin-nguoi-dang',
    templateUrl: './_khung-thong-tin-nguoi-dang.component.html',
    styleUrls: ['./_khung-thong-tin-nguoi-dang.component.scss']
})
export class KhungThongTinNguoiDangModuleComponent implements OnInit {
    thongtinnguoidang: any = {};
    thongtindoitac: any = {};
    constructor(private sanGiaoDichService: SanGiaoDichService) {
        this.sanGiaoDichService.getThongTin.subscribe(e => {
            this.thongtindoitac = e.thongtinnguoidang;
            this.thongtinnguoidang = e.thongTinTaiKhoan;
        })

    }

    ngOnInit(): void { }
}