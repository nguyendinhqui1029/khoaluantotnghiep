import { Component, OnInit } from '@angular/core';
import { DOITAC } from 'src/app/model/doitac';
import { ds_DoiTac } from 'src/app/model/mock_doitac';
import { DoiTacService } from 'src/app/service/doitac.service';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';

@Component({
    selector: 'xoa-doitac',
    templateUrl: './_xoa-doitac.component.html',
    styleUrls: ['./_xoa-doitac.component.scss']
})
export class XoaDoiTacComponent implements OnInit {
    ds_doitac: DOITAC[] = [];
    doitac: any = {};

    constructor(private doiTacService: DoiTacService, private uploadhinhService: UploadImageService) {

    }

    getDSDoiTac() {
        this.doiTacService.getListDoiTac(ConfigService.TRANG_THAI_DOITAC.TATCA).subscribe(doitac => {
            if (doitac.body) {
                this.ds_doitac = doitac.body;
            }
        })
    }

    ngOnInit(): void {
        this.getDSDoiTac();
    }

    deletedoitac(maDoiTac) {
        if (confirm("Bạn có chắc xóa đối tác mã: " + maDoiTac)) {
            this.doiTacService.getDoiTacTheoMaDoiTac(maDoiTac).subscribe(doitac => {
                this.doitac = JSON.stringify(doitac);
                let dt = JSON.parse(this.doitac);

                if (dt.body.data[0]) {
                    if (dt.body.data[0].loGo) {
                        this.uploadhinhService.DeleteImage(dt.body.data[0].loGo).subscribe(res => {

                        })
                        this.doiTacService.xoaDoiTacTheomaDoiTac(maDoiTac).subscribe(res => {
                            if (res.code === 200) {
                                this.getDSDoiTac();
                            }
                        });
                    }
                }
            })
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
