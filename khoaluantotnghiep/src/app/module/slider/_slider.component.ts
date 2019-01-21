import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'slider-component',
    templateUrl: './_slider.component.html',
    styleUrls: ['./_slider.component.scss']
})
export class SliderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const $ = window["$"];
        $('.flexslider').flexslider({
            directionNav: true,
            controlNav: false,
            animation: "slide",
            itemHeigh: 270,
            itemMargin: 0,
            animationSpeed: 700,
            slideshowSpeed: 3000
        })
    }

}
