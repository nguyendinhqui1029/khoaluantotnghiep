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
import { TRANGTHAIDUAN } from 'src/app/model/trangthaiduan';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';
import { LOAIDUAN } from 'src/app/model/loaiduan';
import { ds_loaiduan } from 'src/app/model/mock_loaiduan';
import { ds_tinhthanhpho } from 'src/app/model/mock_tinhthanhpho';
import { HUONG } from 'src/app/model/huong';
import { ds_huong } from 'src/app/model/mock_huong';

@Component({
    selector: 'them-duan',
    templateUrl: './_them-duan.component.html',
    styleUrls: ['./_them-duan.component.scss']
})
export class ThemDuAnComponent implements OnInit {
    formthemDuan: FormGroup;
    submitted = false;
    ds_mangHinh: HINHANH[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];
    ds_huong: HUONG[] = [];
    ds_loaiduan: LOAIDUAN[] = []; //lấy từ mock để show giá trị
    danhmucduocchon = new DANHMUC("", "", "", "");
    doitacduocchon = new DOITAC("", "", "", "", "", "", "", "", "", "", "", "", "", "");
    loaigiaodichduocchon = new LOAIGIAODICH("", "", "");
    huongduocchon = new HUONG("", "", "");
    tenhuongduocchon: any = "";
    statusAdd: any = { "status": false, "message": "" };

    constructor(private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhphoservice: TinhThanhPhoService) {
        this.formthemDuan = this.fb.group({
            tenDuAn: ['', [Validators.required]],
            noiDungTomTat: ['', [Validators.required]],
            noiDungChiTiet: ['', [Validators.required]],
            ngayDang: ['', [Validators.required]],
            doiTac: ['', [Validators.required]],
            giaTien: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
            loaiGiaoDich: ['', [Validators.required]],
            danhMuc: ['', [Validators.required]],
            huong: ['', [Validators.required]],
            loaiDuAn: ['', [Validators.required]],
            dienTich: ['', [Validators.required]]
        });

    }
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(ConfigService.TRANG_THAI_DANHMUC.TATCA).subscribe(danhmuc => {
            this.ds_danhmuc = danhmuc.body;
            this.formthemDuan.controls.danhMuc.setValue(this.ds_danhmuc[0].maDanhMuc);
        })
    }

    getDSDoiTac() {
        this.doiTacservice.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.TATCA).subscribe(doitac => {
            this.ds_doitac = doitac.body;
            this.formthemDuan.controls.doiTac.setValue(this.ds_doitac[0].maDoiTac);
        })
    }

    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhphoservice.LayDanhSachTP();
    }
    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
            this.formthemDuan.controls.loaiGiaoDich.setValue(this.ds_loaigiaodich[0].maLoai);
        })
    }

    getDSHuong() {
        this.ds_huong = ds_huong; //lấy từ mock để show giá trị
        this.formthemDuan.controls.huong.setValue(this.ds_huong[0].mahuong); //Lấy giá trị show lên combo đầu tiên
    }

    getDSLoaiDuAn() {
        this.ds_loaiduan = ds_loaiduan; //lấy từ mock để show giá trị
        this.formthemDuan.controls.loaiDuAn.setValue(this.ds_loaiduan[0].maLoai); //Lấy giá trị show lên combo đầu tiên
    }

    //get Object theo id
    doitac: any = {};
    getDoiTacTheoMa(ma): any {
        this.ds_doitac.forEach(doitac => {
            if (doitac.maDoiTac === ma) {
                this.doitac = doitac;
            }
        })
        return this.doitac;
    }

    danhmuc: any = {};
    getDanhMucTheoMa(ma): any {
        this.ds_danhmuc.forEach(danhmuc => {
            if (danhmuc.maDanhMuc === ma) {
                this.danhmuc = danhmuc;
            }
        })
        return this.danhmuc;
    }

    loaigiaodich: any = {};
    getLoaiGiaoDichTheoMa(ma): any {
        this.ds_loaigiaodich.forEach(loaigiaodich => {
            if (loaigiaodich.maLoai === ma) {
                this.loaigiaodich = loaigiaodich;
            }
        })
        return this.loaigiaodich;
    }

    huong: any = {};
    getHuongTheoMa(ma): any {
        this.ds_huong.forEach(huong => {
            if (huong.mahuong === ma) {
                this.huong = huong.tenhuong;
            }
        })
        return this.huong;
    }

    loaiduan: any = {};
    getLoaiDuAnTheoMa(ma): any {
        this.ds_loaiduan.forEach(loaiduan => {
            if (loaiduan.maLoai === ma) {
                this.loaiduan = loaiduan.tenLoai;
            }
        })
        return this.loaiduan;
    }
    //end get Object theo id


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
    ngOnInit(): void {

        let d = new Date();
        let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

        this.formthemDuan.controls.ngayDang.setValue(date);
        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();
        this.getDSHuong();
        this.getDSLoaiDuAn();
    }
    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $('#filterDate2').datepicker({
                uiLibrary: 'bootstrap',
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayHighlight: true,
            });
        });
    }



    get f() { return this.formthemDuan.controls };
    add() {
        this.submitted = true;
        let tenDuAn = this.formthemDuan.controls.tenDuAn.value;
        let noiDungTomTat = this.formthemDuan.controls.noiDungTomTat.value;
        let noiDungChiTiet = this.formthemDuan.controls.noiDungChiTiet.value;
        let ngayDang = this.formthemDuan.controls.ngayDang;
        let giaTien = this.formthemDuan.controls.giaTien.value;
        let quanHuyen = this.quanhuyenduocchon;
        let tinhThanhPho = this.tinhthanhphocodau;
        let doiTac = this.formthemDuan.controls.doiTac.value;
        let loaiGiaoDich = this.formthemDuan.controls.loaiGiaoDich.value;
        let danhMuc = this.formthemDuan.controls.danhMuc.value;
        let huong = this.formthemDuan.controls.huong.value;
        let loaiDuAn = this.formthemDuan.controls.loaiDuAn.value;
        let dienTich = this.formthemDuan.controls.dienTich.value;

        if (this.formthemDuan.invalid) {
            return;
        } else if (this.formthemDuan.valid) {
            let duan;
            let maduan = "DA" + (new Date()).getTime().toString();
            let ObjectDoiTac = this.getDoiTacTheoMa(doiTac);
            let ObjectDanhMuc = this.getDanhMucTheoMa(danhMuc);
            let ObjectLoaiGiaoDich = this.getLoaiGiaoDichTheoMa(loaiGiaoDich);
            let tenhuong = this.getHuongTheoMa(huong);
            let tenloaiduan = this.getLoaiDuAnTheoMa(loaiDuAn);
            if (this.ds_mangHinh.length > 0) {
                duan = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang.value,
                    ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, 1, tenloaiduan,
                    tenhuong, dienTich);
            } else if (this.ds_mangHinh.length === 0) {
                let hinhanh = new HINHANH("HA" + (new Date()).getTime().toString(), "logo.png", "logo du an");
                this.ds_mangHinh.push(hinhanh);
                duan = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang.value,
                    ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, 1, tenloaiduan,
                    tenhuong, dienTich);
            }
            console.log(duan);

            this.duAnService.themDuAn(duan).subscribe(res => {
                this.statusAdd.status = true;
                this.statusAdd.message = "Dự Án đã được thêm thành công!";
                console.log(res);
            });
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
}
