import { Component } from '@angular/core';
import { DuAnService } from './service/duan.service';
import { Router } from '@angular/router';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bất động sản';
  constructor(private DuanService: DuAnService) {
    // this.ChuyenTrangThaiDuAn();

  }

  // ChuyenTrangThaiDuAn() {
  //   this.DuanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DUANMOI).subscribe(duanmoi => {
  //     if (duanmoi.body) {
  //       duanmoi.body.forEach(duan => {
  //         if(duan.ngayDang){

  //         }
  //       })
  //     }
  //   })
  // }
}
