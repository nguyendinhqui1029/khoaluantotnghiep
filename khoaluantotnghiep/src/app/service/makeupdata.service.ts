import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CONGTY } from '../model/congty';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { TAIKHOAN } from '../model/taikhoan';
import { DANHMUC } from '../model/danhmuc';
import { DOITAC } from '../model/doitac';
import { DUAN } from '../model/duan';
import { GIOITHIEU } from '../model/gioithieu';
import { MENU } from '../model/menu';
import { SLIDER } from '../model/slider';
import { TINTUC } from '../model/tintuc';
import { LOAIGIAODICH } from '../model/loaigiaodich';

@Injectable()
export class MakeUpDateService {
    URLLOCAL: string = "http://localhost:8081/";
    constructor(private http: HttpClient) {

    }
    getCongTy(): Observable<HttpResponse<CONGTY>> {
        return this.http.get<CONGTY>(ConfigService.URL + "get-all-cong-ty", { observe: 'response' });
    }

    getCongTyLoCal(): Observable<HttpResponse<CONGTY>> {
        return this.http.get<CONGTY>(this.URLLOCAL + "get-all-cong-ty", { observe: 'response' });
    }
    themCongTyLoCal(cty): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-cong-ty", cty);
    }
    ///////////////////////////////////////
    layTaiKhoanTheoEmail(): Observable<HttpResponse<TAIKHOAN>> {
        return this.http.get<TAIKHOAN>(ConfigService.URL + "get-all-tai-khoan", { observe: "response" });
    }
    layTaiKhoanTheoEmailLoCal(): Observable<HttpResponse<TAIKHOAN>> {
        return this.http.get<TAIKHOAN>(this.URLLOCAL + "get-all-tai-khoan", { observe: 'response' });
    }
    themTaiKhoanLoCal(tkhoan): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-tai-khoan", tkhoan);
    }
    /////////////////////////////////////////
    getDSDanhMuc(): Observable<HttpResponse<DANHMUC[]>> {
        return this.http.get<DANHMUC[]>(ConfigService.URL + "get-all-danh-muc/" + ConfigService.TRANG_THAI_DANHMUC.TATCA, { observe: 'response' });

    }
    getDSDanhMucLocal(): Observable<HttpResponse<DANHMUC[]>> {
        return this.http.get<DANHMUC[]>(this.URLLOCAL + "get-all-danh-muc/" + ConfigService.TRANG_THAI_DANHMUC.TATCA, { observe: 'response' });

    }
    themDanhMucLoCal(dMuc): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-danh-muc", dMuc);
    }
    //////////////////////////////////////////
    getListDoiTac(): Observable<HttpResponse<DOITAC[]>> {
        return this.http.get<DOITAC[]>(ConfigService.URL + "get-all-doi-tac", { observe: 'response' });
    }
    getListDoiTacLocal(): Observable<HttpResponse<DOITAC[]>> {
        return this.http.get<DOITAC[]>(this.URLLOCAL + "get-all-doi-tac", { observe: 'response' });

    }
    themListDoiTacLoCal(dTac): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-doi-tac", dTac);
    }
    /////////////////////////////////////////
    getListDuAn(): Observable<HttpResponse<any[]>> {
        return this.http.get<DUAN[]>(ConfigService.URL + "get-all-du-an/" + ConfigService.TRANG_THAI_DU_AN.TATCADUAN, { observe: 'response' });
    }
    getListDuAnLocal(): Observable<HttpResponse<DUAN[]>> {
        return this.http.get<DUAN[]>(this.URLLOCAL + "get-all-du-an/" + ConfigService.TRANG_THAI_DU_AN.TATCADUAN, { observe: 'response' });

    }
    themListDuAnLoCal(dTac): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-du-an", dTac);
    }
    ////////////////////////////////////////
    getDanhSachGioiThieu(): Observable<HttpResponse<GIOITHIEU[]>> {
        return this.http.get<GIOITHIEU[]>(ConfigService.URL + "get-all-gioi-thieu", { observe: 'response' });
    }
    getGioiThieuLocal(): Observable<HttpResponse<GIOITHIEU[]>> {
        return this.http.get<GIOITHIEU[]>(this.URLLOCAL + "get-all-gioi-thieu", { observe: 'response' });

    }
    themGioiThieuLoCal(gthieu): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-gioi-thieu", gthieu);
    }
    /////////////////////////////////////////
    getDsMeNUTheoType(): Observable<HttpResponse<MENU[]>> {
        return this.http.get<MENU[]>(ConfigService.URL + "get-all-menu/" + ConfigService.LOAI_MENU.TATCA, { observe: 'response' });
    }
    getMeNUTheoTypeLocal(): Observable<HttpResponse<MENU[]>> {
        return this.http.get<MENU[]>(this.URLLOCAL + "get-all-menu/" + ConfigService.LOAI_MENU.TATCA, { observe: 'response' });

    }
    themMeNUTheoTypeLoCal(menu): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-menu", menu);
    }
    /////////////////////////////////////////
    getListSliderTheoTrangThai(): Observable<HttpResponse<SLIDER[]>> {
        return this.http.get<SLIDER[]>(ConfigService.URL + "get-all-slider/1", { observe: 'response' });
    }
    getSliderTrangThaiLocal(): Observable<HttpResponse<TINTUC[]>> {
        return this.http.get<TINTUC[]>(this.URLLOCAL + "get-all-slider/1", { observe: 'response' });

    }
    themSliderTrangThaiLoCal(slider): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-slider", slider);
    }
    ///////////////////////////////////////
    getDSTinTuc(): Observable<HttpResponse<TINTUC[]>> {
        return this.http.get<TINTUC[]>(ConfigService.URL + "get-all-tin-tuc", { observe: 'response' });
    }
    getTinTucLocal(): Observable<HttpResponse<TINTUC[]>> {
        return this.http.get<TINTUC[]>(this.URLLOCAL + "get-all-tin-tuc", { observe: 'response' });

    }
    themTinTucLoCal(ttuc): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-tin-tuc", ttuc);
    }
    ////////////////////////////////////////
    getAllLoaiGiaoDich(): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(ConfigService.URL + "get-all-danh-muc/" + ConfigService.TRANG_THAI_DANHMUC.TATCA, { observe: 'response' });
    }
    getAllLoaiGiaoDichLoCal(): Observable<HttpResponse<LOAIGIAODICH[]>> {
        return this.http.get<LOAIGIAODICH[]>(this.URLLOCAL + "get-all-danh-muc/" + ConfigService.TRANG_THAI_DANHMUC.TATCA, { observe: 'response' });
    }
    themLoaiGiaoDichLoCal(danhmuc): Observable<any> {
        return this.http.post(this.URLLOCAL + "add-danh-muc", danhmuc);
    }
    ///////////////////////////////////////
    isMakeUpData(arrhost, arrlocal): any {
        let arrTam: any[] = [];

        if (arrhost.length > arrlocal.length) {
            arrhost.forEach(eHost => {
                var dem = 0;
                arrlocal.forEach(eLocal => {
                    if (JSON.stringify(eHost) === JSON.stringify(eLocal)) {
                        dem = dem + 1;
                    }
                });
                if (dem === 0) {
                    arrTam.push(eHost);
                }
            });
            return { tongitem: arrhost.length, itemnew: (arrhost.length - arrlocal.length), arr: arrTam };
        }
    }
}