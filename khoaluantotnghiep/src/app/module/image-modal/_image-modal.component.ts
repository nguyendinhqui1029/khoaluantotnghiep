import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'image-modal',
    templateUrl: './_image-modal.component.html',
    styleUrls: ['./_image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;
    dsDuAn: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService) {
        this.serviceDuAn.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(e => {
            this.dsDuAn = e.body;
            console.log(this.dsDuAn)
        });
    }

    ngOnInit(): void { }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('.trigger').click(function () {
                $('.modal-wrapper').toggleClass('open');
                $('.page-wrapper').toggleClass('blur');
                return false;
            });
        }
        )
    }
}
