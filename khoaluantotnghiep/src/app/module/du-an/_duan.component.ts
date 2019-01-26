import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export type EditorType = true | false;
@Component({
    selector: 'du-an',
    templateUrl: './_duan.component.html',
    styleUrls: ['./_duan.component.scss']
})
export class DuAnComponent implements OnInit {

    status: EditorType = true;
    pageCurrent: string = '';
    modeView: any = { "grid": "grid", "list": "list" };
    constructor(private route: ActivatedRoute) {
        this.pageCurrent = this.route.snapshot.routeConfig.path;
    }

    ngOnInit(): void { }

    changeStatus(e) {
        if (e === this.modeView.grid) {
            this.status = false;
        } else if (e === this.modeView.list) {
            this.status = true;
        }
    }
}
