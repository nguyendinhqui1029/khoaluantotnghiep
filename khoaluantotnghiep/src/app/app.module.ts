import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TrangChuComponent } from './pages/trang-chu/_trangchu.component';
import { FooterComponent } from './module/footer/_footer.component';
import { HeaderComponent } from './module/header/_header.component';
import { SliderComponent } from './module/slider/_slider.component';
import { SearchComponent } from './module/search/_search.component';
import { routing } from './app.routing';
import { GioiThieuComponent } from './pages/gioi-thieu/_gioithieu.component';
import { PannerTopComponent } from './module/panner-top/_panner-top.component';
import { DoiTacComponent } from './module/doi-tac/_doitac.component';
import { DuAnMoiComponent } from './module/du-an-moi/_du-an-moi.component';
import { DuAnComponent } from './module/du-an/_duan.component';
import { ThuVienAnhComponent } from './module/thuc-vien-anh/_thuvienanh.component';
import { DuAnPageComponent } from './pages/du-an/_du-an.component';
import { DichVuComponent } from './pages/dich-vu/_dichvu.component';
import { TinTucComponent } from './pages/tin-tuc/_tintuc_component';
import { SanGiaoDichComponent } from './pages/san-giao-dich/_sangiaodich.component';
import { ThuVienAnhPageComponent } from './pages/thu-vien-anh/_thu-vien-anh.component';
import { LienHeComponent } from './pages/lien-he/_lienhe.component';
import { DangNhapComponent } from './pages/dang-nhap/_dang-nhap.component';
import { DangKyComponent } from './pages/dang-ky/_dang-ky.component';
import { GioHangComponent } from './pages/gio-hang/_giohang.component';
import { TaiKhoanComponent } from './pages/dang-ky/content-left/_taikhoan.component';
import { FormDangKiComponent } from './pages/dang-ky/content_right/_form-dang-ki.component';
import { FormDangNhapComponent } from './pages/dang-nhap/content-right/_form-dang-nhap.component';
import { DanhMucGioiThieuComponent } from './pages/gioi-thieu/content-left/_danh-muc.component';
import { NoiDungGioiThieuComponent } from './pages/gioi-thieu/content-right/_noi-dung.component';
import { DuAnNoiBatComponent } from './module/du-an-noi-bat/_duannoibat.component';
import { DuAnGridComponent } from './module/du-an/du-an-grid/_duangrid.component';
import { DuAnListComponent } from './module/du-an/du-an-list/_duanlist.component';
import { SanGiaoDichModuleComponent } from './module/san-giao-dich/_san-giao-dich.component';
import { SanGiaoDichListComponent } from './module/san-giao-dich/san-giao-dich-list/_san-giao-dich-list.component';
import { SanGiaoDichGridComponent } from './module/san-giao-dich/san-giao-dich-grid/_san-giao-dich-grid.component';
import { DanhMucTinTucComponent } from './pages/tin-tuc/danh-muc-tin-tuc/_danhmuctintuc.component';
import { NoiDungTinTucComponent } from './pages/tin-tuc/noi-dung-tin-tuc/_noidungtintuc.component';
import { TinTucNoiBatComponent } from './pages/tin-tuc/tin-tuc-noi-bat/_tintucnoibat.component';
import { NoiDungThuVienAnhComponent } from './pages/thu-vien-anh/noi-dung-thu-vien-anh/_noidungthuvienanh.component';
import { ThongTinCongTyComponent } from './module/thong-tin-cong-ty/_thongtincongty.component';
import { BanDoComponent } from './module/ban-do/_bando.component';
import { FormLienHeComponent } from './pages/lien-he/form-lien-he/_formlienhe.component';
import { SanGiaoDichChiTietModuleComponent } from './module/san-giao-dich-chi-tiet/_san-giao-dich-chi-tiet.component';
import { KhungChiTietModuleComponent } from './module/san-giao-dich-chi-tiet/khung-chi-tiet/_khung-chi-tiet.component';
import { KhungThongTinNguoiDangModuleComponent } from './module/san-giao-dich-chi-tiet/khung-thong-tin-nguoi-dang/_khung-thong-tin-nguoi-dang.component';
import { SanGiaoDichChiTietComponent } from './pages/san-giao-dich-chi-tiet/_sangiaodichchitiet.component';
import { FormLayLaiMatKhauComponent } from './pages/lay-lai-mat-khau/content-right/_form-laylaimatkhau.component';
import { LayLaiMatKhauComponent } from './pages/lay-lai-mat-khau/_laylaimatkhau.component';
import { NoiDungTimThayComponent } from './pages/ket-qua-tim-kiem/noi-dung-tim-thay/_noi-dung-tim-thay.component';
import { KetQuaTimKiemComponent } from './pages/ket-qua-tim-kiem/_ketquatimkiem.component';
import { TinTucChiTietComponent } from './pages/tin-tuc-chi-tiet/_tintucchitiet.component';
import { NoiDungTinTucChiTietComponent } from './pages/tin-tuc-chi-tiet/noidung-tin-tuc-chi-tiet/_noidung-tin-tuc-chi-tiet.component';
import { DuAnService } from './service/duan.service';
import { GioiThieuService } from './service/gioithieu.service';
import { DuAnChiTietComponent } from './pages/du-an-chi-tiet/_du-an-chi-tiet.component';
import { DuAnChiTietModuleComponent } from './module/du-an-chi-tiet/_du-an-chi-tiet.component';

