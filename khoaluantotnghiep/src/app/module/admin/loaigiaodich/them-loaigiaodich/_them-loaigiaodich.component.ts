import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';

@Component({
    selector: 'them-loaigiaodich',
    templateUrl: './_them-loaigiaodich.component.html',
    styleUrls: ['./_them-loaigiaodich.component.scss']
})
export class ThemLoaiGiaoDichComponent implements OnInit {
    statusAdd: any = { "status": false, "message": "" };
    formThemLoaiGiaoDich: FormGroup;
    submitted = false;
    tentrangthaiduocchon: any = "";
    ds_trangthaiduan: TRANGTHAIDUAN[] = [];

    constructor(private fb: FormBuilder, private loaiGiaoDichService: LoaiGiaoDichService) {
        this.formThemLoaiGiaoDich = this.fb.group({
            tenLoai: ['', [Validators.required,]],
            trangThai: ['', [Validators.required,]]
        });
    }

    ngOnInit(): void {
        this.getDSTrangThaiDuAn();

    }
    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị
        this.formThemLoaiGiaoDich.controls.trangThai.setValue(this.ds_trangthaiduan[0].matrangthai); //Lấy giá trị show lên combo đầu tiên
    }
    selectTrangThai(e) {
        this.tentrangthaiduocchon = e.target.value;
    }
    get f() { return this.formThemLoaiGiaoDich.controls };


    add() {
        this.submitted = true;

        let loaigiaodich;
        let maloaigiaodich = "LGD" + (new Date()).getTime().toString();
        let tenLoai = this.formThemLoaiGiaoDich.controls.tenLoai.value;
        let trangThai = this.formThemLoaiGiaoDich.controls.trangThai.value;
        if (this.formThemLoaiGiaoDich.invalid) {
            return;
        } else if (this.formThemLoaiGiaoDich.valid) {
            loaigiaodich = new LOAIGIAODICH(maloaigiaodich, tenLoai, trangThai);
            this.loaiGiaoDichService.themLoaiGiaoDich(loaigiaodich).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Loại Giao Dịch đã được thêm thành công!";
            })
        }
    }
}
