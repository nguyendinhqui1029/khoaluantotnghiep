import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SanGiaoDichService {
    maSanGiaoDich: any;

    setMaGiaoDich(value) {
        this.maSanGiaoDich = value;
    }

    getMaGiaoDich() {
        return this.maSanGiaoDich;
    }

    valueSource = new BehaviorSubject<any[]>([]);
    currentMessage = this.valueSource.asObservable();
    changeValue(value) {
        this.valueSource.next(value);
    }
    //Behivior thong tin du an
    valueThongtin = new BehaviorSubject<any>({});
    getThongTin = this.valueThongtin.asObservable();
    setValueThongTin(value) {
        this.valueThongtin.next(value);
    }
}