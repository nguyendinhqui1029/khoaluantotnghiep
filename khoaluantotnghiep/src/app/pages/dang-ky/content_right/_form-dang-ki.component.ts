import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './_must-match.validator';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { DangNhapDangKiService } from 'src/app/service/dangnhap_dangki.service';
import { Md5 } from 'ts-md5/dist/md5';
import { TAIKHOAN } from 'src/app/model/taikhoan';
import { HINHANH } from 'src/app/model/hinhanh';
import { Router } from '@angular/router';

@Component({
    selector: 'form-dang-ki',
    templateUrl: './_form-dang-ki.component.html',
    styleUrls: ['./_form-dang-ki.component.scss']
})
export class FormDangKiComponent implements OnInit {
    constructor(private router: Router, private fb: FormBuilder, private DangKiDangNhapService: DangNhapDangKiService) { }
    dsgioitinh = ["Nam", "Nữ"];
    formDangKy: FormGroup;
    submitted = false;
    buttonGuiMaXacNhan: any = { status: false, name: "Lấy xác nhận" };
    dstinhthanhpho: TINHTHANHPHO[] = ds_tinhthanhpho;
    dstinhtam: any[] = [];
    dsquantam: any[] = [];
    modeTaiKhoan: any = { "KHACHHANG": 1, "NHANVIEN": 2, "ADMIN": 3 };
    thongBaoDangKi: any = { "status": false, "message": "" };
    laydanhsachTinhThanhPho() {
        this.dstinhthanhpho.forEach(element => {
            if (this.dstinhtam.length <= 0) {
                this.dstinhtam.push({ "tenkhongdau": element.tenTinhThanhPhoKhongdau, "tencodau": element.tenTinhThanhPhoCodau });
            } else {
                this.dstinhtam.forEach(data => {
                    if (data.tenkhongdau !== element.tenTinhThanhPhoKhongdau) {
                        this.dstinhtam.push({ "tenkhongdau": element.tenTinhThanhPhoKhongdau, "tencodau": element.tenTinhThanhPhoCodau });
                    }
                })
            }
        });
    }
    laydanhsachQuanHuyenTheoTinhThanhPho() {
        this.dstinhtam.forEach(element => {

        })
    }

    ngOnInit(): void {
        this.formDangKy = this.fb.group({
            taikhoan: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            pass: ['', [Validators.required]],
            confirmpass: ['', [Validators.required]],
            hoten: ['', [Validators.required]],
            gioitinh: [''],
            ngaysinh: [''],
            sdt: [''],
            diachi: [''],
            tinhTP: [''],
            quanHuyen: [''],
            maXacNhan: ['', [Validators.required]]
        }, {
                validator: MustMatch('pass', 'confirmpass')
            });
        this.laydanhsachTinhThanhPho();
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

    get f() { return this.formDangKy.controls; }
    dinhDangChuoi(event) {
        if (event.keyCode === 189 && event.target.value.length <= 9) {
            event.target.value = event.target.value.substr(0, event.target.value.lastIndexOf("-"));
        } else {
            if (event.target.value.length < 9 && event.keyCode != 8) {
                event.target.value += "-";
            }
            if (event.keyCode === 8) {
                if (Number(event.target.value[event.target.value.length - 1]) >= 0) {
                    event.target.value = event.target.value.substr(0, event.target.value.length - 1);
                }
            }
        }

    }
    register() {
        const md5 = new Md5();
        let md5MatKhau = md5.appendAsciiStr(this.formDangKy.controls.pass.value).end();
        let maTaiKhoan = "TK" + (new Date()).getTime().toString();
        let taikhoan = this.formDangKy.controls.taikhoan.value;
        let email = this.formDangKy.controls.email.value;
        let hoten = this.formDangKy.controls.hoten.value;
        let gioitinh = this.formDangKy.controls.gioitinh.value;
        let ngaysinh = this.formDangKy.controls.ngaysinh.value;
        let sdt = this.formDangKy.controls.sdt.value;
        let diachi = this.formDangKy.controls.diachi.value;
        let tinhTP = this.formDangKy.controls.tinhTP.value;
        let quanHuyen = this.formDangKy.controls.quanHuyen.value;
        let tk = new TAIKHOAN(maTaiKhoan, hoten, sdt, tinhTP, diachi, quanHuyen
            , gioitinh, ngaysinh
            , new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo user"),
            "Tài khoản khách hàng",
            taikhoan,
            email,
            md5MatKhau,
            this.modeTaiKhoan.KHACHHANG
        );
        //xu li lay ma xac nhan

        //kiem tra dang ki hop le
        this.DangKiDangNhapService.layTaiKhoanTheoEmail(email).subscribe(e => {
            if (e.body[0]) {
                this.thongBaoDangKi.status = true;
                this.thongBaoDangKi.message = " Địa chỉ email đã tồn tại.";
            } else {
                this.DangKiDangNhapService.themTaiKhoan(tk).subscribe(e => {
                    if (e.code === 200) {
                        sessionStorage.setItem("username", email);
                        this.router.navigate(["/dang-nhap"]);
                    }
                });
            }
        });


        this.submitted = true;
        if (this.formDangKy.invalid) {
            return;
        } else {

        }
    }

    yeuCauMaXacNhan() {
        this.buttonGuiMaXacNhan.name = "Lấy lại mã xác nhận";
        this.formDangKy.controls.maXacNhan.setValue("");
    }
}
