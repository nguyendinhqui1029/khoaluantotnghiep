import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { GIOITHIEU } from '../model/gioithieu';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class GioiThieuService {
    constructor(private http: HttpClient) {

    }

    maGioiThieu: any;
    setGioiThieu(value) {
        this.maGioiThieu = value;
    }
    getGioiThieu() {
        return this.maGioiThieu;
    }

    getDanhSachGioiThieu(): Observable<HttpResponse<GIOITHIEU[]>> {
        return this.http.get<GIOITHIEU[]>(ConfigService.URL + "get-all-gioi-thieu", { observe: 'response' });
    }

    getGioiThieutheoMaGioiThieu(id): Observable<HttpResponse<GIOITHIEU[]>> {
        return this.http.get<GIOITHIEU[]>(ConfigService.URL + "get-gioi-thieu/" + id, { observe: 'response' });
    }

    valueSource = new BehaviorSubject<any>({});
    currentMessage = this.valueSource.asObservable();
    changeValue(value) {
        this.valueSource.next(value);
    }

    //xoa gioi thieu theo maGioiThieu
    xoaGioiThieuTheomaGioiThieu(maGioiThieu): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-gioi-thieu/" + maGioiThieu, httpOptions);
    }

    //them gioi thieu
    themGioiThieu(gioiThieu): Observable<any> {
        return this.http.post(ConfigService.URL + "add-gioi-thieu", gioiThieu);
    }

    //update gioi thieu
    updateGioiThieu(gioiThieu): Observable<any> {
        return this.http.put(ConfigService.URL + "update-gioi-thieu", gioiThieu);
    }
}