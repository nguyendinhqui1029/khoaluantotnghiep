import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { TAIKHOAN } from '../model/taikhoan';
import { Observable } from 'rxjs';

@Injectable()
export class DangNhapDangKiService {
    URL: string = "https://serverkhoaluan2019.herokuapp.com/";
    //URL: string = "http://localhost:8081/";
    constructor(private http: HttpClient) {

    }

    layTaiKhoanTheoEmail(email): Observable<HttpResponse<TAIKHOAN>> {
        return this.http.get<TAIKHOAN>(this.URL + "get-tai-khoan-theo-email/" + email, { observe: "response" });
    }

    themTaiKhoan(taikhoan): Observable<any> {
        return this.http.post(this.URL + "add-tai-khoan", taikhoan);
    }
}