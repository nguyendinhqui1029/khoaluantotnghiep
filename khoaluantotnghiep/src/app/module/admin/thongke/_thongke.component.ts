import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';

@Component({
  selector: 'thong-ke',
  templateUrl: './_thongke.component.html',
  styleUrls: ['./_thongke.component.scss']
})
export class ThongKeComponent implements OnInit {
  ds_duan: DUAN[] = [];
  chart_DuAn: any[] = [];
  chart_DATA: any[] = [];
  data = false;
  constructor(private DuanService: DuAnService) {
    this.DuanService.getListDuAn(3).subscribe(duan => {
      this.ds_duan = duan.body;
      this.ds_duan.forEach(duan => {
        this.chart_DuAn.push([{ label: duan.tenDuAn, data: [duan.giaTien] }]);
      })
      this.chart_DuAn.forEach(duan => {
        this.chart_DATA.push(duan[0]);
      })
      this.data = true;
      console.log(this.chart_DATA);

    })


  }

  ngOnInit(): void { }

  chartOptions = {
    responsive: true
  };

  // chartData = [
  //   { data: [330, 600, 260, 700, 45, 67], label: 'Nhân viên A' },
  //   { data: [120, 455, 100, 340, 150, 500], label: 'Nhân viên B' },
  //   { data: [45, 67, 800, 500, 45, 67], label: 'Nhân viên C' }
  // ];

  chartLabels = [''];

  onChartClick(event) {
    console.log(event);
  }


}
