import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'them-menu',
    templateUrl: './_them-menu.component.html',
    styleUrls: ['./_them-menu.component.scss']
})
export class ThemMenuComponent implements OnInit {
    formthemMenu: FormGroup;
    constructor(private fb: FormBuilder) { }
    submitted = false;
    ngOnInit(): void {
        this.formthemMenu = this.fb.group({
            idmenu: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            namemenu: ['', [Validators.required]],
            codemenu: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            statusmenu: ['', [Validators.required]],
            iconmenu: ['', [Validators.required]],
            typemenu: ['', [Validators.required]],
        });
    }


    get f() { return this.formthemMenu.controls };

    add() {
        this.submitted = true;
        if (this.formthemMenu.invalid) {
            return;
        }
    }

}
