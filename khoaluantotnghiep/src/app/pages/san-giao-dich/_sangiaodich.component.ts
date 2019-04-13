import { Component, OnInit } from '@angular/core';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'san-giao-dich-component',
    templateUrl: './_sangiaodich.component.html',
    styleUrls: ['./_sangiaodich.component.scss']
})
export class SanGiaoDichComponent implements OnInit {
    ds_loaigiaodich: any[] = [];
    constructor(private loaiGiaoDichService: LoaiGiaoDichService, private duanService: DuAnService) {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(1).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
    }

    ngOnInit(): void { }
    tieude: any = "";
    ds_duan_theo_loaigiaodich: any[] = [];
    clickSanGiaoDich(value) {
        this.duanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duantheoloaigiaodich => {
                    if (duantheoloaigiaodich.loaiGiaoDich.tenLoai === value) {
                        this.ds_duan_theo_loaigiaodich.push(duantheoloaigiaodich);
                        this.tieude = value;
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