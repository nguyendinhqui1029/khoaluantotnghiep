import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
}