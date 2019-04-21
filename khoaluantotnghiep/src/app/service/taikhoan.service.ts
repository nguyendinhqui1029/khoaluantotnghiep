import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { TAIKHOAN } from '../model/taikhoan';

@Injectable()
export class TaiKhoanService {
    constructor(private http: HttpClient) {

    }

    getDSTaiKhoan(): Observable<HttpResponse<TAIKHOAN[]>> {
        return this.http.get<TAIKHOAN[]>(ConfigService.URL + "get-all-tai-khoan", { observe: 'response' });
    }

    getTaiKhoantheoMa(id): Observable<HttpResponse<TAIKHOAN[]>> {
        return this.http.get<TAIKHOAN[]>(ConfigService.URL + "get-tai-khoan/" + id, { observe: 'response' });
    }

    //xoa tai khoan
    xoaTaiKhoanTheomaTaiKhoan(maTaiKhoan): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-tai-khoan/" + maTaiKhoan, httpOptions);
    }

    //them tai khoan
    themTaiKhoan(TK): Observable<any> {
        return this.http.post(ConfigService.URL + "add-tai-khoan", TK);
    }

    //update tai khoan
    updateTaiKhoan(TK): Observable<any> {
        return this.http.put(ConfigService.URL + "update-tai-khoan", TK);
    }
}