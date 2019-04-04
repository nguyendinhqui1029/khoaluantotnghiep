import { Injectable } from '@angular/core';
import { SLIDER } from '../model/slider';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class SliderService {
    static mode: any = { "LOGO": "LOGO", "SLIDER": "SLIDER", "BANNER": "BANNER" }
    constructor(private http: HttpClient) {

    }
    getListSliderTheoTrangThai(trangthai): Observable<HttpResponse<SLIDER[]>> {
        return this.http.get<SLIDER[]>(ConfigService.URL + "get-all-slider/" + trangthai, { observe: 'response' });
    }

}