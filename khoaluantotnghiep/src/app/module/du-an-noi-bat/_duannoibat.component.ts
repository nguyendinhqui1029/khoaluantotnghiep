import { Component, OnInit } from '@angular/core';
import { DUAN } from 'src/app/model/duan';
import { ds_duan } from 'src/app/model/mock_duan';
import { DuAnService } from 'src/app/service/duan.service';
import { ConfigService } from 'src/app/service/config.service';
import { SanGiaoDichService } from 'src/app/service/sangiaodich.service';

@Component({
    selector: 'du-an-noi-bat',
    templateUrl: './_duannoibat.component.html',
    styleUrls: ['./_duannoibat.component.scss']
})
export class DuAnNoiBatComponent implements OnInit {
    //Du liệu từ mock
    urlImage: string = ConfigService.URL;
    mangHinh: any[] = [];
    thongTinDuAn: any = {};
    noiDungChiTiet: any = "";
    thongTinNguoiDang: any = {};
    dsDuAN: DUAN[] = [];
    constructor(private serviceDuAn: DuAnService, private sanGiaoDichService: SanGiaoDichService) {
        this.serviceDuAn.getDuAnLimitTheoTrangThai(0, 3, ConfigService.TRANG_THAI_DU_AN.DUANMOI).subscribe(duan => {
            this.dsDuAN = duan.body;
        });
    }
    guiduanmoi(duan) {
        this.thongTinDuAn =
            {
                tenDuAn: duan.tenDuAn,
                maduan: duan.maDuAn,
                giaTien: duan.giaTien,
                ngayDang: duan.ngayDang,
                quanHuyen: duan.quanHuyen,
                tinhThanhPho: duan.tinhThanhPho,
                danhMuc: duan.danhMuc.tenDanhMuc,
                loaiGiaoDich: duan.loaiGiaoDich.tenLoai
            };
        this.thongTinNguoiDang = {
            hoTen: duan.doiTac.hoTen,
            diaChi: duan.doiTac.diaChi,
            soDienThoai: duan.doiTac.soDienThoai,
            email: duan.doiTac.email
        }
        this.mangHinh = duan.mangHinh;
        this.noiDungChiTiet = duan.noiDungChiTiet;
        this.sanGiaoDichService.setValueThongTin({
            mangHinh: this.mangHinh,
            noidungchitiet: this.noiDungChiTiet,
            thongtinduan: this.thongTinDuAn,
            thongtinnguoidang: this.thongTinNguoiDang
        });
    }

    ngOnInit(): void { }
}
