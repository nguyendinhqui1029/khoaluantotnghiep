import { Component, OnInit } from '@angular/core';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';

@Component({
    selector: 'san-giao-dich-chi-tiet-component',
    templateUrl: './_sangiaodichchitiet.component.html',
    styleUrls: ['./_sangiaodichchitiet.component.scss']
})
export class SanGiaoDichChiTietComponent implements OnInit {
    ds_loaigiaodich: any[] = [];
    constructor(private loaiGiaoDichService: LoaiGiaoDichService) {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(1).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
    }
    ngOnInit(): void { }
}