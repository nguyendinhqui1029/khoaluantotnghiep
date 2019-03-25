import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';

@Component({
    selector: 'noi-dung-tin-tuc-chi-tiet',
    templateUrl: './_noidung-tin-tuc-chi-tiet.component.html',
    styleUrls: ['./_noidung-tin-tuc-chi-tiet.component.scss']
})
export class NoiDungTinTucChiTietComponent implements OnInit {

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = ds_tintuc;
    tintuc: TINTUC;
    id: any = "";
    constructor(private router: ActivatedRoute) {
        this.id = this.router.snapshot.params["id"];// day la trang noi dung chi tiet

        this.noidungtintuc.forEach(element => {
            if (element.matintuc === this.id) {
                this.tintuc = element;
                console.log(element)
            }

        });

    }

    ngOnInit(): void { }
}