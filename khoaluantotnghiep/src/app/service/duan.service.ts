import { Injectable } from '@angular/core';
import { DUAN } from '../model/duan';
import { ds_duan } from '../model/mock_duan';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class DuAnService {
    static dsDuAn: any[] = [];// ds_duan;
    // static ds_du_an: any[] = [];
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
            DuAnService.dsDuAn = e.body;
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

    // layDanhSachDuAnTheoTrangThai(trangThai): DUAN[] {
    //     let arr = Array();
    //     DuAnService.dsDuAn.forEach(element => {
    //         if (element.trangThai === trangThai) {
    //             arr.push(element);
    //         }
    //     });
    //     return arr;
    // }

    // layDanhSachDuAnTheoLoaiDuAn(loaiduan): DUAN[] { //lấy danh sách dự án nổi bật
    //     let arr = Array();
    //     DuAnService.dsDuAn.forEach(element => {
    //         if (element.loaiDuAn.indexOf(loaiduan) >= 0) {
    //             arr.push(element);
    //         }
    //     });
    //     return arr;
    // }


    // layDanhSachDuAn(): DUAN[] {
    //     return DuAnService.dsDuAn;
    // }
    // layDanhSachDuAnTheoDanhMuc(maDanhMuc): DUAN[] {
    //     let arr = Array();
    //     DuAnService.dsDuAn.forEach(e => {
    //         if (e.trangThai == ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH && e.danhMuc.maDanhMuc === maDanhMuc) {
    //             arr.push(e);
    //         }
    //     });
    //     return arr;
    // }

}