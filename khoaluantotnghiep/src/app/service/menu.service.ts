import { Injectable } from '@angular/core';


@Injectable()
export class MenuService {
    trangthaiSlideBar: boolean = true;
    getTrangThaiSlideBar() {
        return this.trangthaiSlideBar;
    }
    setTrangThaiSlideBar(value) {
        this.trangthaiSlideBar = value;
    }
}