import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';

@Component({
    selector: 'noi-dung-tin-tuc',
    templateUrl: './_noidungtintuc.component.html',
    styleUrls: ['./_noidungtintuc.component.scss']
})
export class NoiDungTinTucComponent implements OnInit {

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = [];
    constructor(private tintucService: TinTucService, private loaitintucservice: LoaiTinTucService) {

    }
    getDSTinTuc() {
        this.tintucService.getDSTinTuc().subscribe(tintuc => {
            this.noidungtintuc = tintuc.body;
        });
        this.loaitintucservice.currentMessage.subscribe(tintuc => {
            console.log("duan" + tintuc);
            this.noidungtintuc = tintuc;
        })
    }
    ngOnInit(): void {
        this.getDSTinTuc();
    }
}
