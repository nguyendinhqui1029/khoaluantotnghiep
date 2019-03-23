import { Injectable } from '@angular/core';
import { DUAN } from '../model/duan';
import { ds_duan } from '../model/mock_duan';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class DuAnService {
    dsDuAn: DUAN[] = ds_duan;
    modeTrangThai: any = { "CHUAGIAODICH": 1, "DANGGIAODICH": 2, "DUANMOI": 3 };
    modeGiaoDich: any = {};
    URL: String = "https://serverkhoaluan2019.herokuapp.com/";
    constructor(private http: HttpClient) {

    }
    getListDuAn(trangthai): Observable<HttpResponse<DUAN[]>> {
        return this.http.get<DUAN[]>(this.URL + "get-all-du-an/" + trangthai, { observe: 'response' });
    }



    layDanhSachDuAnTheoTrangThai(trangThai): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(element => {
            if (element.trangThai === trangThai) {
                arr.push(element);
            }
        });
        return arr;
    }

    layDanhSachDuAnTheoLoaiDuAn(loaiduan): DUAN[] { //lấy danh sách dự án nổi bật
        let arr = Array();
        this.dsDuAn.forEach(element => {
            if (element.loaiDuAn.indexOf(loaiduan) >= 0) {
                arr.push(element);
            }
        });
        return arr;
    }


    layDanhSachDuAn(): DUAN[] {
        return this.dsDuAn;
    }
    layDanhSachDuAnTheoDanhMuc(maDanhMuc): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(e => {
            if (e.trangThai == this.modeTrangThai.CHUAGIAODICH && e.danhMuc.maDanhMuc === maDanhMuc) {
                arr.push(e);
            }
        });
        return arr;
    }

    layDanhSachDuAnTheoLoaiGiaoDich(maLoaiGiaoDich): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(e => {
            if (e.trangThai == this.modeTrangThai.CHUAGIAODICH && e.loaiGiaoDich.maLoai === maLoaiGiaoDich) {
                arr.push(e);
            }
        });
        return arr;
    }

    layDanhSachDuAnTheoTenDanhMuc(tenDanhMuc): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(e => {
            if (e.trangThai == this.modeTrangThai.CHUAGIAODICH && e.danhMuc.tenDanhMuc.indexOf(tenDanhMuc) >= 0) {
                arr.push(e);
            }
        });
        return arr;
    }
}