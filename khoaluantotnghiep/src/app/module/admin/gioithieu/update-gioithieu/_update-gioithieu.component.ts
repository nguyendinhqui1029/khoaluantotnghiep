import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GioiThieuService } from 'src/app/service/gioithieu.service';
import { GIOITHIEU } from 'src/app/model/gioithieu';

@Component({
    selector: 'update-gioithieu',
    templateUrl: './_update-gioithieu.component.html',
    styleUrls: ['./_update-gioithieu.component.scss']
})
export class UpdateGioiThieuComponent implements OnInit {
    statusUpdate: any = { "status": false, "message": "" };
    formUpdateGioiThieu: FormGroup;
    gioithieu: any = {};
    magioithieu: any = "";
    constructor(private rout: ActivatedRoute, private fb: FormBuilder,
        private gioithieuService: GioiThieuService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateGioiThieu = this.fb.group({
            tieude: ['', [Validators.required]],
            noidung: ['', [Validators.required]],
            icon: ['',]
        });
        this.gioithieuService.getGioiThieutheoMaGioiThieu(id).subscribe(gt => {
            this.gioithieu = JSON.stringify(gt);
            let doit = JSON.parse(this.gioithieu);

            this.magioithieu = doit.body.data[0].magioithieu;
            this.formUpdateGioiThieu.controls.tieude.setValue(doit.body.data[0].tieude);
            this.formUpdateGioiThieu.controls.noidung.setValue(doit.body.data[0].noidung);
            this.formUpdateGioiThieu.controls.icon.setValue(doit.body.data[0].icon);
        });

    }
    ngOnInit(): void { }
    update() {
        //form Controls
        let magioithieu = this.magioithieu;
        let tieude = this.formUpdateGioiThieu.controls.tieude.value;
        let noidung = this.formUpdateGioiThieu.controls.noidung.value;
        let icon = this.formUpdateGioiThieu.controls.icon.value;
        //form Controls

        let gioithieu;
        gioithieu = new GIOITHIEU(magioithieu, tieude, noidung, icon, 1);

        if (this.formUpdateGioiThieu.invalid) {
            return;
        } else if (this.formUpdateGioiThieu.valid) {
            this.gioithieuService.updateGioiThieu(gioithieu).subscribe(res => {
                this.statusUpdate.status = true;
                this.statusUpdate.message = "Giới Thiệu đã được Cập Nhật";
            });
        }

    }
}
