import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable()
export class SendMailService {
    constructor(private http: HttpClient) {

    }
    sendEmail(data): Observable<HttpResponse<any>> {
        return this.http.post(ConfigService.URL + "sendemail", data, { observe: "response" });
    }
}