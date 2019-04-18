import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';

@Component({
    selector: 'xoa-tintuc',
    templateUrl: './_xoa-tintuc.component.html',
    styleUrls: ['./_xoa-tintuc.component.scss']
})
export class XoaTinTucComponent implements OnInit {
    ds_tintuc: TINTUC[] = [];
    constructor(private tinTucService: TinTucService) {

    }

    getDSTinTuc() {
        this.tinTucService.getDSTinTuc().subscribe(tt => {
            this.ds_tintuc = tt.body;
        })
    }
    ngOnInit(): void {
        this.getDSTinTuc();
    }
    deletetintuc(maloai) {
        console.log('a');
        this.tinTucService.xoaTinTucTheomaLoai(maloai).subscribe(res => {
            if (res.code === 200) {
                this.getDSTinTuc();
            }
        });
    }
}
