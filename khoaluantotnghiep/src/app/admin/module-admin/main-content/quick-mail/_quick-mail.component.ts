import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'quick-mail',
    templateUrl: './_quick-mail.component.html',
    styleUrls: ['./_quick-mail.component.scss',
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
export class QuickMailComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}