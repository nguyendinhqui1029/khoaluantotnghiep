import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendMailService } from 'src/app/service/sendmail.service';

@Component({
    selector: 'form-lien-he',
    templateUrl: './_formlienhe.component.html',
    styleUrls: ['./_formlienhe.component.scss']
})
export class FormLienHeComponent implements OnInit {
    formLienHe: FormGroup;
    submitted = false;
    thongBaoLienHe: any = { "status": false, "message": "" };
    constructor(private fb: FormBuilder, private sendmailService: SendMailService) { }

    ngOnInit(): void {
        this.formLienHe = this.fb.group({
            hoten: ['', [Validators.required]],
            diachi: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,3}')]],
            sdt: ['', [Validators.required, Validators.pattern('^[0-9\-\+]{10,11}$')]],
            tieude: ['', [Validators.required]],
            noidung: ['', [Validators.required]]
        })
    }

    get f() { return this.formLienHe.controls };

    send() {
        this.submitted = true;
        if (this.formLienHe.invalid) {
            return;
        } else if (this.formLienHe.valid) {
            let thongTinKhachHang =
                "<table >" +
                "<tr>" +
                "<th>#</th>" +
                "<th>Nội dung</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Tiêu Đề:" + "</th>" +
                "<th>" + this.formLienHe.controls.tieude.value + "</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Họ tên:" + "</th>" +
                "<th>" + this.formLienHe.controls.hoten.value + "</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Địa chỉ:" + "</th>" +
                "<th>" + this.formLienHe.controls.diachi.value + "</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Email:" + "</th>" +
                "<th>" + this.formLienHe.controls.email.value + "</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Số điện thoại:" + "</th>" +
                "<th>" + this.formLienHe.controls.sdt.value + "</th>" +
                "</tr>" +
                "<tr>" +
                "<th>" + "Nội dung:" + "</th>" +
                "<th>" + this.formLienHe.controls.noidung.value + "</th>" +
                "</tr>" +
                "</table>";
            let data = {
                namegui: this.formLienHe.controls.email.value, emailgui: "nguyendinhqui100197@gmail.com", passgui: "Nguyenqui1997", emailnhan: "hongquy0802@gmail.com",
                tieude: "Thông Tin Khách Hàng Liên Hệ", noidung: thongTinKhachHang, mode: 2, cc: "", bcc: ""
            };
            this.sendmailService.sendEmail(data).subscribe(e => {
                if (e.ok) {
                    this.thongBaoLienHe.status = true;
                    this.thongBaoLienHe.message = "Liên hệ đã được gửi.";
                }
            });
        }
    }
}
