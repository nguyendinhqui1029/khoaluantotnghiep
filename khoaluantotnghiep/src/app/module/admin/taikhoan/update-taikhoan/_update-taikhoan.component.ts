import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HINHANH } from 'src/app/model/hinhanh';
import { GIOITINH } from 'src/app/model/gioitinh';
import { ds_gioitinh } from 'src/app/model/mock_gioitinh';
import { LOAITAIKHOAN } from 'src/app/model/loaitaikhoan';
import { ds_loaitaikhoan } from 'src/app/model/mock_loaitaikhoan';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { TaiKhoanService } from 'src/app/service/taikhoan.service';
import { TAIKHOAN } from 'src/app/model/taikhoan';

@Component({
    selector: 'update-taikhoan',
    templateUrl: './_update-taikhoan.component.html',
    styleUrls: ['./_update-taikhoan.component.scss']
})
export class UpdateTaiKhoanComponent implements OnInit {
    statusUpdate: any = { "status": false, "message": "" };
    formUpdateTaiKhoan: FormGroup;
    submitted = false;
    ds_mangHinh: HINHANH[] = [];
    ds_gioitinh: GIOITINH[] = [];
    ds_loaitaikhoan: LOAITAIKHOAN[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    taikhoan: any = {};
    mataikhoan: any = "";
    tinhthanhpho: any = "";
    quanhuyen: any = "";
    tinhthanhphokhongdau: any = "";
    ds_tinhthanhphofromMock: TINHTHANHPHO[] = ds_tinhthanhpho;
    magioitinh: any = "";
    maloaitaikhoan: any = "";
    constructor(private rout: ActivatedRoute, private fb: FormBuilder,
        private tinhThanhphoservice: TinhThanhPhoService, private taikhoanService: TaiKhoanService) {
        let id = this.rout.snapshot.params.id;
        this.formUpdateTaiKhoan = this.fb.group({
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
        this.taikhoanService.getTaiKhoantheoMa(id).subscribe(tk => {
            this.taikhoan = JSON.stringify(tk);
            let doit = JSON.parse(this.taikhoan);
            console.log(doit.body.data[0]);

            this.mataikhoan = doit.body.data[0].maTaiKhoan;
            this.formUpdateTaiKhoan.controls.hoTen.setValue(doit.body.data[0].hoTen);
            this.formUpdateTaiKhoan.controls.soDienThoai.setValue(doit.body.data[0].soDienThoai);
            this.tinhthanhpho = doit.body.data[0].tinhThanhPho;
            this.formUpdateTaiKhoan.controls.tinhThanhPho.setValue(this.tinhthanhpho);
            this.quanhuyen = doit.body.data[0].quanHuyen;
            this.formUpdateTaiKhoan.controls.quanHuyen.setValue(this.quanhuyen);
            this.ds_mangHinh = doit.body.data[0].mangHinh;
            this.ds_tinhthanhphofromMock.forEach(tinh => {
                if (this.tinhthanhpho === tinh.tenTinhThanhPhoCodau) {
                    this.tinhthanhphokhongdau = tinh.tenTinhThanhPhoKhongdau;
                }
            })
            this.ds_quan = this.tinhThanhphoservice.layQuanHuyen(this.tinhthanhphokhongdau);
            this.formUpdateTaiKhoan.controls.diaChi.setValue(doit.body.data[0].diaChi);
            this.magioitinh = doit.body.data[0].gioiTinh;
            this.formUpdateTaiKhoan.controls.gioiTinh.setValue(this.magioitinh);
            this.formUpdateTaiKhoan.controls.ngaySinh.setValue(doit.body.data[0].ngaySinh.substr(0, 10));
            this.formUpdateTaiKhoan.controls.tenTaiKhoan.setValue(doit.body.data[0].tenTaiKhoan);
            this.formUpdateTaiKhoan.controls.moTa.setValue(doit.body.data[0].moTa);
            this.formUpdateTaiKhoan.controls.matKhau.setValue(doit.body.data[0].matKhau);
            this.formUpdateTaiKhoan.controls.email.setValue(doit.body.data[0].email);
            this.maloaitaikhoan = doit.body.data[0].loaiTaiKhoan;
            this.ds_mangHinh = doit.body.data[0].logo;
            this.formUpdateTaiKhoan.controls.loaiTaiKhoan.setValue(this.maloaitaikhoan);
        })
    }
    getDSGioiTinh() {
        this.ds_gioitinh = ds_gioitinh;
        this.formUpdateTaiKhoan.controls.gioiTinh.setValue(ds_gioitinh[0].magioitinh);
    }

    getDSLoaiTaiKhoan() {
        this.ds_loaitaikhoan = ds_loaitaikhoan;
        this.formUpdateTaiKhoan.controls.loaiTaiKhoan.setValue(ds_loaitaikhoan[0].maloai);
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
    get f() { return this.formUpdateTaiKhoan.controls };


    ngOnInit(): void {
        this.getDSGioiTinh();
        this.getDSLoaiTaiKhoan();
        this.getDSTinhThanhPho();
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd',
                todayHighlight: true,
                minDate: 0,
            });
        });
    }
    update() {
        this.submitted = true;

        let hoTen = this.formUpdateTaiKhoan.controls.hoTen.value;
        let soDienThoai = this.formUpdateTaiKhoan.controls.soDienThoai.value;
        let diaChi = this.formUpdateTaiKhoan.controls.diaChi.value;
        let ngaySinh = this.formUpdateTaiKhoan.controls.ngaySinh.value;
        let moTa = this.formUpdateTaiKhoan.controls.moTa.value;
        let tenTaiKhoan = this.formUpdateTaiKhoan.controls.tenTaiKhoan.value;
        let email = this.formUpdateTaiKhoan.controls.email.value;
        let matKhau = this.formUpdateTaiKhoan.controls.matKhau.value;
        let gioiTinh = this.formUpdateTaiKhoan.controls.gioiTinh.value;
        let loaiTaiKhoan = this.formUpdateTaiKhoan.controls.loaiTaiKhoan.value;

        let quanHuyen;
        let tinhThanhPho;
        if (this.tinhthanhphocodau) {
            tinhThanhPho = this.tinhthanhphocodau;
        }
        else {
            tinhThanhPho = this.formUpdateTaiKhoan.controls.tinhThanhPho.value;
        }
        if (this.quanhuyenduocchon) {
            quanHuyen = this.quanhuyenduocchon;
        }
        else {
            quanHuyen = this.formUpdateTaiKhoan.controls.quanHuyen.value;
        }
        console.log(ngaySinh);

        let taikhoan;
        if (this.ds_mangHinh.length > 0) {
            taikhoan = new TAIKHOAN(this.mataikhoan, hoTen, soDienThoai, tinhThanhPho, diaChi, quanHuyen,
                gioiTinh, ngaySinh, this.ds_mangHinh, moTa, tenTaiKhoan, email, matKhau, loaiTaiKhoan);
        } else {
            this.ds_mangHinh.push(new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an"));
            taikhoan = new TAIKHOAN(this.mataikhoan, hoTen, soDienThoai, tinhThanhPho, diaChi, quanHuyen,
                gioiTinh, ngaySinh, this.ds_mangHinh, moTa, tenTaiKhoan, email, matKhau, loaiTaiKhoan);
        }
        console.log(taikhoan);
        // this.taikhoanService.updateTaiKhoan(taikhoan).subscribe(res => {
        //     console.log(res);
        //     this.statusUpdate.status = true;
        //     this.statusUpdate.message = "Tài khoản đã được Cập Nhật";
        // });
        if (this.formUpdateTaiKhoan.invalid) {
            return;
        } else if (this.formUpdateTaiKhoan.valid) {

        }
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
