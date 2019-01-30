import { Injectable } from '@angular/core';

@Injectable()
export class GioiThieuService {

    maGioiThieu: any;
    setGioiThieu(value) {
        this.maGioiThieu = value;
    }
    getGioiThieu() {
        return this.maGioiThieu;
    }

}