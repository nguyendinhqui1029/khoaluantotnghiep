import { Component, OnInit } from '@angular/core';
import { ds_duan } from 'src/app/model/mock_duan';
import { DUAN } from 'src/app/model/duan';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'khung-chi-tiet',
    templateUrl: './_khung-chi-tiet.component.html',
    styleUrls: ['./_khung-chi-tiet.component.scss']
})
export class KhungChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    noidungduan: DUAN[] = ds_duan;
    duan: DUAN;
    id: any = "";
    constructor(private router: ActivatedRoute) {
        this.id = this.router.snapshot.params["id"];
        this.noidungduan.forEach(element => {
            if (element.maDuAn === this.id) {
                this.duan = element;
            }
        });
    }

    ngOnInit(): void { }
}