import { Injectable } from '@angular/core';
import { LOAIGIAODICH } from '../model/loaigiaodich';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ConfigService } from './config.service';
@Injectable()
export class LoaiGiaoDichService {
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    getAllLoaiGiaoDich(trangthai): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(ConfigService.URL + "get-all-danh-muc/" + trangthai, { observe: 'response' });
    }
    addLoaiGiaoDich(loaigiaodich: LOAIGIAODICH): Observable<LOAIGIAODICH> {
        return this.http.post<LOAIGIAODICH>(ConfigService.URL, loaigiaodich, this.httpOptions);
    }
    getDSTenLoaiDanhMuc(trangthai): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(ConfigService.URL + "get-all-loai-giao-dich/" + trangthai, { observe: 'response' });
    }
}