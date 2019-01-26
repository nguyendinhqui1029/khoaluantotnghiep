import { Component, OnInit } from '@angular/core';
export type EditorType = true | false;
@Component({
    selector: 'du-an',
    templateUrl: './_duan.component.html',
    styleUrls: ['./_duan.component.scss']
})
export class DuAnComponent implements OnInit {

    status: EditorType = true;
    constructor() { }

    ngOnInit(): void { }

    changeStatus() {
        if (this.status) {
            this.status = false;
        } else {
            this.status = true;
        }
    }
}
