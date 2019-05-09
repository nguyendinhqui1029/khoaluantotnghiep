import { Component, OnInit } from '@angular/core';
import { TINTUC } from 'src/app/model/tintuc';
import { ds_tintuc } from 'src/app/model/mock_tintuc';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { TinTucService } from 'src/app/service/tintuc.service';

@Component({
    selector: 'noi-dung-tin-tuc-chi-tiet',
    templateUrl: './_noidung-tin-tuc-chi-tiet.component.html',
    styleUrls: ['./_noidung-tin-tuc-chi-tiet.component.scss']
})
export class NoiDungTinTucChiTietComponent implements OnInit {

    // noi dung mock tin tuc
    noidungtintuc: TINTUC[] = ds_tintuc;
    tintuc: any = {};
    id: any = "";
    thongTinTinTuc: any = {};
    mangHinh: any[] = [];
    noiDungChiTiet: any = "";
    constructor(private router: ActivatedRoute, private tintucService: TinTucService) {
        this.id = this.router.snapshot.params["id"];// day la trang noi dung chi tiet
        this.tintucService.getTinTuctheoMaLoai(this.id).subscribe(tintuc => {
            this.tintuc = JSON.stringify(tintuc);
            let doit = JSON.parse(this.tintuc);
            this.thongTinTinTuc = {
                tentintuc: doit.body.data[0].tentintuc,
                trangthai: doit.body.data[0].trangthai,
                matintuc: doit.body.data[0].matintuc,
                ngaydang: doit.body.data[0].ngaydang,
                loaitintuc: doit.body.data[0].loaitintuc.tenloai
            }
            this.mangHinh = doit.body.data[0].hinhanh;
            this.noiDungChiTiet = doit.body.data[0].noidungchitiet;
            this.tintucService.setValueThongTin({
                mangHinh: this.mangHinh,
                noidungchitiet: this.noiDungChiTiet,
                thongtintintuc: this.thongTinTinTuc
            });

        })
    }

    ngOnInit(): void {

        this.tintucService.thayThoiTinTuc.subscribe(tt => {
            this.id = this.router.snapshot.params["id"];// day la trang noi dung chi tiet
            this.tintucService.getTinTuctheoMaLoai(this.id).subscribe(tintuc => {
                this.tintuc = JSON.stringify(tintuc);
                let doit = JSON.parse(this.tintuc);
                if (doit.body) {
                    this.thongTinTinTuc = {
                        tentintuc: doit.body.data[0].tentintuc,
                        trangthai: doit.body.data[0].trangthai,
                        matintuc: doit.body.data[0].matintuc,
                        ngaydang: doit.body.data[0].ngaydang,
                        loaitintuc: doit.body.data[0].loaitintuc.tenloai
                    }
                    this.mangHinh = doit.body.data[0].hinhanh;
                    this.noiDungChiTiet = doit.body.data[0].noidungchitiet;
                    this.tintucService.setValueThongTin({
                        mangHinh: this.mangHinh,
                        noidungchitiet: this.noiDungChiTiet,
                        thongtintintuc: this.thongTinTinTuc
                    });

                }

            })
        })

    }
}