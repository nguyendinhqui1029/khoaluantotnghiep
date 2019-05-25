import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { TinTucService } from 'src/app/service/tintuc.service';
import { ConfigService } from 'src/app/service/config.service';
import { UploadImageService } from 'src/app/service/upload-image.service';

@Component({
    selector: 'xoa-tintuc',
    templateUrl: './_xoa-tintuc.component.html',
    styleUrls: ['./_xoa-tintuc.component.scss']
})
export class XoaTinTucComponent implements OnInit {
    ds_tintuc: TINTUC[] = [];
    tintuc: any = {};
    lengthTinTuc: number = 0;
    constructor(private tinTucService: TinTucService, private uploadhinhService: UploadImageService) {

    }

    getDSTinTuc() {
        this.ds_tintuc = [];
        this.tinTucService.getDSTinTucTheoTrangThai(ConfigService.TRANG_THAI_TIN_TUC.TATCATINTUC).subscribe(tt => {
            if (tt.body) {
                tt.body.forEach(tin => {
                    if (tin.trangthai !== ConfigService.TRANG_THAI_TIN_TUC.CHODUYET) {
                        this.ds_tintuc.push(tin);
                    }
                })
            }
            this.lengthTinTuc = this.ds_tintuc.length;
        })
    }
    ngOnInit(): void {
        this.getDSTinTuc();
    }
    deletetintuc(maloai) {
        if (confirm("Bạn có chắc xóa tin tức mã: " + maloai)) {
            this.tinTucService.getTinTuctheoMaLoai(maloai).subscribe(tintuc => {
                this.tintuc = JSON.stringify(tintuc);
                let tin = JSON.parse(this.tintuc);

                if (tin.body.data[0]) {
                    if (tin.body.data[0].hinhanh) {
                        tin.body.data[0].hinhanh.forEach(hinh => {
                            this.uploadhinhService.DeleteImage(hinh.tenhinh).subscribe(res => {
                            })
                        })
                        this.tinTucService.xoaTinTucTheomaLoai(maloai).subscribe(res => {
                            if (res.code === 200) {
                                this.getDSTinTuc();
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
