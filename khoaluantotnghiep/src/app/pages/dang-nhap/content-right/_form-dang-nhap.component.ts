import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TAIKHOAN } from 'src/app/model/taikhoan';

@Component({
    selector: 'form-dang-nhap',
    templateUrl: './_form-dang-nhap.component.html',
    styleUrls: ['./_form-dang-nhap.component.scss']
})
export class FormDangNhapComponent implements OnInit {
    constructor(private router: Router, private fb: FormBuilder) { }
    formDangNhap: FormGroup;
    submitted = false;


    tk = new TAIKHOAN("TK001", "Nguyễn Văn A", "0777 203 042", "An Giang", "50/2 Bình Tân, Bình Mỹ",
        "Châu Phú", "Nam", "10/01/1997", { "tenhinh": "partner01.png", "alt": "logo đối tác" },
        "Đối tác chuyên cung cấp phòng chung cư chất lượng cao", "nguyendinhqui", "nguyendinhqui1029@gmail.com",
        "123", "Đối tác");

    ngOnInit(): void {
        this.formDangNhap = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pass: ['', [Validators.required]],
        });
    }



    get f() { return this.formDangNhap.controls; }



    onSubmit() {
        this.submitted = true;
        console.log(this.formDangNhap);
        if (this.formDangNhap.invalid) {
            return;
        } else {
            this.dangNhap();
        }
    }
    dangNhap() {

    }




    //xử lí đăng nhập
    // dangnhap() {
    //     this.router.navigate(['/admin']);
    // }
}
