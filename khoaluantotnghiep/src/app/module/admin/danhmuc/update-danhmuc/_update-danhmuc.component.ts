import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DanhMucService } from 'src/app/service/danhmuc.service';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { ds_isActive } from 'src/app/model/mock_isActiveDanhMuc';
import { ISACTIVE } from 'src/app/model/isActiveDanhMuc';
import { DANHMUC } from 'src/app/model/danhmuc';

@Component({
    selector: 'update-danhmuc',
    templateUrl: './_update-danhmuc.component.html',
    styleUrls: ['./_update-danhmuc.component.scss']
})
export class UpdateDanhMucComponent implements OnInit {
    formUpdateDanhMuc: FormGroup;
    statusUpdate: any = { "status": false, "message": "" };
    danhmuc: any = {};
    madanhmuc: any = "";
    matrangthai: any = "";
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];
    isActive: any = "";
    mang_isActive: ISACTIVE[] = ds_isActive;
    constructor(private fb: FormBuilder, private rout: ActivatedRoute, private danhMucService: DanhMucService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateDanhMuc = this.fb.group({
            tenDanhMuc: ['', Validators.required],
            trangThai: ['', Validators.required],
            isActive: ['', Validators.required],
        });
        this.danhMucService.getDanhMucTheoMaDanhMuc(id).subscribe(dm => {
            this.danhmuc = JSON.stringify(dm);
            let doit = JSON.parse(this.danhmuc);
            console.log(doit.body.data[0]);

            this.madanhmuc = doit.body.data[0].maDanhMuc;
            this.formUpdateDanhMuc.controls.tenDanhMuc.setValue(doit.body.data[0].tenDanhMuc);
            this.matrangthai = doit.body.data[0].trangThai;
            this.formUpdateDanhMuc.controls.trangThai.setValue(doit.body.data[0].trangThai);
            this.formUpdateDanhMuc.controls.isActive.setValue(doit.body.data[0].isActive);
        })
    }

    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
    }

    update() {

        let danhmuc;

        let tenDanhMuc = this.formUpdateDanhMuc.controls.tenDanhMuc.value;
        let trangThai = this.formUpdateDanhMuc.controls.trangThai.value;
        let isActive = this.formUpdateDanhMuc.controls.isActive.value;


        danhmuc = new DANHMUC(this.madanhmuc, tenDanhMuc, trangThai, isActive);
        this.danhMucService.updateDanhMuc(danhmuc).subscribe(res => {
            console.log(res);
            this.statusUpdate.status = true;
            this.statusUpdate.message = "Danh Mục đã được Cập Nhật";
        })


    }
    ngOnInit(): void {
        this.getDSTrangThaiDuAn();
    }
}
