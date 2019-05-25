import { Component, OnInit } from '@angular/core';
import { DoiTacService } from 'src/app/service/doitac.service';
import { ConfigService } from 'src/app/service/config.service';
import { DOITAC } from 'src/app/model/doitac';

@Component({
    selector: 'duyetbaidang-doitac',
    templateUrl: './_duyetbaidang-doitac.component.html',
    styleUrls: ['./_duyetbaidang-doitac.component.scss']
})
export class DuyetBaiDangDoiTacComponent implements OnInit {
    ds_doitacchoduyet: DOITAC[] = [];
    doitacduyet: any = {};
    doitacchapnhan: any = {};
    constructor(private doiTacService: DoiTacService) { }
    getDSDoiTacChoDuyet() {
        this.doiTacService.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.CHODUYET).subscribe(doitac => {
            this.ds_doitacchoduyet = doitac.body;
        })
    }
    ngOnInit(): void {
        this.getDSDoiTacChoDuyet();
    }
    getDoiTacTheoMa(maDoiTac) {
        if (this.ds_doitacchoduyet.length > 0) {
            this.ds_doitacchoduyet.forEach(doitac => {
                if (doitac.maDoiTac === maDoiTac) {
                    this.doitacduyet = doitac;
                }
            })
        }
    }

    duyetdoitac(maDoiTac) {
        this.getDoiTacTheoMa(maDoiTac);
        let diaChi = this.doitacduyet.diaChi;
        let email = this.doitacduyet.email;
        let hoTen = this.doitacduyet.hoTen;
        let loGo = this.doitacduyet.loGo;
        let loaiTaiKhoan = this.doitacduyet.loaiTaiKhoan;
        let madoitac = this.doitacduyet.maDoiTac;
        let moTa = this.doitacduyet.moTa;
        let ngaySinh = this.doitacduyet.ngaySinh;
        let pass = this.doitacduyet.pass;
        let quanHuyen = this.doitacduyet.quanHuyen;
        let sdt = this.doitacduyet.sdt;
        let tinhThanhPho = this.doitacduyet.tinhThanhPho;
        let user = this.doitacduyet.user;
        let trangThai = ConfigService.TRANG_THAI_DOITAC.DADUYET; //Trạng thai đã duyệt

        this.doitacchapnhan = new DOITAC(madoitac, hoTen, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh, loGo, moTa,
            user, pass, loaiTaiKhoan, email, trangThai);

        this.doiTacService.updateDoiTac(this.doitacchapnhan).subscribe(res => {
            this.getDSDoiTacChoDuyet();
        });
    }
    boquadoitac(maDoiTac) {
        this.doiTacService.xoaDoiTacTheomaDoiTac(maDoiTac).subscribe(res => {
            if (res.code === 200) {
                this.getDSDoiTacChoDuyet();
            }
        });
    }
}
