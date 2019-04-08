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

    getDSDanhMuc(): Observable<HttpResponse<DANHMUC[]>> {
        return this.http.get<DANHMUC[]>(ConfigService.URL + "get-all-danh-muc/0", { observe: 'response' });

    }
}