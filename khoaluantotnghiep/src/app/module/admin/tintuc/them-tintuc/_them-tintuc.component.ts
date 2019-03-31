import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-tintuc',
    templateUrl: './_them-tintuc.component.html',
    styleUrls: ['./_them-tintuc.component.scss']
})
export class ThemTinTucComponent implements OnInit {
    constructor(private fb: FormBuilder) { }
    formthemTinTuc: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formthemTinTuc = this.fb.group({
            matintuc: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            tentintuc: ['', [Validators.required]],
            trangthai: ['', [Validators.required]],
            ngaydang: ['', [Validators.required]],
            loaitintuc: ['', [Validators.required]],
            noidungchitiet: ['', [Validators.required]],
            noidungtomtat: ['', [Validators.required]],
            hinhanh: ['',]
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

    get f() { return this.formthemTinTuc.controls };

    add() {
        this.submitted = true;
        if (this.formthemTinTuc.invalid) {
            return;
        }
    }
}
