import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { isFulfilled } from 'q';

@Component({
    selector: 'tin-tuc-noi-bat',
    templateUrl: './_tintucnoibat.component.html',
    styleUrls: ['./_tintucnoibat.component.scss']
})
export class TinTucNoiBatComponent implements OnInit {
    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = [];
    constructor(private tintucService: TinTucService) { }
    getDSTinTuc() {
        this.tintucService.getDSTinTuc().subscribe(tintuc => {
            tintuc.body.forEach(e => {
                if (e.loaitintuc.tenloai === 'Nổi Bật') {
                    this.noidungtintuc.push(e);
                }
            });
        });
    }
    ngOnInit(): void {
        this.getDSTinTuc();
    }
}
