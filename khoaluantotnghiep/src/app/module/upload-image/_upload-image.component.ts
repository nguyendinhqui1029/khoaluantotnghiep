import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { TinTucService } from 'src/app/service/tintuc.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { DuAnService } from 'src/app/service/duan.service';
import { DoiTacService } from 'src/app/service/doitac.service';

@Component({
    selector: 'upload-image',
    templateUrl: './_upload-image.component.html',
    styleUrls: ['./_upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
    @Input() page;
    fileData: FileList = null;
    arrImageShow: any[] = [];
    id: string = "";
    urlImage: string = ConfigService.URL;
    constructor(private UploadhinhService: UploadImageService, private tinTucService: TinTucService,
        private route: ActivatedRoute, private duanService: DuAnService, private doitacService: DoiTacService) {
        this.id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
    }

    fileProgress(fileInput: any) {
        if (sessionStorage.getItem("slimage")) {
            let sluong: any = sessionStorage.getItem("slimage");
            for (let i = 0; i < sluong; i++) {
                sessionStorage.removeItem("image" + i)
            }
        }


        this.arrImageShow = [];
        this.fileData = <FileList>fileInput.target.files;
        for (let i = 0; i < this.fileData.length; i++) {
            this.showOneImage(this.fileData[i], i);
            setTimeout(() => {
                this.arrImageShow.push({ "url": sessionStorage.getItem("image" + i) });
            }, 250);

        }
        sessionStorage.setItem("slimage", this.fileData.length.toString());
        this.UploadhinhService.setValueHinhanh(this.fileData);
    }
    showOneImage(file, i) {
        var fr = new FileReader();
        fr.onload = function () {
            const value = fr.result.toString();
            sessionStorage.setItem("image" + i, value);
        };
        fr.readAsDataURL(file);
    }
    ngAfterViewInit() {
        if (this.page === "capnhattintuc") {
            this.tinTucService.getTinTuctheoMaLoai(this.id).subscribe(tintuc => {
                let tt = JSON.stringify(tintuc);
                let tt1 = JSON.parse(tt);
                if (tt1.body.data) {
                    this.arrImageShow = tt1.body.data[0].hinhanh;
                }

            })
        } else if (this.page === "capnhatduan") {
            this.duanService.getDuAnTheoMaDuAn(this.id).subscribe(duan => {
                if (duan.body) {
                    this.arrImageShow = duan.body[0].mangHinh;
                }

            });
        } else if (this.page === "capnhatdoitac") {
            this.doitacService.getDoiTacTheoMaDoiTac(this.id).subscribe(doitac => {
                let doitac1 = JSON.stringify(doitac);
                let doit = JSON.parse(doitac1);
                alert(doit.body.data[0].loGo)
                if (doit.body) {
                    this.arrImageShow.push({ "maHinh": "", "tenhinh": doit.body.data[0].loGo, "alt": doit.body.data[0].loGo });
                }
            });
        }
    }
}
