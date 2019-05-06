import { Component, OnInit } from '@angular/core';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { TINTUC } from 'src/app/model/tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'danh-muc-tin-tuc',
    templateUrl: './_danhmuctintuc.component.html',
    styleUrls: ['./_danhmuctintuc.component.scss']
})
export class DanhMucTinTucComponent implements OnInit {
    danhmuctin: LOAITINTUC[] = [];
    constructor(private loaitintucservice: LoaiTinTucService, private tintucservice: TinTucService) {
        this.getDSLoaiTinTuc();
        this.getDSTinTucNoiBat();
        this.getDSTinTucMoi();
    }

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
        this.tintucservice.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tintucmoi => {
            tintucmoi.body.forEach(tin => {
                if (tin.loaitintuc.tenloai === 'Nổi Bật') {
                    this.ds_tintucnoibat.push(tin);
                }
            })
        })
    }
    ds_tintucmoi: TINTUC[] = [];
    getDSTinTucMoi() {
        this.tintucservice.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tintucmoi => {
            if (tintucmoi.body) {
                tintucmoi.body.forEach(tin => {
                    if (tin.loaitintuc.tenloai === 'Tin Mới') {
                        this.ds_tintucmoi.push(tin);
                    }
                })
            }
        })
    }
    ngOnInit(): void {

    }
}
