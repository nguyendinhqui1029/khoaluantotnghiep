import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'du-an-moi',
    templateUrl: './_du-an-moi.component.html',
    styleUrls: ['./_du-an-moi.component.scss']
})
export class DuAnMoiComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        const $ = window["$"];
        $(document).ready(function () {
            var owlproductslide2 = $("#project-slide");
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
