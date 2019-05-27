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
import { HuongDanComponent } from './pages/huong-dan/_huongdan.component';
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
import { KetQuaTimService } from './service/ketquatim.service';
import { PhanTranService } from './service/phantrang.service';
import { LoaiTinTucService } from './service/loaitintuc.service';
import { CongTyService } from './service/congty.service';
import { SubPageComponent } from './pages/sub-page/sub_page.component';
import { DanhMucHuongDanComponent } from './pages/huong-dan/content-left/_danh-muc-huong-dan.component';
import { NoiDungHuongDanComponent } from './pages/huong-dan/content-right/_noi-dung-huong-dan.component';
import { HinhAnhChiTietComponent } from './module/du-an-chi-tiet/hinh-anh-chi-tiet-du-an/_hinh-anh-chi-tiet.component';
import { UpdateDuAnComponent } from './module/admin/duan/update-duan/_update-duan.component';
import { MakeUpDataComponent } from './module/admin/make_up_data_local/makeupdata.component';
import { MakeUpDateService } from './service/makeupdata.service';
import { UpdateDoiTacComponent } from './module/admin/doitac/update-doitac/_update-doitac.component';
import { UpdateDanhMucComponent } from './module/admin/danhmuc/update-danhmuc/_update-danhmuc.component';

import { CKEditorModule } from 'ngx-ckeditor';
import { SafeHtmlPipe } from './pipe/SafeHtmlPipe';
import { UpdateGioiThieuComponent } from './module/admin/gioithieu/update-gioithieu/_update-gioithieu.component';
import { UpdateLoaiGiaoDichComponent } from './module/admin/loaigiaodich/update-loaigiaodich/_update-loaigiaodich.component';
import { UpdateLoaiTinTucComponent } from './module/admin/loaitintuc/update-loaitintuc/_update-loaitintuc.component';
import { UpdateTinTucComponent } from './module/admin/tintuc/update-tintuc/_update-tintuc.component';
import { TaiKhoanService } from './service/taikhoan.service';
import { UpdateTaiKhoanComponent } from './module/admin/taikhoan/update-taikhoan/_update-taikhoan.component';
import { UpdateMenuComponent } from './module/admin/menu/update-menu/_update-menu.component';
import { DuyetBaiDangComponent } from './module/admin/duyetbaidang/duyetbaidang_duan/_duyetbaidang.component';
import { DuyetBaiDangDoiTacComponent } from './module/admin/duyetbaidang/duyetbaidang_doitac/_duyetbaidang-doitac.component';
import { DuyetBaiDangTinTucComponent } from './module/admin/duyetbaidang/duyetbaidang_tintuc/_duyetbaidang-tintuc.component';
import { ThongKeComponent } from './module/admin/thongke/_thongke.component';
import { ChartsModule } from 'ng2-charts';
import { MenuAdminComponent } from './module/menu-admin/_menu-admin.component';
import { UploadImageComponent } from './module/upload-image/_upload-image.component';
import { UploadImageService } from './service/upload-image.service';
import { ImageModalComponent } from './module/image-modal/_image-modal.component';
import { DuAnLoaiGiaoDichComponent } from './module/du-an-loai-giao-dich/loai-giao-dich/_du-an-loai-giao-dich.component';
import { DuAnTheoLoaiGiaoDichComponent } from './module/du-an-loai-giao-dich/_du-an-theo-loai.component';




@NgModule({
  declarations: [
    AppComponent, TrangChuComponent, FooterComponent,
    HeaderComponent, SliderComponent, SearchComponent,
    GioiThieuComponent, PannerTopComponent, DoiTacComponent,
    DuAnMoiComponent, DuAnComponent, ThuVienAnhComponent, DuAnPageComponent,
    HuongDanComponent, TinTucComponent, SanGiaoDichComponent, ThuVienAnhPageComponent,
    LienHeComponent, DangNhapComponent, DangKyComponent, GioHangComponent,
    TaiKhoanComponent, FormDangKiComponent, FormDangNhapComponent,
    DanhMucGioiThieuComponent, NoiDungGioiThieuComponent, DuAnNoiBatComponent,
    DuAnGridComponent, DuAnListComponent, SanGiaoDichModuleComponent, SanGiaoDichListComponent, SanGiaoDichGridComponent
    , DanhMucTinTucComponent, NoiDungTinTucComponent,
    TinTucNoiBatComponent, NoiDungThuVienAnhComponent, ThongTinCongTyComponent,
    BanDoComponent, FormLienHeComponent, SanGiaoDichChiTietModuleComponent, KhungChiTietModuleComponent,
    KhungThongTinNguoiDangModuleComponent, SanGiaoDichChiTietComponent, FormLayLaiMatKhauComponent, LayLaiMatKhauComponent,
    NoiDungTimThayComponent, KetQuaTimKiemComponent, NoiDungTinTucChiTietComponent, TinTucChiTietComponent, DuAnChiTietComponent,
    DuAnChiTietModuleComponent, TinTucNoiBatTrangChuComponent, SubPageComponent,
    HinhAnhChiTietComponent, DanhMucHuongDanComponent, NoiDungHuongDanComponent,
    UploadImageComponent, ImageModalComponent, DuAnLoaiGiaoDichComponent, DuAnTheoLoaiGiaoDichComponent,
    //Admin
    MenuAdminComponent,
    AdminComponent, ThemMenuComponent, XoaMenuComponent, UpdateMenuComponent,
    ThemDuAnComponent, XoaDuAnComponent, UpdateDuAnComponent,
    ThemDoiTacComponent, XoaDoiTacComponent, UpdateDoiTacComponent,
    ThemLoaiGiaoDichComponent, XoaLoaiGiaoDichComponent, UpdateLoaiGiaoDichComponent,
    ThemDanhMucComponent, XoaDanhMucComponent, UpdateDanhMucComponent,
    ThemLoaiTinTucComponent, XoaLoaiTinTucComponent, UpdateLoaiTinTucComponent,
    ThemGioiThieuComponent, XoaGioiThieuComponent, UpdateGioiThieuComponent,
    ThemTaiKhoanComponent, XoaTaiKhoanComponent, UpdateTaiKhoanComponent,
    ThemTinTucComponent, XoaTinTucComponent, UpdateTinTucComponent,
    DuyetBaiDangComponent, DuyetBaiDangDoiTacComponent, DuyetBaiDangTinTucComponent,
    ThongKeComponent
    //ADmin khach hang
    , CustomerThemDuAnComponent
    //Admin employee
    , EmployeeThemDuAnComponent, MakeUpDataComponent, SafeHtmlPipe
  ],
  imports: [
    BrowserModule, routing, ReactiveFormsModule, FormsModule, HttpClientModule, CKEditorModule, ChartsModule
  ],
  providers: [DuAnService, GioiThieuService, SanGiaoDichService, DanhMucService, LoaiTinTucService,
    MenuService, FormBuilder, LoaiGiaoDichService, DangNhapDangKiService, TinTucService, CongTyService,
    SendMailService, ConfigService, SliderService, DoiTacService, TinhThanhPhoService, TaiKhoanService,
    AdminAuthGuard, CustomerAuthGuard, EmployeeAuthGuard, KetQuaTimService, PhanTranService, MakeUpDateService,
    UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
