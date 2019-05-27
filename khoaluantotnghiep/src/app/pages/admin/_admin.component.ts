import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { DuAnService } from 'src/app/service/duan.service';
import { DanhMucService } from 'src/app/service/danhmuc.service';
import { DoiTacService } from 'src/app/service/doitac.service';
import { TinTucService } from 'src/app/service/tintuc.service';

@Component({
    selector: 'admin',
    templateUrl: './_admin.component.html',
    styleUrls: ['./_admin.component.scss']
})
export class AdminComponent implements OnInit {

    tenadmin = "";
    constructor() { }

    ngOnInit(): void {
        this.tenadmin = sessionStorage.getItem("name");
    }




}
