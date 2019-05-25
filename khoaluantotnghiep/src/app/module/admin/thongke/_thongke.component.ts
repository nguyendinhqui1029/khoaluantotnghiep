import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'thong-ke',
  templateUrl: './_thongke.component.html',
  styleUrls: ['./_thongke.component.scss']
})
export class ThongKeComponent implements OnInit {
  ds_duan: DUAN[] = [];
  chart_DuAn: any[] = [];
  chart_DATA: any[] = [];
  data: boolean = false;
  constructor(private DuanService: DuAnService) {
    this.DuanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DAGIAODICH).subscribe(duan => {

      if (duan.body[0]) {
        this.ds_duan = duan.body;
        this.ds_duan.forEach(duan => {
          this.chart_DuAn.push([{ label: duan.tenDuAn, data: [duan.giaTien] }]);
        })
        this.chart_DuAn.forEach(duan => {
          this.chart_DATA.push(duan[0]);
        })
        this.data = true;
      }
    })


  }

  ngOnInit(): void { }

  chartOptions = {
    responsive: true
  };

  chartLabels = [''];

  onChartClick(event) {
  }
}
