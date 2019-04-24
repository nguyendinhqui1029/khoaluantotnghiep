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
    duan_trangthai_dangchoduyet: any = 0; // trạng thái đang chờ duyệt = 1
    doitac_trangthai_dangchoduyet: any = 0;
    tintuc_trangthai_dangchoduyet: any = 0;

    constructor(private duAnService: DuAnService, private doiTacService: DoiTacService,
        private tinTucService: TinTucService) { }

    ngOnInit(): void {
        this.getListChoDuyet();
        this.isMenuAdminforAdmin();
    }
    getListChoDuyet(): void {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH).subscribe(duan => {
            this.duan_trangthai_dangchoduyet = duan.body.length;
        });
        this.doiTacService.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.CHODUYET).subscribe(doitac => {
            this.doitac_trangthai_dangchoduyet = doitac.body.length;
        });
        this.tinTucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.CHODUYET).subscribe(tintuc => {
            this.tintuc_trangthai_dangchoduyet = tintuc.body.length;
        })
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
