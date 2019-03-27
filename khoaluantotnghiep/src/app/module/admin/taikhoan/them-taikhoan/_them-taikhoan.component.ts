import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'them-taikhoan',
    templateUrl: './_them-taikhoan.component.html',
    styleUrls: ['./_them-taikhoan.component.scss']
})
export class ThemTaiKhoanComponent implements OnInit {
    formThemTaiKhoan: FormGroup;
    constructor(private fb: FormBuilder) { }
    submitted = false;

    ngOnInit(): void {
        this.formThemTaiKhoan = this.fb.group({
            maTaiKhoan: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            hoTen: ['', [Validators.required]],
            soDienThoai: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            tinhThanhPho: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            diaChi: ['', [Validators.required]],
            gioiTinh: ['', [Validators.required]],
            ngaySinh: ['', [Validators.required]],
            logo: ['', [Validators.required]],
            moTa: ['', [Validators.required]],
            tenTaiKhoan: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')]],
            matKhau: ['', [Validators.required]],
            loaiTaiKhoan: ['', [Validators.required]]
        });
    }

    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd'
            });
        });
    }
    get f() { return this.formThemTaiKhoan.controls };

    add() {
        this.submitted = true;
        if (this.formThemTaiKhoan.invalid) {
            return;
        }
    }
}
