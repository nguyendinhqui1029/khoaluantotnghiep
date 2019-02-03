import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './_todo-list.component.html',
    styleUrls: ['./_todo-list.component.scss',
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
export class ToDoListComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}