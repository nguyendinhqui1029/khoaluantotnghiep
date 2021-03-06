import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { ThongTinCongTyComponent } from '../../thong-tin-cong-ty/_thongtincongty.component';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'hinh-anh-chi-tiet',
    templateUrl: './_hinh-anh-chi-tiet.component.html',
    styleUrls: ['./_hinh-anh-chi-tiet.component.scss']
})
export class HinhAnhChiTietComponent implements OnInit {
    urlImage: string = ConfigService.URL;

    tenHinh: String = "";
    mota: String = "";

    duan: any = {};
    mangHinh: any[] = [];
    pathCurrent: any = "";
    constructor(private router: Router, private sanGiaoDichService: SanGiaoDichService) {
        this.pathCurrent = this.router.url;
        this.sanGiaoDichService.getThongTin.subscribe(thongtin => {
            if (thongtin.mangHinh) {
                this.tenHinh = thongtin.mangHinh[0].tenhinh;
                this.mota = thongtin.mangHinh[0].alt;
                this.duan = thongtin.thongtinduan;
                this.mangHinh = thongtin.mangHinh;
            }
        })
    }
    thayDoiHinh(value) {
        this.tenHinh = value.tenhinh;
        this.mota = value.alt;
    }


    ngOnInit(): void { }

    ngOnDestroy(): void {
        this.tenHinh = '';
        this.mota = '';
        this.duan = {};
        this.mangHinh = [];

    }
}
