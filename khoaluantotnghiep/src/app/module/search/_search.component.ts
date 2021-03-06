import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { KetQuaTimService } from 'src/app/service/ketquatim.service';
import { ConfigService } from 'src/app/service/config.service';

//import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'search-component',
    templateUrl: './_search.component.html',
    styleUrls: ['./_search.component.scss']
})
export class SearchComponent implements OnInit {
    search: string = 'search-center';
    modeSearch: any = { "SEARCH_CENTER": "search-center", "SEARCH_RIGHT": "search-right" };
    dsLoaiGiaoDich: any[] = [{ "maLoaiGiaoDich": "0", "tenLoaiGiaoDich": "Tất cả danh mục" }];
    dsDanhMuc: any[] = [{ "maDanhMuc": "0", "tenDanhMuc": "--Chọn loại bất động sản--" }];
    dsQuanHuyen: any[] = [{ "maquanhuyen": "0", "tenquanhuyen": "Tất cả Quận/Huyện" }];
    dsTinhThanhPho: any[] = [{ "matinhThanhPho": "0", "tentinhThanhPho": "Tất cả Tỉnh/Thành Phố" }];
    dsMucGia: any[] = [{ "magiaTien": "0", "tengiaTien": "Tất cả mức giá" }];
    dsDuAn: DUAN[] = [];
    dsKetQuaTim: DUAN[] = [];
    danhmuc: string = "0";
    loaigiaodich: string = "0";
    quanhuyen: string = "0";
    tinhthanhpho: string = "0";
    giatien: Number = 0;
    TRANG_THAI_DU_AN = { "tatca": 0, "binhthuong": 1, "moi": 2, "phobien": 3, "hethan": 4 };
    formHopLe: Number = 0;
    constructor(private route: Router,
        private router: ActivatedRoute,
        private duAnService: DuAnService,
        private ketQuaTimService: KetQuaTimService) {
        if (this.router.snapshot.routeConfig.path === 'trang-chu' || this.router.snapshot.routeConfig.path === 'tim-kiem') {
            this.search = this.modeSearch.SEARCH_CENTER;
        } else {
            this.search = this.modeSearch.SEARCH_RIGHT;
        }
        this.getListDuAn(this.TRANG_THAI_DU_AN.tatca);

    }

    getListDuAn(trangthai) {
        this.duAnService.getListDuAn(trangthai).subscribe(response => {
            this.dsDuAn = response.body;
            this.getListDanhMuc();
        });
    }

    getListDanhMuc() {
        const dsTam: string[] = [];
        if (this.dsDuAn) {
            this.dsDuAn.forEach(duan => {
                if (dsTam.indexOf(duan.loaiGiaoDich.maLoai) <= -1
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    this.dsDanhMuc.push({ "maDanhMuc": duan.loaiGiaoDich.maLoai, "tenDanhMuc": duan.loaiGiaoDich.tenLoai });
                    dsTam.push(duan.loaiGiaoDich.maLoai);
                }
            });
        }
    }

    getListLoaiGiaoDichTheoDanhMuc(maDanhMuc) {
        const dsTam: string[] = [];
        this.dsLoaiGiaoDich = [{ "maLoaiGiaoDich": "0", "tenLoaiGiaoDich": "Tất cả danh mục" }];
        if (maDanhMuc !== "0") {
            this.dsDuAn.forEach(duan => {
                if (dsTam.indexOf(duan.danhMuc.maDanhMuc) === -1
                    && duan.loaiGiaoDich.maLoai === maDanhMuc
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    this.dsLoaiGiaoDich.push({ "maLoaiGiaoDich": duan.danhMuc.maDanhMuc, "tenLoaiGiaoDich": duan.danhMuc.tenDanhMuc });
                    dsTam.push(duan.danhMuc.maDanhMuc);
                }

            });
        }

    }

