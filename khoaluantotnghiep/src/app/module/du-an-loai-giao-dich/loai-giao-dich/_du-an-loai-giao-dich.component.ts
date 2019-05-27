import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'app-name',
    templateUrl: './_du-an-loai-giao-dich.component.html',
    styleUrls: ['./_du-an-loai-giao-dich.component.scss']
})
export class DuAnLoaiGiaoDichComponent implements OnInit {
    dsDuAN: any[] = [];
    status: boolean = true;
    thongbao: any = "";
    urlImage: string = ConfigService.URL;
    constructor(private duanService: DuAnService) {
        let timeout = setTimeout(() => {
            this.duanService.getThongTin.subscribe(ds => {
                this.dsDuAN = [];
                if (ds.dsDuantheoloaigiaodich.length <= 0) {
                    this.status = false;
                    this.thongbao = "Không có danh sách";
                } else {
                    clearTimeout(timeout);
                    this.thongbao = "";
                    this.status = false;
                    this.dsDuAN = ds.dsDuantheoloaigiaodich;
                }

            });

        }, 7000);
    }

    ngOnInit(): void { }
}
