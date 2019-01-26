import { Component, OnInit } from '@angular/core';

export type EditorType = 'search-center' | 'search-right';
@Component({
    selector: 'search-component',
    templateUrl: './_search.component.html',
    styleUrls: ['./_search.component.scss']
})
export class SearchComponent implements OnInit {
    search: EditorType = 'search-center';
    constructor() { }

    ngOnInit(): void { }
}
