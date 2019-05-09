
import { Injectable } from '@angular/core';
import { DUAN } from '../model/duan';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class UploadImageService {
    constructor(private http: HttpClient) {

    }

    UploadImage(formData): Observable<any> {

        return this.http.post(ConfigService.URL + 'upload', formData, {
            reportProgress: true,
            observe: 'events'
        })
    }

    DeleteImage(mahinh) {
        return this.http.delete(ConfigService.URL + 'delete-images/' + mahinh, {
            reportProgress: true,
            observe: 'events'
        });
    }
    //Behivior hinh
    valueHinhanh = new BehaviorSubject<any>({});
    getHinhanh = this.valueHinhanh.asObservable();
    setValueHinhanh(value) {
        this.valueHinhanh.next(value);
    }
}