export class ThongKe {
    maThongKe: any;
    maDuAn: any;
    ngayThongKe: any;
    trangThai: any;
    constructor(maDuAn, ngayThongKe, trangThai) {
        this.maThongKe = "TK" + (new Date()).getTime().toString();
        this.maDuAn = maDuAn;
        this.ngayThongKe = ngayThongKe;
        this.trangThai = trangThai;
    }
}