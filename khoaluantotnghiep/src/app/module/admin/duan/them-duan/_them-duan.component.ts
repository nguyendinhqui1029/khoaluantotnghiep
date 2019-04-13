import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DuAnService } from 'src/app/service/duan.service';
import { HINHANH } from 'src/app/model/hinhanh';
import { DUAN } from 'src/app/model/duan';
import { DOITAC } from 'src/app/model/doitac';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { DoiTacService } from 'src/app/service/doitac.service';
import { TINHTHANHPHO } from 'src/app/model/tinhthanhpho';
import { TinhThanhPhoService } from 'src/app/service/tinhthanhpho.service';
import { DANHMUC } from 'src/app/model/danhmuc';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'them-duan',
    templateUrl: './_them-duan.component.html',
    styleUrls: ['./_them-duan.component.scss']
})
export class ThemDuAnComponent implements OnInit {
    formthemDuan: FormGroup;
    constructor(private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhpho: TinhThanhPhoService) { }
    submitted = false;
    ds_mangHinh: HINHANH[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];
    ds_loaiduan: any[] = [];
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
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
    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaidanhmuc => {
            this.ds_danhmuc = loaidanhmuc.body;
        })
    }

    getDSLoaiDuAn() {
        let ds_loaiduan_tam: any[] = [];
        let ds_loaiduan_tam2: any[] = [];

        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(da => {
            da.body.forEach(e => {
                if (ds_loaiduan_tam.length === 0) {
                    ds_loaiduan_tam.push(e);
                }
                else {
                    ds_loaiduan_tam.forEach(duantam => {
                        if (duantam.loaiDuAn.indexOf(e.loaiDuAn) < -1) {
                            ds_loaiduan_tam.push(e);
                        }
                    })

                }
            })
            this.ds_loaiduan = ds_loaiduan_tam;
            console.log(this.ds_loaiduan);
        })
    }

    selectTinhThanhPho(e) {
        this.ds_quan = this.tinhThanhpho.layQuanHuyen(e.target.value);
    }



    ngOnInit(): void {
        this.formthemDuan = this.fb.group({
            tenDuAn: ['', [Validators.required]],
            noiDungTomTat: ['', [Validators.required]],
            noiDungChiTiet: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            doiTac: ['', [Validators.required]],
            giaTien: ['', [Validators.required]],
            loaiGiaoDich: ['', [Validators.required]],
            danhMuc: ['', [Validators.required]],
            quanHuyen: ['', [Validators.required]],
            tinhThanhPho: ['', [Validators.required]],
            trangThai: ['', [Validators.required]],
            loaiDuAn: ['', [Validators.required]],
        });
        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();
        this.getDSLoaiDuAn();
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

    get f() { return this.formthemDuan.controls };
    add() {
        this.submitted = true;
        let tenDuAn = this.formthemDuan.controls.tenDuAn.value;
        let noiDungTomTat = this.formthemDuan.controls.noiDungTomTat.value;
        let noiDungChiTiet = this.formthemDuan.controls.noiDungChiTiet.value;
        let ngayDang = this.formthemDuan.controls.ngayDang.value;
        let madoiTac = this.formthemDuan.controls.doiTac.value;
        let giaTien = this.formthemDuan.controls.giaTien.value;
        let maloaiGiaoDich = this.formthemDuan.controls.loaiGiaoDich.value;
        let madanhMuc = this.formthemDuan.controls.danhMuc.value;
        let quanHuyen = this.formthemDuan.controls.quanHuyen.value;
        let tinhThanhPho = this.formthemDuan.controls.tinhThanhPho.value;
        let trangThai = this.formthemDuan.controls.trangThai.value;
        let loaiDuAn = this.formthemDuan.controls.loaiDuAn.value;



        let duan;
        let maduan = "DA" + (new Date()).getTime().toString();
        let doiTac = this.layDoiTacTheoMaDoiTacTheoMa(madoiTac);
        let giaodich = this.layDanhMucTheoMaDoiTacTheoMa(maloaiGiaoDich);
        let danhMuc = new DANHMUC("DM0010", "Chung Cư", "", "");
        if (this.ds_mangHinh.length > 0) {
            duan = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang,
                doiTac, giaTien, giaodich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn);
        } else {
            this.ds_mangHinh.push(new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an"));
            duan = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang,
                doiTac, giaTien, giaodich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn);
        }
        this.duAnService.themDuAn(duan).subscribe(res => {
            console.log(res);
        });




        if (this.formthemDuan.invalid) {
            return;
        } else if (this.formthemDuan.valid) {


        }
    }

    changeImage(event) {
        const $ = window["$"];
        let files = $("#mangHinh")[0].files;
        let mahinh;
        $("#mangHinh").value
        for (var i = 0; files.length > i; i++) {
            setTimeout(function () {
            }, 500);
            mahinh = "HA" + (new Date()).getTime().toString();
            this.ds_mangHinh.push(new HINHANH(mahinh, files[i].name, files[i].name));
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
