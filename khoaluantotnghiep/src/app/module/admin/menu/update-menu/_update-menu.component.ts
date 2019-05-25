import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/service/menu.service';
import { LOAIMENU } from 'src/app/model/loaimenu';
import { ISACTIVE } from 'src/app/model/isActiveDanhMuc';
import { ds_loaimenu } from 'src/app/model/mock_loaimenu';
import { ds_isActive } from 'src/app/model/mock_isActiveDanhMuc';
import { ActivatedRoute } from '@angular/router';
import { MENU } from 'src/app/model/menu';

@Component({
    selector: 'update-menu',
    templateUrl: './_update-menu.component.html',
    styleUrls: ['./_update-menu.component.scss']
})
export class UpdateMenuComponent implements OnInit {
    formUpdateMenu: FormGroup;
    statusUpdate: any = { "status": false, "message": "" };
    submitted = false;
    ds_loaimenu: LOAIMENU[] = [];
    ds_status: ISACTIVE[] = [];
    menu: any = {};
    mamenu: any = "";
    typemenu: any = "";
    statusmenu: any = "";
    constructor(private rout: ActivatedRoute, private fb: FormBuilder, private MenuService: MenuService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateMenu = this.fb.group({
            namemenu: ['', [Validators.required]],
            codemenu: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            statusmenu: ['', [Validators.required]],
            iconmenu: ['', [Validators.required]],
            typemenu: ['', [Validators.required]],
        });
        this.MenuService.getMeNUMaMenu(id).subscribe(menu => {
            this.menu = JSON.stringify(menu);
            let doit = JSON.parse(this.menu);

            this.mamenu = doit.body.data[0].idMenu;
            this.formUpdateMenu.controls.namemenu.setValue(doit.body.data[0].nameMenu);
            this.formUpdateMenu.controls.codemenu.setValue(doit.body.data[0].codeMenu);
            this.formUpdateMenu.controls.iconmenu.setValue(doit.body.data[0].iconMenu);
            this.typemenu = doit.body.data[0].typeMenu;
            this.formUpdateMenu.controls.typemenu.setValue(this.typemenu);
            this.statusmenu = doit.body.data[0].statusMenu;
            this.formUpdateMenu.controls.statusmenu.setValue(this.statusmenu);
        });
    }
    getDSLoaiMenu() {
        this.ds_loaimenu = ds_loaimenu;
    }
    getDSStatusMenu() {
        this.ds_status = ds_isActive;
    }

    get f() { return this.formUpdateMenu.controls };
    ngOnInit(): void {
        this.getDSLoaiMenu();
        this.getDSStatusMenu();
    }
    update() {
        this.submitted = true;

        let menu;
        let namemenu = this.formUpdateMenu.controls.namemenu.value;
        let codemenu = this.formUpdateMenu.controls.codemenu.value;
        let statusmenu = this.formUpdateMenu.controls.statusmenu.value;
        let iconmenu = this.formUpdateMenu.controls.iconmenu.value;
        let typemenu = this.formUpdateMenu.controls.typemenu.value;
        menu = new MENU(this.mamenu, namemenu, codemenu, statusmenu, iconmenu, "", typemenu);
        if (this.formUpdateMenu.invalid) {
            return;

        } else if (this.formUpdateMenu.valid) {
            this.MenuService.updateMenu(menu).subscribe(res => {
                this.statusUpdate.status = true;
                this.statusUpdate.message = "Menu đã được Cập Nhật";
            })
        }

    }
}
