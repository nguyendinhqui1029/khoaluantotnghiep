import { Injectable } from '@angular/core';
import { DUAN } from '../model/duan';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class DuAnService {
    dsDuAn: any[] = []; //ds_duan;
    // static ds_du_an: any[] = [];
    valueSource = new BehaviorSubject<any[]>([]);
    currentMessage = this.valueSource.asObservable();

    //Cập nhật số lượng dự án chưa duyệt
    soChuaDuyet = new BehaviorSubject<Number>(0);
    soChuaDuyetMessage = this.soChuaDuyet.asObservable();
    setSoLuongChuaDuyet(sl) {
        this.soChuaDuyet.next(sl);
    }
    //Cập nhật số lượng dự án chưa duyệt

    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Credentials': 'true'
        })
    };
    setValueForDSDuAn() {
        this.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(e => {
            this.dsDuAn = e.body;
        });
    }


    constructor(private http: HttpClient) {

    }
    getListDuAn(trangthai): Observable<HttpResponse<any[]>> {
        return this.http.get<DUAN[]>(ConfigService.URL + "get-all-du-an/" + trangthai, { observe: 'response' });
    }
    getDuAnTheoMaDuAn(maDuAn): Observable<HttpResponse<DUAN>> {
        return this.http.get<DUAN>(ConfigService.URL + "get-du-an/" + maDuAn, { observe: 'response' });
    }

    getDuAnTheoTrangThai(trangthai): Observable<HttpResponse<DUAN[]>> {
        return this.http.get<DUAN[]>(ConfigService.URL + "get-all-du-an/" + trangthai, { observe: 'response' });
    }

    getDuAnLimitTheoTrangThai(vtbd, sl, trangthai) {
        return this.http.get<DUAN[]>(ConfigService.URL + "get-limit-du-an/" + vtbd + "/" + sl + "/" + trangthai, { observe: 'response' });
    }

    //Truyen du lieu cho du an list/gird
    setValueDanhSachPhanTrang(value) {
        this.valueSource.next(value);
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
            if (e.trangThai == ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH && e.danhMuc.maDanhMuc === maDanhMuc) {
                arr.push(e);
            }
        });
        return arr;
    }

    layDanhSachDuAnTheoLoaiGiaoDich(maLoaiGiaoDich): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(e => {
            if (e.trangThai == ConfigService.TRANG_THAI_DU_AN.DANGGIAODICH && e.loaiGiaoDich.maLoai === maLoaiGiaoDich) {
                arr.push(e);
            }
        });
        return arr;
    }

    layDanhSachDuAnTheoTenDanhMuc(tenDanhMuc): DUAN[] {
        let arr = Array();
        this.dsDuAn.forEach(e => {
            if (e.trangThai == ConfigService.TRANG_THAI_DU_AN.DANGGIAODICH && e.danhMuc.tenDanhMuc.indexOf(tenDanhMuc) >= 0) {
                arr.push(e);
            }
        });
        return arr;
    }

    //xoa du an theo maDuAn
    xoaDuAnTheomaDuAn(maDuAn): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-du-an/" + maDuAn, httpOptions);
    }

    //them du an
    themDuAn(duAn): Observable<any> {
        return this.http.post(ConfigService.URL + "add-du-an", duAn);
    }

    //update du an
    updateDuAn(duAn): Observable<any> {
        return this.http.put(ConfigService.URL + "update-du-an", duAn);
    }

    //Behivior thong tin du an
    valueThongtin = new BehaviorSubject<any>({});
    getThongTin = this.valueThongtin.asObservable();
    setValueThongTin(value) {
        this.valueThongtin.next(value);
    }


}