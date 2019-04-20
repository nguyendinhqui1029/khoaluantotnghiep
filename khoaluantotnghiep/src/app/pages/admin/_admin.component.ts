import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'admin',
    templateUrl: './_admin.component.html',
    styleUrls: ['./_admin.component.scss']
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        this.isMenuAdminforAdmin();
    }

    role: any = 0;
    isMenuAdminforAdmin() {
        let roleadmin = sessionStorage.getItem("role");
        console.log(roleadmin);
        if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
            this.role = 3;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {
            this.role = 2;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.CUSTOMER) {
            this.role = 1;
        }

    }

}
