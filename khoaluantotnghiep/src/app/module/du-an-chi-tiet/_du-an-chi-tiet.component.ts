import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';

@Component({
    selector: 'du-an-chi-tiet-module',
    templateUrl: './_du-an-chi-tiet.component.html',
    styleUrls: ['./_du-an-chi-tiet.component.scss']
})
export class DuAnChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    duan: DUAN = new DUAN("", "", "", "", "", "", "", "", "", "", "", "", "", "");
    id: any = "";
    constructor(private router: ActivatedRoute, private duAnService: DuAnService, private sanGiaoDichService: SanGiaoDichService) {
        this.id = this.router.snapshot.params["id"];
        this.layDuAnTheoMaDuAn(this.id);
    }

    layDuAnTheoMaDuAn(maDuAn) {
        this.duAnService.getDuAnTheoMaDuAn(maDuAn).subscribe(e => {
            this.duan = e.body[0];
        });
    }
    ngOnInit(): void { }
}