import { SanGiaoDichService } from './service/sangiaodich.service';
import { MenuService } from './service/menu.service';
import { AdminComponent } from './pages/admin/_admin.component';
import { ThemMenuComponent } from './module/admin/menu/them-menu/_them-menu.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TinTucNoiBatTrangChuComponent } from './pages/trang-chu/tin-tuc-noi-bat/_tin_tuc_noi_bat_trang_chu.component';
import { LoaiGiaoDichService } from './service/loaigiaodich.service';
import { XoaMenuComponent } from './module/admin/menu/xoa-menu/_xoa-menu.component';
import { ThemDuAnComponent } from './module/admin/duan/them-duan/_them-duan.component';
import { XoaDuAnComponent } from './module/admin/duan/xoa-duan/_xoa-duan.component';
import { ThemDoiTacComponent } from './module/admin/doitac/them-doitac/_them-doitac.component';
import { XoaDoiTacComponent } from './module/admin/doitac/xoa-doitac/_xoa-doitac.component';
import { ThemLoaiGiaoDichComponent } from './module/admin/loaigiaodich/them-loaigiaodich/_them-loaigiaodich.component';
import { XoaLoaiGiaoDichComponent } from './module/admin/loaigiaodich/xoa-loaigiaodich/_xoa-loaigiaodich.component';
import { ThemDanhMucComponent } from './module/admin/danhmuc/them-danhmuc/_them-danhmuc.component';
import { XoaDanhMucComponent } from './module/admin/danhmuc/xoa-danhmuc/_xoa-danhmuc.component';
import { ThemLoaiTinTucComponent } from './module/admin/loaitintuc/them-loaitintuc/_them-loaitintuc.component';
import { XoaLoaiTinTucComponent } from './module/admin/loaitintuc/xoa-loaitintuc/_xoa-loaitintuc.component';
import { ThemGioiThieuComponent } from './module/admin/gioithieu/them-gioithieu/_them-gioithieu.component';
import { XoaGioiThieuComponent } from './module/admin/gioithieu/xoa-gioithieu/_xoa-gioithieu.component';
import { ThemTaiKhoanComponent } from './module/admin/taikhoan/them-taikhoan/_them-taikhoan.component';
import { XoaTaiKhoanComponent } from './module/admin/taikhoan/xoa-taikhoan/_xoa-taikhoan.component';
import { DangNhapDangKiService } from './service/dangnhap_dangki.service';
import { SendMailService } from './service/sendmail.service';
import { ThemTinTucComponent } from './module/admin/tintuc/them-tintuc/_them-tintuc.component';
import { XoaTinTucComponent } from './module/admin/tintuc/xoa-tintuc/_xoa-tintuc.component';
import { ConfigService } from './service/config.service';
import { AdminAuthGuard } from './auth/admin.guard';
import { SliderService } from './service/slider.service';
import { DoiTacService } from './service/doitac.service';
import { TinhThanhPhoService } from './service/tinhthanhpho.service';
import { CustomerAuthGuard } from './auth/customer.guard';
import { EmployeeAuthGuard } from './auth/employee.guard';
import { CustomerThemDuAnComponent } from './module/custormer/them-du-an/them_du_an.component';
import { EmployeeThemDuAnComponent } from './module/employee/them-du-an/them_du_an.component';
import { TinTucService } from './service/tintuc.service';
import { DanhMucService } from './service/danhmuc.service';





