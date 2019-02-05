import { Injectable } from '@angular/core';

@Injectable()
export class SanGiaoDichService {
    maSanGiaoDich: any;

    setMaGiaoDich(value) {
        this.maSanGiaoDich = value;
    }

    getMaGiaoDich() {
        return this.maSanGiaoDich;
    }
}