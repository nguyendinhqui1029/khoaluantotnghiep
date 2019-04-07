import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tin-tuc-noi-bat-trang-chu',
    templateUrl: './_tin_tuc_noi_bat_trang_chu.component.html',
    styleUrls: ['./_tin_tuc_noi_bat_trang_chu.component.scss']
})
export class TinTucNoiBatTrangChuComponent implements OnInit {
    @Input() dsTinTuc: any[];

    constructor() { }



    ngOnInit(): void {
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            var owl = $("#tin-tuc-noi-bat-slider");
            owl.owlCarousel({
                autoPlay: true,
                items: 3,
                slideSpeed: 1000,
                pagination: false,
                itemsDesktop: [1200, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [767, 2],
                itemsMobile: [480, 1]
            });
            $(".partner-content .nextlogo").click(function () {
                owl.trigger('owl.next');
            });
            $(".partner-content .prevlogo").click(function () {
                owl.trigger('owl.prev');
            });
        });
    }
}

