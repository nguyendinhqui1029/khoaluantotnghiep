import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'noi-dung-gioi-thieu',
    templateUrl: './_noi-dung.component.html',
    styleUrls: ['./_noi-dung.component.scss']
})
export class NoiDungGioiThieuComponent implements OnInit {

    noidunggioithieu: GIOITHIEU[] = ds_gioithieu;
    gioithieu: GIOITHIEU;
    id: any = "";

    constructor(private router: ActivatedRoute) {
        this.id = this.router.snapshot.params["id"];
        alert(this.id);
        this.noidunggioithieu.forEach(element => {
            if (Number(element.magioithieu) === Number(this.id)) {
                this.gioithieu = element;
            }
        });
    }

    ngOnInit(): void { }
}
