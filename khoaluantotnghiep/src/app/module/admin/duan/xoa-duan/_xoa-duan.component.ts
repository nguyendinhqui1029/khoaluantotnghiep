import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
//import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
import { Router } from '@angular/router';
import { UploadImageService } from 'src/app/service/upload-image.service';
import { ds_trangthaiduan } from 'src/app/model/mock_trangthaiduan';

@Component({
    selector: 'xoa-duan',
    templateUrl: './_xoa-duan.component.html',
    styleUrls: ['./_xoa-duan.component.scss']
})
export class XoaDuAnComponent implements OnInit {
    constructor(private duAnService: DuAnService, private router: Router, private uploadhinhService: UploadImageService) { }

    ds_duan: DUAN[] = [];
    lengthDuAn: number = 0;
    ngOnInit(): void {
        this.getListDuAn();
        this.isMenuAdminforAdmin();
    }

    role: any = 0;
    isMenuAdminforAdmin() {
        let roleadmin = sessionStorage.getItem("role");
        if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.ADMIN) {
            this.role = 3;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.EMPLOYEE) {
            this.role = 2;
        } else if (Number(roleadmin) === ConfigService.LOAI_TAI_KHOAN.CUSTOMER) {
            this.role = 1;
        }
    }

    getListDuAn(): void {
        this.ds_duan = [];
        this.duAnService.getListDuAn(ConfigService.TRANG_THAI_DU_AN.TATCADUAN).subscribe(duan => {
            if (duan.body) {
                duan.body.forEach(duan => {
                    if (duan.trangThai !== ConfigService.TRANG_THAI_DU_AN.CHUAGIAODICH) {
                        this.ds_duan.push(duan);
                    }
                });
                this.ds_duan;
                this.lengthDuAn = this.ds_duan.length;
            }
        });
    }

    deleteduan(maDuAn) {
        if (confirm("Bạn có chắc xóa dự án mã: " + maDuAn)) {
            this.duAnService.getDuAnTheoMaDuAn(maDuAn).subscribe(duan => {
                if (duan.body) {
                    if (duan.body[0].mangHinh) {
                        duan.body[0].mangHinh.forEach(hinh => {
                            this.uploadhinhService.DeleteImage(hinh.tenhinh).subscribe(res => {

                            })
                        })
                        this.duAnService.xoaDuAnTheomaDuAn(maDuAn).subscribe(res => {
                            if (res.code === 200) {
                                this.getListDuAn();
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
