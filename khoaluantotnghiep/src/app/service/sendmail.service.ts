import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SendMailService {
    //URL="";
    URL: string = "http://localhost:8081/";
    constructor(private http: HttpClient) {

    }
    sendEmail(data): Observable<HttpResponse<any>> {
        return this.http.post(this.URL + "sendemail", data, { observe: "response" });
    }
}