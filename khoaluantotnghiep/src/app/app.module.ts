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
    DuAnGridComponent, DuAnListComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
