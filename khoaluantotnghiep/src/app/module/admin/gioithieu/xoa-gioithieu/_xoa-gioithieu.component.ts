import { Component, OnInit } from '@angular/core';
import { GIOITHIEU } from 'src/app/model/gioithieu';
import { ds_gioithieu } from 'src/app/model/mock_gioithieu';
import { GioiThieuService } from 'src/app/service/gioithieu.service';

@Component({
    selector: 'xoa-gioithieu',
    templateUrl: './_xoa-gioithieu.component.html',
    styleUrls: ['./_xoa-gioithieu.component.scss']
})
export class XoaGioiThieuComponent implements OnInit {
    constructor(private gioiThieuService: GioiThieuService) { }

    ds_gioithieu: GIOITHIEU[] = [];
    getDSGioiThieu() {
        this.gioiThieuService.getDanhSachGioiThieu().subscribe(gt => {
            this.ds_gioithieu = gt.body;
        })
    }
    ngOnInit(): void {
        this.getDSGioiThieu();
    }
    deletegioithieu(magioithieu) {
        this.gioiThieuService.xoaGioiThieuTheomaGioiThieu(magioithieu).subscribe(res => {
            if (res.code === 200) {
                this.getDSGioiThieu();
            }
        });
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
