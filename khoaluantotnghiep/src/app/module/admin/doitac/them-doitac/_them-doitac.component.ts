import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HINHANH } from 'src/app/model/hinhanh';
import { DOITAC } from 'src/app/model/doitac';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { DoiTacService } from 'src/app/service/doitac.service';

@Component({
    selector: 'them-doitac',
    templateUrl: './_them-doitac.component.html',
    styleUrls: ['./_them-doitac.component.scss']
})
export class ThemDoiTacComponent implements OnInit {
    formThemDoiTac: FormGroup;
    submitted = false;
    ds_mangHinh: HINHANH[] = [];
    ds_quan: any[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    statusAdd: any = { "status": false, "message": "" };

    constructor(private fb: FormBuilder, private tinhThanhphoservice: TinhThanhPhoService, private doiTacService: DoiTacService) {
        this.formThemDoiTac = this.fb.group({
            hoTen: ['', [Validators.required]],
            diaChi: ['', [Validators.required]],
            sdt: ['', [Validators.required, Validators.pattern('^[0-9\-\+]{10,11}$')]],
            ngaySinh: ['', [Validators.required]],
            moTa: ['',],
            user: ['', [Validators.required, Validators.pattern('^[-a-zA-Z0-9@\.+_]+$')]],
            pass: ['', [Validators.required]],
            email: [''],
        });
    }


    ngOnInit(): void {
        this.getDSTinhThanhPho();
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
    get f() { return this.formThemDoiTac.controls };

    add() {
        this.submitted = true;
        let hoten = this.formThemDoiTac.controls.hoTen.value;
        let diaChi = this.formThemDoiTac.controls.diaChi.value;
        let ngaySinh = this.formThemDoiTac.controls.ngaySinh;
        let sdt = this.formThemDoiTac.controls.sdt.value;
        let user = this.formThemDoiTac.controls.user.value;
        let pass = this.formThemDoiTac.controls.pass.value;
        let email = this.formThemDoiTac.controls.email.value;
        let moTa = this.formThemDoiTac.controls.moTa.value;
        let quanHuyen = this.quanhuyenduocchon;
        let tinhThanhPho = this.tinhthanhphocodau;


        if (this.formThemDoiTac.invalid) {
            return;
        } else if (this.formThemDoiTac.valid) {
            let doitac;
            let madoitac = "DT" + (new Date()).getTime().toString();
            if (this.ds_mangHinh.length > 0) {
                doitac = new DOITAC(madoitac, hoten, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh.value,
                    this.ds_mangHinh, moTa, user, pass, "", email, 1);
            } else if (this.ds_mangHinh.length === 0) {
                let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
                this.ds_mangHinh.push(hinhanh);
                doitac = new DOITAC(madoitac, hoten, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh.value,
                    this.ds_mangHinh, moTa, user, pass, "", email, 1);
            }

            this.doiTacService.themDoiTac(doitac).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Đối Tác đã được thêm thành công!";
            });
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
