import { Component, OnInit } from '@angular/core';
import { DOITAC } from 'src/app/model/doitac';
import { ds_DoiTac } from 'src/app/model/mock_doitac';
import { DoiTacService } from 'src/app/service/doitac.service';

@Component({
    selector: 'xoa-doitac',
    templateUrl: './_xoa-doitac.component.html',
    styleUrls: ['./_xoa-doitac.component.scss']
})
export class XoaDoiTacComponent implements OnInit {
    ds_doitac: DOITAC[] = [];
    constructor(private doiTacService: DoiTacService) {

    }

    getDSDoiTac() {
        this.doiTacService.getListDoiTac().subscribe(doitac => {
            this.ds_doitac = doitac.body;
        })
    }

    ngOnInit(): void {
        this.getDSDoiTac();
    }

    deletedoitac(maDoiTac) {
        this.doiTacService.xoaDoiTacTheomaDoiTac(maDoiTac).subscribe(res => {
            if (res.code === 200) {
                this.getDSDoiTac();
            }
        });
    }
}