    getThanhPhoTheoLoaiGiaoDich(maLoai, maDanhMuc) {
        this.dsTinhThanhPho = [{ "matinhThanhPho": "0", "tentinhThanhPho": "Tất cả Tỉnh/Thành Phố" }];
        const dsTam: string[] = [];
        if (maLoai !== "0" && maDanhMuc !== "0") {
            this.dsDuAn.forEach(duan => {
                if (dsTam.indexOf(duan.tinhThanhPho) === -1
                    && duan.danhMuc.maDanhMuc === maLoai
                    && duan.loaiGiaoDich.maLoai === maDanhMuc
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH
                ) {
                    this.dsTinhThanhPho.push({ "matinhThanhPho": duan.tinhThanhPho, "tentinhThanhPho": duan.tinhThanhPho });
                    dsTam.push(duan.tinhThanhPho);
                }
            });
        }
    }
    getQuanHuyenTheoThanhPho(maLoai, maDanhMuc, thanhPho) {
        this.dsQuanHuyen = [{ "maquanhuyen": "0", "tenquanhuyen": "Tất cả Quận/Huyện" }];
        const dsTam: string[] = [];
        if (maLoai !== "0" && maDanhMuc !== "0" && thanhPho !== "0") {
            this.dsDuAn.forEach(duan => {
                if (dsTam.indexOf(duan.quanHuyen) === -1
                    && duan.danhMuc.maDanhMuc === maLoai
                    && duan.loaiGiaoDich.maLoai === maDanhMuc
                    && duan.tinhThanhPho === thanhPho
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    this.dsQuanHuyen.push({ "maquanhuyen": duan.quanHuyen, "tenquanhuyen": duan.quanHuyen });
                    dsTam.push(duan.quanHuyen);

                }
            });
        }

    }
    getGiaTheoQuanHuyen(maLoai, maDanhMuc, thanhPho, quanhuyen) {
        const dsTam: Number[] = [];
        this.dsMucGia = [{ "magiaTien": "0", "tengiaTien": "Tất cả mức giá" }];
        if (maLoai !== "0" && maDanhMuc !== "0" && thanhPho !== "0" && quanhuyen !== "0"
        ) {
            this.dsDuAn.forEach(duan => {
                if (dsTam.indexOf(duan.giaTien) === -1
                    && duan.danhMuc.maDanhMuc === maLoai
                    && duan.loaiGiaoDich.maLoai === maDanhMuc
                    && duan.quanHuyen === quanhuyen
                    && duan.tinhThanhPho === thanhPho
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    if (this.dsMucGia) {
                        this.dsMucGia.forEach(element => {
                            if (element.tengiaTien !== duan.giaTien) {
                                dsTam.push(duan.giaTien);
                            }
                        });
                    } else {

                        dsTam.push(duan.giaTien);
                    }
                }
            });
            this.dsMucGia.sort();
            if (dsTam) {
                if (dsTam.length >= 2) {
                    for (let i = 1; i < (dsTam.length - 1); i++) {
                        this.dsMucGia.push({ "magiaTien": this.findAvgOfPrice(dsTam[i], dsTam[i + 1]), "tengiaTien": this.findAvgOfPrice(dsTam[i], dsTam[i + 1]) });
                    }
                    if (this.dsMucGia.length > 10) {
                        let tam: any[] = [{ "magiaTien": "0", "tengiaTien": "Tất cả mức giá" }];
                        for (let i = 0; i <= (this.dsMucGia.length - 4); i = i + 2) {
                            tam.push({ "magiaTien": this.findAvgOfPrice(this.dsMucGia[i + 1].magiaTien, this.dsMucGia[i + 4].magiaTien), "tengiaTien": this.findAvgOfPrice(this.dsMucGia[i + 1].magiaTien, this.dsMucGia[i + 4].magiaTien) });
                        }
                        this.dsMucGia = tam;
                    }
                } else {
                    this.dsMucGia.push({ "magiaTien": dsTam[0], "tengiaTien": dsTam[0] });
                }

            }
        }

    }

    findAvgOfPrice(priceOne, priceTwo): Number {
        return Math.round((priceOne + priceTwo) / 2);
    }



    changeDanhMuc(event) {
        this.danhmuc = event.target.value;
        this.getListLoaiGiaoDichTheoDanhMuc(this.danhmuc);
        this.getThanhPhoTheoLoaiGiaoDich(this.loaigiaodich, this.danhmuc);
        this.getQuanHuyenTheoThanhPho(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho
        );
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);
    }

    changeLoaiGiaoDich(event) {
        this.loaigiaodich = event.target.value;
        this.getThanhPhoTheoLoaiGiaoDich(this.loaigiaodich, this.danhmuc);
        this.getQuanHuyenTheoThanhPho(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho
        );
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);
    }

    changeTinhThanhPho(event) {
        this.tinhthanhpho = event.target.value;
        this.getQuanHuyenTheoThanhPho(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho
        );
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);

    }
    changeQuanHuyen(event) {
        this.quanhuyen = event.target.value;
        this.getGiaTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.tinhthanhpho,
            this.quanhuyen);
    }
    changeMucGia(event) {
        this.giatien = event.target.value;
    }
    clickTimKiem() {
        const dstam: any[] = [];
        this.dsDuAn.forEach(duan => {
            if (this.tinhthanhpho === "0" && this.loaigiaodich === "0" && this.danhmuc === "0" && this.quanhuyen === "0" && Number(this.giatien) === 0) {
                if (duan.giaTien > this.giatien && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich === "0" && this.quanhuyen === "0" && this.tinhthanhpho === "0" && Number(this.giatien) === 0) {
                if (duan.giaTien > this.giatien && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho === "0" && this.quanhuyen === "0" && Number(this.giatien) === 0) {
                if (duan.giaTien > this.giatien
                    && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && this.loaigiaodich === duan.danhMuc.maDanhMuc
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho !== "0" && this.quanhuyen === "0" && Number(this.giatien) === 0) {
                if (duan.giaTien > this.giatien && this.tinhthanhpho === duan.tinhThanhPho
                    && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && this.loaigiaodich === duan.danhMuc.maDanhMuc
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho !== "0" && this.quanhuyen !== "0" && Number(this.giatien) === 0) {
                if (duan.giaTien > Number(this.giatien) && this.quanhuyen === duan.quanHuyen
                    && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && this.loaigiaodich === duan.danhMuc.maDanhMuc
                    && this.tinhthanhpho === duan.tinhThanhPho
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH
                ) {
                    dstam.push(duan);
                }
            } else {
                if (duan.giaTien <= Number(this.giatien) && this.quanhuyen === duan.quanHuyen
                    && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && this.loaigiaodich === duan.danhMuc.maDanhMuc
                    && this.tinhthanhpho === duan.tinhThanhPho
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH
                    && duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.DAGIAODICH
                ) {
                    dstam.push(duan);
                }
            }
        });
        //truyen du lieu qua trang timf kiem dung service
        this.ketQuaTimService.changeValue(dstam);
        this.route.navigate(["/tim-kiem"]);
    }
    ngOnInit() {

    }
}
