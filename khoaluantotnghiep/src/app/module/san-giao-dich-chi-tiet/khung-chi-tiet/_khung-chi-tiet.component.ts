import { Component, OnInit } from '@angular/core';
import { ds_duan } from 'src/app/model/mock_duan';
import { DUAN } from 'src/app/model/duan';
import { ActivatedRoute } from '@angular/router';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';

@Component({
    selector: 'khung-chi-tiet',
    templateUrl: './_khung-chi-tiet.component.html',
    styleUrls: ['./_khung-chi-tiet.component.scss']
})
export class KhungChiTietModuleComponent implements OnInit {
    noidungchitiet: any = "";
    constructor(private router: ActivatedRoute, private sanGiaoDichService: SanGiaoDichService) {

        this.sanGiaoDichService.getThongTin.subscribe(e => {
            this.noidungchitiet = e.noidungchitiet;
        })

    }

    ngOnInit(): void { }
}