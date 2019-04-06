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



}