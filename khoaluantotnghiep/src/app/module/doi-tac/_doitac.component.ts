import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'doi-tac',
    templateUrl: './_doitac.component.html',
    styleUrls: ['./_doitac.component.scss']
})
export class DoiTacComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
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
