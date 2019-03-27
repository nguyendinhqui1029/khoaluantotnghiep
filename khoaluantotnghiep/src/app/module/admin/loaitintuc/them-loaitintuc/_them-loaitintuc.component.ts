import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'them-loaitintuc',
    templateUrl: './_them-loaitintuc.component.html',
    styleUrls: ['./_them-loaitintuc.component.scss']
})
export class ThemLoaiTinTucComponent implements OnInit {
    constructor(private fb: FormBuilder) { }
    formThemTinTuc: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formThemTinTuc = this.fb.group({
            maloai: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            tenloai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        })
    }

    get f() { return this.formThemTinTuc.controls }

    add() {
        this.submitted = true;
        if (this.formThemTinTuc.invalid) {
            return;
        }
    }
}
