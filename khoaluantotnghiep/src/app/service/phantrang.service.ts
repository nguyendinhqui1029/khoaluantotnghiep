import { Injectable } from '@angular/core';

@Injectable()
export class PhanTranService {
    currentPage: number = 1;
    ds_page: any[] = [];
    soItemCuaPage: number = 5;
    ds_Data: any[] = [];
    chieuDaiDanhSach: number = 0;


    setValueDanhSach(dsSach) {
        this.ds_Data = dsSach;
        if (this.ds_Data) {
            this.chieuDaiDanhSach = this.ds_Data.length;
        }
    }

    ds_KetQuaPhanTrang(dsData) {
        let arr: any[] = [];
        if (dsData) {
            let lengthArr = dsData.length;
            if (lengthArr > 0) {
                let soItemHienTai = ((this.currentPage - 1) * this.soItemCuaPage) + this.soItemCuaPage;
                let soItem = soItemHienTai > lengthArr ? lengthArr : soItemHienTai;
                for (let i = (this.currentPage - 1) * this.soItemCuaPage; i < soItem; i++) {
                    arr.push(dsData[i]);
                }
            }
        }

        return arr;
    }

    soTrang(): number {
        let kichThuocKetQua: number = this.chieuDaiDanhSach;
        let tongSoTrang: number = 0;
        tongSoTrang = (kichThuocKetQua % this.soItemCuaPage) === 0 ? Math.floor(kichThuocKetQua / this.soItemCuaPage) : Math.floor(kichThuocKetQua / this.soItemCuaPage) + 1;
        return tongSoTrang;
    }
    createPhanTrang(currentPage): any[] {
        this.currentPage = currentPage;
        this.ds_page = [];
        let tongSoTrang = this.soTrang();
        if (tongSoTrang >= 5) {
            if (currentPage - 2 < 1) {
                //danh sach tu page hien tại -2 den +2
                for (let i = 1; i <= 5; i++) {
                    this.ds_page.push({ "value": i, "name": i });
                }
            } else if (tongSoTrang >= currentPage + 2 && currentPage - 2 >= 1) {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    this.ds_page.push({ "value": i, "name": i });
                }
            } else {
                for (let i = tongSoTrang - 4; i <= tongSoTrang; i++) {
                    this.ds_page.push({ "value": i, "name": i });
                }
            }

        } else {
            for (let i = 1; i <= tongSoTrang; i++) {
                this.ds_page.push({ "value": i, "name": i });
            }
        }
        return this.ds_page;
    }
}