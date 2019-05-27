import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LOAIMENU } from 'src/app/model/loaimenu';
import { ds_loaimenu } from 'src/app/model/mock_loaimenu';
import { ds_isActive } from 'src/app/model/mock_isActiveDanhMuc';
import { ISACTIVE } from 'src/app/model/isActiveDanhMuc';
import { MENU } from 'src/app/model/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
    selector: 'them-menu',
    templateUrl: './_them-menu.component.html',
    styleUrls: ['./_them-menu.component.scss']
})
export class ThemMenuComponent implements OnInit {
    formthemMenu: FormGroup;
    statusAdd: any = { "status": false, "message": "" };
    submitted = false;
    ds_loaimenu: LOAIMENU[] = [];
    ds_status: ISACTIVE[] = [];
    constructor(private fb: FormBuilder, private MenuService: MenuService) {
        this.formthemMenu = this.fb.group({
            namemenu: ['', [Validators.required]],
            codemenu: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            statusmenu: ['', [Validators.required]],
            iconmenu: ['', [Validators.required]],
            typemenu: ['', [Validators.required]],
        });
    }
    ngOnInit(): void {
        this.getDSLoaiMenu();
        this.getDSStatusMenu();
    }

    getDSLoaiMenu() {
        this.ds_loaimenu = ds_loaimenu;
        this.formthemMenu.controls.typemenu.setValue(this.ds_loaimenu[0].maloai); //Lấy giá trị show lên combo đầu tiên
    }
    getDSStatusMenu() {
        this.ds_status = ds_isActive;
        this.formthemMenu.controls.statusmenu.setValue(this.ds_status[0].id); //Lấy giá trị show lên combo đầu tiên

    }

    get f() { return this.formthemMenu.controls };

    add() {
        this.submitted = true;

        let menu;
        let mamenu = (new Date()).getTime().toString();
        let namemenu = this.formthemMenu.controls.namemenu.value;
        let codemenu = this.formthemMenu.controls.codemenu.value;
        let statusmenu = this.formthemMenu.controls.statusmenu.value;
        let iconmenu = this.formthemMenu.controls.iconmenu.value;
        let typemenu = this.formthemMenu.controls.typemenu.value;

        menu = new MENU(mamenu, namemenu, codemenu, statusmenu, iconmenu, "", typemenu);


        if (this.formthemMenu.invalid) {
            return;
        } else if (this.formthemMenu.valid) {
            this.MenuService.themMenu(menu).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Menu đã được thêm thành công!";
            })
        }
    }

}
