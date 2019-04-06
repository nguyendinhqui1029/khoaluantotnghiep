import { HINHANH } from './hinhanh';

export class TAIKHOAN {
    maTaiKhoan: any;
    hoTen: any;
    soDienThoai: any;
    tinhThanhPho: any;
    diaChi: any;
    quanHuyen: any;
    gioiTinh: any;
    ngaySinh: any;
    logo: HINHANH;
    moTa: any;
    tenTaiKhoan: any;
    email: any;
    matKhau: any;
    loaiTaiKhoan: any;
    constructor(maTaiKhoan, hoTen, soDienThoai, tinhThanhPho, diaChi, quanHuyen, gioiTinh,
        ngaySinh, logo, moTa, tenTaiKhoan, email, matKhau, loaiTaiKhoan) {
        this.maTaiKhoan = maTaiKhoan;
        this.hoTen = hoTen;
        this.soDienThoai = soDienThoai;
        this.tinhThanhPho = tinhThanhPho;
        this.diaChi = diaChi;
        this.quanHuyen = quanHuyen;
        this.ngaySinh = ngaySinh;
        this.logo = logo;
        this.moTa = moTa;
        this.tenTaiKhoan = tenTaiKhoan;
        this.email = email;
        this.matKhau = matKhau;
        this.loaiTaiKhoan = loaiTaiKhoan;
        this.gioiTinh = gioiTinh;

    }
}