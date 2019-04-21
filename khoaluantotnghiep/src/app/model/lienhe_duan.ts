export class LienHeDuAn {
    maLienHe: any;
    tenDuAn: any;
    ngayLienHe: any;
    noiDungLienHe: any;
    tenKhachHang: any;
    soDienThoai: any;
    maNhanVien: any;
    trangThai: any;
    constructor(tenDuAn, ngayLienHe, noiDungLienHe, tenKhachHang, soDienThoai, maNhanVien, trangThai) {
        this.maLienHe = "LH" + (new Date()).getTime().toString();
        this.tenDuAn = tenDuAn;
        this.ngayLienHe = ngayLienHe;
        this.noiDungLienHe = noiDungLienHe;
        this.tenKhachHang = tenKhachHang;
        this.soDienThoai = soDienThoai;
        this.maNhanVien = maNhanVien;
        this.trangThai = trangThai;
    }
}