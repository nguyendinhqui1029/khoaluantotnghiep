import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'admin',
    templateUrl: './_admin.component.html',
    styleUrls: ['./_admin.component.scss']
})
export class AdminComponent implements OnInit {
    duan_trangthai_dangchoduyet: any = 0; // trạng thái đang chờ duyệt = 1
    duan_trangthai_daduyet: any = 0; // trạng thái đang chờ duyệt = 2
    constructor(private duAnService: DuAnService) { }

    ngOnInit(): void {
        this.getListDuAn();
        this.isMenuAdminforAdmin();
    }
    getListDuAn(): void {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH).subscribe(duan => {
            this.duan_trangthai_dangchoduyet = duan.body.length;
        });
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DANGGIAODICH).subscribe(duan => {
            this.duan_trangthai_daduyet = duan.body.length;
        });
    }

    role: any = 0;
    isMenuAdminforAdmin() {
        let roleadmin = sessionStorage.getItem("role");
        if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
            this.role = 3;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {
            this.role = 2;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.CUSTOMER) {
            this.role = 1;
        }

    }

}
