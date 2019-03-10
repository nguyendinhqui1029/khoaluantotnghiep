import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'san-giao-dich-chi-tiet',
    templateUrl: './_san-giao-dich-chi-tiet.component.html',
    styleUrls: ['./_san-giao-dich-chi-tiet.component.scss']
})
export class SanGiaoDichChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    noidungduan: DUAN[] = ds_duan;
    duan: DUAN;
    id: any = "";
    status: boolean;
    tenHinh: String = "";
    constructor(private router: ActivatedRoute) {
        this.id = this.router.snapshot.params["id"];
        this.noidungduan.forEach(element => {
            if (element.maDuAn === this.id) {
                this.duan = element;
            }
        });
        this.tenHinh = this.duan.mangHinh[0].tenhinh;
    }
    thayDoiHinh(value) {
        this.tenHinh = value;
    }
    ngOnInit(): void { }
}
