import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { DANHMUC } from '../model/danhmuc';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class DanhMucService {
    dsDuAn: DANHMUC[] = [];;
    constructor(private http: HttpClient) {

    }

    getDSDanhMuc(trangThai): Observable<HttpResponse<DANHMUC[]>> {
        return this.http.get<DANHMUC[]>(ConfigService.URL + "get-all-danh-muc/" + trangThai, { observe: 'response' });
    }

    getDanhMucTheoMaDanhMuc(maDanhMuc): Observable<HttpResponse<DANHMUC>> {
        return this.http.get<DANHMUC>(ConfigService.URL + "get-danh-muc/" + maDanhMuc, { observe: 'response' });
    }

    //xoa du an theo maDanhMuc
    xoaDanhMucTheomaDanhMuc(maDanhMuc): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-danh-muc/" + maDanhMuc, httpOptions);
    }

    //them danh muc
    themDanhMuc(DanhMuc): Observable<any> {
        return this.http.post(ConfigService.URL + "add-danh-muc", DanhMuc);
    }

    //update du an
    updateDanhMuc(DanhMuc): Observable<any> {
        return this.http.put(ConfigService.URL + "update-danh-muc", DanhMuc);
    }
}