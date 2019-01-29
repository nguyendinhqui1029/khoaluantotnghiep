import { HINHANH } from './hinhanh';
import { TAIKHOAN } from './taikhoan';
import { LOAIGIAODICH } from './loaigiaodich';
import { DANHMUC } from './danhmuc';

export class DUAN {
    maDuAn: any;
    tenDuAn: any;
    noiDungTomTat: any;
    noiDungChiTiet: any;
    mangHinh: HINHANH[];
    ngayDang: any;
    doiTac: TAIKHOAN;
    giaTien: any;
    loaiGiaoDich: LOAIGIAODICH;
    danhMuc: DANHMUC;
    quanHuyen: any;
    tinhThanhPho: any;
    trangThai: any;
    constructor(maDuAn, tenDuAn, noiDungTomTat, noiDungChiTiet, mangHinh, ngayDang,
        doiTac, giaTien, loaiGiaoDich, danhMuc, quanHuyen, tinhThanhPho, trangThai) {
        this.maDuAn = maDuAn;
        this.tenDuAn = tenDuAn;
        this.noiDungTomTat = noiDungTomTat;
        this.noiDungChiTiet = noiDungChiTiet;
        this.mangHinh = mangHinh;
        this.ngayDang = ngayDang;
        this.doiTac = doiTac;
        this.giaTien = giaTien;
        this.loaiGiaoDich = loaiGiaoDich;
        this.danhMuc = danhMuc;
        this.quanHuyen = quanHuyen;
        this.tinhThanhPho = tinhThanhPho;
        this.trangThai = trangThai;

    }
}