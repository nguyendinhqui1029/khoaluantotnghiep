import { Injectable } from '@angular/core';
import { DOITAC } from '../model/doitac';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { TINHTHANHPHO } from '../model/tinhthanhpho';
import { ds_tinhthanhpho } from '../model/mock_tinhthanhpho';
import { element } from '@angular/core/src/render3';


@Injectable()
export class TinhThanhPhoService {
    ds_tinhthanhpho: TINHTHANHPHO[] = ds_tinhthanhpho;
    dsloc: any[] = [];
    constructor(private http: HttpClient) {

    }
    LayDanhSachTP() {
        let ds: any[] = [];
        let dsCode: any[] = [];
        for (var i = 0; i < this.ds_tinhthanhpho.length; i++) {
            if (dsCode.indexOf(this.ds_tinhthanhpho[i].tenTinhThanhPhoKhongdau) === -1) {
                ds.push({ v: this.ds_tinhthanhpho[i].tenTinhThanhPhoKhongdau, d: this.ds_tinhthanhpho[i].tenTinhThanhPhoCodau });
                dsCode.push(this.ds_tinhthanhpho[i].tenTinhThanhPhoKhongdau);
            }

        }

        ds.sort(function (a, b) {
            if (a.t < b.t)
                return -1;
            if (a.t > b.t)
                return 1;
            return 0;
        });
        return ds;

    }


    layQuanHuyen(tinhtp) {
        let ds_quanhuyen = [];
        this.ds_tinhthanhpho.forEach(e => {
            if (e.tenTinhThanhPhoKhongdau === tinhtp) {
                ds_quanhuyen.push({ tenquanhuyenkhongdau: e.quanKhongdau, tenquanhuyencodau: e.quanCodau })
            }
        });
        return ds_quanhuyen;
    }
    layDSQuanHuyenTheoThanhPho() {
        let ds_tinh = this.LayDanhSachTP();
        let dstam = [];
        ds_tinh.forEach(element => {
            dstam[element.v] = this.layQuanHuyen(element.v);
        });
        return dstam;
    }
}