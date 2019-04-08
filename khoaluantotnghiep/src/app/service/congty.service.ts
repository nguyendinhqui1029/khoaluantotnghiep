import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONGTY } from '../model/congty';
import { ConfigService } from './config.service';

@Injectable()
export class CongTyService {
    constructor(private http: HttpClient) {

    }
    getCongTy(): Observable<HttpResponse<CONGTY>> {
        return this.http.get<CONGTY>(ConfigService.URL + "get-all-cong-ty", { observe: 'response' });
    }
}