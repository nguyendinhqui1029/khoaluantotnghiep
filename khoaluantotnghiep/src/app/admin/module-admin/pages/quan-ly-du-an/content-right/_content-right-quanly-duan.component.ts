import { Component, OnInit } from '@angular/core';
import { CONGCUQUANLYDUAN } from 'src/app/model/congcuquanlyduan';
import { ds_congcuquanlyduan } from 'src/app/model/mock_congcuquanlyduan';
@Component({
    selector: 'content-right-quanly-duan-component',
    templateUrl: './_content-right-quanly-duan.component.html',
    styleUrls: ['./_content-right-quanly-duan.component.scss',
        '../../../../../../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css',
        '../../../../../../assets/admin/bower_components/font-awesome/css/font-awesome.min.css',
        '../../../../../../assets/admin/bower_components/Ionicons/css/ionicons.min.css',
        '../../../../../../assets/admin/dist/css/AdminLTE.min.css',
        '../../../../../../assets/admin/dist/css/skins/_all-skins.min.css',
        '../../../../../../assets/admin/bower_components/morris.js/morris.css',
        '../../../../../../assets/admin/bower_components/jvectormap/jquery-jvectormap.css',
        '../../../../../../assets/admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        "../../../../../../assets/admin/bower_components/bootstrap-daterangepicker/daterangepicker.css"]
})
export class ContentRightQuanLyDuAnComponent implements OnInit {
    noidungthanhcongcu: CONGCUQUANLYDUAN[] = ds_congcuquanlyduan;
    constructor() {

    }
    ngOnInit(): void {
    }
}