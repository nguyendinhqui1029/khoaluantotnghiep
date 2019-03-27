import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-gioithieu',
    templateUrl: './_them-gioithieu.component.html',
    styleUrls: ['./_them-gioithieu.component.scss']
})
export class ThemGioiThieuComponent implements OnInit {
    constructor(private fb: FormBuilder) { }
    formthemGioiThieu: FormGroup;
    submitted = false;

    ngOnInit(): void {
        this.formthemGioiThieu = this.fb.group({
            magioithieu: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            tieude: ['', [Validators.required]],
            noidung: ['', [Validators.required]],
            icon: ['',]
        });
    }

    get f() { return this.formthemGioiThieu.controls };
    add() {
        this.submitted = true;
        if (this.formthemGioiThieu.invalid) {
            return;
        }
    }
}
