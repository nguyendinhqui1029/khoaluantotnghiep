import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DangNhapDangKiService } from 'src/app/service/dangnhap_dangki.service';
import { Md5 } from 'ts-md5/dist/md5';
import { ConfigService } from 'src/app/service/config.service';
@Component({
    selector: 'form-dang-nhap',
    templateUrl: './_form-dang-nhap.component.html',
    styleUrls: ['./_form-dang-nhap.component.scss']
})
export class FormDangNhapComponent implements OnInit {
    formDangNhap: FormGroup;
    submitted = false;
    error: any = { "status": false, "message": "" }
    constructor(private router: Router, private fb: FormBuilder, private DangKiDangNhapService: DangNhapDangKiService) {

    }

    ngOnInit(): void {
        this.formDangNhap = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pass: ['', [Validators.required]],
        });
        if (sessionStorage.getItem("username")) {
            this.formDangNhap.controls.email.setValue(sessionStorage.getItem("username"));
        }
    }



    get f() { return this.formDangNhap.controls; }
    changedata() {
        this.error.status = false;
    }
    dangNhap() {
        this.submitted = true;

        if (this.formDangNhap.valid) {
            this.DangKiDangNhapService.layTaiKhoanTheoEmail(this.formDangNhap.controls.email.value).subscribe(e => {
                if (e.body[0]) {
                    if (Md5.hashAsciiStr(this.formDangNhap.controls.pass.value) === e.body[0].matKhau) {
                        sessionStorage.setItem("TaiKhoan", JSON.stringify(e.body[0]));
                        sessionStorage.setItem("username", e.body[0].email);
                        sessionStorage.setItem("name", e.body[0].hoTen);
                        sessionStorage.setItem("role", e.body[0].loaiTaiKhoan);
                        if (Number(e.body[0].loaiTaiKhoan) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {

                            this.router.navigate(['/admin']);
                        } else if (Number(e.body[0].loaiTaiKhoan) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {

                            this.router.navigate(['/employee']);
                        } else if (Number(e.body[0].loaiTaiKhoan) === ConfigService.LOAI_TAI_KHOAN.CUSTOMER) {

                            this.router.navigate(['/customer']);
                        }
                    } else {
                        this.error.status = true;
                        this.error.message = "Mật khẩu không đúng.Vui lòng nhập lại!";
                    }
                } else {
                    this.error.status = true;
                    this.error.message = "Địa chỉ email không đúng.Vui lòng nhập lại!";
                }
            });
        }
    }
}
