import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { UploadImageService } from 'src/app/service/upload-image.service';

@Component({
    selector: 'upload-image',
    templateUrl: './_upload-image.component.html',
    styleUrls: ['./_upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
    @Input() page;
    fileData: FileList = null;
    arrImageShow: any[] = [];
    constructor(private UploadhinhService: UploadImageService) {

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
        const $ = window["$"];
        if (this.page === "them") {
        }
        else {
            $(".image-checkbox").each(function () {
                if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
                    $(this).addClass('image-checkbox-checked');
                }
                else {
                    $(this).removeClass('image-checkbox-checked');
                }
            });
            // sync the state to the input
            $(".image-checkbox").on("click", function (e) {
                $(this).toggleClass('image-checkbox-checked');
                var $checkbox = $(this).find('input[type="checkbox"]');
                $checkbox.prop("checked", !$checkbox.prop("checked"))

                e.preventDefault();
            });
        }
    }
}
