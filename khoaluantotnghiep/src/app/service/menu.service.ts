import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {

    }

    deleteMenuTheoIDMenu(idmenu): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete<any>(ConfigService.URL + "delete-menu/" + idmenu, httpOptions).pipe(
            tap(_ => console.log('deleted product id=${idmenu}'))
        );
    }
}