import { Injectable } from '@angular/core';
import { TAIKHOAN } from '../model/taikhoan';
import { Observable } from 'rxjs';
import * as http_1 from '@angular/http';

@Injectable()
export class USERService {
    cognitoUser: any;
    url: string = "http://localhost:8081/get-tai-khoan";
    constructor(private http: http_1.Http) {

    }
    LayThongTinDangNhap(email: String): Observable<TAIKHOAN> {

        let chuoi = "/" + email;
        return this.http.get(this.url + chuoi)
            .map((response: Response) => response.json());

    }
}