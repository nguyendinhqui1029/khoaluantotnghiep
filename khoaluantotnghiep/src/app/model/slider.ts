import { HINHANH } from './hinhanh';

export class SLIDER {
    maSlider: any;
    mangHinh: HINHANH[];
    trangThai: boolean;
    loaiSlider: any;
    constructor(maSlider, mangHinh, trangThai, loaiSlider) {
        this.maSlider = maSlider;
        this.mangHinh = mangHinh;
        this.trangThai = trangThai;
        this.loaiSlider = loaiSlider;
    }

}