import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'thong-ke',
    templateUrl: './_thongke.component.html',
    styleUrls: ['./_thongke.component.scss']
})
export class ThongKeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    chartOptions = {
        responsive: true
      };
    
      chartData = [
        { data: [330, 600, 260, 700,45, 67], label: 'Nhân viên A' },
        { data: [120, 455, 100, 340,150, 500], label: 'Nhân viên B' },
        { data: [45, 67, 800, 500,45, 67], label: 'Nhân viên C' }
      ];
    
      chartLabels = ['Tháng 1','Tháng 2', 'Tháng 3', 'Tháng 4','Tháng 5','Tháng 6'];
    
      onChartClick(event) {
        console.log(event);
      }


}
