import { Component, OnInit } from '@angular/core';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';

@Component({
    selector: 'san-giao-dich-component',
    templateUrl: './_sangiaodich.component.html',
    styleUrls: ['./_sangiaodich.component.scss']
})
export class SanGiaoDichComponent implements OnInit {
    ds_loaigiaodich: any[] = [];
    constructor(private loaiGiaoDichService: LoaiGiaoDichService) {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(1).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
    }

    ngOnInit(): void { }
}