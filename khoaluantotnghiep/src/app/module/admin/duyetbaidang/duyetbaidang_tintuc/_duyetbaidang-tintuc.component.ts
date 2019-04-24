import { Component, OnInit } from '@angular/core';
import { TinTucService } from 'src/app/service/tintuc.service';
import { TINTUC } from 'src/app/model/tintuc';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'duyetbaidang-tintuc',
    templateUrl: './_duyetbaidang-tintuc.component.html',
    styleUrls: ['./_duyetbaidang-tintuc.component.scss']
})
export class DuyetBaiDangTinTucComponent implements OnInit {
    ds_tintucchoduyet: TINTUC[] = [];
    tintucduyet: any = {};
    tintucchapnhan: any = {};

    constructor(private tinTucService: TinTucService) { }

    getDSTinTucChoDuyet() {
        this.tinTucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.CHODUYET).subscribe(tintuc => {
            console.log(tintuc.body);
            this.ds_tintucchoduyet = tintuc.body;
        })
    }
    ngOnInit(): void {
        this.getDSTinTucChoDuyet();
    }
    getTinTucTheoMa(matintuc) {
        if (this.ds_tintucchoduyet.length > 0) {
            this.ds_tintucchoduyet.forEach(tintuc => {
                if (tintuc.matintuc === matintuc) {
                    this.tintucduyet = tintuc;
                }
            })
        }
    }
    duyettintuc(matintuc) {
        this.getTinTucTheoMa(matintuc);
        console.log(this.tintucduyet);
        let hinhanh = this.tintucduyet.hinhanh;
        let loaitintuc = this.tintucduyet.loaitintuc;
        let ngaydang = this.tintucduyet.ngaydang;
        let noidungchitiet = this.tintucduyet.noidungchitiet;
        let noidungtomtat = this.tintucduyet.noidungtomtat;
        let tentintuc = this.tintucduyet.tentintuc;
        let trangthai = ConfigService.TRANG_THAI_TIN_TUC.NEW;

        this.tintucchapnhan = new TINTUC(matintuc, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngaydang,
            hinhanh, loaitintuc);

        this.tinTucService.updateTinTuc(this.tintucchapnhan).subscribe(res => {
            console.log(res);
            this.getDSTinTucChoDuyet();
        });

    }
}
