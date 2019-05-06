import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'xoa-duan',
    templateUrl: './_xoa-duan.component.html',
    styleUrls: ['./_xoa-duan.component.scss']
})
export class XoaDuAnComponent implements OnInit {
    constructor(private duAnService: DuAnService, private router: Router) { }

    ds_duan: DUAN[] = [];
    lengthDuAn: number = 0;
    ngOnInit(): void {
        this.getListDuAn();
    }

    getListDuAn(): void {
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DANGGIAODICH).subscribe(duan => {
            if (duan.body) {
                this.ds_duan = duan.body;
            }
            this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.DUANMOI).subscribe(duanmoi => {
                if (duanmoi.body) {
                    duanmoi.body.forEach(duannew => {
                        this.ds_duan.push(duannew);
                    });
                    this.lengthDuAn = this.ds_duan.length;
                }
            })
        });
    }

    deleteduan(maDuAn) {
        if (confirm("Bạn có chắc xóa dự án mã: " + maDuAn)) {
            this.duAnService.xoaDuAnTheomaDuAn(maDuAn).subscribe(res => {
                if (res.code === 200) {
                    this.getListDuAn();
                }
            });
        }
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
