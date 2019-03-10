import { Component, OnInit } from '@angular/core';
import { ds_menu_admin } from 'src/app/model/mock_menu_admin';
import { MENU } from 'src/app/model/menu';
import { ActivatedRoute } from '@angular/router';
import { MeNuService } from 'src/app/service/menu.service';

@Component({
    selector: 'slidebar-component',
    templateUrl: './_slidebar.component.html',
    styleUrls: ['./_slidebar.component.scss',
        '../../../../assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css',
        '../../../../assets/admin/bower_components/font-awesome/css/font-awesome.min.css',
        '../../../../assets/admin/bower_components/Ionicons/css/ionicons.min.css',
        '../../../../assets/admin/dist/css/AdminLTE.min.css',
        '../../../../assets/admin/dist/css/skins/_all-skins.min.css',
        '../../../../assets/admin/bower_components/morris.js/morris.css',
        '../../../../assets/admin/bower_components/jvectormap/jquery-jvectormap.css',
        '../../../../assets/admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
        "../../../../assets/admin/bower_components/bootstrap-daterangepicker/daterangepicker.css"]
})
export class SlideBarComponent implements OnInit {



    ds_menu_admin: MENU[] = ds_menu_admin;
    slide_bar: MENU[] = [];
    show: boolean;
    constructor(private route: ActivatedRoute, private MenuService: MeNuService) {
        this.ds_menu_admin.forEach(menuadmin => {
            if (menuadmin.typeMenu === 3) {
                this.slide_bar.push(menuadmin);
            }
        })
    }


    ngDoCheck() {
        this.show = this.MenuService.getTrangThaiSlideBar();


    }


    ngOnInit(): void {

    }
}