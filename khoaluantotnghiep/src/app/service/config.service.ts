import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    static URL: string = "https://serverkhoaluan2019.herokuapp.com/";
    //static URL: string = "http://localhost:8081/";
    static LOAI_TAI_KHOAN = { "CUSTOMER": 1, "EMPLOYEE": 2, "ADMIN": 3 };
}