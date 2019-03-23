import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { DANHMUC } from 'src/app/model/danhmuc';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { element } from '@angular/core/src/render3';
import { FormBuilder } from '@angular/forms';
//import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'search-component',
    templateUrl: './_search.component.html',
    styleUrls: ['./_search.component.scss']
})
export class SearchComponent implements OnInit {
    search: string = 'search-center';
    modeSearch: any = { "SEARCH_CENTER": "search-center", "SEARCH_RIGHT": "search-right" };
    dsLoaiGiaoDich: any[] = [];
    dsDanhMuc: any[] = [];
    dsQuanHuyen: any[] = [];
    dsTinhThanhPho: any[] = [];
    dsMucGia: any[] = [];
    dsDuAn: DUAN[] = [];
    dsKetQuaTim: DUAN[] = [];
    TRANG_THAI_DU_AN = { "tatca": 0, "binhthuong": 1, "moi": 2, "phobien": 3, "hethan": 4 };
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
            this.getListLoaiGiaoDichTheoDanhMuc(this.dsDanhMuc[0].maDanhMuc);
            this.getListQuanHuyenTheoLoaiGiaoDich(this.dsLoaiGiaoDich[0].maLoaiGiaoDich);
            this.getListTinhThanhPhoTheoQuanHuyen(this.dsQuanHuyen[0].quanhuyen);
            this.getListGiaTheoTinhThanhPho(this.dsTinhThanhPho[0].tinhThanhPho);

        });

        // this.getListLoaiGiaoDich("DM001");
    }

    getListDanhMuc() {
        const dsTam: string[] = [];
        this.dsDuAn.forEach(duan => {
            if (dsTam.length <= 0) {
                this.dsDanhMuc.push({ "maDanhMuc": duan.loaiGiaoDich.maLoai, "tenDanhMuc": duan.loaiGiaoDich.tenLoai });
                dsTam.push(duan.loaiGiaoDich.maLoai);
            } else {
                if (dsTam.indexOf(duan.loaiGiaoDich.maLoai) <= -1) {
                    this.dsDanhMuc.push({ "maDanhMuc": duan.loaiGiaoDich.maLoai, "tenDanhMuc": duan.loaiGiaoDich.tenLoai });
                    dsTam.push(duan.loaiGiaoDich.maLoai);
                }
            }
        });
    }

    getListLoaiGiaoDichTheoDanhMuc(maDanhMuc) {
        const dsTam: string[] = [];
        this.dsDuAn.forEach(duan => {
            if (dsTam.length <= 0 && duan.loaiGiaoDich.maLoai === maDanhMuc) {
                this.dsLoaiGiaoDich.push({ "maLoaiGiaoDich": duan.danhMuc.maDanhMuc, "tenLoaiGiaoDich": duan.danhMuc.tenDanhMuc });
                dsTam.push(duan.danhMuc.maDanhMuc);
                this.dsKetQuaTim.push(duan);
            } else {
                if (dsTam.indexOf(duan.danhMuc.maDanhMuc) === -1 && duan.loaiGiaoDich.maLoai === maDanhMuc) {
                    this.dsLoaiGiaoDich.push({ "maLoaiGiaoDich": duan.danhMuc.maDanhMuc, "tenLoaiGiaoDich": duan.danhMuc.tenDanhMuc });
                    dsTam.push(duan.danhMuc.maDanhMuc);
                }
                if (duan.loaiGiaoDich.maLoai === maDanhMuc) {
                    this.dsKetQuaTim.push(duan);
                }
            }
        });
    }


    getListQuanHuyenTheoLoaiGiaoDich(maLoai) {
        const dsTam: string[] = [];
        this.dsKetQuaTim.forEach(duan => {
            if (dsTam.length <= 0 && duan.danhMuc.maDanhMuc === maLoai) {
                this.dsQuanHuyen.push({ "quanhuyen": duan.quanHuyen });
                dsTam.push(duan.quanHuyen);
            } else {
                if (dsTam.indexOf(duan.quanHuyen) === -1 && duan.danhMuc.maDanhMuc === maLoai) {
                    this.dsQuanHuyen.push({ "quanhuyen": duan.quanHuyen });
                    dsTam.push(duan.quanHuyen);
                }
            }
            if (duan.danhMuc.maDanhMuc !== maLoai) {
                this.dsKetQuaTim.splice(this.dsKetQuaTim.indexOf(duan), 1);
            }
        });
        console.log(this.dsQuanHuyen);
    }
    getListTinhThanhPhoTheoQuanHuyen(quanhuyen) {
        const dsTam: string[] = [];
        this.dsKetQuaTim.forEach(duan => {
            if (dsTam.length <= 0 && duan.quanHuyen === quanhuyen) {
                this.dsTinhThanhPho.push({ "tinhThanhPho": duan.tinhThanhPho });
                dsTam.push(duan.tinhThanhPho);
            } else {
                if (dsTam.indexOf(duan.quanHuyen) === -1 && duan.quanHuyen === quanhuyen) {
                    this.dsTinhThanhPho.push({ "tinhThanhPho": duan.tinhThanhPho });
                    dsTam.push(duan.tinhThanhPho);
                }
            }
            if (duan.quanHuyen !== quanhuyen) {
                this.dsKetQuaTim.splice(this.dsKetQuaTim.indexOf(duan), 1);
            }
        });
    }
    getListGiaTheoTinhThanhPho(thanhPho) {
        const dsTam: Number[] = [];
        this.dsKetQuaTim.forEach(duan => {
            if (dsTam.length <= 0 && duan.tinhThanhPho === thanhPho) {
                this.dsMucGia.push({ "giaTien": duan.giaTien });
                dsTam.push(duan.giaTien);
            } else {
                if (dsTam.indexOf(duan.giaTien) === -1 && duan.tinhThanhPho === thanhPho) {
                    this.dsMucGia.push({ "giaTien": duan.giaTien });
                    dsTam.push(duan.giaTien);
                }
            }
            if (duan.tinhThanhPho !== thanhPho) {
                this.dsKetQuaTim.splice(this.dsKetQuaTim.indexOf(duan), 1);
            }
        });
        this.dsMucGia.sort();
    }
    ngOnInit() {

    }
}
