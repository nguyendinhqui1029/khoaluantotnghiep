import { Component, OnInit } from '@angular/core';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
@Component({
    selector: 'du-an-theo-loai-giao-dich',
    templateUrl: './_du-an-theo-loai.component.html',
    styleUrls: ['./_du-an-theo-loai.component.scss']
})
export class DuAnTheoLoaiGiaoDichComponent implements OnInit {
    tieude: any = "";
    ds_loaigiaodich: any[] = [];
    ds_duan_theo_loaigiaodich: any[] = [];
    constructor(private loaiGiaoDichService: LoaiGiaoDichService, private duanService: DuAnService) {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(1).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
            if (this.ds_loaigiaodich) {
                this.tieude = this.ds_loaigiaodich[0].tenLoai;
                this.duanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
                    if (duan.body) {
                        duan.body.forEach(duantheoloaigiaodich => {
                            if (duantheoloaigiaodich.loaiGiaoDich.tenLoai === this.tieude
                                && duantheoloaigiaodich.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                                && duantheoloaigiaodich.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                                this.ds_duan_theo_loaigiaodich.push(duantheoloaigiaodich);
                            }
                        });

                        this.duanService.setValueThongTin({
                            dsDuantheoloaigiaodich: this.ds_duan_theo_loaigiaodich,
                            tieude: this.tieude
                        });
                    }
                });
            }

        })
    }

    ngOnInit(): void { }


    clickSanGiaoDich(value) {

        this.ds_duan_theo_loaigiaodich = [];
        this.tieude = value;
        this.duanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duantheoloaigiaodich => {
                    if (duantheoloaigiaodich.loaiGiaoDich.tenLoai === value
                        && duantheoloaigiaodich.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                        && duantheoloaigiaodich.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                        this.ds_duan_theo_loaigiaodich.push(duantheoloaigiaodich);
                    }
                });
                this.duanService.setValueThongTin({
                    dsDuantheoloaigiaodich: this.ds_duan_theo_loaigiaodich,
                    tieude: this.tieude
                });
            }
        });
    }
}
