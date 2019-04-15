import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { DANHMUC } from 'src/app/model/danhmuc';
import { DanhMucService } from 'src/app/service/danhmuc.service';

@Component({
    selector: 'them-danhmuc',
    templateUrl: './_them-danhmuc.component.html',
    styleUrls: ['./_them-danhmuc.component.scss']
})
export class ThemDanhMucComponent implements OnInit {
    submitted = false;
    formThemDanhMuc: FormGroup;
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];
    statusAdd: any = { "status": false, "message": "" };
    tentrangthaiduocchon: any = "";
    constructor(private fb: FormBuilder, private danhMucService: DanhMucService) {
        this.formThemDanhMuc = this.fb.group({
            tenDanhMuc: ['', Validators.required,],
            trangThai: ['', Validators.required,],
            isActive: ['', Validators.required,],
        });
    }


    ngOnInit(): void {

        this.getDSTrangThaiDuAn();

    }
    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
        this.formThemDanhMuc.controls.trangThai.setValue(this.ds_trangthaiduan[0].matrangthai); //Lấy giá trị show lên combo đầu tiên
    }
    selectTrangThai(e) {
        this.tentrangthaiduocchon = e.target.value;
    }
    get f() { return this.formThemDanhMuc.controls }

    add() {
        this.submitted = true;


        let danhmuc;
        let madanhmuc = "DM" + (new Date()).getTime().toString();
        let tenDM = this.formThemDanhMuc.controls.tenDanhMuc.value;
        let trangThai = this.formThemDanhMuc.controls.trangThai.value;
        let isActive = this.formThemDanhMuc.controls.isActive.value;



        if (this.formThemDanhMuc.invalid) {
            return;
        } else if (this.formThemDanhMuc.valid) {
            danhmuc = new DANHMUC(madanhmuc, tenDM, trangThai, isActive);
            this.danhMucService.themDanhMuc(danhmuc).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Danh Mục đã được thêm thành công!";
                console.log(res);
            })
        }
    }


}
