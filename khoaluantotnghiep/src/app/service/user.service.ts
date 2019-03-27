import { Injectable } from '@angular/core';
import { TAIKHOAN } from '../model/taikhoan';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable()
export class USERService {
    cognitoUser: any;
    url: string = "http://localhost:8081/get-tai-khoan";
    constructor(private http: HttpClient) {

    }
    LayThongTinDangNhap(email: String): Observable<HttpResponse<TAIKHOAN>> {
        return this.http.get<TAIKHOAN>(this.url, { observe: "response" });
    }
}