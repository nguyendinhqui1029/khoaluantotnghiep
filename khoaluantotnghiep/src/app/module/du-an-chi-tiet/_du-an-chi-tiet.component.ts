import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';

@Component({
    selector: 'du-an-chi-tiet-module',
    templateUrl: './_du-an-chi-tiet.component.html',
    styleUrls: ['./_du-an-chi-tiet.component.scss']
})
export class DuAnChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    noidungduan: DUAN[] = ds_duan;
    duan: DUAN;
    id: any = "";
    constructor(private router: ActivatedRoute) {
        this.id = this.router.snapshot.params["id"];

        this.noidungduan.forEach(element => {
            if (element.maDuAn === this.id) {
                alert(element.maDuAn)
                this.duan = element;
            }
        });
    }

    ngOnInit(): void { }
}
