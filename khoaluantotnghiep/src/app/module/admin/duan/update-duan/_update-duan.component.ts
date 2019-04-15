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
import { Router, ActivatedRoute } from '@angular/router';
import { DUAN } from 'src/app/model/duan';
import { HINHANH } from 'src/app/model/hinhanh';
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { LOAIDUAN } from 'src/app/model/loaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { ds_loaiduan } from 'src/app/model/mock_loaiduan';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';

@Component({
    selector: 'update-duan',
    templateUrl: './_update-duan.component.html',
    styleUrls: ['./_update-duan.component.scss']
})
export class UpdateDuAnComponent implements OnInit {
    duan: any = {};
    ds_mangHinh: HINHANH[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];
    ds_trangthaiduan: TRANGTHAIDUAN[] = ds_trangthaiduan; //lấy từ mock để show giá trị
    ds_loaiduan1: LOAIDUAN[] = ds_loaiduan; //lấy từ mock để show giá trị
    submitted = false;
    statusUpdate: any = { "status": false, "message": "" };
    maduan: any = "";
    madoitac: any = "";
    madanhmuc: any = "";
    maloaigiaodich: any = "";
    matrangthai: any = "";
    loaiduan: any = "";
    tinhthanhpho: any = "";
    quanhuyen: any = "";
    ds_tinhthanhphofromMock: TINHTHANHPHO[] = ds_tinhthanhpho;
    tinhthanhphokhongdau: any = "";
    constructor(private rout: ActivatedRoute, private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhpho: TinhThanhPhoService) {
        let id = this.rout.snapshot.params.id;
        this.formupdateDuan = this.fb.group({
            tenDuAn: ['', [Validators.required]],
            noiDungTomTat: ['', [Validators.required]],
            noiDungChiTiet: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            doiTac: [{}, [Validators.required]],
            giaTien: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            loaiGiaoDich: [{}, [Validators.required]],
            danhMuc: [{}, [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            tinhThanhPho: ['', [Validators.required]],
            trangThai: ['', [Validators.required]],
            loaiDuAn: ['', [Validators.required]],
        });
        this.duAnService.getDuAnTheoMaDuAn(id).subscribe(da => {
            this.duan = da.body[0];
            this.formupdateDuan.controls.tenDuAn.setValue(this.duan.tenDuAn);
            this.formupdateDuan.controls.noiDungTomTat.setValue(this.duan.noiDungTomTat);
            this.formupdateDuan.controls.noiDungChiTiet.setValue(this.duan.noiDungChiTiet);
            this.formupdateDuan.controls.giaTien.setValue(this.duan.giaTien);
            this.formupdateDuan.controls.ngayDang.setValue(this.duan.ngayDang.substr(0, 10));
            console.log(this.duan);
            this.madoitac = this.duan.doiTac.maDoiTac;
            this.maloaigiaodich = this.duan.loaiGiaoDich.maLoai;
            this.madanhmuc = this.duan.danhMuc.maDanhMuc;
            this.matrangthai = this.duan.trangThai;
            this.loaiduan = this.duan.loaiDuAn;
            this.tinhthanhpho = this.duan.tinhThanhPho;
            this.quanhuyen = this.duan.quanHuyen;
            this.ds_tinhthanhphofromMock.forEach(tinh => {
                if (this.tinhthanhpho === tinh.tenTinhThanhPhoCodau) {
                    this.tinhthanhphokhongdau = tinh.tenTinhThanhPhoKhongdau;
                }
            })
            this.ds_quan = this.tinhThanhpho.layQuanHuyen(this.tinhthanhphokhongdau);
        });
    }

    formupdateDuan: FormGroup;

    ngOnInit(): void {

        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();

    }
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(0).subscribe(danhmuc => {
            this.ds_danhmuc = danhmuc.body;
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

    selectQuanHuyen(e) {

    }
    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
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
