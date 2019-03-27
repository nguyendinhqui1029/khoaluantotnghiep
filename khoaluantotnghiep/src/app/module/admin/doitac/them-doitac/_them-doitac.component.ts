import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-doitac',
    templateUrl: './_them-doitac.component.html',
    styleUrls: ['./_them-doitac.component.scss']
})
export class ThemDoiTacComponent implements OnInit {
    formThemDoiTac: FormGroup;
    constructor(private fb: FormBuilder) { }
    submitted = false;

    ngOnInit(): void {
        this.formThemDoiTac = this.fb.group({
            maDoiTac: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            hoTen: ['', [Validators.required]],
            diaChi: ['', [Validators.required]],
            sdt: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            tinhThanhPho: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            ngaySinh: ['', [Validators.required]],
            loGo: ['',],
            moTa: ['',],
            user: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            pass: ['', [Validators.required]],
            loaiTaiKhoan: [''],
            email: ['',],
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
    get f() { return this.formThemDoiTac.controls };

    add() {
        this.submitted = true;
        if (this.formThemDoiTac.invalid) {
            return;
        }
    }
}
