import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NoiDungTimThayComponent, KetQuaTimKiemComponent, NoiDungTinTucChiTietComponent, TinTucChiTietComponent,
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [DuAnService, GioiThieuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
