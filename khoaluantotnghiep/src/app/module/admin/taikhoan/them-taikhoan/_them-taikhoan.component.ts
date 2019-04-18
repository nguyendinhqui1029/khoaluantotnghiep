import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { HINHANH } from 'src/app/model/hinhanh';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { GIOITINH } from 'src/app/model/gioitinh';
import { ds_gioitinh } from 'src/app/model/mock_gioitinh';
import { LOAITAIKHOAN } from 'src/app/model/loaitaikhoan';
import { ds_loaitaikhoan } from 'src/app/model/mock_loaitaikhoan';
import { TAIKHOAN } from 'src/app/model/taikhoan';
import { TaiKhoanService } from 'src/app/service/taikhoan.service';

@Component({
    selector: 'them-taikhoan',
    templateUrl: './_them-taikhoan.component.html',
    styleUrls: ['./_them-taikhoan.component.scss']
})
export class ThemTaiKhoanComponent implements OnInit {
    formThemTaiKhoan: FormGroup;
    submitted = false;
    ds_mangHinh: HINHANH[] = [];
    ds_quan: any[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_gioitinh: GIOITINH[] = [];
    ds_loaitaikhoan: LOAITAIKHOAN[] = [];
    statusAdd: any = { "status": false, "message": "" };
    constructor(private fb: FormBuilder, private tinhThanhphoservice: TinhThanhPhoService,
        private taiKhoanService: TaiKhoanService) {
        this.formThemTaiKhoan = this.fb.group({
            hoTen: ['', [Validators.required]],
            soDienThoai: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            tinhThanhPho: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            diaChi: ['', [Validators.required]],
            gioiTinh: ['', [Validators.required]],
            ngaySinh: ['', [Validators.required]],
            logo: ['', [Validators.required]],
            moTa: ['',],
            tenTaiKhoan: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')]],
            matKhau: ['', [Validators.required]],
            loaiTaiKhoan: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
        let d = new Date();
        let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

        this.formThemTaiKhoan.controls.ngaySinh.setValue(date);
        this.getDSTinhThanhPho();
        this.getDSGioiTinh();
        this.getDSLoaiTaiKhoan();
    }
    getDSGioiTinh() {
        this.ds_gioitinh = ds_gioitinh;
        this.formThemTaiKhoan.controls.gioiTinh.setValue(ds_gioitinh[0].magioitinh);
    }

    getDSLoaiTaiKhoan() {
        this.ds_loaitaikhoan = ds_loaitaikhoan;
        this.formThemTaiKhoan.controls.loaiTaiKhoan.setValue(ds_loaitaikhoan[0].maloai);
    }

    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhphoservice.LayDanhSachTP();
    }

    tatcatinhthanhpho: TINHTHANHPHO[] = ds_tinhthanhpho;
    thanhphoduocchon: any[] = [];
    tinhthanhphocungten: TINHTHANHPHO[] = [];
    tinhthanhphocodau: any = "";
    selectTinhThanhPho(e) {
        this.thanhphoduocchon = e.target.value;
        this.tinhthanhphocodau = "";
        this.tinhthanhphocungten = [];
        this.tatcatinhthanhpho.forEach(tinh => {
            if (tinh.tenTinhThanhPhoKhongdau === e.target.value) {
                this.tinhthanhphocungten.push(tinh);
            }
        })
        this.tinhthanhphocodau = this.tinhthanhphocungten[0].tenTinhThanhPhoCodau;
        this.ds_quan = this.tinhThanhphoservice.layQuanHuyen(e.target.value);
        this.quanhuyenduocchon = this.ds_quan[0].tenquanhuyencodau;
    }

    quanhuyenduocchon: any = "";
    selectQuanHuyen(e) {
        this.quanhuyenduocchon = "";
        this.tatcatinhthanhpho.forEach(quan => {
            if (quan.quanKhongdau === e.target.value) {
                this.quanhuyenduocchon = quan.quanCodau;
            }
        })
    }

    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd'
            });
        });
    }
    get f() { return this.formThemTaiKhoan.controls };

    add() {
        this.submitted = true;


        let taikhoan;
        let hoTen = this.formThemTaiKhoan.controls.hoTen.value;
        let soDienThoai = this.formThemTaiKhoan.controls.soDienThoai.value;
        let diaChi = this.formThemTaiKhoan.controls.diaChi.value;
        let gioiTinh = this.formThemTaiKhoan.controls.gioiTinh.value;
        let ngaySinh = this.formThemTaiKhoan.controls.ngaySinh.value;
        let moTa = this.formThemTaiKhoan.controls.moTa.value;
        let tenTaiKhoan = this.formThemTaiKhoan.controls.tenTaiKhoan.value;
        let email = this.formThemTaiKhoan.controls.email.value;
        let matKhau = this.formThemTaiKhoan.controls.matKhau.value;
        let loaiTaiKhoan = this.formThemTaiKhoan.controls.loaiTaiKhoan.value;
        let quanHuyen = this.quanhuyenduocchon;
        let tinhThanhPho = this.tinhthanhphocodau;

        let mataikhoan = "TK" + (new Date()).getTime().toString();
        let ObjectLoaiTaikhoan = this.getLoaiTaiKhoanTheoMa(loaiTaiKhoan);
        if (this.ds_mangHinh.length > 0) {
            taikhoan = new TAIKHOAN(mataikhoan, hoTen, soDienThoai, tinhThanhPho, diaChi, quanHuyen,
                gioiTinh, ngaySinh, this.ds_mangHinh, moTa, tenTaiKhoan, email, matKhau, ObjectLoaiTaikhoan);
        } else if (this.ds_mangHinh.length === 0) {
            let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
            this.ds_mangHinh.push(hinhanh);
            taikhoan = new TAIKHOAN(mataikhoan, hoTen, soDienThoai, tinhThanhPho, diaChi, quanHuyen,
                gioiTinh, ngaySinh, this.ds_mangHinh, moTa, tenTaiKhoan, email, matKhau, ObjectLoaiTaikhoan);
        }

        console.log(taikhoan);

        if (this.formThemTaiKhoan.invalid) {
            return;
        } else if (this.formThemTaiKhoan.valid) {
            this.taiKhoanService.themTaiKhoan(taikhoan).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Tài Khoản đã được thêm thành công!";
                console.log(res);
            });
        }
    }
    loaitaikhoan: any = {};
    getLoaiTaiKhoanTheoMa(ma): any {
        this.ds_loaitaikhoan.forEach(tk => {
            if (tk.maloai === ma) {
                this.loaitaikhoan = tk.maloai;
            }
        })
        return this.loaitaikhoan;
    }
    changeImage(event) {
        const $ = window["$"];
        let files = $("#loGo")[0].files;
        let mahinh;
        $("#loGo").value
        for (var i = 0; files.length > i; i++) {
            setTimeout(function () {
            }, 500);
            mahinh = "HA" + (new Date()).getTime().toString();
            this.ds_mangHinh.push(new HINHANH(mahinh, files[i].name, files[i].name));
        }
    }
}
