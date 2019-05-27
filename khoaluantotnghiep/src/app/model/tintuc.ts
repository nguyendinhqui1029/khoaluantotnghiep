import { HINHANH } from './hinhanh';
import { LOAITINTUC } from './loaitintuc';

export class TINTUC {
    matintuc: any;
    tentintuc: any;
    trangthai: any;
    noidungchitiet: any;
    noidungtomtat: any;
    ngaydang: any;
    hinhanh: HINHANH[] = [];
    loaitintuc: LOAITINTUC;
    taiKhoan: any;
    constructor(matintuc, tentintuc, trangthai, noidungchitiet, noidungtomtat, ngaydang, hinhanh, loaitintuc, taiKhoan) {
        this.matintuc = matintuc;
        this.tentintuc = tentintuc;
        this.trangthai = trangthai;
        this.noidungchitiet = noidungchitiet;
        this.noidungtomtat = noidungtomtat;
        this.ngaydang = ngaydang;
        this.hinhanh = hinhanh;
        this.loaitintuc = loaitintuc;
        this.taiKhoan = taiKhoan;
    }
}