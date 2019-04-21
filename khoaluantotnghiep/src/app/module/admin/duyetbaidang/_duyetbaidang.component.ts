import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'duyetbaidang',
    templateUrl: './_duyetbaidang.component.html',
    styleUrls: ['./_duyetbaidang.component.scss']
})
export class DuyetBaiDangComponent implements OnInit {
    ds_baidangchoduyet: DUAN[] = [];
    duanduyet: any = {};
    duanchapnhan: any = {};
    constructor(private duAnService: DuAnService) { }

    getDSDuAnChoDuyet() {
        this.duAnService.getDuAnTheoTrangThai(ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH).subscribe(duan => {
            this.ds_baidangchoduyet = duan.body;
        })
    }
    ngOnInit(): void {
        this.getDSDuAnChoDuyet();
    }


    getDuAnTheoMa(maDuAn) {
        if (this.ds_baidangchoduyet.length > 0) {
            this.ds_baidangchoduyet.forEach(duan => {
                if (duan.maDuAn === maDuAn) {
                    this.duanduyet = duan;
                }
            })
        }
    }
    duyetuan(maDuAn) {
        this.getDuAnTheoMa(maDuAn);
        console.log(this.duanduyet);
        let danhMuc = this.duanduyet.danhMuc;
        let doiTac = this.duanduyet.doiTac;
        let giaTien = this.duanduyet.giaTien;
        let loaiDuAn = this.duanduyet.loaiDuAn;
        let loaiGiaoDich = this.duanduyet.loaiGiaoDich;
        let mangHinh = this.duanduyet.mangHinh;
        let ngayDang = this.duanduyet.ngayDang;
        let noiDungChiTiet = this.duanduyet.noiDungChiTiet;
        let noiDungTomTat = this.duanduyet.noiDungTomTat;
        let quanHuyen = this.duanduyet.quanHuyen;
        let tenDuAn = this.duanduyet.tenDuAn;
        let tinhThanhPho = this.duanduyet.tinhThanhPho;
        let huong = this.duanduyet.huong;
        let dienTich = this.duanduyet.dienTich;
        let trangThai = 2;

        this.duanchapnhan = new DUAN(maDuAn, tenDuAn, noiDungTomTat, noiDungChiTiet, mangHinh, ngayDang,
            doiTac, giaTien, loaiGiaoDich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn,
            huong, dienTich);

        this.duAnService.updateDuAn(this.duanchapnhan).subscribe(res => {
            console.log(res);
            this.getDSDuAnChoDuyet();
        });
    }

    boquaduan(maDuAn) {
        console.log(maDuAn);
        this.duAnService.xoaDuAnTheomaDuAn(maDuAn).subscribe(res => {
            if (res.code === 200) {
                this.getDSDuAnChoDuyet();
            }
        });
    }
}
