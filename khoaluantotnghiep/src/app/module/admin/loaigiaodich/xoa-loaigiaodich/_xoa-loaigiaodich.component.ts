import { Component, OnInit } from '@angular/core';
import { LOAIGIAODICH } from 'src/app/model/loaigiaodich';
import { ds_loaigiaodich } from 'src/app/model/mock_loaigiaodich';
import { LoaiGiaoDichService } from 'src/app/service/loaigiaodich.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
    selector: 'xoa-loaigiaodich',
    templateUrl: './_xoa-loaigiaodich.component.html',
    styleUrls: ['./_xoa-loaigiaodich.component.scss']
})
export class XoaLoaiGiaoDichComponent implements OnInit {
    constructor(private loaiGiaoDichService: LoaiGiaoDichService) { }

    ds_loaigiaodich: LOAIGIAODICH[] = [];

    getDSLoaiGiaoDich() {
        this.loaiGiaoDichService.getDSTenLoaiDanhMuc(ConfigService.TRANG_THAI_LOAIGIAODICH.TATCA).subscribe(lgd => {
            this.ds_loaigiaodich = lgd.body;
        })
    }
    deleteloaigiaodich(maLoai) {
        this.loaiGiaoDichService.xoaLoaiGiaoDichTheomaLoai(maLoai).subscribe(res => {
            if (res.code === 200) {
                this.getDSLoaiGiaoDich();
            }
        });
    }
    ngOnInit(): void {
        this.getDSLoaiGiaoDich();
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
