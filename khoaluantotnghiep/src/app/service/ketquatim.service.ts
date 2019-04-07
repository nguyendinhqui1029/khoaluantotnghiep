import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class KetQuaTimService {
    ds_ket_qua: any[] = [];
    valueSource = new BehaviorSubject<any[]>([]);
    currentMessage = this.valueSource.asObservable();
    constructor() {

    }
    changeValue(value) {
        this.valueSource.next(value);
    }

}