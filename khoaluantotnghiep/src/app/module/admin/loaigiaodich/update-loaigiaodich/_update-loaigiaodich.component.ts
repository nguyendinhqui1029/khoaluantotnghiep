import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';

@Component({
    selector: 'update-loaigiaodich',
    templateUrl: './_update-loaigiaodich.component.html',
    styleUrls: ['./_update-loaigiaodich.component.scss']
})
export class UpdateLoaiGiaoDichComponent implements OnInit {
    statusUpdate: any = { "status": false, "message": "" };
    formUpdateLoaiGiaoDich: FormGroup;
    loaigiaodich: any = {};
    maLoai: any = "";
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];
    constructor(private rout: ActivatedRoute, private fb: FormBuilder,
        private loaigiaoDichService: LoaiGiaoDichService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateLoaiGiaoDich = this.fb.group({
            tenLoai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        });
        this.loaigiaoDichService.getLoaiGiaoDichtheoMaLoai(id).subscribe(lgd => {
            this.loaigiaodich = JSON.stringify(lgd);
            let doit = JSON.parse(this.loaigiaodich);
            console.log(doit.body.data[0]);

            this.maLoai = doit.body.data[0].maLoai;
            this.formUpdateLoaiGiaoDich.controls.tenLoai.setValue(doit.body.data[0].tenLoai);
            this.formUpdateLoaiGiaoDich.controls.trangThai.setValue(doit.body.data[0].trangThai);
        });
    }
    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
    }
    ngOnInit(): void {
        this.getDSTrangThaiDuAn();
    }
    update() {
        let loaigiaodich;

        let tenLoai = this.formUpdateLoaiGiaoDich.controls.tenLoai.value;
        let trangThai = this.formUpdateLoaiGiaoDich.controls.trangThai.value;

        loaigiaodich = new LOAIGIAODICH(this.maLoai, tenLoai, trangThai);
        this.loaigiaoDichService.updateLoaiGiaoDich(loaigiaodich).subscribe(res => {
            console.log(res);
            this.statusUpdate.status = true;
            this.statusUpdate.message = "Loại Giao Dịch đã được Cập Nhật";
        })
    }
}
