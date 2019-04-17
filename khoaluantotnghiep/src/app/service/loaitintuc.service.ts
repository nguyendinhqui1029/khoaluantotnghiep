import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LOAITINTUC } from '../model/loaitintuc';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class LoaiTinTucService {
    constructor(private http: HttpClient) {

    }
    maTinTuc: any;
    setTinTuc(value) {
        this.maTinTuc = value;
    }
    getTinTuc() {
        return this.maTinTuc;
    }
    getDsMeNUTheoType(): Observable<HttpResponse<LOAITINTUC[]>> {
        return this.http.get<LOAITINTUC[]>(ConfigService.URL + "get-all-loai-tin-tuc/0", { observe: 'response' });
    }
    valueSource = new BehaviorSubject<any[]>([]);
    currentMessage = this.valueSource.asObservable();
    changeValue(value) {
        this.valueSource.next(value);
    }



    getDSLoaiTinTuc(): Observable<HttpResponse<LOAITINTUC[]>> {
        return this.http.get<LOAITINTUC[]>(ConfigService.URL + "get-all-loai-tin-tuc/0", { observe: 'response' });
    }

    getLoaiTinTuctheoMaLoai(id): Observable<HttpResponse<LOAITINTUC[]>> {
        return this.http.get<LOAITINTUC[]>(ConfigService.URL + "get-loai-tin-tuc/" + id, { observe: 'response' });
    }

    //xoa loai tin tuc
    xoaLoaiTinTucTheomaLoai(maLoaiTinTuc): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-loai-tin-tuc/" + maLoaiTinTuc, httpOptions);
    }

    //them loai tin tuc
    themLoaiTinTuc(LoaiTinTuc): Observable<any> {
        return this.http.post(ConfigService.URL + "add-loai-tin-tuc", LoaiTinTuc);
    }

    //update loai giao dich
    updateLoaiTinTuc(LoaiTinTuc): Observable<any> {
        return this.http.put(ConfigService.URL + "update-loai-tin-tuc", LoaiTinTuc);
    }
}