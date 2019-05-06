import { Component, OnInit } from '@angular/core';
import { TAIKHOAN } from 'src/app/model/taikhoan';
import { ds_taikhoan } from 'src/app/model/mock_taikhoan';
import { TaiKhoanService } from 'src/app/service/taikhoan.service';

@Component({
    selector: 'xoa-taikhoan',
    templateUrl: './_xoa-taikhoan.component.html',
    styleUrls: ['./_xoa-taikhoan.component.scss']
})
export class XoaTaiKhoanComponent implements OnInit {
    constructor(private taiKhoanService: TaiKhoanService) { }


    ds_taikhoan: TAIKHOAN[] = [];
    getDSTaiKhoan() {
        this.taiKhoanService.getDSTaiKhoan().subscribe(tk => {
            this.ds_taikhoan = tk.body;
        })
    }
    ngOnInit(): void {
        this.getDSTaiKhoan();
    }
    deletetaikhoan(maTK) {
        this.taiKhoanService.xoaTaiKhoanTheomaTaiKhoan(maTK).subscribe(res => {
            if (res.code === 200) {
                this.getDSTaiKhoan();
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
