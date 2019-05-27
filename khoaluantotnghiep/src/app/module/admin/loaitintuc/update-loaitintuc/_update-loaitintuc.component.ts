import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ActivatedRoute } from '@angular/router';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { LOAITINTUC } from 'src/app/model/loaitintuc';

@Component({
    selector: 'update-loaitintuc',
    templateUrl: './_update-loaitintuc.component.html',
    styleUrls: ['./_update-loaitintuc.component.scss']
})
export class UpdateLoaiTinTucComponent implements OnInit {
    statusUpdate: any = { "status": false, "message": "" };
    formUpdateLoaiTinTuc: FormGroup;
    loaitintuc: any = {};
    maLoai: any = "";
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];
    constructor(private rout: ActivatedRoute, private fb: FormBuilder,
        private loaitinTucService: LoaiTinTucService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateLoaiTinTuc = this.fb.group({
            tenloai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        });
        this.loaitinTucService.getLoaiTinTuctheoMaLoai(id).subscribe(ltt => {
            this.loaitintuc = JSON.stringify(ltt);
            let doit = JSON.parse(this.loaitintuc);

            this.maLoai = doit.body.data[0].maloai;
            this.formUpdateLoaiTinTuc.controls.tenloai.setValue(doit.body.data[0].tenloai);
            this.formUpdateLoaiTinTuc.controls.trangThai.setValue(doit.body.data[0].trangThai);
        });
    }
    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
    }
    ngOnInit(): void {
        this.getDSTrangThaiDuAn();
    }
    update() {
        let loaitintuc;

        let tenloai = this.formUpdateLoaiTinTuc.controls.tenloai.value;
        let trangThai = this.formUpdateLoaiTinTuc.controls.trangThai.value;

        loaitintuc = new LOAITINTUC(this.maLoai, tenloai, trangThai);
        this.loaitinTucService.updateLoaiTinTuc(loaitintuc).subscribe(res => {
            this.statusUpdate.status = true;
            this.statusUpdate.message = "Loại Tin Tức đã được Cập Nhật";
        })
    }
}
