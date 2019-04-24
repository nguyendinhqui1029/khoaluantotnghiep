import { Component, OnInit } from '@angular/core';
import { LOAITINTUC } from 'src/app/model/loaitintuc';
import { ds_loaitintuc } from 'src/app/model/mock_loaitintuc';
import { LoaiTinTucService } from 'src/app/service/loaitintuc.service';

@Component({
    selector: 'xoa-loaitintuc',
    templateUrl: './_xoa-loaitintuc.component.html',
    styleUrls: ['./_xoa-loaitintuc.component.scss']
})
export class XoaLoaiTinTucComponent implements OnInit {
    constructor(private loaiTinTucService: LoaiTinTucService) { }

    ds_loaitintuc: LOAITINTUC[] = [];

    getDSLoaiTinTuc() {
        this.loaiTinTucService.getDSLoaiTinTuc().subscribe(ltt => {
            this.ds_loaitintuc = ltt.body;
        })
    }
    ngOnInit(): void {
        this.getDSLoaiTinTuc();
    }
    deleteloaitintuc(maloai) {
        this.loaiTinTucService.xoaLoaiTinTucTheomaLoai(maloai).subscribe(res => {
            if (res.code === 200) {
                this.getDSLoaiTinTuc();
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
