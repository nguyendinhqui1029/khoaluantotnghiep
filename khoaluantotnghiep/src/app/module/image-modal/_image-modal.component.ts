import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { HINHANH } from 'src/app/model/hinhanh';
import { HttpEventType } from '@angular/common/http';

@Component({
    selector: 'image-modal',
    templateUrl: './_image-modal.component.html',
    styleUrls: ['./_image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
    //page upload
    flagthem = false;
    statusthem = "uploadhinh";
    //

    ds_mangHinh: HINHANH[] = [];
    mess: any = "Thêm";

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
        this.flagthem = true;
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

    add() {
        this.Submit()
    }

    Submit() {
        this.ds_mangHinh = [];
        this.UploadImage.getHinhanh.subscribe(fileData => {
            if (fileData.length > 0) {
                for (let i = 0; i < fileData.length; i++) {
                    const formData = new FormData();
                    formData.append('file', fileData[i]);
                    this.UploadImage.UploadImage(formData).subscribe(events => {
                        if (events.type == HttpEventType.UploadProgress) {
                            console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                            this.mess = "Thêm ...";
                        } else if (events.type === HttpEventType.Response) {
                            this.mess = "Thêm";
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
                    })

                }

            }
        })


    }
}
