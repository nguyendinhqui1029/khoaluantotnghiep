import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    static URL: string = "https://serverkhoaluan2019.herokuapp.com/";
    //static URL: string = "http://localhost:8081/";
    static LOAI_TAI_KHOAN: any = { "CUSTOMER": 1, "EMPLOYEE": 2, "ADMIN": 3 };
    static TRANG_THAI_DU_AN: any = { "TATCADUAN": 0, "CHUAGIAODICH": 1, "DANGGIAODICH": 2, "DUANMOI": 3 };
    static TRANG_THAI_TIN_TUC: any = { "NEW": 'new', "PHOBIEN": 'phổ biến' };
    static LOAI_MENU = { "TATCA": 0, "MENU_BOTTOM": 1, "MENU_TOP": 2, "MENU_ADMIN": 3 };
    static TRANG_THAI_DANHMUC = { "TATCA": 0, "MUABAN": 'Mua bán', "CHOTHUE": "Cho thuê", "MAMUABAN": "DM001", "MACHOTHUE": "DM002" };
    static TRANG_THAI_LOAIGIAODICH = { "TATCA": 0 };
    static LOAI_TIN_TUC: any = { "TATCA": 0 };

}