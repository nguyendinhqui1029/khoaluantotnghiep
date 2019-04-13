import { Component, OnInit } from '@angular/core';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'san-giao-dich-chi-tiet-component',
    templateUrl: './_sangiaodichchitiet.component.html',
    styleUrls: ['./_sangiaodichchitiet.component.scss']
})
export class SanGiaoDichChiTietComponent implements OnInit {
    ds_loaigiaodich: any[] = [];
    constructor(private loaiGiaoDichService: LoaiGiaoDichService,
        private duAnSerVice: DuAnService,
        private sanGiaoDichService: SanGiaoDichService) {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(1).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
    }
    ngOnInit(): void { }

    tieude: any = "";
    ds_duan_theo_loaigiaodich: any[] = [];
    clickSanGiaoDich(value) {
        this.duAnSerVice.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duantheoloaigiaodich => {
                    if (duantheoloaigiaodich.loaiGiaoDich.tenLoai === value) {
                        this.ds_duan_theo_loaigiaodich.push(duantheoloaigiaodich);
                        this.tieude = value;
                    }
                });
                this.duAnSerVice.setValueThongTin({
                    dsDuantheoloaigiaodich: this.ds_duan_theo_loaigiaodich,
                    tieude: this.tieude
                });
            }
        });
    }
}