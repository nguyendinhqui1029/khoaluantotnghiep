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
import { HUONG } from 'src/app/model/huong';
import { ds_huong } from 'src/app/model/mock_huong';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { HttpEventType } from '@angular/common/http';

@Component({
    selector: 'update-duan',
    templateUrl: './_update-duan.component.html',
    styleUrls: ['./_update-duan.component.scss']
})
export class UpdateDuAnComponent implements OnInit {

    //page upload
    flag = false;
    status = "capnhatduan";
    //

    duan: any = {};
    ds_mangHinh: HINHANH[] = [];
    ds_loaigiaodich: LOAIGIAODICH[] = [];
    ds_doitac: DOITAC[] = [];
    ds_tinhthanhpho: TINHTHANHPHO[] = [];
    ds_quan: any[] = [];
    ds_danhmuc: DANHMUC[] = [];
    ds_trangthaiduan: TRANGTHAIDUAN[] = []; //lấy từ mock để show giá trị
    ds_loaiduan: LOAIDUAN[] = []; //lấy từ mock để show giá trị
    submitted = false;
    statusUpdate: any = { "status": false, "message": "" };
    maduan: any = "";
    madoitac: any = "";
    madanhmuc: any = "";
    maloaigiaodich: any = "";
    matrangthai: any = "";
    tinhthanhpho: any = "";
    quanhuyen: any = "";
    ds_tinhthanhphofromMock: TINHTHANHPHO[] = ds_tinhthanhpho;
    tinhthanhphokhongdau: any = "";
    formupdateDuan: FormGroup;
    ds_huong: HUONG[] = [];
    mahuong: any = "";
    taiKhoan: any = {};
    constructor(private rout: ActivatedRoute, private fb: FormBuilder, private duAnService: DuAnService, private loaiGiaodichservice: LoaiGiaoDichService,
        private doiTacservice: DoiTacService, private tinhThanhpho: TinhThanhPhoService, private UploadHinhService: UploadImageService) {
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
            huong: ['', [Validators.required]],
            dienTich: ['', [Validators.required]],

        });
        this.duAnService.getDuAnTheoMaDuAn(id).subscribe(da => {
            this.duan = da.body[0];
            //hiển thị dữ liệu trả về từ list
            this.maduan = this.duan.maDuAn;
            this.formupdateDuan.controls.tenDuAn.setValue(this.duan.tenDuAn);
            this.formupdateDuan.controls.noiDungTomTat.setValue(this.duan.noiDungTomTat);
            this.formupdateDuan.controls.noiDungChiTiet.patchValue(this.duan.noiDungChiTiet);
            this.formupdateDuan.controls.giaTien.setValue(this.duan.giaTien);
            this.formupdateDuan.controls.ngayDang.setValue(this.duan.ngayDang.substr(0, 10));
            this.madoitac = this.duan.doiTac.maDoiTac;
            this.formupdateDuan.controls.doiTac.setValue(this.madoitac);
            this.maloaigiaodich = this.duan.loaiGiaoDich.maLoai;
            this.formupdateDuan.controls.loaiGiaoDich.setValue(this.maloaigiaodich);
            this.madanhmuc = this.duan.danhMuc.maDanhMuc;
            this.formupdateDuan.controls.danhMuc.setValue(this.madanhmuc);
            this.matrangthai = this.duan.trangThai;
            this.formupdateDuan.controls.trangThai.setValue(this.matrangthai);
            this.loaiduan = this.duan.loaiDuAn;
            this.formupdateDuan.controls.loaiDuAn.setValue(this.loaiduan);
            this.getMatuTenHuong(this.duan.huong);
            this.formupdateDuan.controls.huong.setValue(this.mahuong);
            this.formupdateDuan.controls.dienTich.setValue(this.duan.dienTich);
            this.tinhthanhpho = this.duan.tinhThanhPho;
            this.formupdateDuan.controls.tinhThanhPho.setValue(this.tinhthanhpho);
            this.quanhuyen = this.duan.quanHuyen;
            this.formupdateDuan.controls.quanHuyen.setValue(this.quanhuyen);
            this.ds_mangHinh = this.duan.mangHinh;
            this.ds_tinhthanhphofromMock.forEach(tinh => {
                if (this.tinhthanhpho === tinh.tenTinhThanhPhoCodau) {
                    this.tinhthanhphokhongdau = tinh.tenTinhThanhPhoKhongdau;
                }
            })
            this.ds_quan = this.tinhThanhpho.layQuanHuyen(this.tinhthanhphokhongdau);
            this.taiKhoan = this.duan.taiKhoan;
            //end hiển thị dữ liệu trả về từ list
        });
    }
    getMatuTenHuong(ten) {
        this.ds_huong = ds_huong;
        this.ds_huong.forEach(h => {
            if (h.tenhuong === ten) {
                this.mahuong = h.mahuong;
            }
        })
    }

    ngOnInit(): void {
        this.flag = true;

        this.getDSDanhMuc();
        this.getDSDoiTac();
        this.getDSTinhThanhPho();
        this.getDSLoaiGiaoDich();
        this.getDSTrangThaiDuAn();
        this.getDSLoaiDuAn();
        this.getDSHuong();
    }
    getDSDanhMuc() {
        this.loaiGiaodichservice.getAllLoaiGiaoDich(0).subscribe(danhmuc => {
            this.ds_danhmuc = danhmuc.body;
        })
    }
    getDSDoiTac() {
        this.doiTacservice.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.TATCA).subscribe(doitac => {
            this.ds_doitac = doitac.body;

        })
    }
    getDSTinhThanhPho() {
        this.ds_tinhthanhpho = this.tinhThanhpho.LayDanhSachTP();
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
        this.ds_quan = this.tinhThanhpho.layQuanHuyen(e.target.value);
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

    getDSLoaiGiaoDich() {
        this.loaiGiaodichservice.getDSTenLoaiDanhMuc(0).subscribe(loaigiaodich => {
            this.ds_loaigiaodich = loaigiaodich.body;
        })
    }

    getDSTrangThaiDuAn() {
        this.ds_trangthaiduan = ds_trangthaiduan; //lấy từ mock để show giá trị

    }

    getDSLoaiDuAn() {
        this.ds_loaiduan = ds_loaiduan; //lấy từ mock để show giá trị
    }

    getDSHuong() {
        this.ds_huong = ds_huong; //lấy từ mock để show giá trị
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

    trangthai: any = {};
    getTrangThaiTheoMa(ma): any {
        this.ds_trangthaiduan.forEach(trangthai => {
            if (trangthai.matrangthai === ma) {
                this.trangthai = trangthai.matrangthai;
            }
        })
        return this.trangthai;
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
        let tenDuAn = this.formupdateDuan.controls.tenDuAn.value;
        let noiDungTomTat = this.formupdateDuan.controls.noiDungTomTat.value;
        let noiDungChiTiet = this.formupdateDuan.controls.noiDungChiTiet.value;
        let ngayDang = this.formupdateDuan.controls.ngayDang.value;
        let giaTien = this.formupdateDuan.controls.giaTien.value;
        let quanHuyen;
        let tinhThanhPho;
        if (this.tinhthanhphocodau) {
            tinhThanhPho = this.tinhthanhphocodau;
        }
        else {
            tinhThanhPho = this.formupdateDuan.controls.tinhThanhPho.value;
        }
        if (this.quanhuyenduocchon) {
            quanHuyen = this.quanhuyenduocchon;
        }
        else {
            quanHuyen = this.formupdateDuan.controls.quanHuyen.value;
        }

        let doiTac = this.formupdateDuan.controls.doiTac.value;
        let loaiGiaoDich = this.formupdateDuan.controls.loaiGiaoDich.value;
        let danhMuc = this.formupdateDuan.controls.danhMuc.value;
        let trangThai = this.formupdateDuan.controls.trangThai.value;
        let loaiDuAn = this.formupdateDuan.controls.loaiDuAn.value;
        let mahuong = this.formupdateDuan.controls.huong.value;
        let dienTich = this.formupdateDuan.controls.dienTich.value;

        //formControls
        let ObjectDoiTac = this.getDoiTacTheoMa(doiTac);
        let ObjectDanhMuc = this.getDanhMucTheoMa(danhMuc);
        let ObjectLoaiGiaoDich = this.getLoaiGiaoDichTheoMa(loaiGiaoDich);
        let tenloaiduan = this.getLoaiDuAnTheoMa(loaiDuAn);
        let tenhuong = this.getHuongTheoMa(mahuong);
        if (this.formupdateDuan.valid) {
            this.Submit(this.maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, ngayDang,
                ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, trangThai, tenloaiduan,
                tenhuong, dienTich)
        }

    }
    duanupdate: any = {};
    Submit(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, ngayDang,
        ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, trangThai, tenloaiduan,
        tenhuong, dienTich) {

        this.UploadHinhService.getHinhanh.subscribe(fileData => {
            if (maduan !== "") {
                let mangHinh: any[] = [];
                if (fileData.length > 0) {

                    for (let i = 0; i < fileData.length; i++) {
                        const formData = new FormData();
                        formData.append('file', fileData[i]);
                        this.UploadHinhService.UploadImage(formData).subscribe(events => {
                            if (events.type == HttpEventType.UploadProgress) {
                                console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                            } else if (events.type === HttpEventType.Response) {

                                let mahinh, tenhinh;
                                mahinh = "HA" + (new Date()).getTime().toString();
                                if (events.body.file.lastIndexOf("/") >= 0) {
                                    tenhinh = events.body.file.substring(events.body.file.lastIndexOf("/") + 1);
                                } else if (events.body.file.lastIndexOf("\\") >= 0) {
                                    tenhinh = events.body.file.substring(events.body.file.lastIndexOf("\\") + 1);
                                }

                                mangHinh.push(new HINHANH(mahinh, tenhinh, tenhinh));
                                this.duanupdate = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, mangHinh, ngayDang,
                                    ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, trangThai, tenloaiduan,
                                    tenhuong, dienTich, this.taiKhoan);
                                this.duAnService.updateDuAn(this.duanupdate).subscribe(res => {
                                    this.statusUpdate.status = true;
                                    this.statusUpdate.message = "Dự Án đã được Cập Nhật";
                                    setTimeout(() => {
                                        this.statusUpdate.status = false;
                                    }, 2000);
                                    maduan = "";

                                });
                                if (this.ds_mangHinh.length > 0) {
                                    this.ds_mangHinh.forEach(ah => {
                                        if (ah.tenhinh !== 'logo.png') {
                                            this.UploadHinhService.DeleteImage(ah.tenhinh).subscribe(events => {
                                                if (events.type == HttpEventType.UploadProgress) {
                                                    console.log('delete progress: ', Math.round(events.loaded / events.total * 100) + '%');

                                                }
                                            })
                                        }
                                    })

                                }
                            }

                        })

                    }
                } else {
                    this.duanupdate = new DUAN(maduan, tenDuAn, noiDungTomTat, noiDungChiTiet, this.ds_mangHinh, ngayDang,
                        ObjectDoiTac, giaTien, ObjectLoaiGiaoDich, ObjectDanhMuc, quanHuyen, tinhThanhPho, trangThai, tenloaiduan,
                        tenhuong, dienTich, this.taiKhoan);
                    this.duAnService.updateDuAn(this.duanupdate).subscribe(res => {
                        this.statusUpdate.status = true;
                        this.statusUpdate.message = "Dự Án đã được Cập Nhật";
                        setTimeout(() => {
                            this.statusUpdate.status = false;
                        }, 2000);
                        maduan = "";

                    });
                }
            }

        })
    }
}
