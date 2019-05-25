
import { Injectable } from '@angular/core';
import { DUAN } from '../model/duan';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class UploadImageService {
    dsHinhTam: any = [];
    constructor(private http: HttpClient) {
        this.getAllNameImages().subscribe(images => {
            if (JSON.parse(JSON.stringify(images)).body) {
                this.dsHinhTam = JSON.parse(JSON.stringify(images)).body;
            }
        });
    }

    UploadImage(formData): Observable<any> {

        return this.http.post(ConfigService.URL + 'upload', formData, {
            reportProgress: true,
            observe: 'events'
        })
    }

    DeleteImage(mahinh) {
        if (this.KiemTraTonTaiHinhServer(mahinh)) {
            return this.http.delete(ConfigService.URL + 'delete-images/' + mahinh, {
                reportProgress: true,
                observe: 'events'
            });
        }
        return;
    }
    getAllNameImages() {
        return this.http.get(ConfigService.URL + 'get-all-name-images', {
            reportProgress: true,
            observe: 'events'
        });
    }

    getURLImageByName(tenhinh): string {
        let urlHinh: string = ConfigService.URL + "get-images/";
        if (this.KiemTraTonTaiHinhServer(tenhinh)) {
            urlHinh += tenhinh;
        } else {
            urlHinh += "logo.png";
        }
        return urlHinh;
    }
    //Behivior hinh
    valueHinhanh = new BehaviorSubject<any>({});
    getHinhanh = this.valueHinhanh.asObservable();
    setValueHinhanh(value) {
        this.valueHinhanh.next(value);
    }


    flag: Boolean = false;
    KiemTraTonTaiHinhServer(tenhinh): Boolean {
        this.flag = false;
        this.dsHinhTam.forEach(e => {
            if (e.name === tenhinh) {
                console.log(e.name + "===" + tenhinh)
                this.flag = true;
            }
        });
        return this.flag;
    }
}