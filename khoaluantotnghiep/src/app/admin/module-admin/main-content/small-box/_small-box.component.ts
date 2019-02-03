import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'small-box',
    templateUrl: './_small-box.component.html',
    styleUrls: ['./_small-box.component.scss',
        '../../../../../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css',
        '../../../../../assets/admin/bower_components/font-awesome/css/font-awesome.min.css',
        '../../../../../assets/admin/bower_components/Ionicons/css/ionicons.min.css',
        '../../../../../assets/admin/dist/css/AdminLTE.min.css',
        '../../../../../assets/admin/dist/css/skins/_all-skins.min.css',
        '../../../../../assets/admin/bower_components/morris.js/morris.css',
        '../../../../../assets/admin/bower_components/jvectormap/jquery-jvectormap.css',
        '../../../../../assets/admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        "../../../../../assets/admin/bower_components/bootstrap-daterangepicker/daterangepicker.css"]
})
export class SmallBoxComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}