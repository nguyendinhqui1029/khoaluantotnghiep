import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DuAnService } from 'src/app/service/duan.service';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DoiTacService } from 'src/app/service/doitac.service';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { DOITAC } from 'src/app/model/doitac';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { DANHMUC } from 'src/app/model/danhmuc';
import { Router } from '@angular/router';
import { DUAN } from 'src/app/model/duan';
import { HINHANH } from 'src/app/model/hinhanh';

@Component({
    selector: 'update-duan',
    templateUrl: './_update-duan.component.html',
    styleUrls: ['./_update-duan.component.scss']
})
export class UpdateDuAnComponent implements OnInit {
    duan: any[] = [];
    ds_mangHinh: HINHANH[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];
    submitted = false;
    statusUpdate: any = { "status": false, "message": "" };
    maduan: any = "";
    constructor(private router: Router, private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhpho: TinhThanhPhoService) {
        this.duAnService.getThongTin.subscribe(da => {
            this.duan = da;
            this.maduan = da.maDuAn;
            console.log(this.duan);
        })
    }

    formupdateDuan: FormGroup;

    ngOnInit(): void {
        this.formupdateDuan = this.fb.group({
            tenDuAn: [' ', [Validators.required]],
            noiDungTomTat: [' ', [Validators.required]],
            noiDungChiTiet: [' ', [Validators.required]],
            ngayDang: [' ', [Validators.required]],
            doiTac: [' ', [Validators.required]],
            giaTien: ['0', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            loaiGiaoDich: [' ', [Validators.required]],
            danhMuc: [' ', [Validators.required]],
            quanHuyen: [' ', [Validators.required]],
            tinhThanhPho: [' ', [Validators.required]],
            trangThai: [' ', [Validators.required]],
            loaiDuAn: [' ', [Validators.required]],
        });
        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();

    }
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
            console.log(this.ds_loaigiaodich);
        })
    }
    getDSDoiTac() {
        this.doiTacservice.getListDoiTac().subscribe(doitac => {
            this.ds_doitac = doitac.body;
        })
    }
    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhpho.LayDanhSachTP();
    }


    selectTinhThanhPho(e) {
        this.ds_quan = this.tinhThanhpho.layQuanHuyen(e.target.value);
    }
    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaidanhmuc => {
            this.ds_danhmuc = loaidanhmuc.body;
            console.log(this.ds_danhmuc);
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
    get f() { return this.formupdateDuan.controls };

    update() {
        this.submitted = true;

        //formControls
        this.statusUpdate.status = true;
        let tenDuAn = this.formupdateDuan.controls.tenDuAn.value;
        let noiDungTomTat = this.formupdateDuan.controls.noiDungTomTat.value;
        let noiDungChiTiet = this.formupdateDuan.controls.noiDungChiTiet.value;
        let ngayDang = this.formupdateDuan.controls.ngayDang.value;
        let madoiTac = this.formupdateDuan.controls.doiTac.value;
        let giaTien = this.formupdateDuan.controls.giaTien.value;
        let maloaiGiaoDich = this.formupdateDuan.controls.loaiGiaoDich.value;
        let madanhMuc = this.formupdateDuan.controls.danhMuc.value;
        let quanHuyen = this.formupdateDuan.controls.quanHuyen.value;
        let tinhThanhPho = this.formupdateDuan.controls.tinhThanhPho.value;
        let trangThai = this.formupdateDuan.controls.trangThai.value;
        let loaiDuAn = this.formupdateDuan.controls.loaiDuAn.value;
        this.statusUpdate.message = "Dự án đã được update.";
        //formControls

        let duanthem;
        let doiTac = this.layDoiTacTheoMaDoiTacTheoMa(madoiTac);
        let giaodich = this.layDanhMucTheoMaDoiTacTheoMa(maloaiGiaoDich);
        let danhMuc = new DANHMUC("DM0010", "Chung Cư", "", "");
        if (this.ds_mangHinh.length > 0) {
            duanthem = new DUAN(this.maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang,
                doiTac, giaTien, giaodich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn);
        } else {
            this.ds_mangHinh.push(new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an"));
            duanthem = new DUAN(this.maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang,
                doiTac, giaTien, giaodich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn);
        }
        this.duAnService.updateDuAn(duanthem).subscribe(res => {
            console.log(res);
        });





        if (this.formupdateDuan.invalid) {
            return;
        } else if (this.formupdateDuan.valid) {

        }
    }

    layDoiTacTheoMaDoiTacTheoMa(maDoiTac) {
        this.ds_doitac.forEach(e => {
            if (e.maDoiTac === maDoiTac) {
                return e;
            }
        })
    }

    layDanhMucTheoMaDoiTacTheoMa(maLoai) {
        this.ds_loaigiaodich.forEach(e => {
            if (e.maLoai === maLoai) {
                return e;
            }
        })
    }
}
