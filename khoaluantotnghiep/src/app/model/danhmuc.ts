export class DANHMUC {
    maDanhMuc: any;
    tenDanhMuc: any;
    trangThai: any;
    isActive: boolean;
    constructor(maDanhMuc, tenDanhMuc, trangThai, isAcitve) {
        this.maDanhMuc = maDanhMuc;
        this.tenDanhMuc = tenDanhMuc;
        this.trangThai = trangThai;
        this.isActive = isAcitve;
    }
}