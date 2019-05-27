import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';

@Component({
    selector: 'them-loaitintuc',
    templateUrl: './_them-loaitintuc.component.html',
    styleUrls: ['./_them-loaitintuc.component.scss']
})
export class ThemLoaiTinTucComponent implements OnInit {
    statusAdd: any = { "status": false, "message": "" };
    formThemTinTuc: FormGroup;
    submitted = false;
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];
    tentrangthaiduocchon: any = "";

    constructor(private fb: FormBuilder, private loaiTinTuc: LoaiTinTucService) {
        this.formThemTinTuc = this.fb.group({
            tenloai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        })
    }


    ngOnInit(): void {
        this.getDSTrangThaiDuAn();
    }
    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
        this.formThemTinTuc.controls.trangThai.setValue(this.ds_trangthaiduan[0].matrangthai); //Lấy giá trị show lên combo đầu tiên
    }
    selectTrangThai(e) {
        this.tentrangthaiduocchon = e.target.value;
    }
    get f() { return this.formThemTinTuc.controls }

    add() {
        this.submitted = true;

        let loaitintuc;
        let maloaitintuc = "LTT" + (new Date()).getTime().toString();
        let tenloai = this.formThemTinTuc.controls.tenloai.value;
        let trangThai = this.formThemTinTuc.controls.trangThai.value;
        if (this.formThemTinTuc.invalid) {
            return;
        } else if (this.formThemTinTuc.valid) {
            loaitintuc = new LOAITINTUC(maloaitintuc, tenloai, trangThai);
            this.loaiTinTuc.themLoaiTinTuc(loaitintuc).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Loại Tin Tức đã được thêm thành công!";
            })
        }
    }
}
