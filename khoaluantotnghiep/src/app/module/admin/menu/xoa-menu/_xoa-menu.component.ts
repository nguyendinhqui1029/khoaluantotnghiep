import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/model/menu';
import { ds_menu } from 'src/app/model/mock_menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
    selector: 'xoa-menu',
    templateUrl: './_xoa-menu.component.html',
    styleUrls: ['./_xoa-menu.component.scss']
})
export class XoaMenuComponent implements OnInit {
    constructor(private MenuService: MenuService) { }

    ds_menu: MENU[] = [];
    getDSMenu() {
        this.MenuService.getDsMeNUTheoType(0).subscribe(mn => {
            this.ds_menu = mn.body;
        })
    }
    ngOnInit(): void {
        this.getDSMenu();
    }
    deletemenu(id) {
        this.MenuService.xoaMenuTheoMa(id).subscribe(res => {
            if (res.code === 200) {
                this.getDSMenu();
            }
        })
    }

    ngAfterViewInit() {
        const $ = window["$"];
        $(document).ready(function () {
            $(".khungsearch").keyup(function () {
                var searchTerm = $(".khungsearch").val();
                var listItem = $('.results tbody').children('tr');
                var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

                $.extend($.expr[':'], {
                    'containsi': function (elem, i, match, array) {
                        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
                    }
                });

                $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
                    $(this).attr('visible', 'false');
                });

                $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
                    $(this).attr('visible', 'true');
                });

                var jobCount = $('.results tbody tr[visible="true"]').length;
                $('.counter').text(jobCount + ' item');

                if (jobCount == '0') { $('.no-result').show(); }
                else { $('.no-result').hide(); }
            });
        }
        )
    }
}
