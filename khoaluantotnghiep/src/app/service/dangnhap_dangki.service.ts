import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { TAIKHOAN } from '../model/taikhoan';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class DangNhapDangKiService {
    constructor(private http: HttpClient) {

    }

    layTaiKhoanTheoEmail(email): Observable<HttpResponse<TAIKHOAN>> {
        return this.http.get<TAIKHOAN>(ConfigService.URL + "get-tai-khoan-theo-email/" + email, { observe: "response" });
    }

    themTaiKhoan(taikhoan): Observable<any> {
        return this.http.post(ConfigService.URL + "add-tai-khoan", taikhoan);
    }

    sendEmail(data): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Access-Control-Allow-Credentials': 'true'
            })
        };
        return this.http.post<any>(ConfigService.URL + "sendemail", data, httpOptions);
    }

    layMaXacNhanTheoEmail(email): Observable<HttpResponse<any>> {
        return this.http.get(ConfigService.URL + "get-ma-xac-nhan-email/" + email, { observe: "response" });
    }


    xoaMaXacNhanTheoEmail(email): any {
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Access-Control-Allow-Credentials': 'true'
            })
        };
        return this.http.delete<any>(ConfigService.URL + 'delete-ma-xac-nhan/' + email, httpOptions);

    }
}