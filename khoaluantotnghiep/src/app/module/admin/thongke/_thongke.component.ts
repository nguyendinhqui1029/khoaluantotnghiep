import { Component, OnInit } from '@angular/core';
import { DuAnService } from 'src/app/service/duan.service';
import { DUAN } from 'src/app/model/duan';
import { ConfigService } from 'src/app/service/config.service';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { DanhMucService } from 'src/app/service/danhmuc.service';

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
  dem: number = 0;
  ds_thongkenhanvienban: any[] = [];
  arrTongSo: any[] = [];
  constructor(private DuanService: DuAnService, private LoaiGiaoDichService: LoaiGiaoDichService) {
    this.thongKeBaiDang();
    this.DuanService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DAGIAODICH).subscribe(duan => {
      if (duan.body[0]) {
        this.ds_duan = duan.body;
        let arrtam = [];
        this.ds_duan.forEach(duan => {
          if (arrtam.length > 0) {
            this.dem = 0;
            arrtam.forEach(element => {
              if (duan.ngayDang === element.ngaydang) {
                this.dem = this.dem + 1;
              }
            });
            if (this.dem === 0) {
              arrtam.push({ ngaydang: duan.ngayDang, tongtien: 0 });
            }
          } else {
            arrtam.push({ ngaydang: duan.ngayDang, tongtien: 0 });
          }
        })
        this.ds_duan.forEach(duan => {
          arrtam.forEach(element => {
            if (element.ngaydang === duan.ngayDang) {
              element.tongtien += ConfigService.PHI_DANG_BAI;
            }
          });
        });
        arrtam.forEach(element => {
          this.chart_DuAn.push([{ label: element.ngaydang, data: [element.tongtien] }]);
        });

        this.chart_DuAn.forEach(duan => {
          this.chart_DATA.push(duan[0]);
        })
        this.data = true;
      }

    })

  }

  thongKeBaiDang() {
    this.DuanService.getDuAnTheoTrangThai(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(da => {
      var duan = da.body;
      this.LoaiGiaoDichService.getDSTenLoaiDanhMuc(0).subscribe(lgd => {
        if (lgd.body) {
          lgd.body.forEach(element => {
            var dem = 0;
            duan.forEach(el => {
              if (element.maLoai === el.loaiGiaoDich.maLoai) {
                dem = dem + 1;
              }
            });
            this.arrTongSo.push({ tenloai: element.tenLoai, tongso: dem });
          });
        }
      });
    })


  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    const $ = window["$"];
    $(document).ready(function () {
      $('#filterDate2').datepicker({
        uiLibrary: 'bootstrap',
        format: 'yyyy-mm-dd'
      });

    });

  }
  changeTab(tabname) {
    var $ = window["$"];
    var arr = ['home', 'menu1'];
    arr.forEach(element => {
      if ($("#" + element).hasClass("in active")) {
        $("#" + element).removeClass("in active");
      }
    });
    $("#" + tabname).addClass("in active");
  }
  chartOptions = {
    responsive: true
  };

  chartLabels = [''];

  onChartClick(event) {
  }
}
