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

    getDoiTacTheoMaDoiTac(maDoiTac): Observable<HttpResponse<DOITAC>> {
        return this.http.get<DOITAC>(ConfigService.URL + "get-doi-tac/" + maDoiTac, { observe: 'response' });
    }

    //them doi tac
    themDoiTac(doiTac): Observable<any> {
        return this.http.post(ConfigService.URL + "add-doi-tac", doiTac);
    }

    //xoa du an theo maDoiTac
    xoaDoiTacTheomaDoiTac(maDoiTac): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-doi-tac/" + maDoiTac, httpOptions);
    }

    //update doi tac
    updateDoiTac(doitac): Observable<any> {
        return this.http.put(ConfigService.URL + "update-doi-tac", doitac);
    }
}