@NgModule({
  declarations: [
    AppComponent, TrangChuComponent, FooterComponent,
    HeaderComponent, SliderComponent, SearchComponent,
    GioiThieuComponent, PannerTopComponent, DoiTacComponent,
    DuAnMoiComponent, DuAnComponent, ThuVienAnhComponent, DuAnPageComponent,
    DichVuComponent, TinTucComponent, SanGiaoDichComponent, ThuVienAnhPageComponent,
    LienHeComponent, DangNhapComponent, DangKyComponent, GioHangComponent,
    TaiKhoanComponent, FormDangKiComponent, FormDangNhapComponent,
    DanhMucGioiThieuComponent, NoiDungGioiThieuComponent, DuAnNoiBatComponent,
    DuAnGridComponent, DuAnListComponent, SanGiaoDichModuleComponent, SanGiaoDichListComponent, SanGiaoDichGridComponent
    , DanhMucTinTucComponent, NoiDungTinTucComponent,
    TinTucNoiBatComponent, NoiDungThuVienAnhComponent, ThongTinCongTyComponent,
    BanDoComponent, FormLienHeComponent, SanGiaoDichChiTietModuleComponent, KhungChiTietModuleComponent,
    KhungThongTinNguoiDangModuleComponent, SanGiaoDichChiTietComponent, FormLayLaiMatKhauComponent, LayLaiMatKhauComponent,
    NoiDungTimThayComponent, KetQuaTimKiemComponent, NoiDungTinTucChiTietComponent, TinTucChiTietComponent, DuAnChiTietComponent,
    DuAnChiTietModuleComponent, TinTucNoiBatTrangChuComponent,
    //Admin
    AdminComponent, ThemMenuComponent, XoaMenuComponent,
    ThemDuAnComponent, XoaDuAnComponent,
    ThemDoiTacComponent, XoaDoiTacComponent,
    ThemLoaiGiaoDichComponent, XoaLoaiGiaoDichComponent,
    ThemDanhMucComponent, XoaDanhMucComponent,
    ThemLoaiTinTucComponent, XoaLoaiTinTucComponent,
    ThemGioiThieuComponent, XoaGioiThieuComponent,
    ThemTaiKhoanComponent, XoaTaiKhoanComponent,
    ThemTinTucComponent, XoaTinTucComponent

    //ADmin khach hang
    , CustomerThemDuAnComponent
    //Admin employee
    , EmployeeThemDuAnComponent
  ],
  imports: [
    BrowserModule, routing, ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [DuAnService, GioiThieuService, SanGiaoDichService, DanhMucService,
    MenuService, FormBuilder, LoaiGiaoDichService, DangNhapDangKiService, TinTucService,
    SendMailService, ConfigService, SliderService, DoiTacService, TinhThanhPhoService, AdminAuthGuard, CustomerAuthGuard, EmployeeAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
