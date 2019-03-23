import { Injectable } from '@angular/core';
import { LOAIGIAODICH } from '../model/loaigiaodich';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable()
export class LoaiGiaoDichService {
    URL: string = "https://serverkhoaluan2019.herokuapp.com/";
    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    getAllLoaiGiaoDich(trangthai): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(this.URL + "get-all-danh-muc/" + trangthai, { observe: 'response' });
    }
    addLoaiGiaoDich(loaigiaodich: LOAIGIAODICH): Observable<LOAIGIAODICH> {
        return this.http.post<LOAIGIAODICH>(this.URL, loaigiaodich, this.httpOptions);
    }
}