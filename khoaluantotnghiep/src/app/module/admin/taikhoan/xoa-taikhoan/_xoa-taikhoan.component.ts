import { Component, OnInit } from '@angular/core';
import { TAIKHOAN } from 'src/app/model/taikhoan';
import { ds_taikhoan } from 'src/app/model/mock_taikhoan';
import { TaiKhoanService } from 'src/app/service/taikhoan.service';

@Component({
    selector: 'xoa-taikhoan',
    templateUrl: './_xoa-taikhoan.component.html',
    styleUrls: ['./_xoa-taikhoan.component.scss']
})
export class XoaTaiKhoanComponent implements OnInit {
    constructor(private taiKhoanService: TaiKhoanService) { }


    ds_taikhoan: TAIKHOAN[] = [];
    getDSTaiKhoan() {
        this.taiKhoanService.getDSTaiKhoan().subscribe(tk => {
            this.ds_taikhoan = tk.body;
        })
    }
    ngOnInit(): void {
        this.getDSTaiKhoan();
    }
    deletetaikhoan(maTK) {
        this.taiKhoanService.xoaTaiKhoanTheomaTaiKhoan(maTK).subscribe(res => {
            if (res.code === 200) {
                this.getDSTaiKhoan();
            }
        })
    }
}
