import { Serializable } from 'selenium-webdriver';

export class DOITAC {
    maDoiTac: any;
    hoTen: any;
    diaChi: any;
    sdt: any;
    tinhThanhPho: any;
    quanHuyen: any;
    ngaySinh: any;
    loGo: any;
    moTa: any;
    user: any;
    pass: any;
    loaiTaiKhoan: any;
    email: any;
    trangThai: any;
    constructor(maDoiTac, hoTen, diaChi, sdt, tinhThanhPho, quanHuyen, ngaySinh, loGo, moTa, user, pass, loaiTaiKhoan, email,
        trangThai) {
        this.maDoiTac = maDoiTac;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.sdt = sdt;
        this.tinhThanhPho = tinhThanhPho;
        this.quanHuyen = quanHuyen;
        this.ngaySinh = ngaySinh;
        this.loGo = loGo;
        this.moTa = moTa;
        this.user = user;
        this.pass = pass;
        this.loaiTaiKhoan = loaiTaiKhoan;
        this.email = email;
        this.trangThai = trangThai;
    }
}