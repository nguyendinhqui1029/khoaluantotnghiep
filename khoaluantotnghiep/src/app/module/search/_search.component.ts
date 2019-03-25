import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';

//import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'search-component',
    templateUrl: './_search.component.html',
    styleUrls: ['./_search.component.scss']
})
export class SearchComponent implements OnInit {
    search: string = 'search-center';
    modeSearch: any = { "SEARCH_CENTER": "search-center", "SEARCH_RIGHT": "search-right" };
    dsLoaiGiaoDich: any[] = [{ "maLoaiGiaoDich": "0", "tenLoaiGiaoDich": "--Chọn loại danh mục--" }];
    dsDanhMuc: any[] = [{ "maDanhMuc": "0", "tenDanhMuc": "--Chọn loại bất động sản--" }];
    dsQuanHuyen: any[] = [{ "maquanhuyen": "0", "tenquanhuyen": "--Chọn Quận/Huyện--" }];
    dsTinhThanhPho: any[] = [{ "matinhThanhPho": "0", "tentinhThanhPho": "--Chọn Tỉnh/Thành Phố--" }];
    dsMucGia: any[] = [{ "magiaTien": "0", "tengiaTien": "--Chọn Mức giá--" }];
    dsDuAn: DUAN[] = [];
    dsKetQuaTim: DUAN[] = [];
    danhmuc: string = "0";
    loaigiaodich: string = "0";
    quanhuyen: string = "0";
    tinhthanhpho: string = "0";
    giatien: Number = 0;
    TRANG_THAI_DU_AN = { "tatca": 0, "binhthuong": 1, "moi": 2, "phobien": 3, "hethan": 4 };
    formHopLe: Number = 0;
    constructor(private router: ActivatedRoute, private duAnService: DuAnService) {
        if (this.router.snapshot.routeConfig.path === 'trang-chu') {
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
        this.dsDuAn.forEach(duan => {
            if (dsTam.indexOf(duan.loaiGiaoDich.maLoai) <= -1) {
                this.dsDanhMuc.push({ "maDanhMuc": duan.loaiGiaoDich.maLoai, "tenDanhMuc": duan.loaiGiaoDich.tenLoai });
                dsTam.push(duan.loaiGiaoDich.maLoai);
            }
        });
    }

    getListLoaiGiaoDichTheoDanhMuc(maDanhMuc) {
        const dsTam: string[] = [];
        this.dsLoaiGiaoDich = [{ "maLoaiGiaoDich": "0", "tenLoaiGiaoDich": "--Chọn loại danh mục--" }];
        this.dsDuAn.forEach(duan => {
            if (dsTam.indexOf(duan.danhMuc.maDanhMuc) === -1 && duan.loaiGiaoDich.maLoai === maDanhMuc) {
                this.dsLoaiGiaoDich.push({ "maLoaiGiaoDich": duan.danhMuc.maDanhMuc, "tenLoaiGiaoDich": duan.danhMuc.tenDanhMuc });
                dsTam.push(duan.danhMuc.maDanhMuc);
            }

        });

    }


    getListQuanHuyenTheoLoaiGiaoDich(maLoai, maDanhMuc) {
        this.dsQuanHuyen = [{ "maquanhuyen": "0", "tenquanhuyen": "--Chọn Quận/Huyện--" }];
        const dsTam: string[] = [];
        this.dsDuAn.forEach(duan => {
            if (dsTam.indexOf(duan.quanHuyen) === -1
                && duan.danhMuc.maDanhMuc === maLoai
                && duan.loaiGiaoDich.maLoai === maDanhMuc) {
                this.dsQuanHuyen.push({ "maquanhuyen": duan.quanHuyen, "tenquanhuyen": duan.quanHuyen });
                dsTam.push(duan.quanHuyen);

            }
        });

    }
    getListTinhThanhPhoTheoQuanHuyen(maLoai, maDanhMuc, quanhuyen) {
        this.dsTinhThanhPho = [{ "matinhThanhPho": "0", "tentinhThanhPho": "--Chọn Tỉnh/Thành Phố--" }];
        const dsTam: string[] = [];
        this.dsDuAn.forEach(duan => {
            if (dsTam.indexOf(duan.quanHuyen) === -1
                && duan.danhMuc.maDanhMuc === maLoai
                && duan.loaiGiaoDich.maLoai === maDanhMuc
                && duan.quanHuyen === quanhuyen) {
                this.dsTinhThanhPho.push({ "matinhThanhPho": duan.tinhThanhPho, "tentinhThanhPho": duan.tinhThanhPho });
                dsTam.push(duan.tinhThanhPho);
            }
        });

    }
    getListGiaTheoTinhThanhPho(maLoai, maDanhMuc, quanhuyen, thanhPho) {
        const dsTam: Number[] = [];
        this.dsMucGia = [{ "magiaTien": "0", "tengiaTien": "--Chọn Mức giá--" }];
        this.dsDuAn.forEach(duan => {
            if (dsTam.indexOf(duan.giaTien) === -1
                && duan.danhMuc.maDanhMuc === maLoai
                && duan.loaiGiaoDich.maLoai === maDanhMuc
                && duan.quanHuyen === quanhuyen
                && duan.tinhThanhPho === thanhPho) {
                this.dsMucGia.push({ "magiaTien": duan.giaTien, "tengiaTien": duan.giaTien });
                dsTam.push(duan.giaTien);
            }
        });

        this.dsMucGia.sort();
    }

    changeDanhMuc(event) {
        this.danhmuc = event.target.value;
        this.getListLoaiGiaoDichTheoDanhMuc(this.danhmuc);
    }

    changeLoaiGiaoDich(event) {
        this.loaigiaodich = event.target.value;
        this.getListQuanHuyenTheoLoaiGiaoDich(this.loaigiaodich, this.danhmuc);
    }
    changeQuanHuyen(event) {
        this.quanhuyen = event.target.value;
        this.getListTinhThanhPhoTheoQuanHuyen(
            this.loaigiaodich,
            this.danhmuc,
            this.quanhuyen);
    }
    changeTinhThanhPho(event) {
        this.tinhthanhpho = event.target.value;
        this.getListGiaTheoTinhThanhPho(
            this.loaigiaodich,
            this.danhmuc,
            this.quanhuyen,
            this.tinhthanhpho
        );

    }
    changeMucGia(event) {
        this.giatien = event.target.value;
    }
    clickTimKiem() {
        const dstam: any[] = [];
        this.dsDuAn.forEach(duan => {
            if (this.tinhthanhpho === "0" && this.loaigiaodich === "0" && this.danhmuc === "0" && this.quanhuyen === "0") {
                if (duan.giaTien > this.giatien) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich === "0" && this.quanhuyen === "0" && this.tinhthanhpho === "0") {
                if (duan.giaTien > this.giatien && this.loaigiaodich === duan.loaiGiaoDich.maLoai) {
                    dstam.push(duan);

                }
                console.log(1);
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho === "0" && this.quanhuyen === "0") {
                if (duan.giaTien > this.giatien && this.quanhuyen === duan.quanHuyen && this.danhmuc === duan.danhMuc.maDanhMuc) {
                    dstam.push(duan);
                }
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho === "0" && this.quanhuyen !== "0") {
                if (duan.giaTien > this.giatien && this.quanhuyen === duan.quanHuyen
                    && this.danhmuc === duan.danhMuc.maDanhMuc
                    && this.loaigiaodich === duan.loaiGiaoDich.maLoai) {
                    dstam.push(duan);
                }
                console.log(2);
            } else if (this.danhmuc !== "0" && this.loaigiaodich !== "0" && this.tinhthanhpho !== "0" && this.quanhuyen !== "0") {
                if (duan.giaTien > this.giatien && this.quanhuyen === duan.quanHuyen
                    && this.danhmuc === duan.loaiGiaoDich.maLoai
                    && this.loaigiaodich === duan.danhMuc.maDanhMuc
                    && this.tinhthanhpho === duan.tinhThanhPho
                ) {
                    dstam.push(duan);
                }
                console.log(3);
            }
        });
        console.log(dstam);
    }
    ngOnInit() {

    }
}
