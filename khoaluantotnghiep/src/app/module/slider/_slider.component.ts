import { Component, OnInit } from '@angular/core';
import { SLIDER } from 'src/app/model/slider';
import { ds_slider } from 'src/app/model/mock_slider';
@Component({
    selector: 'slider-component',
    templateUrl: './_slider.component.html',
    styleUrls: ['./_slider.component.scss']
})
export class SliderComponent implements OnInit {
    //dữ liệu áp cứng
    ob_slider: SLIDER = ds_slider[0];
    constructor() {

    }

    ngOnInit() {

    }
    ngAfterViewInit() {
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
