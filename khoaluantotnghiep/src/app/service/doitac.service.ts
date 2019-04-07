import { Injectable } from '@angular/core';
import { DOITAC } from '../model/doitac';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';


@Injectable()
export class DoiTacService {
    dsDuAn: DOITAC[] = [];;
    constructor(private http: HttpClient) {

    }
    getListDoiTac(): Observable<HttpResponse<DOITAC[]>> {
        return this.http.get<DOITAC[]>(ConfigService.URL + "get-all-doi-tac", { observe: 'response' });
    }


}