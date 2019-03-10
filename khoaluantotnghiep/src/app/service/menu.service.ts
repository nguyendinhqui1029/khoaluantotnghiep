import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MeNuService {
    trangthaiSlideBar: boolean = true;
    getTrangThaiSlideBar() {
        return this.trangthaiSlideBar;
    }
    setTrangThaiSlideBar(value) {
        this.trangthaiSlideBar = value;
    }
}