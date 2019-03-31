import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DangNhapDangKiService } from 'src/app/service/dangnhap_dangki.service';
import { Md5 } from 'ts-md5/dist/md5';
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
        this.DangKiDangNhapService.layTaiKhoanTheoEmail(this.formDangNhap.controls.email.value).subscribe(e => {
            if (e.body[0]) {
                if (Md5.hashAsciiStr(this.formDangNhap.controls.pass.value) === e.body[0].matKhau) {
                    this.router.navigate(['/admin']);
                    sessionStorage.setItem("username", e.body[0].email);
                    sessionStorage.setItem("name", e.body[0].hoTen);

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




    //xử lí đăng nhập
    // dangnhap() {
    //     this.router.navigate(['/admin']);
    // }
}
