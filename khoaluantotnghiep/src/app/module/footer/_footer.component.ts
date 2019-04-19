import { Component, OnInit } from '@angular/core';
import { CONGTY } from 'src/app/model/congty';
import { congTy } from 'src/app/model/mock_congty';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { ConfigService } from 'src/app/service/config.service';
import { DanhMucService } from 'src/app/service/danhmuc.service';
import { DANHMUC } from 'src/app/model/danhmuc';
import { CongTyService } from 'src/app/service/congty.service';

@Component({
    selector: 'footer-component',
    templateUrl: './_footer.component.html',
    styleUrls: ['./_footer.component.scss']
})
export class FooterComponent implements OnInit {
    //dữ liệu từ mock
    // congty: CONGTY = congTy;
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_danhmuc: DANHMUC[] = [];
    thongtinCT: CONGTY = new CONGTY("", "", "", "", "", "", "", "", "", "");

    constructor(private LoaigiaodichService: LoaiGiaoDichService, private danhMucService: DanhMucService,
        private congTyService: CongTyService) { }


    getDSLoaiGiaoDich() {
        this.LoaigiaodichService.getDSTenLoaiDanhMuc(ConfigService.TRANG_THAI_LOAIGIAODICH.TATCA).subscribe(lgd => {
            this.ds_loaigiaodich = lgd.body;
        })
    }
    getDSDanhMuc() {
        this.danhMucService.getDSDanhMuc(ConfigService.TRANG_THAI_DANHMUC.TATCA).subscribe(dm => {
            this.ds_danhmuc = dm.body;
        })
    }
    getCongTy() {
        this.congTyService.getCongTy().subscribe(congty => {
            this.thongtinCT = congty.body[0];
            console.log(this.thongtinCT);
        })
    }
    ngOnInit(): void {
        this.getDSLoaiGiaoDich();
        this.getDSDanhMuc();
        this.getCongTy();
    }
}
