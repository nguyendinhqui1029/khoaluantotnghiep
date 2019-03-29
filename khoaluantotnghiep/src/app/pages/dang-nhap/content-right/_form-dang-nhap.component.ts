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
    constructor(private router: Router, private fb: FormBuilder, private DangKiDangNhapService: DangNhapDangKiService) { }
    formDangNhap: FormGroup;
    submitted = false;
    error: any = { "status": false, "message": "" }
    ngOnInit(): void {
        this.formDangNhap = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pass: ['', [Validators.required]],
        });
    }



    get f() { return this.formDangNhap.controls; }
    changedata() {
        this.error.status = false;
    }
    dangNhap() {
        this.DangKiDangNhapService.layTaiKhoanTheoEmail(this.formDangNhap.controls.email.value).subscribe(e => {
            const md5 = new Md5();
            console.log(md5.appendAsciiStr(this.formDangNhap.controls.pass.value).end())
            console.log(md5.appendAsciiStr(e.body[0].matKhau).start())
            if (e.body[0]) {
                if (md5.appendAsciiStr(this.formDangNhap.controls.pass.value).end() === e.body[0].matKhau) {
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
