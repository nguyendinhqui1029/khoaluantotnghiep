import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'tin-tuc-noi-bat',
    templateUrl: './_tintucnoibat.component.html',
    styleUrls: ['./_tintucnoibat.component.scss']
})
export class TinTucNoiBatComponent implements OnInit {
    urlImage: string = ConfigService.URL;

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = [];
    constructor(private tintucService: TinTucService) {
        this.getDSTinTuc();
    }
    getDSTinTuc() {
        this.tintucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.PHOBIEN).subscribe(tintuc => {
            this.noidungtintuc = tintuc.body;
        });
    }
    ngOnInit(): void {
    }
}
