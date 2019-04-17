import { Component, OnInit } from '@angular/core';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { ds_loaigiaodich } from 'src/app/model/mock_loaigiaodich';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-loaigiaodich',
    templateUrl: './_xoa-loaigiaodich.component.html',
    styleUrls: ['./_xoa-loaigiaodich.component.scss']
})
export class XoaLoaiGiaoDichComponent implements OnInit {
    constructor(private loaiGiaoDichService: LoaiGiaoDichService) { }

    ds_loaigiaodich: LOAIGIAODICH[] = [];

    getDSLoaiGiaoDich() {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(ConfigService.TRANG_THAI_LOAIGIAODICH.TATCA).subscribe(lgd => {
            this.ds_loaigiaodich = lgd.body;
        })
    }
    deleteloaigiaodich(maLoai) {
        this.loaiGiaoDichService.xoaLoaiGiaoDichTheomaLoai(maLoai).subscribe(res => {
            if (res.code === 200) {
                this.getDSLoaiGiaoDich();
            }
        });
    }
    ngOnInit(): void {
        this.getDSLoaiGiaoDich();
    }
}
