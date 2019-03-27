import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-loaigiaodich',
    templateUrl: './_them-loaigiaodich.component.html',
    styleUrls: ['./_them-loaigiaodich.component.scss']
})
export class ThemLoaiGiaoDichComponent implements OnInit {
    constructor(private fb: FormBuilder) { }
    formThemLoaiGiaoDich: FormGroup;
    submitted = false;



    ngOnInit(): void {
        this.formThemLoaiGiaoDich = this.fb.group({
            maLoai: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            tenLoai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        });
    }

    get f() { return this.formThemLoaiGiaoDich.controls };


    add() {
        this.submitted = true;
        if (this.formThemLoaiGiaoDich.invalid) {
            return;
        }
    }
}
