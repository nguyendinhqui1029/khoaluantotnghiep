import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'panner-top',
    templateUrl: './_panner-top.component.html',
    styleUrls: ['./_panner-top.component.scss']
})
export class PannerTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        const $ = window["$"];
        var owladv = $(".adv-content ul");
        owladv.owlCarousel({
            autoPlay: true,
            items: 3,
            slideSpeed: 1000,
            pagination: false,
            itemsDesktop: [1200, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [767, 1],
            itemsMobile: [480, 1]
        });
        $(".adv-content .nextlogo").click(function () {
            owladv.trigger('owl.next');
        })
        $(".adv-content .prevlogo").click(function () {
            owladv.trigger('owl.prev');
        })
    }
}
