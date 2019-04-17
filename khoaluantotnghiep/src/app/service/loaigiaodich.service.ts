import { Injectable } from '@angular/core';
import { LOAIGIAODICH } from '../model/loaigiaodich';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ConfigService } from './config.service';
import { DANHMUC } from '../model/danhmuc';
@Injectable()
export class LoaiGiaoDichService {
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    getAllLoaiGiaoDich(trangthai): Observable<HttpResponse<DANHMUC[]>> {
        return this.http.get<DANHMUC[]>(ConfigService.URL + "get-all-danh-muc/" + trangthai, { observe: 'response' });
    }
    addLoaiGiaoDich(loaigiaodich: LOAIGIAODICH): Observable<LOAIGIAODICH> {
        return this.http.post<LOAIGIAODICH>(ConfigService.URL, loaigiaodich, this.httpOptions);
    }
    getDSTenLoaiDanhMuc(trangthai): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(ConfigService.URL + "get-all-loai-giao-dich/" + trangthai, { observe: 'response' });
    }

    getLoaiGiaoDichtheoMaLoai(id): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(ConfigService.URL + "get-loai-giao-dich/" + id, { observe: 'response' });
    }

    //xoa loai giao dich
    xoaLoaiGiaoDichTheomaLoai(maLoaiGiaoDich): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-loai-giao-dich/" + maLoaiGiaoDich, httpOptions);
    }

    //them loai giao dich
    themLoaiGiaoDich(LoaiGiaoDich): Observable<any> {
        return this.http.post(ConfigService.URL + "add-loai-giao-dich", LoaiGiaoDich);
    }

    //update loai giao dich
    updateLoaiGiaoDich(LoaiGiaoDich): Observable<any> {
        return this.http.put(ConfigService.URL + "update-loai-giao-dich", LoaiGiaoDich);
    }
}