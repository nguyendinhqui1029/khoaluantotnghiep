import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-danhmuc',
    templateUrl: './_them-danhmuc.component.html',
    styleUrls: ['./_them-danhmuc.component.scss']
})
export class ThemDanhMucComponent implements OnInit, OnDestroy {
    constructor(private fb: FormBuilder) { }
    submitted = false;
    formThemDanhMuc: FormGroup;

    ngOnInit(): void {
        this.formThemDanhMuc = this.fb.group({
            maDanhMuc: ['', Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')],
            tenDanhMuc: ['', Validators.required,],
            trangThai: ['', Validators.required,],
            isActive: ['', Validators.required,],
        });


    }

    get f() { return this.formThemDanhMuc.controls }

    add() {
        this.submitted = true;
        if (this.formThemDanhMuc.invalid) {
            return;
        }
    }



    public ngOnDestroy() {
    }
}
