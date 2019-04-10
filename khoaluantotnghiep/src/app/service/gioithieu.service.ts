import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
    valueSource = new BehaviorSubject<any>({});
    currentMessage = this.valueSource.asObservable();
    changeValue(value) {
        this.valueSource.next(value);
    }
}