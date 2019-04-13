import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';

@Component({
    selector: 'du-an-chi-tiet-module',
    templateUrl: './_du-an-chi-tiet.component.html',
    styleUrls: ['./_du-an-chi-tiet.component.scss']
})
export class DuAnChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    duan: any = {};
    id: any = "";
    mangHinh: any[] = [];
    thongTinDuAn: any = {};
    noiDungChiTiet: any = "";
    thongTinNguoiDang: any = {};
    constructor(private router: ActivatedRoute, private duAnService: DuAnService, private sanGiaoDichService: SanGiaoDichService) {
        this.id = this.router.snapshot.params["id"];
        this.duAnService.getDuAnTheoMaDuAn(this.id).subscribe(duan => {
            this.thongTinDuAn =
                {
                    tenDuAn: duan.body[0].tenDuAn,
                    maduan: duan.body[0].maDuAn,
                    giaTien: duan.body[0].giaTien,
                    ngayDang: duan.body[0].ngayDang,
                    quanHuyen: duan.body[0].quanHuyen,
                    tinhThanhPho: duan.body[0].tinhThanhPho,
                    danhMuc: duan.body[0].danhMuc.tenDanhMuc,
                    loaiGiaoDich: duan.body[0].loaiGiaoDich.tenLoai
                };
            this.thongTinNguoiDang = {
                hoTen: duan.body[0].doiTac.hoTen,
                diaChi: duan.body[0].doiTac.diaChi,
                soDienThoai: duan.body[0].doiTac.soDienThoai,
                email: duan.body[0].doiTac.email
            }
            this.mangHinh = duan.body[0].mangHinh;
            this.noiDungChiTiet = duan.body[0].noiDungChiTiet;
            this.sanGiaoDichService.setValueThongTin({
                mangHinh: this.mangHinh,
                noidungchitiet: this.noiDungChiTiet,
                thongtinduan: this.thongTinDuAn,
                thongtinnguoidang: this.thongTinNguoiDang
            });
        });

    }

    layDuAnTheoMaDuAn(maDuAn) {
        this.duAnService.getDuAnTheoMaDuAn(maDuAn).subscribe(e => {
            this.duan = e.body[0];
        });
    }
    ngOnInit(): void { }
}
