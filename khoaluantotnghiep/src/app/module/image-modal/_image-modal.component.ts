import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';

@Component({
    selector: 'image-modal',
    templateUrl: './_image-modal.component.html',
    styleUrls: ['./_image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;
    dsTenHinh: any[] = [];
    dsTenImage: any[] = [];
    dsHinhTam: any[] = [];
    duongdan = "";
    thongbao = "Không tìm thấy tên hình cần tìm.";
    flag: boolean = false;
    status: string = "";
    constructor(private UploadImage: UploadImageService) {
        this.UploadImage.getAllNameImages().subscribe(images => {
            if (JSON.parse(JSON.stringify(images)).body) {
                this.dsHinhTam = JSON.parse(JSON.stringify(images)).body;
                this.dsHinhTam.forEach(e => {
                    this.dsTenImage.push(e.name);
                });
                this.dsTenHinh = this.dsHinhTam;
            }
        });
    }
    changeTimKiem(event) {
        this.dsTenHinh = [];
        this.dsHinhTam.forEach(hinh => {
            if (hinh.name.toLowerCase().search(event.target.value.toLowerCase()) >= 0) {
                this.dsTenHinh.push(hinh);
            }
        });

    }
    layTenHinh(event) {
        this.duongdan = event.target.currentSrc;
    }
    ngOnInit(): void {
        this.flag = true;
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('.trigger').click(function () {
                $('.modal-wrapper').toggleClass('open');
                $('.page-wrapper').toggleClass('blur');
                return false;
            });
        })

        //Autocomplete
        var availableTags = this.dsTenImage;
        $("#tags").autocomplete({
            source: availableTags
        });
    }
}
