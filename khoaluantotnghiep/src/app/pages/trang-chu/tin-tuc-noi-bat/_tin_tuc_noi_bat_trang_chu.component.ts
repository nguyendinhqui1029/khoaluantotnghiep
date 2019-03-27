import { Component, OnInit } from '@angular/core';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TINTUC } from 'src/app/model/tintuc';

@Component({
    selector: 'tin-tuc-noi-bat-trang-chu',
    templateUrl: './_tin_tuc_noi_bat_trang_chu.component.html',
    styleUrls: ['./_tin_tuc_noi_bat_trang_chu.component.scss']
})
export class TinTucNoiBatTrangChuComponent implements OnInit {
    dsTinTucNoiBat: TINTUC[] = ds_tintuc;
    constructor() { }

    ngOnInit(): void { }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            var owlproductslide2 = $("#tin-tuc-noi-bat-slider");
            owlproductslide2.owlCarousel({
                autoPlay: true,
                items: 4,
                slideSpeed: 1000,
                pagination: false,
                itemsDesktop: [1200, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [767, 2],
                itemsMobile: [480, 1]
            });
            $(".project-slide .nextlogo").click(function () {
                owlproductslide2.trigger('owl.next');
            })
            $(".project-slide .prevlogo").click(function () {
                owlproductslide2.trigger('owl.prev');
            })
        });
    }
}

