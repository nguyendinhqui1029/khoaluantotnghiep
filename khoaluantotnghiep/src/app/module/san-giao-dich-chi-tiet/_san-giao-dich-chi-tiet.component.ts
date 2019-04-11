import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { ActivatedRoute } from '@angular/router';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';
import { DuAnService } from 'src/app/service/duan.service';

@Component({
    selector: 'san-giao-dich-chi-tiet',
    templateUrl: './_san-giao-dich-chi-tiet.component.html',
    styleUrls: ['./_san-giao-dich-chi-tiet.component.scss']
})
export class SanGiaoDichChiTietModuleComponent implements OnInit {
    // noi dung mock tin tuc
    noidungduan: DUAN[] = [];
    status: boolean;
    mangHinh: any[] = [];
    thongTinDuAn: any = {};
    noiDungChiTiet: any = "";
    thongTinNguoiDang: any = {};
    constructor(private router: ActivatedRoute, private duAnSerVice: DuAnService, private sanGiaoDichService: SanGiaoDichService) {
        let id = this.router.snapshot.params["id"];
        this.duAnSerVice.getDuAnTheoMaDuAn(id).subscribe(duan => {
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















    ngOnInit(): void { }
}
