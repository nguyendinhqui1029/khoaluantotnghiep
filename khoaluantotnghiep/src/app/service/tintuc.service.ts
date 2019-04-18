import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ds_tinhthanhpho } from '../model/mock_tinhthanhpho';
import { TINTUC } from '../model/tintuc';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from './config.service';


@Injectable()
export class TinTucService {
    ds_: TINTUC[] = [];
    constructor(private http: HttpClient) {

    }

    getDSTinTuc(): Observable<HttpResponse<TINTUC[]>> {
        return this.http.get<TINTUC[]>(ConfigService.URL + "get-all-tin-tuc", { observe: 'response' });
    }

    getTinTuctheoMaLoai(id): Observable<HttpResponse<TINTUC[]>> {
        return this.http.get<TINTUC[]>(ConfigService.URL + "get-tin-tuc/" + id, { observe: 'response' });
    }

    //xoa loai tin tuc
    xoaTinTucTheomaLoai(maTinTuc): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-tin-tuc/" + maTinTuc, httpOptions);
    }

    //them loai tin tuc
    themTinTuc(TinTuc): Observable<any> {
        return this.http.post(ConfigService.URL + "add-tin-tuc", TinTuc);
    }

    //update loai giao dich
    updateTinTuc(TinTuc): Observable<any> {
        return this.http.put(ConfigService.URL + "update-tin-tuc", TinTuc);
    }

}