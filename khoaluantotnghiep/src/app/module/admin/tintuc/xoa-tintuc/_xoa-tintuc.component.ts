import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-tintuc',
    templateUrl: './_xoa-tintuc.component.html',
    styleUrls: ['./_xoa-tintuc.component.scss']
})
export class XoaTinTucComponent implements OnInit {
    ds_tintuc: TINTUC[] = [];
    constructor(private tinTucService: TinTucService) {

    }

    getDSTinTuc() {
        this.tinTucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tt => {
            this.ds_tintuc = tt.body;
        })
    }
    ngOnInit(): void {
        this.getDSTinTuc();
    }
    deletetintuc(maloai) {
        console.log('a');
        this.tinTucService.xoaTinTucTheomaLoai(maloai).subscribe(res => {
            if (res.code === 200) {
                this.getDSTinTuc();
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
