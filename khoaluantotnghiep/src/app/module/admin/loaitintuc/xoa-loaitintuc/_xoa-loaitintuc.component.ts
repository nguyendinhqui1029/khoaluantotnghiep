import { Component, OnInit } from '@angular/core';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { ds_loaitintuc } from 'src/app/model/mock_loaitintuc';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';

@Component({
    selector: 'xoa-loaitintuc',
    templateUrl: './_xoa-loaitintuc.component.html',
    styleUrls: ['./_xoa-loaitintuc.component.scss']
})
export class XoaLoaiTinTucComponent implements OnInit {
    constructor(private loaiTinTucService: LoaiTinTucService) { }

    ds_loaitintuc: LOAITINTUC[] = [];

    getDSLoaiTinTuc() {
        this.loaiTinTucService.getDSLoaiTinTuc().subscribe(ltt => {
            this.ds_loaitintuc = ltt.body;
        })
    }
    ngOnInit(): void {
        this.getDSLoaiTinTuc();
    }
    deleteloaitintuc(maloai) {
        this.loaiTinTucService.xoaLoaiTinTucTheomaLoai(maloai).subscribe(res => {
            if (res.code === 200) {
                this.getDSLoaiTinTuc();
            }
        });
    }
}
