import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'search-component',
    templateUrl: './_search.component.html',
    styleUrls: ['./_search.component.scss']
})
export class SearchComponent implements OnInit {
    search: string = 'search-center';
    modeSearch: any = { "SEARCH_CENTER": "search-center", "SEARCH_RIGHT": "search-right" };
    constructor(private router: ActivatedRoute) {
        if (this.router.snapshot.routeConfig.path === 'trang-chu') {
            this.search = this.modeSearch.SEARCH_CENTER;
        } else {
            this.search = this.modeSearch.SEARCH_RIGHT;
        }

    }

    ngOnInit(): void { }
}
