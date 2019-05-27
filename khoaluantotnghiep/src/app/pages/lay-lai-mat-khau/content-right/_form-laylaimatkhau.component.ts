import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../../dang-ky/content_right/_must-match.validator';
import { DangNhapDangKiService } from 'src/app/service/dangnhap_dangki.service';

@Component({
    selector: 'form-laylaimatkhau',
    templateUrl: './_form-laylaimatkhau.component.html',
    styleUrls: ['./_form-laylaimatkhau.component.scss']
})
export class FormLayLaiMatKhauComponent implements OnInit {
    formLaylaimatkhau: FormGroup;
    constructor(private router: Router, private fb: FormBuilder, private DangKiDangNhapService: DangNhapDangKiService) { }
    submitted = false;

    namebutton = "Lấy mã xác nhận";
    flag = false;
    thongBaoDangKi: any = { "status": false, "message": "" };
    thongBaoMaXacNhan: any = { "status": false, "message": "" };
    ngOnInit(): void {
        this.formLaylaimatkhau = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            maxacnhan: ['', [Validators.required]],
            pass: ['', [Validators.required]],
            repass: ['', [Validators.required]]
        }, {
                validator: MustMatch('pass', 'repass')
            });
    }

    get f() { return this.formLaylaimatkhau.controls; }

    laylaimatkhau() {
        this.submitted = true;

        if (this.formLaylaimatkhau.invalid) {
            return;
        }
        else if (this.formLaylaimatkhau.valid) {
            alert('do something');
        }
    }

    yeuCauMaXacNhan() {
        this.thongBaoMaXacNhan.status = false;
        this.thongBaoDangKi.status = false;
        if (this.formLaylaimatkhau.controls.email.value !== "") {
            let data = {
                namegui: "CÔNG TY BẤT ĐỘNG SẢN", emailgui: "nguyendinhqui100197@gmail.com",
                passgui: "Nguyenqui1997", emailnhan: this.formLaylaimatkhau.controls.email.value,
                tieude: "Mã xác nhận tài khoản", noidung: "", mode: 1, cc: "",
                bcc: ""
            };

            this.DangKiDangNhapService.sendEmail(data).subscribe(e => {
                alert(1)

                if (e.ok) {
                    this.thongBaoDangKi.status = true;
                    this.thongBaoDangKi.message = "Mã xác nhận đã được gửi đến địa chỉ email:<a target='_blank'  href='https://www.google.com/gmail/'>" + this.formLaylaimatkhau.controls.email.value + "</a>";


                } else {
                    this.thongBaoDangKi.status = true;
                    this.thongBaoDangKi.message = "Quá trình lấy mã bị lỗi. Xim mời nhấn nút 'Lấy lại mã xác nhận'!";
                }
            })
        }
    }
}
