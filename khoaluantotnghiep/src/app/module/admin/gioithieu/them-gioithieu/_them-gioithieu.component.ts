import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { GioiThieuService } from 'src/app/service/gioithieu.service';

@Component({
    selector: 'them-gioithieu',
    templateUrl: './_them-gioithieu.component.html',
    styleUrls: ['./_them-gioithieu.component.scss']
})
export class ThemGioiThieuComponent implements OnInit {
    formthemGioiThieu: FormGroup;
    submitted = false;
    statusAdd: any = { "status": false, "message": "" };
    constructor(private fb: FormBuilder, private gioiThieuService: GioiThieuService) {
        this.formthemGioiThieu = this.fb.group({
            tieude: ['', [Validators.required]],
            noidung: ['', [Validators.required]],
            icon: ['',]
        });
    }



    ngOnInit(): void {

    }

    get f() { return this.formthemGioiThieu.controls };
    add() {
        this.submitted = true;

        let magioithieu = "GT" + (new Date()).getTime().toString();
        let tieude = this.formthemGioiThieu.controls.tieude.value;
        let noidung = this.formthemGioiThieu.controls.noidung.value;
        let icon = this.formthemGioiThieu.controls.icon.value;

        let gioithieu;

        if (this.formthemGioiThieu.invalid) {
            return;
        } else if (this.formthemGioiThieu.valid) {
            if (icon === "") {
                icon = "fa fa-newspaper-o";
            }
            gioithieu = new GIOITHIEU(magioithieu, tieude, noidung, icon, 1);
            this.gioiThieuService.themGioiThieu(gioithieu).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Giới Thiệu đã được thêm thành công!";
            });
        }
    }
}
