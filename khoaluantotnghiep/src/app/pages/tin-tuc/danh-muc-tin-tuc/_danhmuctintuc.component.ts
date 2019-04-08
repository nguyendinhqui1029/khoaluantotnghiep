import { Component, OnInit } from '@angular/core';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { TINTUC } from 'src/app/model/tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';

@Component({
    selector: 'danh-muc-tin-tuc',
    templateUrl: './_danhmuctintuc.component.html',
    styleUrls: ['./_danhmuctintuc.component.scss']
})
export class DanhMucTinTucComponent implements OnInit {
    danhmuctin: LOAITINTUC[] = [];
    constructor(private loaitintucservice: LoaiTinTucService, private tintucservice: TinTucService) { }

    getDSLoaiTinTuc() {
        this.loaitintucservice.getDsMeNUTheoType().subscribe(loaitin => {
            this.danhmuctin = loaitin.body;
        })
    }
    setTinTuc(value) {
        this.danhmuctin.forEach(e => {
            if (e.maloai === value) {
                this.loaitintucservice.changeValue(this.ds_tintucnoibat); //Danh sách tin nôi bật lúc nhấn nút
            } else {
                this.loaitintucservice.changeValue(this.ds_tintucmoi); //Danh sách tin mới lúc nhấn nút
            }
        });
    }
    ds_tintucnoibat: TINTUC[] = [];
    getDSTinTucNoiBat() {
        this.tintucservice.getDSTinTuc().subscribe(tintucmoi => {
            tintucmoi.body.forEach(tin => {
                if (tin.loaitintuc.tenloai === 'Nổi Bật') {
                    this.ds_tintucnoibat.push(tin);
                }
            })
        })
    }
    ds_tintucmoi: TINTUC[] = [];
    getDSTinTucMoi() {
        this.tintucservice.getDSTinTuc().subscribe(tintucmoi => {
            tintucmoi.body.forEach(tin => {
                if (tin.loaitintuc.tenloai === 'Tin Mới') {
                    this.ds_tintucmoi.push(tin);
                }
            })
        })
    }
    ngOnInit(): void {
        this.getDSLoaiTinTuc();
        this.getDSTinTucNoiBat();
        this.getDSTinTucMoi();
    }
}
