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
    dsTinTucTheoLoai: TINTUC[] = [];
    constructor(private loaitintucservice: LoaiTinTucService, private tintucservice: TinTucService) {
        this.getDSLoaiTinTuc();
    }

    getDSLoaiTinTuc() {
        this.loaitintucservice.getDsMeNUTheoType().subscribe(loaitin => {
            this.danhmuctin = loaitin.body;
        })
    }
    setTinTuc(value) {
        this.dsTinTucTheoLoai = [];
        this.tintucservice.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tintucmoi => {
            if (tintucmoi.body) {
                tintucmoi.body.forEach(tin => {
                    if (tin.loaitintuc.maloai === value) {
                        this.dsTinTucTheoLoai.push(tin);
                    }
                })
                this.loaitintucservice.changeValue(this.dsTinTucTheoLoai);
            }

        })
    }

    ngOnInit(): void {

    }
}
