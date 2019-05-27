import { HINHANH } from './hinhanh';
import { TAIKHOAN } from './taikhoan';
import { LOAIGIAODICH } from './loaigiaodich';
import { DANHMUC } from './danhmuc';
import { DOITAC } from './doitac';

export class DUAN {
    maDuAn: any;
    tenDuAn: any;
    noiDungTomTat: any;
    noiDungChiTiet: any;
    mangHinh: HINHANH[];
    ngayDang: any;
    doiTac: any;
    giaTien: any;
    loaiGiaoDich: LOAIGIAODICH;
    danhMuc: DANHMUC;
    quanHuyen: any;
    tinhThanhPho: any;
    trangThai: any;
    loaiDuAn: any;
    huong: any;
    dienTich: any;
    taiKhoan: any;
    constructor(maDuAn, tenDuAn, noiDungTomTat, noiDungChiTiet, mangHinh, ngayDang,
        doiTac, giaTien, loaiGiaoDich, danhMuc, quanHuyen, tinhThanhPho, trangThai, loaiDuAn, huong, dienTich, taiKhoan) {
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
        this.loaiDuAn = loaiDuAn;
        this.huong = huong;
        this.dienTich = dienTich;
        this.taiKhoan = taiKhoan;
    }
}