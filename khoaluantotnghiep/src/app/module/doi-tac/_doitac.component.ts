import { Component, OnInit } from '@angular/core';
import { SLIDER } from 'src/app/model/slider';
import { ds_slider } from 'src/app/model/mock_slider';

@Component({
    selector: 'doi-tac',
    templateUrl: './_doitac.component.html',
    styleUrls: ['./_doitac.component.scss']
})
export class DoiTacComponent implements OnInit {
    ds_logoDoiTac: SLIDER = ds_slider[2];
    constructor() { }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            var owl = $(".partner-block");
            owl.owlCarousel({
                autoPlay: true,
                items: 6,
                slideSpeed: 1000,
                pagination: false,
                itemsDesktop: [1200, 6],
                itemsDesktopSmall: [980, 5],
                itemsTablet: [767, 4],
                itemsMobile: [480, 2]
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
