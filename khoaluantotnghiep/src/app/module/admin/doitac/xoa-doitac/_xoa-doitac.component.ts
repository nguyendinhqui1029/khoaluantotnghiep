import { Component, OnInit } from '@angular/core';
import { DOITAC } from 'src/app/model/doitac';
import { ds_DoiTac } from 'src/app/model/mock_doitac';
import { DoiTacService } from 'src/app/service/doitac.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-doitac',
    templateUrl: './_xoa-doitac.component.html',
    styleUrls: ['./_xoa-doitac.component.scss']
})
export class XoaDoiTacComponent implements OnInit {
    ds_doitac: DOITAC[] = [];
    constructor(private doiTacService: DoiTacService) {

    }

    getDSDoiTac() {
        this.doiTacService.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.TATCA).subscribe(doitac => {
            this.ds_doitac = doitac.body;
        })
    }

    ngOnInit(): void {
        this.getDSDoiTac();
    }

    deletedoitac(maDoiTac) {
        this.doiTacService.xoaDoiTacTheomaDoiTac(maDoiTac).subscribe(res => {
            if (res.code === 200) {
                this.getDSDoiTac();
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
